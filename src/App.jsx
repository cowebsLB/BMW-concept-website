import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Menu, X, ChevronRight, Zap, Cpu, ShieldCheck, ArrowRight, Search, User, Play } from 'lucide-react';
import Models from './pages/Models.jsx';
import Electric from './pages/Electric.jsx';
import Configurator from './pages/Configurator.jsx';
import Innovation from './pages/Innovation.jsx';
import Shop from './pages/Shop.jsx';

// Use environment-provided API key for image generation
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

const Reveal = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const transformMap = {
    up: 'translateY(40px)',
    down: 'translateY(-40px)',
    left: 'translateX(40px)',
    right: 'translateX(-40px)',
    none: 'translate(0)'
  };

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0)' : transformMap[direction],
    transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollY = useScroll();
  const [heroImage, setHeroImage] = useState(null);
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [isImageReady, setIsImageReady] = useState(false);
  const isMountedRef = useRef(true);
  const retryTimeoutRef = useRef();

  const heroImageY = scrollY * 0.5;
  const heroTextY = scrollY * 0.2;
  const heroOpacity = Math.max(0, 1 - scrollY / 700);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const generateHeroImage = useCallback(
    async (retryCount = 0) => {
      const prompt =
        'A ultra-luxury 2025 BMW electric concept car, futuristic design, sleek aerodynamics, glowing kidney grille, parked in a minimalist high-tech showroom with soft cinematic lighting, 8k resolution, professional photography style, deep metallic blue and silver colors, cinematic angle, raytracing.';

      // If no API key is configured, skip remote generation and use fallback image
      if (!apiKey) {
        if (!isMountedRef.current) return;
        setIsLoadingImage(false);
        setHeroImage(
          'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2000'
        );
        return;
      }

      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              instances: [{ prompt }],
              parameters: { sampleCount: 1 }
            })
          }
        );

        if (!response.ok) {
          throw new Error('Generation failed');
        }

        const result = await response.json();
        if (result.predictions?.[0]?.bytesBase64Encoded) {
          if (!isMountedRef.current) return;
          setHeroImage(`data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`);
          setIsLoadingImage(false);
        } else {
          throw new Error('No image returned');
        }
      } catch (err) {
        if (retryCount < 5) {
          const delay = Math.pow(2, retryCount) * 1000;
          retryTimeoutRef.current = setTimeout(() => {
            if (!isMountedRef.current) return;
            generateHeroImage(retryCount + 1);
          }, delay);
        } else {
          if (!isMountedRef.current) return;
          setIsLoadingImage(false);
          setHeroImage(
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2000'
          );
        }
      }
    },
    []
  );

  useEffect(() => {
    generateHeroImage();
  }, [generateHeroImage]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] mix-blend-overlay"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-700 border-b ${
          scrollY > 50
            ? 'bg-black/60 backdrop-blur-xl border-white/10 py-4'
            : 'bg-transparent border-transparent py-8'
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="flex items-center space-x-2 group cursor-pointer"
              aria-label="BMW Home"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
                alt="BMW Logo"
                className="w-10 h-10 object-contain group-hover:rotate-180 transition-transform duration-[1.5s] ease-out"
              />
              <span
                className={`font-bold text-lg tracking-widest transition-opacity duration-300 ${
                  scrollY > 50 ? 'opacity-100' : 'opacity-0 md:opacity-100'
                }`}
              >
                BMW
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <button aria-label="Search" className="hover:text-blue-400 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button aria-label="User Profile" className="hover:text-blue-400 transition-colors">
                <User className="w-5 h-5" />
              </button>
            </div>
            <button
              className="p-2 hover:bg-white/10 rounded-full transition-colors z-50 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile/Sidebar Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-opacity duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`fixed inset-y-0 right-0 z-40 w-full md:w-[480px] bg-[#080808] border-l border-white/10 shadow-2xl transform transition-transform duration-700 cubic-bezier(0.19, 1, 0.22, 1) flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex-1 px-12 pt-32 pb-12 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-6">
            {[
              { label: 'Models', to: '/models' },
              { label: 'Electric', to: '/electric' },
              { label: 'Configurator', to: '/configurator' },
              { label: 'Innovation', to: '/innovation' },
              { label: 'Shop', to: '/shop' }
            ].map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-4xl font-light uppercase tracking-tight hover:text-blue-500 hover:pl-4 transition-all duration-300 transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${100 + i * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div
            className={`space-y-8 border-t border-white/10 pt-8 transition-all duration-700 delay-300 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
              <a href="#" className="hover:text-white transition-colors">
                Find a Dealer
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Test Drive
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Financial Services
              </a>
              <a href="#" className="hover:text-white transition-colors">
                BMW Life
              </a>
            </div>

            <div className="relative h-40 rounded-lg overflow-hidden group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1556189250-72ba954e96d5?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                alt="Dealer Locator"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold uppercase text-xs tracking-widest flex items-center">
                  Locate Dealer <ChevronRight className="w-3 h-3 ml-1" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Section (always visible) */}
      <header className="relative h-[110vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 select-none pointer-events-none"
          style={{ transform: `translateY(${heroImageY}px) scale(1.1)` }}
        >
          <div
            className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-700 ${
              !isLoadingImage && isImageReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 border-t-2 border-blue-500 rounded-full animate-spin"></div>
              <div className="absolute inset-4 border-t-2 border-white/20 rounded-full animate-spin-reverse"></div>
            </div>
          </div>

          {heroImage && (
            <>
              <img
                src={heroImage}
                className={`w-full h-full object-cover transition-opacity duration-1000 ${
                  isImageReady ? 'opacity-100' : 'opacity-0'
                }`}
                alt="BMW 2025 Vision Concept Car"
                onLoad={() => {
                  setIsLoadingImage(false);
                  setIsImageReady(true);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050505]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
            </>
          )}
        </div>

        <div
          className="relative z-10 text-center max-w-5xl px-6 w-full mt-20"
          style={{
            transform: `translateY(${heroTextY}px)`,
            opacity: heroOpacity
          }}
        >
          <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-2xl border border-white/10 px-6 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-blue-200">
              World Premiere
            </span>
          </div>

          <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter mb-4 leading-[0.85] mix-blend-overlay opacity-90">
            VISION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/0">
              NEXT
            </span>
          </h1>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto my-10"></div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button
              className="group relative px-10 py-4 bg-white text-black overflow-hidden rounded-sm transition-all hover:bg-blue-500 hover:text-white"
              aria-label="Experience Vision"
            >
              <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative z-10 text-xs font-bold uppercase tracking-widest flex items-center">
                Experience Vision{' '}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              className="group px-10 py-4 border border-white/20 backdrop-blur-md rounded-sm hover:bg-white/10 transition-all flex items-center space-x-3"
              aria-label="Watch the film"
            >
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-current" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">Watch The Film</span>
            </button>
          </div>
        </div>
      </header>

      {/* Feature Grid (Home only) */}
      <Routes>
        <Route
          path="/"
          element={
            <section className="relative py-32 px-6 z-20 -mt-20">
              <div className="max-w-[1400px] mx-auto">
                <Reveal>
                  <h3 className="text-sm text-blue-400 uppercase tracking-[0.4em] mb-4">
                    Core Intelligence
                  </h3>
                  <h2 className="text-4xl md:text-5xl font-light mb-16 max-w-2xl leading-tight">
                    Technology that <span className="font-bold text-white">feels human</span>. <br />
                    <span className="text-white/40">Powered by Neural Motion.</span>
                  </h2>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <GlassCard
                    icon={<Zap />}
                    title="Solid-State Energy"
                    desc="1000km range. 10 minute charge. The end of range anxiety."
                    delay={0.1}
                  />
                  <GlassCard
                    icon={<Cpu />}
                    title="Neural Interface"
                    desc="The car learns your bio-rhythms, adjusting lighting and scent."
                    delay={0.2}
                  />
                  <GlassCard
                    icon={<ShieldCheck />}
                    title="Guardian AI"
                    desc="Predictive safety systems that see hazards before they exist."
                    delay={0.3}
                  />
                </div>
              </div>
            </section>
          }
        />
      </Routes>

      {/* Split Parallax Showcase (Home only) */}
      <Routes>
        <Route
          path="/"
          element={
            <section className="py-32 bg-[#080808] overflow-hidden">
              <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                  <div className="lg:w-1/2">
                    <Reveal direction="right">
                      <div className="relative group overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-blue-600/20 mix-blend-color z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <img
                          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1200"
                          alt="Interior view showing advanced digital dashboard"
                          className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-in-out transform group-hover:scale-105"
                        />
                        <div className="absolute top-10 right-10 z-20 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                          <div className="flex items-center space-x-3 text-xs font-mono text-blue-300">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>SYSTEM: ACTIVE</span>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  <div className="lg:w-1/2 space-y-8">
                    <Reveal delay={0.2}>
                      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                        INNER <br />
                        <span className="text-blue-500 italic font-serif">SANCTUARY</span>
                      </h2>
                    </Reveal>
                    <Reveal delay={0.3}>
                      <p className="text-xl text-gray-400 leading-relaxed font-light border-l-2 border-blue-500/50 pl-6">
                        A cabin that breathes. Materials that heal. The 2025 Vision isn't just a
                        space to sit—it's an extension of your living space, constructed from
                        sustainable, reactive matter.
                      </p>
                    </Reveal>
                    <Reveal delay={0.4}>
                      <div className="grid grid-cols-2 gap-6 pt-8">
                        {['Haptic Glass', 'Living Moss Filters', 'Sound Zones', 'OLED Roof'].map(
                          (item, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-3 border-b border-white/10 pb-4 group cursor-pointer"
                            >
                              <span className="text-blue-500 opacity-50 text-xs">
                                0{i + 1}
                              </span>
                              <span className="text-sm font-medium tracking-widest uppercase group-hover:text-blue-400 transition-colors">
                                {item}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </section>
          }
        />

        <Route path="/models" element={<Models />} />
        <Route path="/electric" element={<Electric />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>

      {/* Marquee */}
      <div className="py-20 bg-blue-900/10 border-y border-white/5 overflow-hidden" aria-hidden="true">
        <div className="whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          <span className="text-[10vw] font-bold text-white/5 inline-block mx-10">
            THE ULTIMATE DRIVING MACHINE
          </span>
          <span className="text-[10vw] font-bold text-transparent stroke-text inline-block mx-10">
            THE ULTIMATE DRIVING MACHINE
          </span>
          <span className="text-[10vw] font-bold text-white/5 inline-block mx-10">
            THE ULTIMATE DRIVING MACHINE
          </span>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#020202] pt-32 pb-12 px-6 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <Reveal direction="up">
            <div className="mb-12 hover:scale-110 transition-transform duration-500 cursor-pointer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
                alt="BMW"
                className="w-24 h-24 opacity-90"
              />
            </div>
          </Reveal>
          <nav
            className="flex flex-wrap justify-center gap-10 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-16"
            aria-label="Footer Links"
          >
            <a href="#" className="hover:text-white transition-colors">
              Legal
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Press
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Careers
            </a>
          </nav>
          <p className="text-white/20 text-[10px] uppercase tracking-widest">
            © 2025 BMW AG. Munich, Germany.
          </p>
        </div>
      </footer>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes spin-reverse {
          to { transform: rotate(-360deg); }
        }
        @keyframes widthGrow {
            from { width: 0; }
            to { width: 6rem; }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
      `
        }}
      />
    </div>
  );
};

