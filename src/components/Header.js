import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/PointAndSprayLogo.PNG";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50" role="banner">
      <nav
        className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="Point & Spray Home"
          onClick={closeMenu}
        >
          <img
            src={logoImage}
            alt="Point & Spray Logo - Professional Pressure Washing in Boise, Idaho"
            className="w-12 h-12 rounded-full object-cover"
            width="48"
            height="48"
          />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <span className="font-bold text-xl text-slate-800">Point & Spray</span>
            <a
              href="tel:2085551234"
              className="text-slate-600 hover:text-slate-800 text-sm sm:text-base"
            >
              (208) 555-1234
            </a>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8" role="menubar">
          <Link to="/" className="text-slate-600 hover:text-slate-800 transition-colors" role="menuitem">Home</Link>
          <Link to="/services" className="text-slate-600 hover:text-slate-800 transition-colors" role="menuitem">Services</Link>
          <Link to="/pricing" className="text-slate-600 hover:text-slate-800 transition-colors" role="menuitem">Pricing</Link>
          <Link to="/gallery" className="text-slate-600 hover:text-slate-800 transition-colors" role="menuitem">Gallery</Link>
          <Link to="/contact" className="text-slate-600 hover:text-slate-800 transition-colors" role="menuitem">Contact</Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(v => !v)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
            aria-label={open ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              // X icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 left-0 right-0 bg-white border-b border-slate-200 shadow-lg transition-transform duration-200 ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-6">
          <div className="flex flex-col gap-4" role="menu" aria-label="Mobile">
            <Link to="/" onClick={closeMenu} className="py-2 text-lg text-slate-800" role="menuitem">Home</Link>
            <Link to="/services" onClick={closeMenu} className="py-2 text-lg text-slate-800" role="menuitem">Services</Link>
            <Link to="/pricing" onClick={closeMenu} className="py-2 text-lg text-slate-800" role="menuitem">Pricing</Link>
            <Link to="/gallery" onClick={closeMenu} className="py-2 text-lg text-slate-800" role="menuitem">Gallery</Link>
            <Link to="/contact" onClick={closeMenu} className="py-2 text-lg text-slate-800" role="menuitem">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
