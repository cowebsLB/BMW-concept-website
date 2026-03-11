import React from 'react';

const Shop = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 px-6">
      <section className="max-w-[1400px] mx-auto space-y-16">
        <header className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">BMW Shop</h1>
          <p className="text-gray-400 text-lg">
            Extend the Vision Next experience beyond the drive with curated accessories,
            collaborations, and performance parts.
          </p>
        </header>

        {/* Core categories */}
        <section className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">Lifestyle</h2>
            <p className="text-sm text-gray-400">
              Minimalist apparel, luggage, and timepieces crafted with the same precision as our
              vehicles.
            </p>
          </div>
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">
              Performance
            </h2>
            <p className="text-sm text-gray-400">
              Aerodynamic components, M Performance parts, and forged wheels engineered for
              track-ready composure.
            </p>
          </div>
          <div className="space-y-3 border border-white/10 rounded-xl p-6 bg-white/5">
            <h2 className="text-lg font-semibold tracking-wide uppercase text-gray-300">
              Home &amp; Design
            </h2>
            <p className="text-sm text-gray-400">
              Sound systems, furniture, and lighting that bring the BMW design language into your
              personal spaces.
            </p>
          </div>
        </section>

        {/* Collections */}
        <section className="grid gap-10 md:grid-cols-[3fr,2fr] items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
              Featured collections
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
              <li>Vision Next capsule collection</li>
              <li>BMW M Motorsport heritage line</li>
              <li>Electric future – sustainable materials range</li>
              <li>Limited-run artist collaborations</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-white/5 p-6 text-sm text-gray-300">
            <p className="font-mono text-xs text-blue-300 mb-2">OWN THE DETAILS</p>
            <p>
              Build your personal ecosystem: sync your garage, wardrobe, and workspace with the
              aesthetic of the BMW Vision Next.
            </p>
          </div>
        </section>

        {/* Product-style grid (concept only) */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
            Featured pieces
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Vision Next Jacket',
                tag: 'Lifestyle',
                desc: 'Technical fabric jacket with reflective accents and minimal branding.',
                price: '$320'
              },
              {
                name: 'BMW M Chronograph',
                tag: 'Performance',
                desc: 'Swiss-made automatic chronograph with M color details and forged case.',
                price: '$1,950'
              },
              {
                name: 'BMW Wallbox Charger',
                tag: 'Home & Design',
                desc: 'Compact 22 kW home charger designed to complement modern architecture.',
                price: '$1,050'
              }
            ].map((item) => (
              <article
                key={item.name}
                className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-blue-300">{item.tag}</p>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
                <div className="flex items-center justify-between pt-4 text-sm">
                  <span className="text-gray-200 font-medium">{item.price}</span>
                  <button className="text-[11px] font-bold uppercase tracking-[0.2em] border border-white/20 rounded-sm px-3 py-1 hover:bg-white/10 transition-colors">
                    View details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Order & availability FAQs */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-wide uppercase text-gray-300">
            Shop & accessories – FAQs
          </h2>
          <div className="space-y-2 text-sm text-gray-300">
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                Can I purchase these items directly from this site?
              </summary>
              <p className="mt-2 text-gray-400">
                This is a concept experience for portfolio purposes. In a real BMW Shop, you would
                be able to order online or through your Retailer, with local pricing, shipping, and
                availability information.
              </p>
            </details>
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                Are genuine BMW accessories compatible with all models?
              </summary>
              <p className="mt-2 text-gray-400">
                Many items are model‑specific and must match your vehicle’s series, year, and
                equipment. Your BMW Retailer or parts catalog can confirm compatibility by VIN.
              </p>
            </details>
            <details className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-gray-100">
                How do lifestyle collections relate to the cars themselves?
              </summary>
              <p className="mt-2 text-gray-400">
                Collections are often inspired by specific models, colors, or motorsport programs,
                extending the design language from the vehicle into apparel, objects, and interiors.
              </p>
            </details>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Shop;


