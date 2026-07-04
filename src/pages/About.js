import React from 'react';
import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Point &amp; Spray | Locally Owned in Boise, ID</title>
        <meta name="description" content="Point & Spray is a veteran-owned window cleaning and pressure washing business in Boise, Idaho, started and run by Jamie, the owner." />
        <meta property="og:title" content="About Point & Spray | Locally Owned in Boise, ID" />
        <meta property="og:description" content="Veteran-owned window cleaning and pressure washing in Boise, Idaho, started and run by Jamie, the owner." />
        <meta property="og:url" content="https://pointandsprayidaho.com/about" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pointandsprayidaho.com/about" />
      </Helmet>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">About Point &amp; Spray</h1>

        <p className="text-lg text-slate-600 mb-4 leading-relaxed">
          Point &amp; Spray was started by Jamie, a veteran who runs the business here in
          Boise. It's not a franchise, and the standards don't come from a corporate manual. They
          come from how Jamie would want a job done at his own place.
        </p>
        <p className="text-lg text-slate-600 mb-4 leading-relaxed">
          That means showing up when we say we will, explaining what we're doing and why, and
          treating your property like our own. Fully insured, with a straight answer on
          price before anything starts.
        </p>
        <p className="text-lg text-slate-600 mb-4 leading-relaxed">
          The name comes from our two German Shorthaired Pointers, who spend most of their time
          finding new ways to get dirty outdoors. Cleaning up after them turned into cleaning up
          Boise's windows, storefronts, driveways, and gutters.
        </p>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Today that means residential window cleaning, recurring commercial and storefront window
          cleaning, pressure washing, and concrete cleaning across Boise, Meridian, Eagle, and
          Garden City.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
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
      </section>
    </>
  );
}
