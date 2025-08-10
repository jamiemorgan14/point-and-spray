import React from 'react';

export default function TrustBar() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
              <span className="text-2xl">🛡️</span>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800">Insured</h4>
              <p className="text-sm text-slate-600">Fully covered</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800">Satisfaction</h4>
              <p className="text-sm text-slate-600">Guaranteed</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800">Veteran</h4>
              <p className="text-sm text-slate-600">Owned</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800">Flexible</h4>
              <p className="text-sm text-slate-600">Scheduling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 