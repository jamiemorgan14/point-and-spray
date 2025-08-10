import React from 'react';
import { Helmet } from 'react-helmet';
import BandAImage from '../assets/BandA.jpg';
import AfterDrivewayImage from '../assets/AfterDriveway.jpg';
import AfterWalkwayImage from '../assets/AfterWalkway.jpg';

const Gallery = () => {
  const galleryItems = [
    {
      title: "Before & After Transformation",
      description: "See the dramatic difference our pressure washing services make. This comprehensive cleaning removed years of built-up grime, algae, and stains, revealing the original beauty underneath.",
      image: BandAImage,
      features: ["Complete surface restoration", "Stain removal", "Algae elimination", "Long-lasting results"]
    },
    {
      title: "Driveway Restoration",
      description: "Professional pressure washing removes years of built-up grime, oil stains, and dirt from concrete and asphalt driveways. Our high-pressure equipment reaches deep into porous surfaces for a thorough clean that lasts.",
      image: AfterDrivewayImage,
      features: ["Oil stain removal", "Deep cleaning", "Long-lasting results", "Eco-friendly solutions"]
    },
    {
      title: "Walkway & Sidewalk Cleaning",
      description: "Improve safety and appearance of your walkways with our thorough cleaning services. We remove slippery algae, dirt, and stains to restore the original beauty of your hardscapes.",
      image: AfterWalkwayImage,
      features: ["Safety improvement", "Stain removal", "Algae elimination", "Enhanced appearance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Gallery - Point & Spray | Pressure Washing Before & After Results in Boise, ID</title>
        <meta name="description" content="See the amazing before and after results of our pressure washing services in Boise. Real transformations from driveway cleaning, house washing, and walkway restoration." />
        <meta name="keywords" content="pressure washing before after boise, pressure washing results boise, pressure washing photos boise, pressure washing gallery idaho" />
        <meta property="og:title" content="Gallery - Point & Spray | Pressure Washing Before & After Results" />
        <meta property="og:description" content="See the amazing before and after results of our pressure washing services in Boise. Real transformations from real customers." />
        <meta property="og:url" content="https://pointandsprayidaho.com/gallery" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pointandsprayidaho.com/gallery" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Results Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the dramatic transformations our professional pressure washing services deliver. 
            Real results from real customers in Boise and surrounding areas.
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
                  <p>Professional pressure washing by Point & Spray</p>
                  <p>Boise, Idaho area</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Transform Your Property?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us today for a free quote and see how we can restore the beauty of your home or business.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              aria-label="Get a free quote for pressure washing services"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery; 