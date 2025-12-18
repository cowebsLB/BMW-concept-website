import React from 'react';

const Configurator = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 px-6">
      <section className="max-w-[1400px] mx-auto space-y-16">
        <header className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Configurator</h1>
          <p className="text-gray-400 text-lg">
            Configure your BMW in real time. Mix powertrains, colors, materials, and technology to
            build a driving experience that is uniquely yours.
          </p>
        </header>

        <section className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">
              1. Choose your model
            </h2>
            <p className="text-sm text-gray-400">
              Start with a foundation: from the agile 3 Series to the commanding X7, every model
              responds differently to the road.
            </p>
          </div>
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">
              2. Define performance
            </h2>
            <p className="text-sm text-gray-400">
              Select between fully electric, plug-in hybrid, or high-performance M powertrains with
              instant torque and precision engineering.
            </p>
          </div>
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">
              3. Craft your finish
            </h2>
            <p className="text-sm text-gray-400">
              Choose from exclusive paints, wheel designs, and interior trims inspired by the Vision
              Next concept.
            </p>
          </div>
        </section>

        <section className="grid gap-10 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
              Live pricing &amp; insights
            </h3>
            <p className="text-sm text-gray-400">
              Every configuration updates in real time with transparent pricing, range estimates,
              and performance metrics, so you always know the impact of your choices.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-white/5 p-6 text-sm text-gray-300">
            <p className="font-mono text-xs text-blue-300 mb-2">EXAMPLE BUILD</p>
            <p>BMW i7 xDrive60 · Frozen Deep Grey metallic · 21&quot; Aero Bi-color wheels</p>
            <p className="mt-2">Range: 590 km · 0–100 km/h: 4.7s · Monthly from $1,299*</p>
            <p className="mt-3 text-[11px] text-gray-500">
              *Indicative value for illustrative purposes only.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Configurator;


