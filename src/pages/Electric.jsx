import React from 'react';

const Electric = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 px-6">
      <section className="max-w-[1400px] mx-auto space-y-16">
        <header className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">BMW Electric</h1>
          <p className="text-gray-400 text-lg">
            Silent, instant, and intelligent. BMW Electric redefines performance with zero
            compromise and zero local emissions.
          </p>
        </header>

        <section className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">
              Adaptive Range
            </h2>
            <p className="text-sm text-gray-400">
              Smart energy management learns your routes, climate preferences, and driving style to
              maximize every kilometer.
            </p>
          </div>
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">
              Ultra-fast charging
            </h2>
            <p className="text-sm text-gray-400">
              Up to 80% charge in under 10 minutes with next-generation solid-state compatible
              architecture.*
            </p>
          </div>
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">
              Connected ecosystem
            </h2>
            <p className="text-sm text-gray-400">
              Plan trips, precondition your cabin, and manage charging from your phone or smart home
              assistant.
            </p>
          </div>
        </section>

        <section className="grid gap-10 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
              Charging made effortless
            </h3>
            <p className="text-sm text-gray-400">
              Access an expanding global network of high-speed chargers with seamless
              authentication and automatic billing.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-400 list-disc list-inside">
              <li>Integrated route planning with live charger availability</li>
              <li>Dynamic charging profiles for home, work, and travel</li>
              <li>Energy-optimized navigation based on elevation and traffic</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-white/5 p-6 text-sm text-gray-300">
            <p className="font-mono text-xs text-blue-300 mb-2">BMW iX xDrive50</p>
            <p>Range: 600+ km · Power: 385 kW · 0–100 km/h: 4.6s</p>
            <p className="mt-3 text-[11px] text-gray-500">
              *Charging times vary based on infrastructure, battery temperature, and state of
              charge.\
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Electric;


