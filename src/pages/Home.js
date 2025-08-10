import React from 'react';
import TrustBar from '../components/TrustBar';
import HeroImage from '../components/HeroImage';
// Import your image here
import heroImage from '../assets/PointAndSprayLogo.PNG';

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {/* Hero Section - Story Focused */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800 mb-6">
              Point & Spray
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Named after our two German Shorthaired Pointers who love to explore every inch of our property. 
              Just like them, we're thorough, reliable, and won't miss a spot.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Veteran-Owned, Family-Focused
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We bring the same precision and dedication from our military service to every pressure washing job. 
                Your property deserves the attention to detail that only comes from someone who cares about doing things right.
              </p>
              <div className="space-y-3 text-slate-700">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Local to Boise and surrounding areas</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Flexible scheduling for your convenience</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                  <span>Transparent pricing, no surprises</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <HeroImage 
                imageSrc={heroImage}
                altText="Point & Spray - Professional pressure washing services in Boise"
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to see the difference?
            </h3>
            <p className="text-slate-600 mb-6">
              Fast quotes. Clear pricing. Satisfaction guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="rounded-2xl bg-sky-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-sky-700 transition-colors">
                Book Online
              </a>
              <a href="tel:+1-208-994-4085" className="rounded-2xl px-8 py-4 border-2 border-slate-300 hover:bg-slate-50 transition-colors font-semibold">
                Call: (208) 994-4085
              </a>
            </div>
          </div>
        </div>
      </section>
      <TrustBar />
    </>
  );
} 