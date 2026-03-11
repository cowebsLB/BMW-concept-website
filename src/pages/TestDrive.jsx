import React, { useState } from 'react';
import { useExperience } from '../context/ExperienceContext.jsx';

const initialState = {
  name: '',
  email: '',
  model: '',
  location: '',
  date: '',
  notes: ''
};

const TestDrive = () => {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const { track } = useExperience();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app this would POST to an API. For now, just show a confirmation.
    track('test_drive_submitted', {
      name: form.name,
      email: form.email,
      model: form.model,
      location: form.location
    });
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 px-6">
      <section className="max-w-[900px] mx-auto space-y-10">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-300">Experience</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Request a test drive</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Tell us how you drive and which BMW has caught your attention. A BMW Genius will contact
            you to confirm timing, availability, and the ideal route.
          </p>
        </header>

        {submitted ? (
          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 space-y-3">
            <h2 className="text-xl font-semibold">Request received</h2>
            <p className="text-sm text-gray-200">
              Thank you, {form.name || 'driver'}. Your preferred Retailer will reach out shortly to
              finalize your BMW test drive.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Full name
                </label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Alex Jordan"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Preferred model
                </label>
                <input
                  required
                  name="model"
                  value={form.model}
                  onChange={handleChange}
                  className="w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. i5 M60, X5 xDrive50e, M3 Competition"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  City / Retailer
                </label>
                <input
                  required
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Munich, Berlin, New York..."
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr,2fr]">
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Preferred date
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Driving profile (optional)
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-md bg-black/40 border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us how and where you drive most often, so we can tailor the route and briefing."
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="text-[11px] text-gray-500 max-w-xs">
                By submitting this form you agree that BMW may contact you regarding your request.
              </p>
              <button
                type="submit"
                className="px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] bg-white text-black rounded-sm hover:bg-blue-500 hover:text-white transition-colors"
              >
                Submit request
              </button>
            </div>
          </form>
        )}

        {/* Test drive FAQs */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
            Test drive – frequently asked questions
          </h2>
          <div className="space-y-2 text-sm text-gray-300">
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                How long does a typical test drive take?
              </summary>
              <p className="mt-2 text-gray-400">
                Depending on location and model availability, drives usually last between 30 and 60
                minutes, including a short briefing with a BMW Genius.
              </p>
            </details>
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                What do I need to bring?
              </summary>
              <p className="mt-2 text-gray-400">
                A valid driver&apos;s license and, in some markets, a secondary piece of ID. Your
                Retailer may have additional local requirements they will confirm in advance.
              </p>
            </details>
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                Can I test drive more than one model?
              </summary>
              <p className="mt-2 text-gray-400">
                If scheduling and fleet availability allow, your Retailer can often organize back‑to‑back
                experiences so you can compare models such as a 3 Series, X model, and BMW i.
              </p>
            </details>
          </div>
        </section>
      </section>
    </main>
  );
};

export default TestDrive;


