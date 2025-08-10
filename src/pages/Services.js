import React from 'react';
import { Helmet } from 'react-helmet';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Pressure Washing Services in Boise, Idaho | Point & Spray</title>
        <meta name="description" content="Professional pressure washing services in Boise: house washing, driveway cleaning, patio restoration, gutter brightening, trash bin cleaning & more. Get your free quote!" />
        <meta name="keywords" content="pressure washing services boise, house washing boise, driveway cleaning boise, patio cleaning boise, gutter cleaning boise, trash bin cleaning boise" />
        <meta property="og:title" content="Pressure Washing Services in Boise, Idaho | Point & Spray" />
        <meta property="og:description" content="Professional pressure washing services in Boise: house washing, driveway cleaning, patio restoration & more." />
        <meta property="og:url" content="https://pointandsprayidaho.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pointandsprayidaho.com/services" />
      </Helmet>
      
      <section className="mx-auto max-w-6xl px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Our Pressure Washing Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Focused, high‑impact exterior cleaning that fits your schedule. 
            Professional results you can trust.
          </p>
        </header>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {[
            {title:'House Soft Wash', desc:'Low‑pressure wash for siding and trim. Kills algae and mildew without damage.'},
            {title:'Driveways & Sidewalks', desc:'Pro surface cleaner for even, streak‑free results.'},
            {title:'Patios, Decks & Fences', desc:'Restore wood and composite surfaces the safe way.'},
            {title:'Trash Bin Cleaning', desc:'Deodorize and sanitize your bins on trash day.'},
            {title:'Gutter Brightening', desc:'Remove black "tiger stripes" and oxidation on gutter exteriors.'},
            {title:'Garage & Shop Floors', desc:'Degrease and clean concrete for a fresh start.'},
          ].map((s) => (
            <article key={s.title} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" role="listitem">
              <h2 className="font-semibold text-lg text-slate-800 mb-3">{s.title}</h2>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Service Area</h2>
          <p className="text-slate-600 mb-6">
            We proudly serve the greater Boise area including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {['Boise', 'Meridian', 'Eagle', 'Garden City'].map(city => (
              <div key={city} className="bg-sky-50 rounded-xl p-4">
                <h3 className="font-semibold text-sky-700">{city}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 