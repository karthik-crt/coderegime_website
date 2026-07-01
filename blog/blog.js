// Blog.js - WordPress REST API Integration
// Fetches blog posts from WordPress and renders them dynamically

// Configuration
const BLOG_CONFIG = {
    WORDPRESS_API_URL: 'https://public-api.wordpress.com/rest/v1.1/sites/coderegimeblog.wordpress.com',
    POSTS_PER_PAGE: 10,
    CACHE_DURATION: 300000, // 5 minutes in milliseconds
};

// Cache storage
let postsCache = {
    data: null,
    key: null,
    timestamp: null
};

/**
 * Fetch blog posts from WordPress REST API with caching
 * @param {number} page - Page number for pagination (default: 1)
 * @param {number} limit - Number of posts per page (default: POSTS_PER_PAGE)
 * @returns {Promise<Object>} - Posts data and metadata
 */
async function fetchBlogPosts(page = 1, limit = BLOG_CONFIG.POSTS_PER_PAGE, category = '', searchQuery = '') {
    try {
        // Check cache first
        const cacheKey = `${page}-${limit}-${category}-${searchQuery}`;
        const now = Date.now();
        if (postsCache.data && postsCache.key === cacheKey && postsCache.timestamp && (now - postsCache.timestamp) < BLOG_CONFIG.CACHE_DURATION) {
            console.log('Using cached posts');
            return postsCache.data;
        }

        const offset = (page - 1) * limit;
        let url = `${BLOG_CONFIG.WORDPRESS_API_URL}/posts?number=${limit}&page=${page}`;
        if (category) {
            url += `&category=${encodeURIComponent(category)}`;
        }
        if (searchQuery) {
            url += `&search=${encodeURIComponent(searchQuery)}`;
        }

        console.log('Fetching posts from:', url);
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const responseData = await response.json();
        const posts = responseData.posts || [];

        // Get total posts count from WP.com API response
        const totalPosts = responseData.found || posts.length;
        const totalPages = Math.ceil(totalPosts / limit) || 1;

        const data = {
            posts: posts,
            pagination: {
                currentPage: page,
                totalPosts: parseInt(totalPosts),
                totalPages: parseInt(totalPages),
                postsPerPage: limit,
                hasNextPage: page < parseInt(totalPages),
                hasPrevPage: page > 1
            }
        };

        // Cache the results
        postsCache = {
            data: data,
            key: cacheKey,
            timestamp: now
        };

        return data;

    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return {
            posts: [],
            pagination: {
                currentPage: page,
                totalPosts: 0,
                totalPages: 0,
                postsPerPage: limit,
                hasNextPage: false,
                hasPrevPage: false
            },
            error: error.message
        };
    }
}

/**
 * Fetch a single blog post by slug
 * @param {string} slug - Post slug
 * @returns {Promise<Object|null>} - Post object or null if not found
 */
async function fetchSinglePost(slug) {
    try {
        const url = `${BLOG_CONFIG.WORDPRESS_API_URL}/posts/slug:${slug}`;

        console.log('Fetching post:', url);
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const post = await response.json();

        if (!post || post.error) {
            console.warn('Post not found:', slug);
            return null;
        }
        console.log('Fetched post:', post.title?.rendered || post.title || 'Untitled');
        return post;

    } catch (error) {
        console.error('Error fetching single post:', error);
        return null;
    }
}

/**
 * Fetch blog categories from WordPress REST API
 * @returns {Promise<Array>} - Categories array
 */
