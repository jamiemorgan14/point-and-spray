import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/PointAndSprayLogo.PNG';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center">
              <img 
                src={logoImage} 
                alt="Point & Spray Logo" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <h1 className="text-lg font-semibold">Point & Spray</h1>
              <p className="text-xs text-slate-500">Veteran‑owned • Boise, ID</p>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-sky-700">Home</Link>
          <Link to="/services" className="hover:text-sky-700">Services</Link>
          <Link to="/pricing" className="hover:text-sky-700">Pricing</Link>
          <Link to="/gallery" className="hover:text-sky-700">Results</Link>
          <Link to="/contact" className="hover:text-sky-700">Book</Link>
        </nav>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-4 py-2 text-white text-sm shadow hover:bg-sky-700">Get a Quote</Link>
      </div>
    </header>
  );
} 