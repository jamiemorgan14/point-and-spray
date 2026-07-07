import React from 'react';
import { Helmet } from 'react-helmet';
import TrustBar from '../components/TrustBar';
import servicePages from '../config/servicePages';
import greenhouseImage from '../assets/boise-greenhouse-window-cleaning.jpg';

const serviceCards = [
  {
    title: 'Window Cleaning',
    desc: 'Interior and exterior window cleaning for homes across Boise and the Treasure Valley. Screens washed and reinstalled, tracks cleared out.',
    href: `/${servicePages.windowCleaning.slug}`,
  },
  {
    title: 'Commercial & Storefront Window Cleaning',
    desc: 'Recurring window cleaning for offices, retail storefronts, and multi-tenant properties. Weekly, biweekly, or monthly, on a schedule you can count on.',
    href: `/${servicePages.commercialWindowCleaning.slug}`,
  },
  {
    title: 'Pressure Washing',
    desc: 'Soft wash for siding, plus house washing, patios, decks, and fences.',
    href: `/${servicePages.pressureWashing.slug}`,
  },
  {
    title: 'Concrete & Driveway Cleaning',
    desc: 'Driveways, sidewalks, and garage floors, back to looking like concrete again.',
    href: `/${servicePages.concreteDriveway.slug}`,
  },
  {
    title: 'Gutter Cleaning',
    desc: 'Debris cleared out, downspouts checked, exteriors brightened on request.',
    href: `/${servicePages.gutterCleaning.slug}`,
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Window Cleaning & Exterior Cleaning in Boise, Idaho | Point & Spray</title>
        <meta name="description" content="Window cleaning, commercial storefront window cleaning, pressure washing, and concrete cleaning in Boise and the Treasure Valley. Locally owned and fully insured. Call or text for a free quote." />
        <meta name="keywords" content="window cleaning boise, commercial window cleaning boise, storefront window cleaning boise, pressure washing boise, driveway cleaning boise, gutter cleaning boise" />
        <meta property="og:title" content="Window Cleaning & Exterior Cleaning in Boise, Idaho | Point & Spray" />
        <meta property="og:description" content="Window cleaning, commercial storefront window cleaning, pressure washing, and concrete cleaning in Boise and the Treasure Valley." />
        <meta property="og:url" content="https://pointandsprayidaho.com/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pointandsprayidaho.com/" />
      </Helmet>

      <section className="bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Window &amp; Exterior Cleaning
                <span className="block text-sky-600">in Boise, Idaho</span>
              </h1>
              <p className="text-lg text-slate-700 font-medium mb-6">
                Windows, storefronts, driveways, and gutters. Locally owned and fully insured,
                serving Boise and the Treasure Valley.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Point &amp; Spray is a Boise company, started and run by Jamie, a veteran who
                wanted the work done the way it should be. We clean windows, wash storefronts,
                pressure wash siding and concrete, and clear gutters for homeowners and local
                businesses across the Treasure Valley.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We run every job the same way: show up when we say we will, explain the work
                clearly, and treat your property like our own. Fully insured, with a
                straight answer on price before the work starts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+12089944085"
                  className="inline-flex items-center justify-center px-8 py-4 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors duration-200 text-lg"
                  aria-label="Call or text Point & Spray at 208-994-4085"
                >
                  Call or Text: (208) 994-4085
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-sky-600 text-sky-700 font-semibold rounded-lg hover:bg-sky-50 transition-colors duration-200 text-lg"
                  aria-label="Get a free quote for window cleaning and pressure washing services"
                >
                  Get Free Quote
                </a>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <img
                src={greenhouseImage}
                alt="All-glass greenhouse after a full window and roof cleaning by Point & Spray near Boise, Idaho"
                className="w-full h-auto rounded-lg shadow-2xl"
                loading="eager"
                decoding="async"
              />
              <p className="text-center text-sm text-gray-500 mt-3 italic">
                An all-glass greenhouse we cleaned roof to sill, Treasure Valley
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">What We Do</h2>
          <p className="text-slate-600">Two things, done right: glass and surfaces. Pick one or bundle both.</p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow block"
            >
              <h3 className="font-semibold text-lg text-slate-800 mb-2">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Why People Call Point &amp; Spray</h2>
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            Point &amp; Spray isn't a national franchise or a lead-selling website. It's a local
            Boise business, and the owner's name is on every job. That means a straight answer on
            scheduling, a fair price, and accountability that doesn't disappear into a call center.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every job starts with a straight answer: what it costs, what will come clean, and what
            to expect. Then we show up and do the work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-3">Serving Boise &amp; the Treasure Valley</h2>
        <p className="text-slate-600 mb-8">Boise, Meridian, Eagle, Garden City, and nearby areas.</p>
        <div className="rounded-3xl bg-sky-50 p-8">
          <h3 className="text-xl font-bold text-slate-800 mb-3">Get a Free Quote</h3>
          <p className="text-slate-600 mb-6">Call, text, or send a message and we'll get back to you within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12089944085"
              className="inline-flex items-center justify-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-xl hover:bg-sky-700 transition-colors"
            >
              Call or Text: (208) 994-4085
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-sky-600 text-sky-700 font-semibold rounded-xl hover:bg-sky-50 transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
