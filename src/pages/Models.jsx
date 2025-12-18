import React from 'react';

const Models = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 px-6">
      <section className="max-w-[1400px] mx-auto space-y-16">
        <header className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">BMW Models</h1>
          <p className="text-gray-400 text-lg">
            From visionary concepts to iconic production cars, explore a portfolio engineered for
            every road, mood, and journey.
          </p>
        </header>

        <section className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">Sedans</h2>
            <p className="text-sm text-gray-400">
              Precision dynamics and timeless proportions define the 3, 5, and 7 Series, each built
              to deliver effortless performance.
            </p>
          </div>
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">
              SAV &amp; SAC
            </h2>
            <p className="text-sm text-gray-400">
              X models combine elevated driving positions with agile handling, from compact city
              explorers to grand touring flagships.
            </p>
          </div>
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">BMW M</h2>
            <p className="text-sm text-gray-400">
              Motorsport DNA, distilled. M cars translate decades of track dominance into everyday
              exhilaration.
            </p>
          </div>
        </section>

        <section className="grid gap-10 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
              Curated highlights
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
              <li>BMW 3 Series – the definitive sports sedan.</li>
              <li>BMW X5 – an icon of versatility and comfort.</li>
              <li>BMW i4 – electric performance with grand touring spirit.</li>
              <li>BMW M4 – pure, focused driving pleasure.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-white/5 p-6 text-sm text-gray-300">
            <p className="font-mono text-xs text-blue-300 mb-2">FIND YOUR MATCH</p>
            <p>
              Answer a few questions on driving style, space, and technology needs and let the
              intelligent advisor suggest the BMW that fits you best.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Models;


