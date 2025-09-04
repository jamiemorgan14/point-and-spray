import React from 'react';
import { Helmet } from 'react-helmet';
import ReviewLinks from '../components/ReviewLinks';

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Reviews | Point & Spray Boise</title>
        <meta name="description" content="Share your experience with Point & Spray. Leave a review on Google and help neighbors in Boise choose with confidence." />
        <link rel="canonical" href="https://pointandsprayidaho.com/reviews" />
      </Helmet>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Leave a Review</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We appreciate your business and your feedback. Reviews help us grow a trusted, local service for Boise and the surrounding areas.
          </p>
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 max-w-lg mx-auto">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Leave your review on Google</h2>
          <ReviewLinks layout="row" size="lg" />
          <p className="text-sm text-slate-500 mt-4">Thank you for supporting a veteran-owned local business.</p>
        </div>

        {null}
      </section>
    </>
  );
}
