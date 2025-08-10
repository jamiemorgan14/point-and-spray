import React from 'react';

export default function HeroImage({ src, alt, className = "" }) {
  if (!src) {
    return (
      <div 
        className={`bg-gradient-to-br from-sky-100 to-blue-200 rounded-3xl p-12 text-center ${className}`}
        role="img"
        aria-label="Hero image placeholder"
      >
        <div className="text-sky-600 text-6xl mb-4">🏠</div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Professional Pressure Washing</h2>
        <p className="text-slate-600">Transform your home's exterior</p>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt || "Professional pressure washing services in Boise, Idaho"} 
      className={`w-full h-auto rounded-3xl object-cover ${className}`}
      loading="eager"
      decoding="async"
    />
  );
} 