async function fetchCategories() {
    try {
        const url = `${BLOG_CONFIG.WORDPRESS_API_URL}/categories`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data.categories || [];
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

/**
 * Get featured image URL from post
 * @param {Object} post - WordPress post object
 * @returns {string} - Featured image URL or placeholder
 */
function getFeaturedImageUrl(post) {
    if (post.featured_image) {
        return post.featured_image;
    }
    if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
        return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return '/images/placeholder.png'; // Fallback placeholder
}

/**
 * Get post author name
 * @param {Object} post - WordPress post object
 * @returns {string} - Author name
 */
function getPostAuthor(post) {
    if (post.author && post.author.name) {
        return post.author.name;
    }
    if (post._embedded && post._embedded.author && post._embedded.author[0]) {
        return post._embedded.author[0].name;
    }
    return 'CodeRegime Team';
}

/**
 * Format date for display
 * @param {string} dateString - ISO date string from WordPress
 * @returns {string} - Formatted date (e.g., "June 3, 2026")
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Render a single post card for listing page
 * @param {Object} post - WordPress post object
 * @returns {string} - HTML string
 */
function renderPostCard(post) {
    const featuredImage = getFeaturedImageUrl(post);
    const author = getPostAuthor(post);
    const date = formatDate(post.date);
    const titleText = post.title?.rendered || post.title || '';
    const excerptRaw = post.excerpt?.rendered || post.excerpt || '';
    const excerpt = excerptRaw
        .replace(/<p>/g, '')
        .replace(/<\/p>/g, '')
        .replace(/&nbsp;/g, ' ')
        .trim()
        .substring(0, 150) + '...';
    console.log('Rendering post card for:', titleText);
    return `
        <div class="post-card">
            <a href="/blog/post/${post.slug}" class="post-card-link">
                <div class="post-card-image">
                    <img src="${featuredImage}" alt="${titleText}" loading="lazy">
                </div>
                <div class="post-card-content">
                    <h3 class="post-card-title">${titleText}</h3>
                    <p class="post-card-excerpt">${excerpt}</p>
                    <div class="post-card-meta">
                        <span class="post-author">${author}</span>
                        <span class="post-date">${date}</span>
                    </div>
                </div>
            </a>
        </div>
    `;
}

/**
 * Render full post for single post page
 * @param {Object} post - WordPress post object
 * @returns {string} - HTML string
 */
function renderFullPost(post) {
    const featuredImage = getFeaturedImageUrl(post);
    const author = getPostAuthor(post);
    const date = formatDate(post.date);
    const titleText = post.title?.rendered || post.title || '';
    const contentText = post.content?.rendered || post.content || '';

    // Process categories for WP.com vs Standard WP API
    let categoriesHtml = '';
    let categoryTagsHtml = '';
    let categoryNames = [];
    if (post.categories) {
        // WP.com API format (object mapping category name to details)
        const catKeys = Object.keys(post.categories);
        categoriesHtml = catKeys.map(key => `<span class="category-tag">${post.categories[key].name}</span>`).join('');
        categoryNames = catKeys.map(key => post.categories[key].name);
        categoryTagsHtml = catKeys.map((key, i) => {
            const cls = i === 0 ? 'blog-post-tag blog-post-tag--primary' : 'blog-post-tag blog-post-tag--neutral';
            return `<span class="${cls}">${post.categories[key].name.toUpperCase()}</span>`;
        }).join('');
    } else if (post._embedded && post._embedded['wp:term']) {
        // Standard WP REST API format
        categoriesHtml = post._embedded['wp:term'][0]
            .map(term => `<span class="category-tag">${term.name}</span>`)
            .join('');
        categoryNames = post._embedded['wp:term'][0].map(t => t.name);
        categoryTagsHtml = post._embedded['wp:term'][0]
            .map((term, i) => {
                const cls = i === 0 ? 'blog-post-tag blog-post-tag--primary' : 'blog-post-tag blog-post-tag--neutral';
                return `<span class="${cls}">${term.name.toUpperCase()}</span>`;
            }).join('');
    }

    // Estimate read time
    const text = contentText.replace(/<[^>]*>/g, '');
    const wordCount = text.split(/\s+/).filter(w => w).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    // Extract headings for TOC
    const headingRegex = /<h2[^>]*>(.*?)<\/h2>/gi;
    let match;
    const headings = [];
    let contentWithIds = contentText;
    let tocIndex = 0;
    while ((match = headingRegex.exec(contentText)) !== null) {
        const headingText = match[1].replace(/<[^>]*>/g, '');
        const headingId = 'section-' + tocIndex;
        headings.push({ id: headingId, text: headingText });
        contentWithIds = contentWithIds.replace(match[0], `<h2 id="${headingId}">${match[1]}</h2>`);
        tocIndex++;
    }

    // Add drop-cap class to first paragraph
    contentWithIds = contentWithIds.replace(/<p/, '<p class="first-letter-drop"');

    // Update page meta tags
    updatePostMetaTags(post);

    return `
        <article class="blog-post-article">
            <header class="blog-post-header">
                ${categoryTagsHtml ? `<div class="blog-post-tags">${categoryTagsHtml}</div>` : ''}
                <h1 class="blog-post-title">${titleText}</h1>
                <div class="blog-post-meta-bar">
                    <div class="blog-post-author-avatar">
                        <div style="width:100%;height:100%;background:var(--surface-container-high);display:flex;align-items:center;justify-content:center;">
                            <span class="material-symbols-outlined" style="color:var(--outline);font-size:28px;">person</span>
                        </div>
                    </div>
                    <div class="blog-post-author-info">
                        <p class="blog-post-author-name">${author}</p>
                        <p class="blog-post-meta">${categoryNames[0] || 'Article'} • ${date} • ${readTime} min read</p>
                    </div>
                    <div class="blog-post-actions">
                        <button class="blog-post-action-btn" title="Bookmark" onclick="alert('Bookmarked!')">
                            <span class="material-symbols-outlined">bookmark</span>
                        </button>
                        <button class="blog-post-action-btn" title="Share" onclick="navigator.share ? navigator.share({title:'${titleText.replace(/'/g, "\\'")}',url:window.location.href}) : navigator.clipboard.writeText(window.location.href).then(()=>alert('Link copied!'))">
                            <span class="material-symbols-outlined">share</span>
                        </button>
                    </div>
                </div>
            </header>
            
            <div class="blog-post-featured-image">
                <img src="${featuredImage}" alt="${titleText}">
            </div>
            
            <div class="blog-post-content">
                ${contentWithIds}
            </div>
            
            <footer class="blog-post-footer">
                <div class="blog-post-categories">
                    ${categoriesHtml}
                </div>
            </footer>

            <!-- Newsletter CTA -->
            <section class="post-newsletter">
                <h3>Stay Ahead of the Tech Curve</h3>
                <p>Get weekly insights on software engineering excellence, digital transformation, and emerging technologies directly to your inbox.</p>
                <form class="post-newsletter-form" onsubmit="event.preventDefault(); var e=this.querySelector('input'); if(e.value){alert('Thank you for subscribing!');e.value='';}">
                    <input class="post-newsletter-input" type="email" placeholder="Enter your business email" required>
                    <button class="post-newsletter-btn" type="submit">Subscribe</button>
                </form>
            </section>
        </article>
    `;
}

/**
 * Render sidebar for single post page
 * @param {Object} post - WordPress post object
 * @param {Array} headings - Extracted headings for TOC
 * @returns {string} - HTML string
 */
function renderPostSidebar(post, headings) {
    // Build TOC
    let tocHtml = '';
    if (headings && headings.length > 0) {
        tocHtml = '<nav class="toc-nav">';
        tocHtml += `<a class="toc-link active" href="#top">Introduction</a>`;
        headings.forEach(h => {
            tocHtml += `<a class="toc-link" href="#${h.id}">${h.text}</a>`;
        });
        tocHtml += '</nav>';
    }

    return `
        <!-- Table of Contents -->
        <div class="toc-card">
            <h4 class="toc-title">TABLE OF CONTENTS</h4>
            ${tocHtml || '<p style="color:var(--on-surface-variant);font-size:14px;">No sections found.</p>'}
            
            <div class="share-section">
                <h4 class="share-title">SHARE ARTICLE</h4>
                <div class="share-buttons">
                    <button class="share-btn" title="Email" onclick="window.open('mailto:?subject=${encodeURIComponent(post.title?.rendered || post.title || '')}&body='+encodeURIComponent(window.location.href))">
                        <span class="material-symbols-outlined">alternate_email</span>
                    </button>
                    <button class="share-btn" title="Copy Link" onclick="navigator.clipboard.writeText(window.location.href).then(()=>alert('Link copied!'))">
                        <span class="material-symbols-outlined">link</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Popular Posts -->
        <div class="sidebar-popular-card">
            <h4 class="sidebar-popular-title">POPULAR POSTS</h4>
            <div id="sidebar-popular-list" class="sidebar-popular-list">
                <p style="color:var(--outline);font-size:14px;">Loading...</p>
            </div>
        </div>
    `;
}

/**
 * Extract headings from post content for TOC
 * @param {string} content - HTML content
 * @returns {Array} - Array of heading objects
 */
function extractHeadings(content) {
    const headingRegex = /<h2[^>]*>(.*?)<\/h2>/gi;
    let match;
    const headings = [];
    let i = 0;
    while ((match = headingRegex.exec(content)) !== null) {
        const headingText = match[1].replace(/<[^>]*>/g, '');
        headings.push({ id: 'section-' + i, text: headingText });
        i++;
    }
    return headings;
}

/**
 * Update page meta tags for SEO based on post
 * @param {Object} post - WordPress post object
 */
function updatePostMetaTags(post) {
    const titleText = post.title?.rendered || post.title || '';
    const excerptRaw = post.excerpt?.rendered || post.excerpt || '';
    const cleanExcerpt = excerptRaw.replace(/<[^>]*>/g, '').substring(0, 160);

    // Update title
    document.title = `${titleText} | CodeRegime Blog`;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
    }
    metaDescription.content = cleanExcerpt;

    // Update OG tags for social sharing
    console.log('Updating OG meta tags for:', titleText);
    updateOrCreateMetaTag('og:title', titleText);
    updateOrCreateMetaTag('og:description', cleanExcerpt);
    updateOrCreateMetaTag('og:image', getFeaturedImageUrl(post));
    updateOrCreateMetaTag('og:url', window.location.href);

    // Update Twitter Card
    updateOrCreateMetaTag('twitter:title', titleText);
    updateOrCreateMetaTag('twitter:description', cleanExcerpt);
    updateOrCreateMetaTag('twitter:image', getFeaturedImageUrl(post));
}

/**
 * Helper to update or create meta tags
 * @param {string} name - Meta tag property name
 * @param {string} content - Meta tag content
 */
function updateOrCreateMetaTag(name, content) {
    let tag = document.querySelector(`meta[property="${name}"], meta[name="${name}"]`);
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(name.includes('og:') ? 'property' : 'name', name);
        document.head.appendChild(tag);
    }
    tag.content = content;
}

