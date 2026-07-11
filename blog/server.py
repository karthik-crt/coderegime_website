from flask import Flask, request, abort, make_response
import requests
import re
import os

app = Flask(__name__)

# The URL of your WordPress API (WordPress.com v1 API)
WP_API_URL = "https://public-api.wordpress.com/rest/v1.1/sites/coderegimeblog.wordpress.com/posts/slug:"

def strip_html_tags(text):
    """Remove html tags from a string"""
    clean = re.compile('<.*?>')
    return re.sub(clean, '', text).strip()

def get_featured_image(post):
    """Extract featured image from WordPress v1 post data"""
    if post.get('featured_image'):
        return post['featured_image']
    return 'https://coderegime.com/images/logo.png'

@app.route('/blog/<slug>')
def serve_blog_post(slug):
    post = None
    # 1. Fetch the post from WordPress
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
        }
        response = requests.get(f"{WP_API_URL}{slug}", headers=headers, timeout=5)
        response.raise_for_status()
        data = response.json()
        if 'error' not in data:
            post = data
    except Exception as e:
        print(f"Error fetching post {slug}: {e}")

    # 2. Extract SEO data
    if post:
        title = post.get('title', 'Code Regime Blog Post')
        # Decode HTML entities if any (simple unescape)
        title = title.replace('&#8211;', '-').replace('&#8217;', "'").replace('&amp;', '&')
        
        excerpt = post.get('excerpt', 'Insights on software development and technology.')
        description = strip_html_tags(excerpt)
        if len(description) > 160:
            description = description[:157] + "..."
            
        image = get_featured_image(post)
        content = post.get('content', '')
    else:
        # Fallback values if post not found
        title = "Code Regime Blog - Tech Insights & Dev Updates"
        description = "Explore expert articles on mobile app development, web apps, SaaS, AI tools, and clone scripts. Stay updated with Code Regime Technologies' blog page."
        image = "https://coderegime.com/images/logo.png"
        content = "<p>Loading content...</p>"

    # 3. Read the post.html template
    template_path = os.path.join(os.path.dirname(__file__), 'post.html')
    try:
        with open(template_path, 'r', encoding='utf-8') as f:
            html = f.read()
    except FileNotFoundError:
        return "Template not found", 500

    # 4. Inject SEO tags
    current_url = f"https://www.coderegimetechnologies.com/blog/{slug}"
    
    html = html.replace('{{SEO_TITLE}}', title)
    html = html.replace('{{SEO_DESC}}', description)
    html = html.replace('{{SEO_IMAGE}}', image)
    html = html.replace('{{SEO_URL}}', current_url)
    html = html.replace('{{POST_TITLE}}', title)
    html = html.replace('{{POST_IMAGE}}', image)
    html = html.replace('{{POST_CONTENT}}', content)

    # 5. Return the modified HTML with a 404 status code if the post was not found
    if not post:
        return html, 404
        
    return html

if __name__ == '__main__':
    # Run on port 8002 so it doesn't conflict with your Django app on 8001
    app.run(host='127.0.0.1', port=8002)
