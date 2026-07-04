import React from 'react';
import { Link } from 'react-router-dom';
import ReviewLinks from './ReviewLinks';
import servicePages from '../config/servicePages';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-white mb-4">Point & Spray</h3>
            <p className="text-sm text-slate-400 mb-4">
              Veteran-owned window cleaning and pressure washing in Boise, Meridian,
              Eagle & Garden City. Locally owned and run, not a franchise.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span>📍</span>
              <span>Boise, Idaho</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {Object.entries(servicePages).map(([key, data]) => (
                <li key={key}>
                  <Link to={`/${data.slug}`} className="hover:text-white transition-colors">
                    {data.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>
                <a href="tel:+12089944085" className="hover:text-white transition-colors">
                  📞 Call/Text: (208) 994-4085
                </a>
              </p>
              <p>
                <a href="mailto:jamie@pointandsprayidaho.com" className="hover:text-white transition-colors">
                  ✉️ jamie@pointandsprayidaho.com
                </a>
              </p>
              <p className="text-slate-400">
                📍 Serving Boise & the Treasure Valley
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Reviews</h4>
            <p className="text-sm text-slate-400 mb-3">Loved our work? Share your experience:</p>
            <ReviewLinks layout="column" size="sm" />
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Point & Spray LLC. Veteran-owned & fully insured.</p>
          <div className="mt-2 space-x-4">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

