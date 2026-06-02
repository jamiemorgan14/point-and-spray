import React from 'react';
import { Helmet } from 'react-helmet';

const windowServices = [
  { title: 'Residential Window Cleaning', desc: 'Interior and exterior cleaning for streak-free, crystal-clear results. We use professional squeegees and solutions — no haze, no streaks.' },
  { title: 'Screen Cleaning & Reinstall', desc: 'Screens are removed, washed, and reinstalled as part of a full window cleaning visit. Leave them looking as good as the glass.' },
  { title: 'Track & Sill Cleaning', desc: 'Dirt and debris pack into tracks over time. We clear them out so your windows open smoothly and seal properly.' },
  { title: 'Hard Water Stain Removal', desc: "Boise's hard water leaves mineral deposits on glass over time. We treat and remove staining that regular cleaning won't touch." },
];

const pressureServices = [
  { title: 'House Soft Wash', desc: 'Low-pressure wash for siding and trim. Kills algae and mildew at the root without risking damage to paint or caulk.' },
  { title: 'Driveways & Sidewalks', desc: 'Surface cleaner attachment delivers even, streak-free results on concrete and pavers. Oil stains, tire marks, and grime — gone.' },
  { title: 'Patios, Decks & Fences', desc: 'Restore wood, composite, and concrete surfaces the safe way. We adjust pressure and technique to what each surface needs.' },
  { title: 'Gutter Brightening', desc: 'Remove the black "tiger stripe" oxidation on gutter exteriors that washing alone won\'t touch. Makes the whole roofline pop.' },
  { title: 'Trash Bin Cleaning', desc: 'Deodorize and sanitize your bins on trash day. Hot water and biodegradable solution — neighbors will notice.' },
  { title: 'Garage & Shop Floors', desc: 'Degrease and blast concrete for a clean, professional-looking floor. Great before an epoxy coat or just for a fresh start.' },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Window Cleaning & Pressure Washing Services in Boise, Idaho | Point & Spray</title>
        <meta name="description" content="Professional window cleaning and pressure washing in Boise: streak-free windows, house washing, driveway cleaning, patio restoration, gutter brightening & more. Free quotes!" />
        <meta name="keywords" content="window cleaning boise, window washing boise, pressure washing services boise, house washing boise, driveway cleaning boise, screen cleaning boise, gutter brightening boise" />
        <meta property="og:title" content="Window Cleaning & Pressure Washing Services in Boise, Idaho | Point & Spray" />
        <meta property="og:description" content="Professional window cleaning and pressure washing in Boise: streak-free windows, house washing, driveway cleaning & more." />
        <meta property="og:url" content="https://pointandsprayidaho.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pointandsprayidaho.com/services" />
      </Helmet>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <header className="text-center mb-14">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Window Cleaning & Pressure Washing</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Two services, one crew, zero hassle. We handle your exterior cleaning from top to bottom so you don't have to coordinate with multiple companies.
          </p>
        </header>

        <div className="mb-14">
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-700 text-sm font-bold">✦</span>
            Window Cleaning
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6" role="list">
            {windowServices.map((s) => (
              <article key={s.title} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" role="listitem">
                <h3 className="font-semibold text-lg text-slate-800 mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-700 text-sm font-bold">✦</span>
            Pressure Washing
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {pressureServices.map((s) => (
              <article key={s.title} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow" role="listitem">
                <h3 className="font-semibold text-lg text-slate-800 mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-4 text-center">
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
