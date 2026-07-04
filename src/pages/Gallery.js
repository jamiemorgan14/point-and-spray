import React from 'react';
import { Helmet } from 'react-helmet';
import BandAImage from '../assets/boise-exterior-cleaning-before-after.jpg';
import AfterDrivewayImage from '../assets/boise-driveway-cleaning-after.jpg';
import AfterWalkwayImage from '../assets/boise-walkway-cleaning-after.jpg';

const Gallery = () => {
  const galleryItems = [
    {
      title: "A Job in the Boise Area",
      description: "Years of built-up grime and algae, cleaned off. Not every surface comes back looking brand new, but this one came close.",
      image: BandAImage,
      features: ["Surface cleaning", "Algae removal", "Done in a single visit"]
    },
    {
      title: "Driveway Cleaning",
      description: "Oil stains, tire marks, and everyday dirt built up on this concrete driveway. A surface cleaner attachment gets even coverage without leaving stripes.",
      image: AfterDrivewayImage,
      features: ["Oil stain treatment", "Even, streak-free coverage", "Concrete-safe pressure"]
    },
    {
      title: "Walkway & Sidewalk Cleaning",
      description: "Algae and grime make walkways slippery as well as dirty. Clearing it off improves both the look and the footing.",
      image: AfterWalkwayImage,
      features: ["Algae removal", "Improved safety", "Concrete-safe pressure"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Before & After Gallery | Point & Spray Boise, ID</title>
        <meta name="description" content="Before and after photos from real window cleaning, pressure washing, and driveway cleaning jobs in Boise, Idaho." />
        <meta name="keywords" content="window cleaning results boise, pressure washing before after boise, exterior cleaning photos boise, pressure washing gallery idaho" />
        <meta property="og:title" content="Before & After Gallery | Point & Spray Boise, ID" />
        <meta property="og:description" content="Before and after photos from real window cleaning, pressure washing, and driveway cleaning jobs in Boise, Idaho." />
        <meta property="og:url" content="https://pointandsprayidaho.com/gallery" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pointandsprayidaho.com/gallery" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Before &amp; After
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real jobs from Boise and the Treasure Valley. Every property is different, so what
            comes clean and how much varies job to job.
          </p>
        </header>

        <div className="space-y-16">
          {galleryItems.map((item, index) => (
            <article 
              key={index}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.description}`}
                  className="w-full h-auto rounded-lg shadow-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-gray-500 italic">
                  <p>Point & Spray, Boise, Idaho area</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-sky-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Want results like this at your place?
            </h2>
            <p className="text-gray-600 mb-6">
              Call or text for a free quote. We'll walk the property with you and give you a
              straight answer on price before anything starts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+12089944085"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 transition-colors duration-200"
              >
                Call or Text: (208) 994-4085
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-sky-600 text-base font-medium rounded-md text-sky-700 hover:bg-sky-100 transition-colors duration-200"
                aria-label="Get a free quote for window cleaning and pressure washing services"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery; 