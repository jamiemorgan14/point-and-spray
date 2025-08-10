# Image Setup Guide

## ✅ What's Been Done

I've successfully replaced the Unsplash image link with a local image system. Here's what's been set up:

1. **Created `src/assets/` directory** - for storing your images
2. **Updated `Home.js`** - removed the Unsplash link
3. **Created `HeroImage` component** - for better image handling
4. **Added placeholder** - shows instructions until you add your image

## 🖼️ How to Add Your Image

### Step 1: Add Your Image File
1. Place your image file in the `src/assets/` directory
2. Recommended filename: `hero-image.jpg` (or .png, .webp)
3. Recommended size: 800x600px or larger (16:9 or 4:3 aspect ratio)

### Step 2: Update the Home Page
1. Open `src/pages/Home.js`
2. Uncomment these lines:
   ```jsx
   import heroImage from '../assets/hero-image.jpg';
   ```
3. Uncomment this line in the HeroImage component:
   ```jsx
   imageSrc={heroImage}
   ```

### Step 3: Test Your Changes
```bash
npm start
```

## 📁 File Structure
```
src/
├── assets/
│   ├── hero-image.jpg          ← Add your image here
│   └── README.md               ← Image setup instructions
├── components/
│   ├── HeroImage.js            ← Image component
│   ├── Header.js
│   ├── Footer.js
│   └── TrustBar.js
└── pages/
    ├── Home.js                 ← Updated to use local image
    ├── Services.js
    ├── Pricing.js
    ├── Gallery.js
    └── Contact.js
```

## 🎯 Image Recommendations

### For Hero Section:
- **Format**: JPG for photos, PNG for graphics with transparency
- **Size**: 800x600px minimum, 1200x900px ideal
- **Content**: Professional pressure washing work, clean driveways, or your team
- **Style**: Bright, clean, professional

### File Naming:
- Use descriptive names: `hero-pressure-washing.jpg`
- Use lowercase and hyphens: `before-after-driveway.jpg`
- Include dimensions if needed: `hero-1200x900.jpg`

## 🔧 Advanced Usage

### Multiple Images:
```jsx
import heroImage from '../assets/hero-image.jpg';
import serviceImage from '../assets/services-bg.jpg';

// Use in different components
<HeroImage imageSrc={heroImage} altText="Hero section" />
<HeroImage imageSrc={serviceImage} altText="Services background" />
```

### Responsive Images:
```jsx
// For different screen sizes
<img 
  srcSet={`${smallImage} 300w, ${mediumImage} 600w, ${largeImage} 900w`}
  sizes="(max-width: 600px) 300px, (max-width: 900px) 600px, 900px"
  src={largeImage}
  alt="Responsive image"
/>
```

## 🚀 Benefits of This Setup

1. **No External Dependencies** - Your images load from your server
2. **Better Performance** - No external API calls
3. **SEO Friendly** - Images are part of your domain
4. **Professional Look** - No "Powered by Unsplash" branding
5. **Customizable** - Full control over image selection and optimization

## 📱 Testing

After adding your image:
1. Run `npm start` to see changes
2. Check different screen sizes
3. Verify image loads correctly
4. Test build with `npm run build`

## 🆘 Troubleshooting

### Image Not Loading?
- Check file path is correct
- Ensure file extension matches import
- Verify file exists in `src/assets/`

### Build Errors?
- Make sure image file is in the right location
- Check import statement syntax
- Verify file extension is supported

### Performance Issues?
- Compress large images (use tools like TinyPNG)
- Consider using WebP format with JPG fallback
- Optimize image dimensions for display size

---

**Ready to add your image?** Just follow Step 1 above and you'll have a professional-looking hero section with your own content! 