/**
 * Render pagination controls
 * @param {Object} pagination - Pagination metadata
 * @param {Function} onPageChange - Callback function when page changes
 * @returns {string} - HTML string
 */
function renderPagination(pagination, onPageChange) {
    if (pagination.totalPages <= 1) {
        return '';
    }

    let html = '<div class="blog-pagination">';

    // Previous button
    if (pagination.hasPrevPage) {
        html += `<a href="#" class="pagination-btn prev-btn" data-page="${pagination.currentPage - 1}">← Previous</a>`;
    } else {
        html += '<span class="pagination-btn prev-btn disabled">← Previous</span>';
    }

    // Page numbers
    const maxPageButtons = 5;
    let startPage = Math.max(1, pagination.currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(pagination.totalPages, startPage + maxPageButtons - 1);

    if (endPage - startPage + 1 < maxPageButtons) {
        startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    if (startPage > 1) {
        html += `<a href="#" class="pagination-btn page-btn" data-page="1">1</a>`;
        if (startPage > 2) {
            html += '<span class="pagination-ellipsis">...</span>';
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        if (i === pagination.currentPage) {
            html += `<span class="pagination-btn page-btn active">${i}</span>`;
        } else {
            html += `<a href="#" class="pagination-btn page-btn" data-page="${i}">${i}</a>`;
        }
    }

    if (endPage < pagination.totalPages) {
        if (endPage < pagination.totalPages - 1) {
            html += '<span class="pagination-ellipsis">...</span>';
        }
        html += `<a href="#" class="pagination-btn page-btn" data-page="${pagination.totalPages}">${pagination.totalPages}</a>`;
    }

    // Next button
    if (pagination.hasNextPage) {
        html += `<a href="#" class="pagination-btn next-btn" data-page="${pagination.currentPage + 1}">Next →</a>`;
    } else {
        html += '<span class="pagination-btn next-btn disabled">Next →</span>';
    }

    html += '</div>';

    // Add event listeners
    setTimeout(() => {
        document.querySelectorAll('.pagination-btn[data-page]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const page = parseInt(btn.dataset.page);
                onPageChange(page);
                window.scrollTo(0, 0);
            });
        });
    }, 0);

    return html;
}

/**
 * Render error message
 * @param {string} message - Error message
 * @returns {string} - HTML string
 */
function renderError(message) {
    return `
        <div class="blog-error">
            <h2>Unable to Load Blog</h2>
            <p>${message}</p>
            <p>Please try refreshing the page or contact support if the problem persists.</p>
        </div>
    `;
}

/**
 * Render loading skeleton for posts
 * @param {number} count - Number of skeleton cards to render
 * @returns {string} - HTML string
 */
function renderSkeletonPosts(count = 3) {
    let html = '';
    for (let i = 0; i < count; i++) {
        html += `
            <div class="post-card skeleton">
                <div class="skeleton-image"></div>
                <div class="skeleton-content">
                    <div class="skeleton-title"></div>
                    <div class="skeleton-text"></div>
                    <div class="skeleton-text" style="width: 60%;"></div>
                </div>
            </div>
        `;
    }
    return html;
}
