import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-white mb-4">Point & Spray</h3>
            <p className="text-sm text-slate-400 mb-4">
              Veteran-owned pressure washing services in Boise, Meridian, Eagle & Garden City. 
              Professional cleaning solutions that fit your schedule.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span>📍</span>
              <span>Boise, Idaho</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">House Soft Wash</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Driveway Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Patio Restoration</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Gutter Brightening</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>
                <a href="tel:+1-208-994-4085" className="hover:text-white transition-colors">
                  📞 (208) 994-4085
                </a>
              </p>
              <p>
                <a href="mailto:jamie@pointandsprayidaho.com" className="hover:text-white transition-colors">
                  ✉️ jamie@pointandsprayidaho.com
                </a>
              </p>
              <p className="text-slate-400">
                📍 Service Area: Boise, Meridian, Eagle, Garden City
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2024 Point & Spray. All rights reserved. Veteran-owned business.</p>
          <div className="mt-2 space-x-4">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 