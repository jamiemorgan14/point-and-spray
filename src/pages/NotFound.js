import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Point & Spray Boise</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Point & Spray's professional pressure washing services in Boise, Idaho." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-6xl font-bold text-slate-300 mb-4">404</h2>
          <h3 className="text-2xl font-bold mb-4">Page Not Found</h3>
          <p className="text-slate-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/" 
            className="inline-block rounded-2xl bg-sky-600 px-6 py-3 text-white font-semibold shadow hover:bg-sky-700"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
} 