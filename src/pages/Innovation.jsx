import React from 'react';

const Innovation = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 px-6">
      <section className="max-w-[1400px] mx-auto space-y-16">
        <header className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Innovation</h1>
          <p className="text-gray-400 text-lg">
            A living laboratory on wheels. Vision Next fuses software, materials science, and
            human-centered design into one seamless ecosystem.
          </p>
        </header>

        {/* Three pillars */}
        <section className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">
              Neural Motion
            </h2>
            <p className="text-sm text-gray-400">
              The car anticipates your needs by reading biofeedback, adapting suspension, lighting,
              and acoustics to your state of mind.
            </p>
          </div>
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">
              Autonomous Intelligence
            </h2>
            <p className="text-sm text-gray-400">
              Level 4-ready systems that learn over time, creating a driving partner that feels more
              like a co-pilot than a computer.
            </p>
          </div>
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">
              Sustainable Luxury
            </h2>
            <p className="text-sm text-gray-400">
              Bio-based textiles, recycled metals, and circular design principles minimize impact
              without compromising on craftsmanship.
            </p>
          </div>
        </section>

        {/* Digital-first cockpit */}
        <section className="grid gap-10 md:grid-cols-[3fr,2fr] items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
              Digital-first cockpit
            </h3>
            <p className="text-sm text-gray-400">
              Panoramic AR head-up displays, invisible controls that appear only when needed, and a
              cabin that responds to your gestures and voice.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-white/5 p-6 text-sm text-gray-300">
            <p className="font-mono text-xs text-blue-300 mb-2">INNOVATION SNAPSHOT</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Over-the-air performance upgrades</li>
              <li>Predictive maintenance powered by cloud twins</li>
              <li>Energy-aware route optimization and smart charging</li>
              <li>Next-gen safety systems with 360° situational awareness</li>
            </ul>
          </div>
        </section>

        {/* Roadmap section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
            From vision to reality
          </h2>
          <div className="grid gap-6 md:grid-cols-3 text-sm text-gray-300">
            <div className="space-y-2 border border-white/10 rounded-xl p-5 bg-white/5">
              <p className="font-mono text-xs text-blue-300">TODAY</p>
              <p className="font-semibold">Connected, always-on</p>
              <p className="text-gray-400">
                Over-the-air updates, adaptive driver assistance, and digital services available
                across the BMW lineup.
              </p>
            </div>
            <div className="space-y-2 border border-white/10 rounded-xl p-5 bg-white/5">
              <p className="font-mono text-xs text-blue-300">NEAR FUTURE</p>
              <p className="font-semibold">Neural Motion &amp; Level 3+</p>
              <p className="text-gray-400">
                More intuitive interfaces, expanded partial automation on selected routes, and
                energy-aware mobility services.
              </p>
            </div>
            <div className="space-y-2 border border-white/10 rounded-xl p-5 bg-white/5">
              <p className="font-mono text-xs text-blue-300">BEYOND</p>
              <p className="font-semibold">Circular, conscious luxury</p>
              <p className="text-gray-400">
                Fully circular materials, climate-neutral production, and cars that integrate
                seamlessly with energy grids and cities.
              </p>
            </div>
          </div>
        </section>

        {/* Innovation FAQs */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
            Vision & innovation – FAQs
          </h2>
          <div className="space-y-2 text-sm text-gray-300">
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                Is the BMW Vision Next a real car I can buy?
              </summary>
              <p className="mt-2 text-gray-400">
                Vision Next is a concept experience designed to explore future ideas in design,
                sustainability, and software. Elements of this vision may appear in upcoming
                production models, but the concept itself is not a series‑production vehicle.
              </p>
            </details>
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                How much of this technology exists today?
              </summary>
              <p className="mt-2 text-gray-400">
                Many foundations already exist: over‑the‑air updates, advanced driver assistance,
                electrified drivetrains, and sustainable materials. Vision Next extends these ideas
                into a coherent future scenario.
              </p>
            </details>
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                What role does software play in future BMW models?
              </summary>
              <p className="mt-2 text-gray-400">
                Software orchestrates everything—from power delivery and ride comfort to infotainment
                and safety. Future BMWs will increasingly rely on software updates and digital
                services to evolve over time after purchase.
              </p>
            </details>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Innovation;


