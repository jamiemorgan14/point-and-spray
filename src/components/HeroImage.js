import React from 'react';

export default function HeroImage({ imageSrc, altText, fallbackText = "Professional pressure washing services" }) {
  if (imageSrc) {
    return (
      <img 
        src={imageSrc} 
        alt={altText || fallbackText}
        className="aspect-[4/3] rounded-2xl object-cover w-full shadow-lg"
        loading="lazy"
      />
    );
  }

  // Fallback placeholder when no image is provided
  return (
    <div className="aspect-[4/3] rounded-2xl bg-slate-200 flex items-center justify-center shadow-lg">
      <div className="text-center text-slate-500">
        <p className="text-lg font-medium mb-2">Add Your Image Here</p>
        <p className="text-sm">Place your hero image in src/assets/</p>
        <p className="text-xs">Recommended: 800x600px or larger</p>
      </div>
    </div>
  );
} 