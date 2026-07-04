// Content for the individual, SEO-targeted service pages.
// Each key becomes a route in App.js and a lookup in ServicePage.js.

const servicePages = {
  windowCleaning: {
    slug: 'window-cleaning-boise',
    navLabel: 'Residential Window Cleaning',
    navGroup: 'Window Cleaning',
    seoTitle: 'Window Cleaning in Boise, ID | Point & Spray',
    metaDescription: 'Residential window cleaning in Boise, Meridian, Eagle, and Garden City. Interior and exterior glass, screens, and tracks. Call or text for a free quote.',
    h1: 'Window Cleaning',
    hero: [
      'Clean windows change how a house feels, inside and out. We clean glass, screens, and tracks for homes across Boise and the Treasure Valley, working room by room so nothing gets missed.',
      'Fully insured. Serving Boise, Meridian, Eagle, and Garden City.',
    ],
    startingAt: null,
    priceNote: 'Free quotes, based on window count and size.',
    included: [
      'Exterior glass cleaning, or interior and exterior if you want both',
      'Screen removal, washing, and reinstall',
      'Track and sill cleaning so windows open and seal properly',
      'Treatment for hard water spotting where it will safely come off',
      'Sills wiped down and cobwebs cleared from frames',
    ],
    goodFor: [
      'Homeowners doing a seasonal clean before spring or the holidays',
      'New homeowners who want a fresh start',
      'Anyone selling a home and wanting it to show well',
      'Regular customers who want a standing twice-a-year visit',
    ],
    faqs: [
      { q: 'Do you clean the inside of the windows too?', a: "Yes, interior and exterior, or exterior only if that's all you need. Let us know when you book." },
      { q: 'Can you get rid of hard water spots?', a: "Boise's water leaves mineral deposits on glass over time. We can treat and remove most of it, but on some older or etched glass the marks are permanent. We'll tell you honestly what to expect before the work starts." },
      { q: 'How often should I get my windows cleaned?', a: 'Most homeowners in the Treasure Valley do it twice a year, spring and fall. Homes near construction, farmland, or heavy tree cover sometimes need it more.' },
    ],
    ctaLabel: 'Get a Free Quote',
  },

  commercialWindowCleaning: {
    slug: 'commercial-window-cleaning-boise',
    navLabel: 'Commercial Window Cleaning',
    navGroup: 'Window Cleaning',
    seoTitle: 'Commercial Window Cleaning in Boise, ID | Point & Spray',
    metaDescription: 'Commercial window cleaning for offices, medical buildings, and multi-tenant properties in Boise and the Treasure Valley. Recurring schedules, fully insured.',
    h1: 'Commercial Window Cleaning',
    hero: [
      'We clean windows for offices, medical buildings, apartment communities, and property managers around Boise. One point of contact, one invoice, a schedule you can set and forget.',
      'Fully insured, with proof of insurance available for your property manager or HOA on request.',
    ],
    startingAt: null,
    priceNote: 'Custom quotes based on building size, glass access, and visit frequency.',
    included: [
      'Exterior window cleaning for office and commercial buildings',
      'Ground-level and reachable upper-story glass (pole system for higher windows)',
      'Frame and sill wipe-down',
      'Recurring service on a schedule that fits your building: weekly, biweekly, monthly, or quarterly',
      'One invoice, one point of contact',
    ],
    goodFor: [
      'Office buildings and business parks',
      'Property managers handling multiple sites',
      'Medical and dental offices',
      'Apartment and condo communities',
      'Any business that wants one reliable vendor instead of juggling several',
    ],
    faqs: [
      { q: 'Can you work around our business hours?', a: 'Yes. Most commercial accounts are scheduled early morning or after close so cleaning doesn’t interfere with your day.' },
      { q: 'Do you carry insurance?', a: 'Yes, Point & Spray is fully insured, and we can send proof of coverage for your records or your property manager.' },
      { q: 'Can we set up a recurring contract?', a: 'Yes, that’s most of what we do for commercial clients. We set a schedule that works for your building and show up on it, no reminders needed.' },
    ],
    ctaLabel: 'Request a Commercial Quote',
  },

  storefrontWindowCleaning: {
    slug: 'storefront-window-cleaning-boise',
    navLabel: 'Storefront Window Cleaning',
    navGroup: 'Window Cleaning',
    seoTitle: 'Storefront Window Cleaning in Boise, ID | Point & Spray',
    metaDescription: 'Recurring storefront window cleaning for retail shops, restaurants, and street-level businesses in Boise. Weekly, biweekly, or monthly. Call or text for a free quote.',
    h1: 'Storefront Window Cleaning',
    hero: [
      'Your storefront glass is the first thing a customer sees before they walk in the door. We keep it clean on a schedule, so you never have to think about it.',
      'Serving retail shops, restaurants, salons, and street-level businesses in Boise and the Treasure Valley.',
    ],
    startingAt: null,
    priceNote: 'Custom quotes based on glass frontage and visit frequency.',
    included: [
      'Interior and exterior glass cleaning at street level',
      'Door glass and handle areas cleaned each visit',
      'Frame and sill wipe-down, cobwebs cleared',
      'Set recurring schedule: weekly, biweekly, or monthly',
      "A text before arrival, so it's never a surprise",
    ],
    goodFor: [
      'Retail storefronts and boutiques',
      'Restaurants and coffee shops',
      'Salons and small offices with street frontage',
      'Strip mall and shopping center units',
      "Any business that wants clean glass without adding it to someone's task list",
    ],
    faqs: [
      { q: 'How often do storefronts usually need cleaning?', a: 'Most of our storefront accounts run weekly or biweekly, since street-level glass picks up dust, fingerprints, and weather fast. Monthly works for lower-traffic locations.' },
      { q: 'Do you clean during business hours?', a: 'We can work around your open hours or come before you open, whichever is less disruptive to your customers.' },
      { q: 'What if we just want a one-time clean first?', a: "That's a normal way to start. Plenty of storefront accounts began as a single visit before setting up a recurring schedule." },
    ],
    ctaLabel: 'Set Up Recurring Cleaning',
  },

  pressureWashing: {
    slug: 'pressure-washing-boise',
    navLabel: 'Pressure Washing',
    navGroup: 'Pressure Washing',
    seoTitle: 'Pressure Washing in Boise, ID | Point & Spray',
    metaDescription: 'Pressure washing and soft washing in Boise, Meridian, Eagle, and Garden City. House washing, patios, decks, and fences. Fully insured.',
    h1: 'Pressure Washing',
    hero: [
      'Dirt, algae, and grime build up on siding, patios, decks, and fences over a Boise summer. We use the right pressure and the right method for each surface, so you get it clean without damaging it.',
      'Fully insured. Serving Boise and the Treasure Valley.',
    ],
    startingAt: '$150+',
    priceNote: 'Patios, decks, and fences start around $150. House soft washing starts around $200. Final price depends on size.',
    included: [
      'Soft wash for siding and trim: low pressure, kills algae and mildew without stripping paint or caulk',
      'Patio, deck, and fence cleaning',
      'Surface cleaning for hard, flat areas',
      'Pressure and chemical mix adjusted to the surface, not a one-setting-fits-all approach',
      'Trash bin cleaning available as an add-on for the same visit',
    ],
    goodFor: [
      'Homeowners with visible algae or mildew streaking on siding',
      'Wood or composite decks that have gone gray',
      'Fences that need a reset before staining',
      'Anyone prepping a house for sale or paint',
    ],
    faqs: [
      { q: 'Will pressure washing damage my siding or deck?', a: "Not when it's done at the right pressure. We soft wash siding and adjust technique for wood, composite, and painted surfaces so nothing gets blasted that could be damaged." },
      { q: 'Do you guarantee all stains come out?', a: "No, and we wouldn't trust a company that promises that. Some staining is set deep enough that it lightens but doesn't fully disappear. We'll tell you what to expect before the work starts." },
      { q: 'How often should a house be washed?', a: 'Most homes in the Treasure Valley do well with a wash once a year, more often if you get a lot of shade, sprinkler overspray, or tree cover.' },
    ],
    ctaLabel: 'Get a Free Quote',
  },

  concreteDriveway: {
    slug: 'concrete-driveway-cleaning-boise',
    navLabel: 'Concrete & Driveway Cleaning',
    navGroup: 'Pressure Washing',
    seoTitle: 'Concrete & Driveway Cleaning in Boise, ID | Point & Spray',
    metaDescription: 'Driveway, sidewalk, and concrete cleaning in Boise and the Treasure Valley. Oil stains, tire marks, and buildup removed with a surface cleaner.',
    h1: 'Concrete & Driveway Cleaning',
    hero: [
      'Driveways and walkways take a beating. Oil, tire marks, dirt, and algae build up, and nothing short of real pressure moves it. We run a surface cleaner attachment for even coverage, no stripes, no missed spots.',
      'Fully insured. Serving Boise, Meridian, Eagle, and Garden City.',
    ],
    startingAt: '$100+',
    priceNote: 'Driveways and sidewalks start around $100. Garage and shop floors start around $250.',
    included: [
      'Driveway and sidewalk cleaning with a surface cleaner attachment',
      'Oil stain and tire mark treatment (results vary by stain age and depth)',
      'Garage and shop floor cleaning, good prep work before an epoxy coat',
      'Walkway and patio concrete cleaning',
    ],
    goodFor: [
      'Driveways with visible oil stains, tire marks, or algae',
      'Homes prepping for sale or a fresh look',
      'Garage floors before an epoxy or paint job',
      'HOA common areas and walkways',
    ],
    faqs: [
      { q: 'Can you get old oil stains all the way out?', a: "We can lighten most oil stains significantly, but very old or deep stains sometimes leave a faint mark. We'll look at it and give you an honest read before quoting the job." },
      { q: 'Will this damage my concrete?', a: 'No. We use pressure and a cleaning solution suited to concrete, not a setting that will pit or etch the surface.' },
      { q: 'Do you clean pavers too?', a: "Yes, we adjust pressure for pavers and stamped concrete so the joints and finish aren't damaged." },
    ],
    ctaLabel: 'Get a Free Quote',
  },

  gutterCleaning: {
    slug: 'gutter-cleaning-boise',
    navLabel: 'Gutter Cleaning',
    navGroup: 'Pressure Washing',
    seoTitle: 'Gutter Cleaning in Boise, ID | Point & Spray',
    metaDescription: 'Gutter cleaning in Boise and the Treasure Valley. Debris removed, downspouts checked, exteriors brightened on request. Call or text for a free quote.',
    h1: 'Gutter Cleaning',
    hero: [
      'Clogged gutters back water up onto your roof and siding. We clear out leaves and debris, check that downspouts are flowing, and can brighten stained gutter exteriors in the same visit.',
      'Fully insured. Serving Boise and the Treasure Valley.',
    ],
    startingAt: '$100+',
    priceNote: 'Gutter brightening (exterior wash) starts around $100. Debris cleanout quoted by linear footage.',
    included: [
      'Hand-clearing of leaves and debris from gutters',
      'Downspout check to confirm water is draining',
      'Exterior gutter brightening on request (removes black "tiger stripe" staining and oxidation)',
      'Debris bagged and hauled off, not left in your yard',
    ],
    goodFor: [
      'Homes with mature trees nearby',
      'Fall and spring cleanouts before or after leaf drop',
      "Anyone who's noticed water overflowing during rain",
      'Homeowners who want the black staining off the outside, not just the inside cleared',
    ],
    faqs: [
      { q: 'How often do gutters need to be cleaned?', a: 'Most homes do well with twice a year, once in late fall after leaves drop and once in spring. Heavy tree cover might need a third visit.' },
      { q: 'Do you fix damaged gutters?', a: "We clean and check the system. If we spot damage or a loose bracket, we'll point it out, but repair work isn't something we do." },
      { q: 'What is gutter brightening?', a: "A light exterior wash that removes the black streaking and oxidation that builds up on the outside of gutters. It's separate from clearing the inside, and we can do either or both." },
    ],
    ctaLabel: 'Get a Free Quote',
  },
};

export const navGroups = [
  { label: 'Window Cleaning', keys: ['windowCleaning', 'commercialWindowCleaning', 'storefrontWindowCleaning'] },
  { label: 'Pressure Washing', keys: ['pressureWashing', 'concreteDriveway', 'gutterCleaning'] },
];

export default servicePages;
