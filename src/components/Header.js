import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/PointAndSprayLogo.PNG";
import servicePages, { navGroups } from "../config/servicePages";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeMenu = () => {
    setOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50" role="banner">
      <nav
        className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Point & Spray Home"
            onClick={closeMenu}
          >
            <img
              src={logoImage}
              alt="Point & Spray Logo - Window Cleaning & Pressure Washing in Boise, Idaho"
              className="w-12 h-12 rounded-full object-cover"
              width="48"
              height="48"
            />
            <span className="font-bold text-xl text-slate-800">Point & Spray</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6" role="menubar">
          <Link to="/" className="text-slate-600 hover:text-slate-800 transition-colors" role="menuitem">Home</Link>

          {navGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(group.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="text-slate-600 hover:text-slate-800 transition-colors flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={openDropdown === group.label}
                onClick={() => setOpenDropdown(openDropdown === group.label ? null : group.label)}
              >
                {group.label}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === group.label && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-white border border-slate-200 rounded-xl shadow-lg py-2">
                    {group.keys.map((key) => (
                      <Link
                        key={key}
                        to={`/${servicePages[key].slug}`}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                        role="menuitem"
                        onClick={closeMenu}
                      >
                        {servicePages[key].navLabel}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link to="/gallery" className="text-slate-600 hover:text-slate-800 transition-colors" role="menuitem">Gallery</Link>
          <Link to="/reviews" className="text-slate-600 hover:text-slate-800 transition-colors" role="menuitem">Reviews</Link>
          <Link to="/about" className="text-slate-600 hover:text-slate-800 transition-colors" role="menuitem">About</Link>
          <Link to="/contact" className="text-slate-600 hover:text-slate-800 transition-colors" role="menuitem">Contact</Link>
          <a
            href="tel:+12089944085"
            className="inline-flex items-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 text-sm font-semibold transition-colors"
          >
            Call/Text Us
          </a>
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
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
        className={`md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white overflow-y-auto shadow-lg transition-transform duration-200 ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-10">
          <div className="flex flex-col gap-1" role="menu" aria-label="Mobile">
            <Link to="/" onClick={closeMenu} className="py-2 text-lg text-slate-800" role="menuitem">Home</Link>

            {navGroups.map((group) => (
              <div key={group.label} className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">{group.label}</p>
                {group.keys.map((key) => (
                  <Link
                    key={key}
                    to={`/${servicePages[key].slug}`}
                    onClick={closeMenu}
                    className="block py-2 pl-2 text-lg text-slate-800"
                    role="menuitem"
                  >
                    {servicePages[key].navLabel}
                  </Link>
                ))}
              </div>
            ))}

            <Link to="/gallery" onClick={closeMenu} className="py-2 mt-3 text-lg text-slate-800" role="menuitem">Gallery</Link>
            <Link to="/reviews" onClick={closeMenu} className="py-2 text-lg text-slate-800" role="menuitem">Reviews</Link>
            <Link to="/about" onClick={closeMenu} className="py-2 text-lg text-slate-800" role="menuitem">About</Link>
            <Link to="/contact" onClick={closeMenu} className="py-2 text-lg text-slate-800" role="menuitem">Contact</Link>

            <a
              href="tel:+12089944085"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 text-lg font-semibold transition-colors"
            >
              Call/Text: (208) 994-4085
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