const GlassCard = ({ icon, title, desc, delay }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const cardRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (frameRef.current) return;

    const card = cardRef.current;
    if (!card) return;

    frameRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      setOpacity(1);
      frameRef.current = null;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    setOpacity(0);
  }, []);

  return (
    <Reveal delay={delay}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative group p-10 h-full rounded-2xl bg-white/[0.03] border border-white/5 overflow-hidden transition-colors hover:bg-white/[0.06]"
      >
        <div
          className="absolute pointer-events-none inset-0 transition-opacity duration-500"
          style={{
            opacity: opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
          }}
        />

        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500"
          style={{
            opacity: opacity,
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.25), transparent 40%)`,
            zIndex: -1,
            top: -1,
            left: -1,
            right: -1,
            bottom: -1,
            borderRadius: '1.1rem'
          }}
        />

        <div className="relative z-10">
          <div className="mb-6 inline-flex p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:text-white group-hover:bg-blue-500 transition-all duration-300">
            {React.cloneElement(icon, { size: 28 })}
          </div>
          <h4 className="text-xl font-bold mb-4 tracking-tight">{title}</h4>
          <p className="text-gray-400 text-sm leading-relaxed border-l border-white/10 pl-4">
            {desc}
          </p>
          <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-widest text-blue-500 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            Learn More <ChevronRight className="w-3 h-3 ml-1" />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default App;


