import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 px-6 flex items-center">
      <section className="max-w-[900px] mx-auto text-center space-y-8">
        <p className="text-xs uppercase tracking-[0.3em] text-blue-300">Error 404</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">Road not found.</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          The route you’re looking for doesn’t exist in this concept garage. It may have been moved,
          or it never left the design studio.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            to="/"
            className="px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] bg-white text-black rounded-sm hover:bg-blue-500 hover:text-white transition-colors"
          >
            Back to Vision Next
          </Link>
          <Link
            to="/showroom"
            className="px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] border border-white/20 rounded-sm hover:bg-white/10 transition-colors"
          >
            Enter Showroom
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;


