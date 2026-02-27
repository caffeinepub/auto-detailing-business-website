import { Award, Users, Wrench, Heart } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Unmatched Quality',
    description: 'We use only professional-grade products and techniques to deliver results that exceed expectations every time.',
  },
  {
    icon: Wrench,
    title: 'Expert Craftsmanship',
    description: 'Our team brings years of hands-on experience and a passion for perfection to every vehicle we touch.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We work with you to understand your needs and deliver exactly what you envision.',
  },
  {
    icon: Heart,
    title: 'Passion for Cars',
    description: "We're car enthusiasts ourselves. We treat every vehicle as if it were our own — with love and respect.",
  },
];

export default function About() {
  return (
    <div className="bg-garage-panel py-20 md:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-garage-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-garage-gold/30 to-transparent" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-garage-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div>
            <span className="font-display font-semibold text-garage-gold text-xs tracking-[0.4em] uppercase">
              Our Story
            </span>
            <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase text-garage-light leading-none">
              About Us
            </h2>
            <div className="mt-4 w-16 h-1 bg-garage-gold" />

            <div className="mt-8 space-y-5 text-garage-muted leading-relaxed">
              <p className="text-base sm:text-lg">
                At <span className="text-garage-gold font-semibold">Kare Detailing Garage</span>, we believe every vehicle deserves to look its absolute best. Founded on a passion for automobiles and a commitment to excellence, we've built our reputation one perfectly detailed car at a time.
              </p>
              <p className="text-base">
                Our team of skilled detailers combines cutting-edge techniques with meticulous attention to detail. Whether it's a daily driver or a prized collector's piece, we approach every job with the same level of dedication and care.
              </p>
              <p className="text-base">
                We don't just clean cars — we restore them. From paint correction to ceramic coating, our comprehensive services are designed to protect your investment and keep your vehicle looking showroom-fresh for years to come.
              </p>
            </div>

            {/* Red accent border quote */}
            <blockquote className="mt-8 pl-5 border-l-4 border-garage-gold">
              <p className="font-display font-bold text-lg text-garage-light italic">
                "We treat every vehicle like it's our own — because we know how much yours means to you."
              </p>
              <footer className="mt-2 font-display text-sm text-garage-gold tracking-widest uppercase">
                — The Kare Team
              </footer>
            </blockquote>
          </div>

          {/* Right: Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-6 bg-garage-dark border border-garage-gold/10 hover:border-garage-gold/30 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-garage-gold/10 mb-4 group-hover:bg-garage-gold/20 transition-colors duration-300">
                    <Icon className="h-5 w-5 text-garage-gold" />
                  </div>
                  <h3 className="font-display font-black text-base uppercase text-garage-light mb-2 tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-sm text-garage-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
