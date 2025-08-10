import React from 'react';
import { Helmet } from 'react-helmet';
import TrustBar from '../components/TrustBar';
import HeroImage from '../components/HeroImage';
// Import your image here
import heroImage from '../assets/PointAndSprayLogo.PNG';

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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Professional Pressure Washing in <span className="text-sky-600">Boise</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our two German Shorthaired Pointers were the inspiration for the name "Point & Spray." They point, we spray!
                Just like these loyal hunting companions, we're focused, reliable, and get the job done right.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                As a <strong>veteran-owned business</strong>, we bring the same discipline and attention to detail to every pressure washing job. 
                Whether it's your house, driveway, or patio, we treat your property with the care it deserves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-600 hover:bg-sky-700 px-8 py-4 font-semibold text-white text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  aria-label="Get your free pressure washing quote"
                >
                  Get Your Free Quote
                </a>
                <a 
                  href="tel:+1-208-994-4085" 
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-slate-300 hover:border-slate-400 px-8 py-4 font-semibold text-slate-700 text-lg transition-colors duration-200"
                  aria-label="Call Point & Spray at (208) 994-4085"
                >
                  📞 (208) 994-4085
                </a>
              </div>
            </div>
            
            <div className="relative">
              <HeroImage 
                src={heroImage} 
                alt="Point & Spray - Professional pressure washing services in Boise, Idaho. Veteran-owned business with German Shorthaired Pointers Ruger and Remington."
                className="shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-slate-200">
                <p className="text-sm font-semibold text-slate-800">Veteran-Owned</p>
                <p className="text-xs text-slate-600">Proud to serve</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrustBar />
    </>
  );
} 