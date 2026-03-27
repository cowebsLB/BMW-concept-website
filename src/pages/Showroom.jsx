import React, { useEffect, useMemo, useState } from 'react';
import { showroomCars } from '../data/showroomCars';
import { useExperience } from '../context/ExperienceContext.jsx';

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

const WIKI_SUMMARY_API = 'https://en.wikipedia.org/api/rest_v1/page/summary/';

const getWikiCandidates = (name = '') => {
  const cleaned = name
    .replace(/\(Generations?\)/gi, '')
    .replace(/\(.*?\)/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const first = cleaned.split(' ')[0] || '';
  const candidates = new Set();

  if (cleaned.toLowerCase().startsWith('bmw ')) {
    candidates.add(cleaned);
  } else if (cleaned.toLowerCase().startsWith('alpina ')) {
    candidates.add(cleaned);
    candidates.add(`BMW ${cleaned}`);
  } else {
    candidates.add(`BMW ${cleaned}`);
  }

  // Trim-level to family-level fallback (e.g. M340i -> 3 Series)
  if (/^M?\d{3}/i.test(first)) {
    const series = first.charAt(0).toUpperCase() === 'M' ? first.charAt(1) : first.charAt(0);
    if (/\d/.test(series)) candidates.add(`BMW ${series} Series`);
  }

  if (/^X\d/i.test(first)) candidates.add(`BMW ${first.match(/^X\d/i)?.[0]}`);
  if (/^iX/i.test(first)) candidates.add('BMW iX');
  if (/^i\d/i.test(first)) candidates.add(`BMW ${first.match(/^i\d/i)?.[0]}`);
  if (/^Z\d/i.test(first)) candidates.add(`BMW ${first.match(/^Z\d/i)?.[0]}`);
  if (/^M\d/i.test(first)) candidates.add(`BMW ${first.match(/^M\d/i)?.[0]}`);
  if (/^XM$/i.test(first)) candidates.add('BMW XM');

  return [...candidates];
};

const fetchWikipediaImage = async (name) => {
  const candidates = getWikiCandidates(name);
  for (const candidate of candidates) {
    try {
      const response = await fetch(`${WIKI_SUMMARY_API}${encodeURIComponent(candidate)}`);
      if (!response.ok) continue;
      const data = await response.json();
      const image = data?.thumbnail?.source;
      if (image) return image;
    } catch {
      // Ignore and try next candidate.
    }
  }
  return null;
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

const getImageForCar = (car, modelImages) => {
  if (car.image) return car.image;
  if (modelImages[car.name]) return modelImages[car.name];
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
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // all | sedan | suv | electric | m
  const [compareSelection, setCompareSelection] = useState([]);
  const [modelImages, setModelImages] = useState({});
  const { toggleFavorite, isFavorite, track } = useExperience();

  const carsMissingImage = useMemo(() => showroomCars.filter((car) => !car.image), []);

  useEffect(() => {
    let cancelled = false;

    const resolveModelImages = async () => {
      const resolved = {};
      const chunkSize = 8;

      for (let i = 0; i < carsMissingImage.length; i += chunkSize) {
        const chunk = carsMissingImage.slice(i, i + chunkSize);
        const results = await Promise.all(
          chunk.map(async (car) => [car.name, await fetchWikipediaImage(car.name)])
        );
        for (const [name, image] of results) {
          if (image) resolved[name] = image;
        }
      }

      if (!cancelled) setModelImages(resolved);
    };

    resolveModelImages();
    return () => {
      cancelled = true;
    };
  }, [carsMissingImage]);

  const toggleCompare = (car) => {
    setCompareSelection((prev) => {
      const exists = prev.find((c) => c.name === car.name && c.code === car.code);
      if (exists) {
        return prev.filter((c) => c !== exists);
      }
      if (prev.length >= 3) return prev; // limit to three
      return [...prev, car];
    });
  };

  const isInCompare = (car) =>
    compareSelection.some((c) => c.name === car.name && c.code === car.code);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredCars = showroomCars.filter((car) => {
    const matchesQuery =
      !normalizedQuery ||
      car.name.toLowerCase().includes(normalizedQuery) ||
      (car.code || '').toLowerCase().includes(normalizedQuery) ||
      (car.years || '').toLowerCase().includes(normalizedQuery);

    if (!matchesQuery) return false;

    const type = (car.type || '').toLowerCase();
    switch (activeFilter) {
      case 'sedan':
        return type.includes('sedan') || type.includes('gran coup') || type.includes('series');
      case 'suv':
        return type.includes('suv') || type.includes('sav') || type.includes('x ');
      case 'electric':
        return type.includes('electric') || type.includes('i4') || type.includes('ix') || type.includes('i ');
      case 'm':
        return type.includes('bmw m') || type.includes(' m ');
      default:
        return true;
    }
  });

  // Group cars by derived series for clearer browsing
  const groupedBySeries = filteredCars.reduce((acc, car) => {
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

        {/* Search + filters */}
        <section className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex-1 flex items-center gap-3">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by model, code, or years (e.g. 3 Series, iX, E21)"
              className="w-full md:w-auto flex-1 rounded-full bg-black/60 border border-white/15 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-400">
            {['all', 'sedan', 'suv', 'electric', 'm'].map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1 rounded-full border text-[10px] tracking-[0.2em] ${
                  activeFilter === filter
                    ? 'border-blue-500 bg-blue-500/20 text-blue-200'
                    : 'border-white/10 bg-white/5 text-gray-400 hover:border-blue-400 hover:text-blue-200'
                }`}
              >
                {filter === 'all' ? 'All' : filter}
              </button>
            ))}
          </div>
        </section>

        {/* Product card grids grouped by series */}
        <section className="space-y-12 pt-4">
          {seriesEntries.length === 0 && (
            <p className="text-sm text-gray-500 pt-4">
              No models match your search or filters. Try clearing filters or using a different
              keyword.
            </p>
          )}
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
                {cars.map((car) => {
                  const id = `${car.name}|${car.code || ''}`;
                  const favorite = isFavorite(id);
                  return (
                    <button
                      key={`${series}-${car.name}-${car.code || ''}`}
                      type="button"
                      onClick={() => {
                        setSelectedCar(car);
                        track('showroom_open_detail', { name: car.name, code: car.code || null });
                      }}
                      className="group text-left rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-blue-500/60 hover:bg-white/[0.04] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/70"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={getImageForCar(car, modelImages)}
                          alt={car.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <p className="text-xs uppercase tracking-[0.2em] text-blue-300">
                              {car.type}
                            </p>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(id, {
                                  name: car.name,
                                  type: car.type,
                                  source: 'showroom'
                                });
                              }}
                              className={`px-2 py-1 rounded-full border text-[10px] tracking-[0.15em] ${
                                favorite
                                  ? 'border-amber-400 bg-amber-400/20 text-amber-200'
                                  : 'border-white/20 bg-black/40 text-gray-300 hover:border-amber-400 hover:text-amber-200'
                              }`}
                            >
                              {favorite ? 'Saved' : 'Save'}
                            </button>
                          </div>
                          <h3 className="text-lg font-semibold">{car.name}</h3>
                          {(car.code || car.years) && (
                            <p className="text-[11px] text-gray-300">
                              {[car.code, car.years].filter(Boolean).join(' • ')}
                            </p>
                          )}
                          <div className="mt-3 flex items-center justify-between text-[11px] text-gray-400">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleCompare(car);
                              }}
                              className={`px-2 py-1 rounded-full border ${
                                isInCompare(car)
                                  ? 'border-blue-500 bg-blue-500/20 text-blue-200'
                                  : 'border-white/15 bg-black/40 hover:border-blue-400 hover:text-blue-200'
                              }`}
                            >
                              {isInCompare(car) ? 'In compare' : 'Compare'}
                            </button>
                            {car.type?.toLowerCase().includes('electric') && (
                              <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                                Electric
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {/* Simple compare drawer */}
        {compareSelection.length > 0 && (
          <section className="mt-10 border border-white/10 rounded-2xl bg-black/60 p-4 md:p-6 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-blue-300">COMPARE</p>
                <p className="text-sm text-gray-200">
                  Viewing {compareSelection.length} model
                  {compareSelection.length > 1 ? 's' : ''} side by side.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setCompareSelection([])}
                className="text-[11px] font-bold uppercase tracking-[0.2em] border border-white/20 rounded-sm px-3 py-1 hover:bg-white/10 transition-colors"
              >
                Clear
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs text-left">
                <thead className="bg-white/5 text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  <tr>
                    <th className="px-3 py-2 font-semibold">Model</th>
                    <th className="px-3 py-2 font-semibold">Type</th>
                    <th className="px-3 py-2 font-semibold">Code</th>
                    <th className="px-3 py-2 font-semibold">Years</th>
                    <th className="px-3 py-2 font-semibold">Highlights</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {compareSelection.map((car) => (
                    <tr key={`compare-${car.name}-${car.code || ''}`}>
                      <td className="px-3 py-2 text-gray-100">{car.name}</td>
                      <td className="px-3 py-2 text-gray-400">{car.type}</td>
                      <td className="px-3 py-2 text-gray-400">{car.code || '—'}</td>
                      <td className="px-3 py-2 text-gray-400">{car.years || '—'}</td>
                      <td className="px-3 py-2 text-gray-400">
                        {car.specs?.highlights?.slice(0, 2).join(' • ') || car.specs?.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

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
                src={getImageForCar(selectedCar, modelImages)}
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

