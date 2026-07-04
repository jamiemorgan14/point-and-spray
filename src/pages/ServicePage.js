import React from 'react';
import { Helmet } from 'react-helmet';
import servicePages from '../config/servicePages';

export default function ServicePage({ pageKey }) {
  const data = servicePages[pageKey];
  if (!data) return null;

  const canonical = `https://pointandsprayidaho.com/${data.slug}`;
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{data.seoTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <meta property="og:title" content={data.seoTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700 mb-2">
            Boise &amp; the Treasure Valley
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">{data.h1}</h1>
          {data.hero.map((p, i) => (
            <p key={i} className="text-lg text-slate-600 mb-4 leading-relaxed">{p}</p>
          ))}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
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
              {data.ctaLabel}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">What's Included</h2>
            <ul className="space-y-3">
              {data.included.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-0.5">✓</span>
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
            {(data.startingAt || data.priceNote) && (
              <div className="mt-6 rounded-xl bg-sky-50 p-4">
                {data.startingAt && (
                  <p className="text-sky-700 font-bold text-lg mb-1">Starting at {data.startingAt}</p>
                )}
                {data.priceNote && <p className="text-sm text-slate-600">{data.priceNote}</p>}
              </div>
            )}
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Good Fit For</h2>
            <ul className="space-y-3">
              {data.goodFor.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-sky-500 mr-3 mt-0.5">•</span>
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Questions</h2>
        <div className="space-y-6">
          {data.faqs.map((f, i) => (
            <div key={i}>
              <h3 className="font-semibold text-slate-800">{f.q}</h3>
              <p className="text-slate-600 mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <div className="rounded-3xl bg-sky-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Ready to get a quote?</h2>
          <p className="text-slate-600 mb-6">Call, text, or fill out the form and we'll get back to you within 24 hours.</p>
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
              {data.ctaLabel}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
