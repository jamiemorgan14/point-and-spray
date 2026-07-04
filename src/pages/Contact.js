import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ReviewLinks from '../components/ReviewLinks';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    services: [], // Changed from 'service' to 'services' array
    notes: '',
    source: '' // Where did you find us
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // New function to handle service selection
  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service) // Remove if already selected
        : [...prev.services, service] // Add if not selected
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Google Forms submission
      const formDataToSend = new FormData();
      
      // Map our form data to Google Forms entry IDs
      formDataToSend.append('entry.1700942397', formData.name);        // Name
      formDataToSend.append('entry.424961682', formData.phone);        // Phone
      formDataToSend.append('entry.1561338999', formData.email);       // Email
      formDataToSend.append('entry.624267994', formData.address);      // Address
      formDataToSend.append('entry.1290176035', formData.services.join(', ')); // Services (joined with commas)
      formDataToSend.append('entry.1941564516', formData.notes);      // Notes
      formDataToSend.append('entry.1816720262', formData.source);      // Source
      
      console.log('Submitting to Google Forms:', {
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSd21mENBR_nywcGlg1uGAh4sajMw-WeT7r7kHdk9wkZhinw2w/formResponse',
        data: Object.fromEntries(formDataToSend),
        formData: formData
      });

      // Submit to Google Forms
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSd21mENBR_nywcGlg1uGAh4sajMw-WeT7r7kHdk9wkZhinw2w/formResponse', {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors' // Required for Google Forms
      });

      // Success - reset form
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        services: [], // Reset to empty array
        notes: '',
        source: '' // Reset source
      });
      
      console.log('Form submitted successfully to Google Forms!');
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.phone && formData.email && formData.address && formData.services.length > 0;

  return (
    <>
      <Helmet>
        <title>Get Your Free Quote | Window Cleaning & Pressure Washing | Point & Spray Boise</title>
        <meta name="description" content="Get your free quote for window cleaning or pressure washing in Boise, Meridian, Eagle & Garden City. Veteran-owned, professional service. Book online or call (208) 994-4085 today!" />
        <meta name="keywords" content="window cleaning quote boise, pressure washing quote boise, exterior cleaning estimate boise, book window cleaning boise, contact point and spray" />
        <meta property="og:title" content="Get Your Free Quote | Window Cleaning & Pressure Washing | Point & Spray Boise" />
        <meta property="og:description" content="Get your free quote for window cleaning or pressure washing in Boise, Meridian, Eagle & Garden City. Veteran-owned, professional service." />
        <meta property="og:url" content="https://pointandsprayidaho.com/contact" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pointandsprayidaho.com/contact" />
      </Helmet>
      
      <section className="bg-slate-900 text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-3xl font-bold mb-4">Get a Free Quote</h1>
            <p className="mt-2 text-slate-300 text-lg">
              Tell us a bit about the job and we'll get back to you within 24 hours with pricing
              and times that work. Text is usually fastest.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">📍</span>
                <span>Serving Boise, Meridian, Eagle & Garden City</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">🛡️</span>
                <span>Licensed & Insured</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-1">🙋</span>
                <span>You'll hear back from a real person here in Boise, not a call center</span>
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <a
                className="rounded-2xl border border-slate-600 px-5 py-3 text-center hover:border-slate-500 transition-colors"
                href="tel:+12089944085"
                aria-label="Call or text Point & Spray at (208) 994-4085"
              >
                📞 Call/Text: (208) 994-4085
              </a>
              <a
                className="rounded-2xl border border-slate-600 px-5 py-3 text-center hover:border-slate-500 transition-colors"
                href="mailto:jamie@pointandsprayidaho.com"
                aria-label="Email Point & Spray at jamie@pointandsprayidaho.com"
              >
                ✉️ jamie@pointandsprayidaho.com
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 text-slate-800 space-y-6 shadow-lg" aria-label="Request a quote form">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Request Your Free Quote</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Field 
                label="Name" 
                id="name" 
                placeholder="Jane Doe" 
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Field 
                label="Phone" 
                id="phone" 
                placeholder="208‑994‑4085" 
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <Field 
              label="Email" 
              id="email" 
              placeholder="you@example.com" 
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <Field 
              label="Address" 
              id="address" 
              placeholder="Street, City" 
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <Field 
              label="Where did you find us?" 
              id="source" 
              placeholder="Google, Facebook, Referral, etc." 
              value={formData.source}
              onChange={handleInputChange}
            />
            <fieldset>
              <legend className="text-sm font-medium mb-3">Services Needed *</legend>
              <div className="space-y-3">
                {[
                  'Window Cleaning (Exterior)',
                  'Window Cleaning (Interior & Exterior)',
                  'Screen Cleaning',
                  'House Soft Wash',
                  'Driveway / Sidewalk',
                  'Patio or Deck',
                  'Gutter Brightening',
                  'Trash Bin Cleaning',
                ].map(service => (
                  <label key={service} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                      aria-describedby={`${service.toLowerCase().replace(/\s+/g, '-')}-description`}
                    />
                    <span className="text-sm">{service}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <Field 
              label="Notes" 
              id="notes" 
              placeholder="Anything we should know?" 
              textarea 
              value={formData.notes}
              onChange={handleInputChange}
            />
            
            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={!isFormValid || isSubmitting}
              className={`w-full rounded-2xl px-5 py-3 font-semibold text-white transition-colors ${
                isFormValid && !isSubmitting 
                  ? 'bg-sky-600 hover:bg-sky-700' 
                  : 'bg-slate-400 cursor-not-allowed'
              }`}
              aria-describedby="submit-status"
            >
              {isSubmitting ? 'Sending...' : 'Request Quote'}
            </button>

            {/* Status Messages */}
            <div id="submit-status">
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm" role="alert">
                  ✅ Thank you! We'll get back to you within 24 hours.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm" role="alert">
                  ❌ Something went wrong. Please try again or call us directly.
                </div>
              )}
            </div>

            <p className="text-xs text-slate-500">
              We'll review your request and get back to you within 24 hours with a quote and available appointment times.
            </p>
          </form>
        </div>
      </section>
      
      {/* Review prompt for returning customers */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Already worked with us?</h2>
              <p className="text-slate-600">Your feedback helps neighbors choose with confidence.</p>
            </div>
            <ReviewLinks layout="row" />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({label, id, placeholder, textarea=false, value, onChange, required=false}){
  return (
    <div>
      <label className="text-sm font-medium text-slate-700" htmlFor={id}>
        {label} {required && <span className="text-red-500" aria-label="required">*</span>}
      </label>
      {textarea ? (
        <textarea 
          id={id} 
          name={id}
          placeholder={placeholder} 
          value={value}
          onChange={onChange}
          required={required}
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 h-32 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors" 
          aria-describedby={`${id}-help`}
        />
      ) : (
        <input 
          id={id} 
          name={id}
          type={id === 'email' ? 'email' : id === 'phone' ? 'tel' : 'text'}
          placeholder={placeholder} 
          value={value}
          onChange={onChange}
          required={required}
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors" 
          aria-describedby={`${id}-help`}
        />
      )}
      <div id={`${id}-help`} className="sr-only">
        {required ? `${label} is required` : `${label} is optional`}
      </div>
    </div>
  );
} 
