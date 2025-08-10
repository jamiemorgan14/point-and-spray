# Assets Directory

This directory is for storing images, icons, and other static assets used in the website.

## Adding Images

1. Place your image files in this directory (e.g., `hero-image.jpg`, `services-bg.png`)
2. Import them in your React components like this:
   ```jsx
   import heroImage from '../assets/hero-image.jpg';
   
   // Then use in your JSX:
   <img src={heroImage} alt="Hero image" />
   ```

## Recommended Image Formats

- **JPG/JPEG**: For photographs and complex images
- **PNG**: For images with transparency or simple graphics
- **WebP**: Modern format with better compression (with fallback)
- **SVG**: For icons and simple graphics

## Image Optimization

- Compress images before adding them to reduce file size
- Use appropriate dimensions for the display size
- Consider using multiple sizes for responsive images 