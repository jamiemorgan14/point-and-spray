import React from 'react';

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-slate-600">
        <div className="flex items-center gap-2"><span className="i-lucide-badge-check"/> Veteran‑owned</div>
        <div className="flex items-center gap-2"><span className="i-lucide-clock"/> Flexible scheduling</div>
        <div className="flex items-center gap-2"><span className="i-lucide-sparkles"/> Soft‑wash safe on siding</div>
        <div className="flex items-center gap-2"><span className="i-lucide-credit-card"/> Card, cash, or invoice</div>
      </div>
    </section>
  );
} 