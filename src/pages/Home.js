import React from 'react';
import { Helmet } from 'react-helmet';
import TrustBar from '../components/TrustBar';
import BandAImage from '../assets/BandA.jpg';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Point & Spray - Professional Pressure Washing in Boise, Idaho | Veteran-Owned</title>
        <meta name="description" content="Point & Spray offers professional pressure washing services in Boise, Meridian, Eagle & Garden City. Veteran-owned, family-focused cleaning solutions. Get your free quote today!" />
        <meta name="keywords" content="pressure washing boise, house washing boise, driveway cleaning boise, veteran owned pressure washing, pressure washing idaho" />
        <meta property="og:title" content="Point & Spray - Professional Pressure Washing in Boise, Idaho" />
        <meta property="og:description" content="Veteran-owned pressure washing services in Boise, Meridian, Eagle & Garden City. Professional house washing, driveway cleaning, patio restoration & more." />
        <meta property="og:url" content="https://pointandsprayidaho.com/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pointandsprayidaho.com/" />
      </Helmet>
      
      <section className="bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Professional Pressure Washing
                <span className="block text-blue-600">Veteran-Owned & Family-Focused</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Named after our two German Shorthaired Pointers who love exploring the outdoors, 
                Point & Spray brings the same energy and precision to every job. As a veteran-owned 
                business, we understand the value of hard work, attention to detail, and serving our community.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Driveways, houses, patios & more</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Eco-friendly cleaning solutions</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">Serving Boise & surrounding areas</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg"
                  aria-label="Get a free quote for pressure washing services"
                >
                  Get Free Quote
                </a>
                <a
                  href="tel:208-555-0123"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 text-lg"
                  aria-label="Call Point & Spray at 208-555-0123"
                >
                  Call Now: 208-555-0123
                </a>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <img
                src={BandAImage}
                alt="Before and after pressure washing results showing dramatic transformation"
                className="w-full h-auto rounded-lg shadow-2xl"
                loading="eager"
                decoding="async"
              />
              <p className="text-center text-sm text-gray-500 mt-3 italic">
                See the dramatic difference our professional pressure washing makes
              </p>
            </div>
          </div>
        </div>
      </section>
      <TrustBar />
    </>
  );
} 