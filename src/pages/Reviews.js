import React from 'react';
import { Helmet } from 'react-helmet';
import ReviewLinks from '../components/ReviewLinks';
import testimonials from '../config/testimonials';

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Reviews | Point & Spray Boise</title>
        <meta name="description" content="Read what Boise customers say about Point & Spray, and leave a review of your own on Google." />
        <link rel="canonical" href="https://pointandsprayidaho.com/reviews" />
      </Helmet>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Reviews</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Real feedback from Boise and Treasure Valley customers.
          </p>
        </header>

        {testimonials.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <p className="text-slate-700 mb-3">&ldquo;{t.quote}&rdquo;</p>
                <footer className="text-sm text-slate-500">
                  {t.name}{t.context ? ` — ${t.context}` : ''}
                </footer>
              </blockquote>
            ))}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 max-w-lg mx-auto">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Already worked with Point & Spray?</h2>
          <p className="text-slate-600 text-sm mb-4">A Google review helps neighbors in Boise find a local business they can trust.</p>
          <ReviewLinks layout="row" size="lg" />
        </div>
      </section>
    </>
  );
}
