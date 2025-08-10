export default function Site() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold">PS</div>
            <div className="leading-tight">
              <h1 className="text-lg font-semibold">Point & Spray</h1>
              <p className="text-xs text-slate-500">Veteran‑owned • Boise, ID</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-sky-700">Services</a>
            <a href="#pricing" className="hover:text-sky-700">Pricing</a>
            <a href="#gallery" className="hover:text-sky-700">Results</a>
            <a href="#contact" className="hover:text-sky-700">Book</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-4 py-2 text-white text-sm shadow hover:bg-sky-700">Get a Quote</a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">We blast the grime so you don’t waste the time. As simple as Point, and Spray</h2>
            <p className="mt-4 text-lg text-slate-600">Local, veteran‑owned pressure & soft washing in Boise. Driveways, patios, siding, decks, fences, trash bins, and more.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-2xl bg-sky-600 px-6 py-3 text-white font-semibold shadow hover:bg-sky-700">Book Online</a>
              <a href="tel:+1-208-994-4085" className="rounded-2xl px-6 py-3 border border-slate-300 hover:bg-white">Call: (208) 555‑0133</a>
            </div>
            <p className="mt-3 text-xs text-slate-500">Fast quotes. Clear pricing. Satisfaction guaranteed.</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-[url('https://images.unsplash.com/photo-1617038260897-3a7a1ea0737d?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center shadow-lg" />
            <div className="absolute -bottom-4 -right-4 hidden md:block rounded-2xl bg-white shadow p-4 w-64">
              <p className="text-sm font-semibold">Average driveway</p>
              <p className="text-sm text-slate-600">Done in 60–90 minutes with pro surface cleaner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-slate-600">
          <div className="flex items-center gap-2"><span className="i-lucide-badge-check"/> Veteran‑owned</div>
          <div className="flex items-center gap-2"><span className="i-lucide-clock"/> Flexible scheduling</div>
          <div className="flex items-center gap-2"><span className="i-lucide-sparkles"/> Soft‑wash safe on siding</div>
          <div className="flex items-center gap-2"><span className="i-lucide-credit-card"/> Card, cash, or invoice</div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <h3 className="text-2xl font-bold">Services</h3>
        <p className="mt-2 text-slate-600">Focused, high‑impact exterior cleaning that fits your schedule.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {title:'House Soft Wash', desc:'Low‑pressure wash for siding and trim. Kills algae and mildew without damage.'},
            {title:'Driveways & Sidewalks', desc:'Pro surface cleaner for even, streak‑free results.'},
            {title:'Patios, Decks & Fences', desc:'Restore wood and composite surfaces the safe way.'},
            {title:'Trash Bin Cleaning', desc:'Deodorize and sanitize your bins on trash day.'},
            {title:'Gutter Brightening', desc:'Remove black “tiger stripes” and oxidation on gutter exteriors.'},
            {title:'Garage & Shop Floors', desc:'Degrease and clean concrete for a fresh start.'},
          ].map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <h4 className="font-semibold">{s.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h3 className="text-2xl font-bold">Simple, flat‑rate pricing</h3>
          <p className="mt-2 text-slate-600">Transparent tiers so you can book without back‑and‑forth.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card title="Driveway" price="$149+" points={["Single‑car","Oil spot pre‑treat included","Add sidewalk +$25"]} />
            <Card title="House Wash" price="$299+" points={["Up to 1,500 sq ft","Soft‑wash siding & trim","Windows rinsed clear"]} featured />
            <Card title="Deck/Fence" price="$199+" points={["Up to 200 sq ft","Soft‑wash wood/composite","Sealant prep ready"]} />
          </div>
          <p className="mt-4 text-xs text-slate-500">Final price may vary based on condition and size. We’ll confirm before work begins.</p>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-6xl px-4 py-16">
        <h3 className="text-2xl font-bold">Before & after</h3>
        <p className="mt-2 text-slate-600">Real results from Boise homes. Send us yours and we’ll add it here.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map((i)=> (
            <div key={i} className="aspect-video rounded-2xl bg-slate-200" />
          ))}
        </div>
      </section>

      {/* Contact / Booking */}
      <section id="contact" className="bg-slate-900 text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-bold">Book your clean</h3>
            <p className="mt-2 text-slate-300">Pick a time that works for you. We’ll confirm details and send a text before arrival.</p>
            <ul className="mt-6 space-y-2 text-slate-300 text-sm">
              <li>• Service area: Boise, Meridian, Eagle, Garden City</li>
              <li>• Hours: Evenings & weekends to start; weekdays available on request</li>
              <li>• Insured • Satisfaction guaranteed</li>
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <a className="rounded-2xl bg-sky-500 hover:bg-sky-600 px-5 py-3 font-semibold text-white text-center" href="https://calendly.com/pointandspray/book">Book Online</a>
              <a className="rounded-2xl border border-slate-600 px-5 py-3 text-center" href="mailto:hello@pointandsprayidaho.com">hello@pointandsprayidaho.com</a>
              <a className="rounded-2xl border border-slate-600 px-5 py-3 text-center" href="tel:+1-208-994-4085">(208) 555‑0133</a>
            </div>
          </div>
          <form className="rounded-2xl bg-white p-6 text-slate-800 space-y-4 shadow">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" id="name" placeholder="Jane Doe" />
              <Field label="Phone" id="phone" placeholder="208‑555‑0133" />
            </div>
            <Field label="Email" id="email" placeholder="you@example.com" />
            <Field label="Address" id="address" placeholder="Street, City" />
            <div>
              <label className="text-sm font-medium" htmlFor="service">Service</label>
              <select id="service" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2">
                <option>Driveway</option>
                <option>House Wash</option>
                <option>Patio / Deck</option>
                <option>Trash Bin Cleaning</option>
                <option>Gutter Brightening</option>
              </select>
            </div>
            <Field label="Notes" id="notes" placeholder="Anything we should know?" textarea />
            <button type="button" className="w-full rounded-2xl bg-sky-600 px-5 py-3 font-semibold text-white hover:bg-sky-700">Request Quote</button>
            <p className="text-xs text-slate-500">This demo form doesn’t submit anywhere yet. Plug in your form tool (Formspree, Tally, or Google Forms) or connect Calendly for live booking.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Point & Spray LLC. All rights reserved.</p>
          <p>Veteran‑owned • Boise, Idaho</p>
        </div>
      </footer>
    </div>
  );
}

function Card({title, price, points, featured}){
  return (
    <div className={`rounded-2xl p-6 border ${featured? 'border-sky-300 bg-sky-50 shadow': 'border-slate-200 bg-white shadow-sm'}`}>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-1 text-3xl font-extrabold">{price}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {points.map((p)=> <li key={p}>• {p}</li>)}
      </ul>
    </div>
  );
}

function Field({label, id, placeholder, textarea=false}){
  return (
    <div>
      <label className="text-sm font-medium" htmlFor={id}>{label}</label>
      {textarea ? (
        <textarea id={id} placeholder={placeholder} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 h-28" />
      ) : (
        <input id={id} placeholder={placeholder} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
      )}
    </div>
  );
}