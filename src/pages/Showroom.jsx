import React, { useState } from 'react';
import { showroomCars } from '../data/showroomCars';

const categoryImages = {
  suv: 'https://images.unsplash.com/photo-1617814066438-b4712b9a3a45?auto=format&fit=crop&q=80&w=1200',
  coupeSUV:
    'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1200',
  electric:
    'https://images.unsplash.com/photo-1543490102-46c7ba75dc09?auto=format&fit=crop&q=80&w=1200',
  plugInHybrid:
    'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1200',
  sedan:
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200',
  m:
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200',
  default:
    'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=1200'
};

// Derive a "series" label from the car name so we can group cards visually
const getSeriesFromName = (name = '') => {
  const trimmed = name.trim();

  // Handle names that start with "BMW "
  if (trimmed.startsWith('BMW ')) {
    const parts = trimmed.replace(/^BMW\s+/, '').split(' ');
    // Examples: "3 Series", "i8", "i3", "X5 (Generations)"
    if (parts[1] && parts[1].toLowerCase() === 'series') {
      return `${parts[0]} Series`;
    }
    // Strip trailing parentheses for generation notes
    return parts[0].replace(/\(.+?\)/, '').trim();
  }

  const parts = trimmed.split(' ');
  const first = parts[0] || '';

  // Map typical BMW naming into series-style buckets
  if (/^X\d/.test(first)) return 'X Series';
  if (/^iX/i.test(first)) return 'iX';
  if (/^i[0-9]/i.test(first)) return first; // i4, i5, i7
  if (/^Z\d/i.test(first)) return first; // Z4
  if (/^M\d/.test(first)) {
    // M3, M4, M5, M8 → 3 Series, 4 Series, etc.
    const base = first.slice(1);
    return `${base} Series · M`;
  }
  if (/^ALPINA/i.test(first)) return 'ALPINA';
  if (/^XM$/i.test(first)) return 'XM';

  // Fallback: just use first token as series label
  return first || 'Other';
};

const getImageForCar = (car) => {
  if (car.image) return car.image;
  const type = (car.type || '').toLowerCase();

  if (type.includes('electric') || type.includes('i4') || type.includes('ix')) {
    return categoryImages.electric;
  }
  if (type.includes('plug') || type.includes('hybrid')) {
    return categoryImages.plugInHybrid;
  }
  if (type.includes('coupe suv')) {
    return categoryImages.coupeSUV;
  }
  if (type.includes('suv') || type.includes('sav') || type.startsWith('x ')) {
    return categoryImages.suv;
  }
  if (type.includes('sedan') || type.includes('gran coup') || type.includes('series')) {
    return categoryImages.sedan;
  }
  if (type.includes('bmw m') || type.includes(' m ')) {
    return categoryImages.m;
  }

  return categoryImages.default;
};

const Showroom = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  // Group cars by derived series for clearer browsing
  const groupedBySeries = showroomCars.reduce((acc, car) => {
    const series = getSeriesFromName(car.name);
    if (!acc[series]) acc[series] = [];
    acc[series].push(car);
    return acc;
  }, {});

  const seriesEntries = Object.entries(groupedBySeries).sort(([a], [b]) =>
    a.localeCompare(b, 'en', { numeric: true })
  );

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 px-6">
      <section className="max-w-[1400px] mx-auto space-y-12">
        <header className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Showroom</h1>
          <p className="text-gray-400 text-lg">
            Explore a curated history of BMW models. Tap on a card to open a spec sheet with codes,
            production years, and key highlights.
          </p>
        </header>

        <section className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.15em] text-gray-400">
          {['Sedan', 'SAV', 'Electric', 'Plug‑in Hybrid', 'Roadster', 'M'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </section>

        {/* Product card grids grouped by series */}
        <section className="space-y-12 pt-4">
          {seriesEntries.map(([series, cars]) => (
            <div key={series} className="space-y-4">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {series}
                </h2>
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
                  {cars.length} model{cars.length > 1 ? 's' : ''}
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cars.map((car) => (
                  <button
                    key={`${series}-${car.name}-${car.code || ''}`}
                    type="button"
                    onClick={() => setSelectedCar(car)}
                    className="group text-left rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-blue-500/60 hover:bg-white/[0.04] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/70"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={getImageForCar(car)}
                        alt={car.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-blue-300 mb-1">
                          {car.type}
                        </p>
                        <h3 className="text-lg font-semibold">{car.name}</h3>
                        {(car.code || car.years) && (
                          <p className="text-[11px] text-gray-300">
                            {[car.code, car.years].filter(Boolean).join(' • ')}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>

        <p className="text-[11px] text-gray-500">
          Note: This showroom is a curated snapshot, not an exhaustive catalogue. You can extend the
          dataset in <code>Showroom.jsx</code> to include every BMW model and variant.
        </p>
      </section>

      {/* Detail modal */}
      {selectedCar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setSelectedCar(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="max-w-3xl w-full bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={getImageForCar(selectedCar)}
                alt={selectedCar.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedCar(null)}
                className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-black/60 border border-white/20 hover:bg-white/10 transition-colors"
              >
                Close
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <p className="text-xs uppercase tracking-[0.25em] text-blue-300 mb-1">
                  {selectedCar.type}
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold">{selectedCar.name}</h2>
                {(selectedCar.code || selectedCar.years) && (
                  <p className="text-[11px] text-gray-200">
                    {[selectedCar.code, selectedCar.years].filter(Boolean).join(' • ')}
                  </p>
                )}
              </div>
            </div>

            <div className="px-6 py-6 space-y-4">
              <p className="text-sm text-gray-300">{selectedCar.specs?.description}</p>

              {selectedCar.specs?.highlights && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2">
                    Highlights
                  </h3>
                  <ul className="space-y-1 text-sm text-gray-300 list-disc list-inside">
                    {selectedCar.specs.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Showroom;

