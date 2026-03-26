import React from 'react';
import { Link } from 'react-router-dom';
import {
  CONTACT_LABEL,
  CONTACT_URL,
  LEGAL_DISCLAIMER,
  NON_COMMERCIAL_NOTICE,
  TAKEDOWN_NOTICE,
  UNOFFICIAL_BADGE
} from '../content/legalContent.js';

const Legal = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 px-6">
      <section className="max-w-4xl mx-auto space-y-8">
        <p className="text-xs uppercase tracking-[0.3em] text-blue-300">{UNOFFICIAL_BADGE}</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Legal & Disclaimer</h1>
        <p className="text-gray-300 leading-relaxed">{LEGAL_DISCLAIMER}</p>
        <p className="text-gray-300 leading-relaxed">{TAKEDOWN_NOTICE}</p>
        <p className="text-gray-400 leading-relaxed">{NON_COMMERCIAL_NOTICE}</p>
        <p className="text-gray-400 leading-relaxed">
          Contact:
          {' '}
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            {CONTACT_LABEL}
          </a>
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] bg-white text-black rounded-sm hover:bg-blue-500 hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Legal;
