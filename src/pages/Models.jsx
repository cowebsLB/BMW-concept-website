import React, { useState } from 'react';

const bmwModels = [
  {
    name: 'BMW 320i Sedan',
    type: 'Sedan',
    horsepower: 255,
    torque: 295,
    zeroToSixty: 5.6,
    price: 45000
  },
  {
    name: 'BMW 530i Sedan',
    type: 'Sedan',
    horsepower: 255,
    torque: 295,
    zeroToSixty: 6.0,
    price: 61000
  },
  {
    name: 'BMW 740i Sedan',
    type: 'Luxury Sedan',
    horsepower: 375,
    torque: 383,
    zeroToSixty: 5.0,
    price: 96000
  },
  {
    name: 'BMW X3 xDrive30i',
    type: 'SAV',
    horsepower: 248,
    torque: 258,
    zeroToSixty: 6.0,
    price: 49000
  },
  {
    name: 'BMW X5 xDrive40i',
    type: 'SAV',
    horsepower: 335,
    torque: 330,
    zeroToSixty: 5.3,
    price: 69000
  },
  {
    name: 'BMW i4 eDrive40',
    type: 'Electric Gran Coupé',
    horsepower: 335,
    torque: 317,
    zeroToSixty: 5.7,
    price: 58000
  },
  {
    name: 'BMW iX xDrive50',
    type: 'Electric SAV',
    horsepower: 516,
    torque: 564,
    zeroToSixty: 4.4,
    price: 87000
  },
  {
    name: 'BMW M3 Competition',
    type: 'BMW M',
    horsepower: 503,
    torque: 479,
    zeroToSixty: 3.8,
    price: 78000
  }
];

const Models = () => {
  const [sortKey, setSortKey] = useState('price'); // 'price' | 'horsepower' | 'name'

  const sortedModels = [...bmwModels].sort((a, b) => {
    if (sortKey === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortKey === 'horsepower') {
      return b.horsepower - a.horsepower;
    }
    // default price ascending
    return a.price - b.price;
  });

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

        {/* Core segments */}
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

        {/* Series overview */}
        <section className="grid gap-10 md:grid-cols-[2fr,3fr] items-start">
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
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-white/5 p-6 text-sm text-gray-300 space-y-4">
            <p className="font-mono text-xs text-blue-300 mb-2">FIND YOUR MATCH</p>
            <p>
              Answer a few questions on driving style, space, and technology needs and let the
              intelligent advisor suggest the BMW that fits you best.
            </p>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-400">
              <span>• Daily commute vs. long-distance</span>
              <span>• City, highway, or mixed driving</span>
              <span>• Family, business, or performance-first</span>
              <span>• Combustion, plug-in hybrid, or fully electric</span>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center mt-2 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] border border-white/20 rounded-sm hover:bg-white/10 transition-colors"
            >
              Start model advisor
            </a>
          </div>
        </section>

        {/* Link into data-heavy showroom */}
        <section className="border border-white/10 rounded-2xl p-6 md:p-8 bg-gradient-to-r from-blue-500/10 to-transparent flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <p className="font-mono text-xs text-blue-300">DEEP DIVE</p>
            <h2 className="text-2xl font-semibold">Enter the full BMW showroom</h2>
            <p className="text-sm text-gray-400">
              Browse generations, body styles, and powertrains across BMW history. Filter by series
              and open detailed spec sheets in one place.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/showroom"
              className="px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] bg-white text-black rounded-sm hover:bg-blue-500 hover:text-white transition-colors"
            >
              Open showroom
            </a>
            <a
              href="/configurator"
              className="px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] border border-white/20 rounded-sm hover:bg-white/10 transition-colors"
            >
              Configure yours
            </a>
          </div>
        </section>

        {/* Data-driven model specs */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
                Model specs overview
              </h2>
              <p className="text-sm text-gray-400">
                Compare power, performance, and indicative price across a cross‑section of the BMW
                lineup.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-400">
              <span className="hidden md:inline">Sort by</span>
              {['price', 'horsepower', 'name'].map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSortKey(key)}
                  className={`px-3 py-1 rounded-full border text-[10px] tracking-[0.2em] ${
                    sortKey === key
                      ? 'border-blue-500 bg-blue-500/20 text-blue-200'
                      : 'border-white/10 bg-white/5 text-gray-400 hover:border-blue-400 hover:text-blue-200'
                  }`}
                >
                  {key === 'price'
                    ? 'Price'
                    : key === 'horsepower'
                    ? 'Horsepower'
                    : 'Name'}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {sortedModels.map((model) => (
              <article
                key={model.name}
                className="border border-white/10 p-5 rounded-xl bg-white/5 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1">
                  <h3 className="font-bold text-lg text-white">{model.name}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    {model.type}
                  </p>
                </div>
                <div className="space-y-1 text-sm text-gray-300">
                  <p>
                    <span className="text-gray-500 text-[11px] uppercase tracking-[0.2em] mr-2">
                      Horsepower
                    </span>
                    {model.horsepower} hp
                  </p>
                  <p>
                    <span className="text-gray-500 text-[11px] uppercase tracking-[0.2em] mr-2">
                      Torque
                    </span>
                    {model.torque} lb-ft
                  </p>
                  <p>
                    <span className="text-gray-500 text-[11px] uppercase tracking-[0.2em] mr-2">
                      0–60 mph
                    </span>
                    {model.zeroToSixty.toFixed(1)} s
                  </p>
                  <p>
                    <span className="text-gray-500 text-[11px] uppercase tracking-[0.2em] mr-2">
                      Indicative price
                    </span>
                    ${model.price.toLocaleString()}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Frequently asked questions */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
            Models – frequently asked questions
          </h2>
          <div className="space-y-2 text-sm text-gray-300">
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                How do I choose between a 3 Series, 5 Series, and 7 Series?
              </summary>
              <p className="mt-2 text-gray-400">
                Think about how much time you spend in the car and who travels with you. The 3
                Series is agile and compact, ideal for cities; the 5 Series balances rear space with
                dynamic handling; the 7 Series is a flagship with maximum comfort for both driver
                and passengers.
              </p>
            </details>
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                When should I look at an X model instead of a sedan or coupé?
              </summary>
              <p className="mt-2 text-gray-400">
                If you frequently drive in poor weather, need more luggage space, or value a higher
                seating position, an X model is usually the better fit. Sedans and coupés focus more
                on a low seating position and classic dynamics.
              </p>
            </details>
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                What is the difference between BMW i, plug‑in hybrid, and BMW M models?
              </summary>
              <p className="mt-2 text-gray-400">
                BMW i models are fully electric; plug‑in hybrids combine combustion and electric
                power for flexibility; BMW M models focus on high performance with sharper chassis
                tuning and more powerful engines or electric drivetrains.
              </p>
            </details>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Models;


