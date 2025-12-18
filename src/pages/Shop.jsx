import React from 'react';

const Shop = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 px-6">
      <section className="max-w-[1400px] mx-auto space-y-16">
        <header className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">BMW Shop</h1>
          <p className="text-gray-400 text-lg">
            Extend the Vision Next experience beyond the drive with curated accessories,
            collaborations, and performance parts.
          </p>
        </header>

        <section className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">Lifestyle</h2>
            <p className="text-sm text-gray-400">
              Minimalist apparel, luggage, and timepieces crafted with the same precision as our
              vehicles.
            </p>
          </div>
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">
              Performance
            </h2>
            <p className="text-sm text-gray-400">
              Aerodynamic components, M Performance parts, and forged wheels engineered for
              track-ready composure.
            </p>
          </div>
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">
              Home &amp; Design
            </h2>
            <p className="text-sm text-gray-400">
              Sound systems, furniture, and lighting that bring the BMW design language into your
              personal spaces.
            </p>
          </div>
        </section>

        <section className="grid gap-10 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
              Featured collections
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
              <li>Vision Next capsule collection</li>
              <li>BMW M Motorsport heritage line</li>
              <li>Electric future – sustainable materials range</li>
              <li>Limited-run artist collaborations</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-white/5 p-6 text-sm text-gray-300">
            <p className="font-mono text-xs text-blue-300 mb-2">OWN THE DETAILS</p>
            <p>
              Build your personal ecosystem: sync your garage, wardrobe, and workspace with the
              aesthetic of the BMW Vision Next.\
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Shop;


