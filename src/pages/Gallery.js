import React from 'react';

export default function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h3 className="text-2xl font-bold">Before & after</h3>
      <p className="mt-2 text-slate-600">Real results from Boise homes. Send us yours and we'll add it here.</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1,2,3,4,5,6].map((i)=> (
          <div key={i} className="aspect-video rounded-2xl bg-slate-200" />
        ))}
      </div>
    </section>
  );
} 