import React from 'react';
import { Helmet } from 'react-helmet';
import servicePages, { navGroups } from '../config/servicePages';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Window Cleaning & Pressure Washing Services in Boise, Idaho | Point & Spray</title>
        <meta name="description" content="Window cleaning, commercial and storefront window cleaning, pressure washing, concrete cleaning, and gutter cleaning in Boise and the Treasure Valley." />
        <meta property="og:title" content="Window Cleaning & Pressure Washing Services in Boise, Idaho | Point & Spray" />
        <meta property="og:description" content="Window cleaning, commercial and storefront window cleaning, pressure washing, concrete cleaning, and gutter cleaning in Boise and the Treasure Valley." />
        <meta property="og:url" content="https://pointandsprayidaho.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pointandsprayidaho.com/services" />
      </Helmet>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <header className="text-center mb-14">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Two things, done right: glass and surfaces. Pick a service below for details, pricing notes, and an FAQ, or call/text if it's easier to just talk it through.
          </p>
        </header>

        {navGroups.map((group) => (
          <div className="mb-14" key={group.label}>
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-700 text-sm font-bold">✦</span>
              {group.label}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.keys.map((key) => {
                const s = servicePages[key];
                return (
                  <a
                    key={key}
                    href={`/${s.slug}`}
                    className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow block"
                  >
                    <h3 className="font-semibold text-lg text-slate-800 mb-3">{s.navLabel}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{s.hero[0]}</p>
                  </a>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Service Area</h2>
          <p className="text-slate-600 mb-6">
            Serving Boise and the Treasure Valley, including:
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
