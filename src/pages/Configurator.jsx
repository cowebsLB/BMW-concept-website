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

        {/* Three-step overview */}
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

        {/* Live pricing & insights */}
        <section className="grid gap-10 md:grid-cols-[3fr,2fr] items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
              Live pricing &amp; insights
            </h3>
            <p className="text-sm text-gray-400">
              Every configuration updates in real time with transparent pricing, range estimates,
              and performance metrics, so you always know the impact of your choices.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-white/5 p-6 text-sm text-gray-300 space-y-2">
            <p className="font-mono text-xs text-blue-300 mb-2">EXAMPLE BUILD</p>
            <p>BMW i7 xDrive60 · Frozen Deep Grey metallic · 21&quot; Aero Bi-color wheels</p>
            <p className="mt-2">Range: 590 km · 0–100 km/h: 4.7s · Monthly from $1,299*</p>
            <p className="mt-3 text-[11px] text-gray-500">
              *Indicative value for illustrative purposes only.
            </p>
          </div>
        </section>

        {/* Pseudo configurator layout (non-functional UI) */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-6">
          <h2 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
            Vision configurator preview
          </h2>
          <div className="grid gap-6 md:grid-cols-[1.3fr,1.2fr,1.2fr] text-sm">
            {/* Column 1 – model selector */}
            <div className="space-y-4">
              <p className="font-mono text-xs text-blue-300">MODEL</p>
              <ul className="space-y-2">
                {['3 Series Sedan', 'i4 Gran Coupé', 'X5', 'iX', '7 Series', 'M3'].map((model) => (
                  <li
                    key={model}
                    className="flex items-center justify-between px-3 py-2 rounded-md bg-black/40 border border-white/10 cursor-pointer hover:border-blue-500/60 transition-colors"
                  >
                    <span className="text-gray-200">{model}</span>
                    <span className="text-[11px] text-gray-500">Select</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 – design swatches */}
            <div className="space-y-4">
              <p className="font-mono text-xs text-blue-300">DESIGN</p>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Paint finishes</p>
                <div className="flex flex-wrap gap-2">
                  {['Frozen Deep Grey', 'Skyscraper Grey', 'Portimao Blue', 'Alpine White'].map(
                    (color) => (
                      <button
                        key={color}
                        type="button"
                        className="px-3 py-1 rounded-full border border-white/20 text-[11px] text-gray-300 hover:border-blue-500 hover:text-white transition-colors"
                      >
                        {color}
                      </button>
                    )
                  )}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Wheels</p>
                <div className="grid grid-cols-2 gap-2">
                  {['19&quot; Aero', '20&quot; M', '21&quot; Individual', 'Track'].map((wheel) => (
                    <button
                      key={wheel}
                      type="button"
                      className="px-3 py-2 rounded-md bg-black/40 border border-white/15 text-[11px] text-gray-300 hover:border-blue-500 transition-colors text-left"
                    >
                      {wheel}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3 – summary */}
            <div className="space-y-4 rounded-xl border border-white/10 bg-black/40 p-4">
              <p className="font-mono text-xs text-blue-300">SUMMARY</p>
              <div className="space-y-1">
                <p className="text-sm text-gray-200">BMW i5 eDrive40</p>
                <p className="text-xs text-gray-400">M Sport Package · 20&quot; M wheels</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs text-gray-300 pt-2">
                <div>
                  <p className="text-gray-500 text-[11px] uppercase tracking-[0.2em]">Range*</p>
                  <p>560 km</p>
                </div>
                <div>
                  <p className="text-gray-500 text-[11px] uppercase tracking-[0.2em]">0–100 km/h</p>
                  <p>5.8 s</p>
                </div>
                <div>
                  <p className="text-gray-500 text-[11px] uppercase tracking-[0.2em]">
                    Indicative price
                  </p>
                  <p>$92,500</p>
                </div>
                <div>
                  <p className="text-gray-500 text-[11px] uppercase tracking-[0.2em]">Monthly*</p>
                  <p>from $1,190</p>
                </div>
              </div>
              <button
                type="button"
                className="w-full mt-2 px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] bg-white text-black rounded-sm hover:bg-blue-500 hover:text-white transition-colors"
              >
                Save configuration
              </button>
              <p className="text-[10px] text-gray-500">
                *Illustrative values. Final pricing and figures depend on market, specification, and
                financing.
              </p>
            </div>
          </div>
        </section>

        {/* Configurator FAQs */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
            Configurator – frequently asked questions
          </h2>
          <div className="space-y-2 text-sm text-gray-300">
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                Are the prices in the configurator final?
              </summary>
              <p className="mt-2 text-gray-400">
                Values shown are indicative and may vary by market, taxes, incentives, and Retailer
                offers. The final price is confirmed with your BMW Retailer, who can also present
                tailored financing options.
              </p>
            </details>
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                Can I share or save a configuration?
              </summary>
              <p className="mt-2 text-gray-400">
                In a live BMW configurator you can typically save your build, export a PDF, or share
                a unique code with your Retailer so that they can load and adjust your preferences
                during a consultation.
              </p>
            </details>
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                How accurate are range and performance estimates?
              </summary>
              <p className="mt-2 text-gray-400">
                Estimates are based on standardized test cycles and typical usage patterns. Real‑
                world results depend on driving style, load, climate, and route profile, but the
                configurator helps you compare within the BMW range.
              </p>
            </details>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Configurator;


