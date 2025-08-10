import React from 'react';

export default function Pricing() {
  return (
    <section className="bg-white border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h3 className="text-2xl font-bold">Simple, flat‑rate pricing</h3>
        <p className="mt-2 text-slate-600">Transparent tiers so you can book without back‑and‑forth.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card title="Driveway" price="$149+" points={["Single‑car","Oil spot pre‑treat included","Add sidewalk +$25"]} />
          <Card title="House Wash" price="$299+" points={["Up to 1,500 sq ft","Soft‑wash siding & trim","Windows rinsed clear"]} featured />
          <Card title="Deck/Fence" price="$199+" points={["Up to 200 sq ft","Soft‑wash wood/composite","Sealant prep ready"]} />
        </div>
        <p className="mt-4 text-xs text-slate-500">Final price may vary based on condition and size. We'll confirm before work begins.</p>
      </div>
    </section>
  );
}

function Card({title, price, points, featured}){
  return (
    <div className={`rounded-2xl p-6 border ${featured? 'border-sky-300 bg-sky-50 shadow': 'border-slate-200 bg-white shadow-sm'}`}>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-1 text-3xl font-extrabold">{price}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {points.map((p)=> <li key={p}>• {p}</li>)}
      </ul>
    </div>
  );
} 