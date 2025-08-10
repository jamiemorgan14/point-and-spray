import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Point & Spray LLC. All rights reserved.</p>
        <p>Veteran‑owned • Boise, Idaho</p>
      </div>
    </footer>
  );
} 