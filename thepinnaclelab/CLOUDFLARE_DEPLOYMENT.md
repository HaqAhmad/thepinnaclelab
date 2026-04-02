# Cloudflare Pages Deployment Guide

## Overview
This is a static React website optimized for Cloudflare Pages hosting. The site is built as a Single Page Application (SPA) with modern performance optimizations.

## Prerequisites
- Cloudflare account (free tier supported)
- Git repository (GitHub, GitLab, or Gitea)
- Node.js 18+ installed locally

## Local Development

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
The site will open on `http://localhost:3000`

### Build for Production
```bash
npm run build
```
This generates optimized static files in the `dist/` folder.

### Preview Build
```bash
npm run preview
```
Test the production build locally before deploying.

## Deployment to Cloudflare Pages

### Method 1: Git Integration (Recommended)

1. **Push to Git Repository**
   - Ensure your code is in a GitHub, GitLab, or Gitea repository
   - Push to your preferred branch

2. **Connect to Cloudflare Pages**
   - Go to https://dash.cloudflare.com
   - Select your account and go to "Pages"
   - Click "Create a project"
   - Choose "Connect to Git"
   - Authorize and select your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node.js version: 18 (or higher)

4. **Deploy**
   - Cloudflare Pages automatically builds and deploys on every push
   - Your site will be available at `https://[project-name].[username].pages.dev`

### Method 2: Direct Upload (Wrangler CLI)

1. **Install Wrangler** (optional, for advanced users)
```bash
npm install -g wrangler
```

2. **Authenticate**
```bash
wrangler login
```

3. **Deploy**
```bash
npm run build
wrangler pages deploy dist
```

## Performance Optimizations

This project includes several optimizations for Cloudflare:

### 1. **Static Asset Hashing**
- All assets include content hashes for cache busting
- Images, CSS, and JS are stored in separate directories

### 2. **Code Splitting**
- React and React DOM are in a separate chunk
- Better cache hits for vendor updates

### 3. **CSS Optimization**
- CSS is extracted and minified
- CSS code splitting for unused styles

### 4. **Minification**
- JavaScript minified with Terser
- Consoles logs removed in production

### 5. **Responsive Design**
- Mobile-first approach
- Automatic adaptation to all screen sizes

## SEO Configuration

The site includes:
- Proper meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card support
- Structured data ready for schema markup
- Canonical URLs
- Sitemap and robots.txt ready

## Security Headers

For Cloudflare Pages, add these headers in your page rules:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## Custom Domain

1. Go to your Cloudflare Pages project
2. Click "Custom domains"
3. Add your domain and follow the DNS setup instructions
4. Your site will be available at your custom domain with automatic HTTPS

## Environment Variables

To add environment variables:

1. Go to your project settings
2. Navigate to "Environment variables"
3. Add variables for both production and preview environments

Example:
```
VITE_API_URL=https://api.example.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Monitoring & Analytics

### Cloudflare Web Analytics
Cloudflare automatically provides analytics. To view:
1. Go to your Pages project
2. Click "Analytics"
3. View real-time traffic data

### Custom Analytics
You can integrate additional analytics services:
- Google Analytics
- Plausible
- Fathom Analytics

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Verify build command: `npm run build`
- Ensure output directory is `dist`

### Page Not Found (404)
- The `_redirects` file handles SPA routing
- Ensure it's in the root of your repository

### Blank Page or CSS Not Loading
- Check browser console for errors
- Verify CSS paths are relative, not absolute
- Check that assets are in the `dist/` folder

### Performance Issues
- Use Cloudflare's speed test
- Check image optimization
- Consider using Cloudflare's Image Optimization

## Optimization Tips

1. **Images**: Optimize before adding
   - ~1-2 MB total for optimal load times
   - Use WebP format where possible

2. **Regional Caching**: Cloudflare caches globally
   - Static assets are cached at edge servers

3. **Compression**: Cloudflare automatically applies:
   - Gzip compression
   - Brotli compression (for modern browsers)

4. **HTTP/2**: Automatically enabled
   - Multiplexing for faster asset delivery

## Production Checklist

- [ ] Update site title and meta description
- [ ] Add custom favicon
- [ ] Test on multiple devices
- [ ] Test navigation links
- [ ] Enable Cloudflare security settings
- [ ] Set up custom domain
- [ ] Enable analytics
- [ ] Add Google Search Console verification
- [ ] Test form submissions (if applicable)
- [ ] Check mobile responsiveness

## Support & Resources

- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Vite Docs: https://vite.dev/
- React Docs: https://react.dev/
- Cloudflare Community: https://community.cloudflare.com/

## License

Free to deploy and customize for your needs.
