import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/PointAndSprayLogo.PNG';

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50" role="banner">
      <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3" aria-label="Point & Spray Home">
          <img 
            src={logoImage} 
            alt="Point & Spray Logo - Professional Pressure Washing in Boise, Idaho" 
            className="w-12 h-12 rounded-full object-cover"
            width="48"
            height="48"
          />
          <span className="font-bold text-xl text-slate-800">Point & Spray</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8" role="menubar">
          <Link to="/" className="text-slate-600 hover:text-slate-800 transition-colors" role="menuitem">Home</Link>
          <Link to="/services" className="text-slate-600 hover:text-slate-800 transition-colors" role="menuitem">Services</Link>
          <Link to="/pricing" className="text-slate-600 hover:text-slate-800 transition-colors" role="menuitem">Pricing</Link>
          <Link to="/gallery" className="text-slate-600 hover:text-slate-800 transition-colors" role="menuitem">Gallery</Link>
          <Link to="/contact" className="text-slate-600 hover:text-slate-800 transition-colors" role="menuitem">Contact</Link>
        </div>
        
        <div className="md:hidden">
          <button 
            className="text-slate-600 hover:text-slate-800 transition-colors"
            aria-label="Open mobile menu"
            aria-expanded="false"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
} 