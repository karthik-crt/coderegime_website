/**
 * Code Regime - Centralized Footer Synchronization Script
 * 
 * Usage:
 *   node scripts/sync-footer.js
 * 
 * This script:
 * 1. Reads the canonical footer HTML from components/footer.html
 * 2. Scans all HTML files across the project
 * 3. Replaces existing divergent <footer class="cr-footer">...</footer> blocks
 *    or #site-footer placeholders with the standardized canonical footer
 * 4. Ensures <link rel="stylesheet" href="/css/footer.css"> is included in <head>
 * 5. Ensures <script src="/js/footer.js"></script> is included before </body>
 * 6. Keeps the embedded template inside js/footer.js synchronized
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const canonicalFooterPath = path.join(rootDir, 'components', 'footer.html');
const footerJsPath = path.join(rootDir, 'js', 'footer.js');

if (!fs.existsSync(canonicalFooterPath)) {
  console.error('Error: Canonical footer file not found at:', canonicalFooterPath);
  process.exit(1);
}

const canonicalFooter = fs.readFileSync(canonicalFooterPath, 'utf8').trim();

// Collect all HTML files recursively
function getHtmlFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.git', '.gemini', '.claude', '.vscode', 'components'].includes(entry.name)) {
        continue;
      }
      results = results.concat(getHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      // Exclude google verification file and standalone header template
      if ((entry.name.startsWith('google') && entry.name.endsWith('.html')) || entry.name === 'header.html') {
        continue;
      }
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(rootDir);
console.log(`Found ${htmlFiles.length} HTML files to synchronize.`);

let updatedCount = 0;
let alreadyInSyncCount = 0;

for (const filePath of htmlFiles) {
  const relativePath = path.relative(rootDir, filePath);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // 1. Synchronize footer markup
  const footerRegex = /<footer\s+class=["']cr-footer["'][\s\S]*?<\/footer>/i;
  const placeholderRegex = /<div\s+id=["'](?:site-footer|cr-footer-placeholder)["']\s*><\/div>/i;

  if (footerRegex.test(content)) {
    const existingFooter = content.match(footerRegex)[0].trim();
    if (existingFooter !== canonicalFooter) {
      content = content.replace(footerRegex, canonicalFooter);
      modified = true;
    }
  } else if (placeholderRegex.test(content)) {
    content = content.replace(placeholderRegex, canonicalFooter);
    modified = true;
  }

  // 2. Ensure footer.css is linked in <head>
  const hasFooterCss = /href=["'][^"']*footer\.css["']/i.test(content);
  if (!hasFooterCss && content.includes('</head>')) {
    content = content.replace('</head>', '  <link rel="stylesheet" href="/css/footer.css">\n</head>');
    modified = true;
  }

  // 3. Ensure footer.js is included before </body>
  const hasFooterJs = /src=["'][^"']*footer\.js["']/i.test(content);
  if (!hasFooterJs && content.includes('</body>')) {
    content = content.replace('</body>', '  <script src="/js/footer.js"></script>\n</body>');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[SYNCED] ${relativePath}`);
    updatedCount++;
  } else {
    alreadyInSyncCount++;
  }
}

console.log(`\nHTML Sync Complete: ${updatedCount} updated, ${alreadyInSyncCount} already in sync.`);

// 4. Update embedded template in js/footer.js
if (fs.existsSync(footerJsPath)) {
  let jsContent = fs.readFileSync(footerJsPath, 'utf8');
  const templateMarkerStart = '/* CANONICAL_FOOTER_START */';
  const templateMarkerEnd = '/* CANONICAL_FOOTER_END */';

  const newFooterBlock = `${templateMarkerStart}\n    const canonicalFooterHTML = \`${canonicalFooter}\`;\n    ${templateMarkerEnd}`;

  if (jsContent.includes(templateMarkerStart) && jsContent.includes(templateMarkerEnd)) {
    const escapedStart = templateMarkerStart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escapedEnd = templateMarkerEnd.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const markerRegex = new RegExp(`${escapedStart}[\\s\\S]*?${escapedEnd}`);
    jsContent = jsContent.replace(markerRegex, newFooterBlock);
    fs.writeFileSync(footerJsPath, jsContent, 'utf8');
    console.log('[SYNCED] js/footer.js embedded canonical template updated.');
  } else {
    console.log('[NOTE] js/footer.js markers not yet present; will be added with footer.js update.');
  }
}
