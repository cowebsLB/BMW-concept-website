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

        <section className="grid gap-10 md:grid-cols-2 items-start">
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
      </section>
    </main>
  );
};

export default Innovation;


