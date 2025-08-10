import React from 'react';
import { Helmet } from 'react-helmet';

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Pressure Washing Before & After Gallery | Point & Spray Boise</title>
        <meta name="description" content="See the amazing results of our pressure washing services in Boise. Before & after photos of house washing, driveway cleaning, patio restoration & more." />
        <meta name="keywords" content="pressure washing before after boise, pressure washing results boise, pressure washing photos boise, pressure washing gallery idaho" />
        <meta property="og:title" content="Pressure Washing Before & After Gallery | Point & Spray Boise" />
        <meta property="og:description" content="See the amazing results of our pressure washing services in Boise. Before & after photos of house washing, driveway cleaning & more." />
        <meta property="og:url" content="https://pointandsprayidaho.com/gallery" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pointandsprayidaho.com/gallery" />
      </Helmet>
      
      <section className="mx-auto max-w-6xl px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Before & After Gallery</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See the amazing transformation our professional pressure washing services deliver. 
            Real results from real customers in Boise and surrounding areas.
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {[
            {title:'House Siding Transformation', desc:'Removed years of algae and mildew buildup'},
            {title:'Driveway Restoration', desc:'Eliminated oil stains and surface grime'},
            {title:'Patio Revival', desc:'Restored wood deck to its original beauty'},
            {title:'Gutter Brightening', desc:'Removed oxidation and black streaks'},
            {title:'Fence Cleaning', desc:'Brought back the natural wood color'},
            {title:'Concrete Renewal', desc:'Garage floor degreasing and cleaning'},
          ].map((item, index) => (
            <article key={index} className="group cursor-pointer" role="listitem">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                <div className="text-center text-slate-500">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-sm font-medium">Photo {index + 1}</p>
                  <p className="text-xs">Coming Soon</p>
                </div>
              </div>
              <h2 className="font-semibold text-slate-800 mb-2">{item.title}</h2>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </article>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-sky-50 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Want to See More Results?</h2>
          <p className="text-slate-600 mb-6">
            Our gallery is growing! Check back soon for more before & after photos, 
            or contact us to see examples of our work in your area.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-2xl bg-sky-600 hover:bg-sky-700 px-8 py-4 font-semibold text-white text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            aria-label="Contact Point & Spray for more examples of our work"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  );
} 