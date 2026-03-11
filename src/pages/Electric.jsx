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

        {/* Key pillars */}
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

        {/* Charging & ecosystem */}
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
              *Charging times vary based on infrastructure, battery temperature, and state of charge.
            </p>
          </div>
        </section>

        {/* Model comparison snapshot */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
            Electric lineup at a glance
          </h2>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-white/10 text-[11px] uppercase tracking-[0.2em] text-gray-300">
                <tr>
                  <th className="px-4 py-3 font-semibold">Model</th>
                  <th className="px-4 py-3 font-semibold">Body style</th>
                  <th className="px-4 py-3 font-semibold">WLTP range*</th>
                  <th className="px-4 py-3 font-semibold">0–100 km/h</th>
                  <th className="px-4 py-3 font-semibold">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="px-4 py-3 text-gray-100">BMW i4 eDrive40</td>
                  <td className="px-4 py-3 text-gray-400">Gran Coupé</td>
                  <td className="px-4 py-3 text-gray-400">Up to 590 km</td>
                  <td className="px-4 py-3 text-gray-400">5.7 s</td>
                  <td className="px-4 py-3 text-gray-400">Everyday, long-distance commuting</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-100">BMW i5 eDrive40</td>
                  <td className="px-4 py-3 text-gray-400">Sedan</td>
                  <td className="px-4 py-3 text-gray-400">Up to 582 km</td>
                  <td className="px-4 py-3 text-gray-400">6.0 s</td>
                  <td className="px-4 py-3 text-gray-400">Business and family touring</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-100">BMW i7 xDrive60</td>
                  <td className="px-4 py-3 text-gray-400">Luxury Sedan</td>
                  <td className="px-4 py-3 text-gray-400">Up to 625 km</td>
                  <td className="px-4 py-3 text-gray-400">4.7 s</td>
                  <td className="px-4 py-3 text-gray-400">Chauffeured comfort, flagship luxury</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-100">BMW iX xDrive50</td>
                  <td className="px-4 py-3 text-gray-400">SUV</td>
                  <td className="px-4 py-3 text-gray-400">Up to 630 km</td>
                  <td className="px-4 py-3 text-gray-400">4.6 s</td>
                  <td className="px-4 py-3 text-gray-400">Family adventures, all-weather confidence</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-500">
            *Values vary by market and configuration. All figures shown are illustrative.
          </p>
        </section>

        {/* Soft CTA into configurator and test drive */}
        <section className="border border-white/10 rounded-2xl p-6 md:p-8 bg-gradient-to-r from-blue-500/10 via-transparent to-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <p className="font-mono text-xs text-blue-300">NEXT STEP</p>
            <h2 className="text-2xl font-semibold">Configure or test drive your BMW i model</h2>
            <p className="text-sm text-gray-400">
              Move from concept to reality. Explore options, colors, and wheels in the configurator,
              then book a test drive to experience electric performance on the road.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/configurator"
              className="px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] bg-white text-black rounded-sm hover:bg-blue-500 hover:text-white transition-colors"
            >
              Open configurator
            </a>
            <a
              href="/test-drive"
              className="px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] border border-white/20 rounded-sm hover:bg-white/10 transition-colors"
            >
              Request test drive
            </a>
          </div>
        </section>

        {/* Ownership & FAQs */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
            Electric ownership – questions answered
          </h2>
          <div className="space-y-2 text-sm text-gray-300">
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                Do I need a special installation for home charging?
              </summary>
              <p className="mt-2 text-gray-400">
                A dedicated wallbox installed by a certified electrician is recommended for faster,
                safer charging. Many homes can use existing electrical infrastructure, but a site
                survey ensures the best outcome.
              </p>
            </details>
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                How does cold weather affect range?
              </summary>
              <p className="mt-2 text-gray-400">
                All EVs experience some range loss in low temperatures. Preconditioning the cabin
                while plugged in, using seat and steering wheel heating instead of maximum climate,
                and planning shorter fast-charging stops can minimize the impact.
              </p>
            </details>
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                What about battery longevity and warranty?
              </summary>
              <p className="mt-2 text-gray-400">
                BMW high-voltage batteries are engineered for long service life and are typically
                covered by a separate warranty over a number of years and mileage. Regular software
                updates help optimize efficiency and longevity over time.
              </p>
            </details>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Electric;


