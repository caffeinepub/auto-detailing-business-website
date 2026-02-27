import { ChevronDown } from 'lucide-react';

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt="Professional auto detailing"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-garage-dark/80 via-garage-dark/60 to-garage-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-garage-dark/70 via-transparent to-garage-dark/40" />
      </div>

      {/* Decorative red line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-garage-gold to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-garage-gold/40 bg-garage-gold/10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-garage-gold animate-pulse" />
          <span className="font-display font-semibold text-garage-gold text-xs tracking-[0.3em] uppercase">
            Premium Auto Detailing
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-none tracking-tight mb-4">
          <span className="block text-garage-light">Kare</span>
          <span className="block text-garage-gold">Detailing</span>
          <span className="block text-garage-light">Garage</span>
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-garage-muted text-lg sm:text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
          Where every vehicle gets the{' '}
          <span className="text-garage-gold font-semibold">meticulous care</span> it deserves.
          <br className="hidden sm:block" />
          Precision detailing. Flawless results.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative px-8 py-4 bg-garage-gold text-garage-dark font-display font-black text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(180,20,20,0.4)]"
          >
            <span className="relative z-10">Book Your Detail</span>
            <div className="absolute inset-0 bg-garage-gold-light translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 border border-garage-gold/50 text-garage-gold font-display font-bold text-sm tracking-[0.2em] uppercase hover:bg-garage-gold/10 transition-colors duration-300"
          >
            View Services
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
          {[
            { value: '500+', label: 'Cars Detailed' },
            { value: '5★', label: 'Avg Rating' },
            { value: '10+', label: 'Years Exp.' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-black text-2xl sm:text-3xl text-garage-gold">
                {stat.value}
              </div>
              <div className="font-display text-xs text-garage-muted tracking-widest uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('services')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-garage-muted hover:text-garage-gold transition-colors duration-200 animate-bounce"
      >
        <span className="font-display text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  );
}
