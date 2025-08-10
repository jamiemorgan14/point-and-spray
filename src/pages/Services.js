import React from 'react';

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h3 className="text-2xl font-bold">Services</h3>
      <p className="mt-2 text-slate-600">Focused, high‑impact exterior cleaning that fits your schedule.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {title:'House Soft Wash', desc:'Low‑pressure wash for siding and trim. Kills algae and mildew without damage.'},
          {title:'Driveways & Sidewalks', desc:'Pro surface cleaner for even, streak‑free results.'},
          {title:'Patios, Decks & Fences', desc:'Restore wood and composite surfaces the safe way.'},
          {title:'Trash Bin Cleaning', desc:'Deodorize and sanitize your bins on trash day.'},
          {title:'Gutter Brightening', desc:'Remove black "tiger stripes" and oxidation on gutter exteriors.'},
          {title:'Garage & Shop Floors', desc:'Degrease and clean concrete for a fresh start.'},
        ].map((s) => (
          <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <h4 className="font-semibold">{s.title}</h4>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 