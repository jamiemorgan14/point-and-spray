import React from 'react';
import { Helmet } from 'react-helmet';

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pressure Washing Pricing & Rates | Point & Spray Boise</title>
        <meta name="description" content="Transparent pressure washing pricing in Boise, Idaho. Get clear rates for house washing, driveway cleaning, patio restoration & more. No hidden fees!" />
        <meta name="keywords" content="pressure washing prices boise, pressure washing rates boise, pressure washing cost boise, pressure washing pricing idaho" />
        <meta property="og:title" content="Pressure Washing Pricing & Rates | Point & Spray Boise" />
        <meta property="og:description" content="Transparent pressure washing pricing in Boise, Idaho. Get clear rates for house washing, driveway cleaning & more." />
        <meta property="og:url" content="https://pointandsprayidaho.com/pricing" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pointandsprayidaho.com/pricing" />
      </Helmet>
      
      <section className="mx-auto max-w-6xl px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Transparent Pricing</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Clear, upfront pricing with no hidden fees. Get exactly what you pay for with professional results.
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {[
            {title:'House Soft Wash', price:'$200+', desc:'Low‑pressure wash for siding and trim. Kills algae and mildew without damage.'},
            {title:'Driveways & Sidewalks', price:'$100+', desc:'Pro surface cleaner for even, streak‑free results.'},
            {title:'Patios, Decks & Fences', price:'$150+', desc:'Restore wood and composite surfaces the safe way.'},
            {title:'Trash Bin Cleaning', price:'$25/bin', desc:'Deodorize and sanitize your bins on trash day.'},
            {title:'Gutter Brightening', price:'$100+', desc:'Remove black "tiger stripes" and oxidation on gutter exteriors.'},
            {title:'Garage & Shop Floors', price:'$250+', desc:'Degrease and clean concrete for a fresh start.'},
          ].map((s) => (
            <article key={s.title} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" role="listitem">
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-semibold text-lg text-slate-800">{s.title}</h2>
                <span className="text-2xl font-bold text-sky-600">{s.price}</span>
              </div>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
        
        {/* Pricing Disclaimer */}
        <div className="text-center mt-8 mb-8">
          <div className="inline-block bg-amber-50 border border-amber-200 rounded-lg px-6 py-4">
            <p className="text-amber-800 text-sm font-medium">
              💡 <strong>Note:</strong> Pricing depends on size and complexity of the job. Final pricing will be determined upon quote.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center bg-sky-50 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Ready to Get Started?</h2>
          <p className="text-slate-600 mb-6">
            Get your personalized quote today. No obligation, just honest pricing.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-2xl bg-sky-600 hover:bg-sky-700 px-8 py-4 font-semibold text-white text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            aria-label="Get your free pressure washing quote"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>
    </>
  );
} 