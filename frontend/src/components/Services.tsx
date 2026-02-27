import { Check, Sparkles, Shield, Bike, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const services = [
  {
    icon: Sparkles,
    name: 'Basic Exterior Wash',
    tagline: 'Quick & Clean',
    price: '₹599',
    description: 'A thorough exterior wash to keep your vehicle looking fresh and clean.',
    features: [
      'Hand exterior wash & rinse',
      'Wheel & tire cleaning',
      'Window cleaning',
      'Exterior wipe-down',
      'Air freshener',
    ],
    badge: null,
    highlight: false,
  },
  {
    icon: Shield,
    name: 'Interior + Exterior',
    tagline: 'Deep Clean',
    price: '₹1499',
    description: "A comprehensive interior and exterior detail that restores your vehicle's showroom shine.",
    features: [
      'Everything in Basic Exterior Wash',
      'Interior deep clean & vacuum',
      'Dashboard & console wipe',
      'Leather conditioning',
      'Tire dressing & trim restore',
      'Interior glass cleaning',
    ],
    badge: 'Most Popular',
    highlight: true,
  },
  {
    icon: Bike,
    name: 'Bike Wash',
    tagline: 'Two-Wheeler Care',
    price: '₹299',
    description: 'Professional cleaning for your motorcycle or scooter — inside and out.',
    features: [
      'Full exterior wash & rinse',
      'Wheel & spoke cleaning',
      'Chain & engine wipe',
      'Seat & panel wipe-down',
      'Tyre dressing',
    ],
    badge: 'Best Value',
    highlight: false,
  },
];

function scrollToContact() {
  const el = document.getElementById('contact');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Services() {
  return (
    <div className="bg-garage-dark py-20 md:py-28">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-display font-semibold text-garage-gold text-xs tracking-[0.4em] uppercase">
            What We Offer
          </span>
          <h2 className="mt-3 font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase text-garage-light leading-none">
            Our Services
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-garage-gold" />
          <p className="mt-6 text-garage-muted text-base sm:text-lg max-w-xl mx-auto">
            Choose the package that fits your needs. Every service is performed with precision and care.
          </p>
        </div>

        {/* Service Cards — 3 standard packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.name}
                className={`relative overflow-hidden border-0 transition-all duration-300 group ${
                  service.highlight
                    ? 'bg-garage-gold ring-2 ring-garage-gold shadow-[0_0_40px_rgba(180,20,20,0.25)]'
                    : 'bg-garage-panel hover:bg-garage-panel-light'
                }`}
              >
                {service.badge && (
                  <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-display font-black tracking-widest uppercase ${
                    service.highlight
                      ? 'bg-garage-dark text-garage-gold'
                      : 'bg-garage-gold text-garage-dark'
                  }`}>
                    {service.badge}
                  </div>
                )}

                <CardHeader className="pb-4 pt-8 px-6">
                  <div className={`w-12 h-12 flex items-center justify-center mb-4 ${
                    service.highlight ? 'bg-garage-dark/20' : 'bg-garage-gold/10'
                  }`}>
                    <Icon className={`h-6 w-6 ${service.highlight ? 'text-garage-dark' : 'text-garage-gold'}`} />
                  </div>
                  <div>
                    <p className={`font-display font-semibold text-xs tracking-[0.3em] uppercase mb-1 ${
                      service.highlight ? 'text-garage-dark/70' : 'text-garage-muted'
                    }`}>
                      {service.tagline}
                    </p>
                    <h3 className={`font-display font-black text-2xl uppercase ${
                      service.highlight ? 'text-garage-dark' : 'text-garage-light'
                    }`}>
                      {service.name}
                    </h3>
                  </div>
                  <div className={`font-display font-black text-4xl mt-2 ${
                    service.highlight ? 'text-garage-dark' : 'text-garage-gold'
                  }`}>
                    {service.price}
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-8">
                  <p className={`text-sm mb-6 leading-relaxed ${
                    service.highlight ? 'text-garage-dark/80' : 'text-garage-muted'
                  }`}>
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                          service.highlight ? 'text-garage-dark' : 'text-garage-gold'
                        }`} />
                        <span className={`text-sm ${
                          service.highlight ? 'text-garage-dark/90' : 'text-garage-light/80'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={scrollToContact}
                    className={`w-full py-3 font-display font-black text-sm tracking-[0.2em] uppercase transition-all duration-200 ${
                      service.highlight
                        ? 'bg-garage-dark text-garage-gold hover:bg-garage-dark/80'
                        : 'bg-garage-gold text-garage-dark hover:bg-garage-gold-light'
                    }`}
                  >
                    Book This Package
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Doorstep Detailing — Full-width feature card */}
        <div className="mt-8 relative overflow-hidden border border-garage-gold/30 bg-garage-panel group transition-all duration-300 hover:border-garage-gold/60 hover:shadow-[0_0_40px_rgba(180,20,20,0.12)]">
          {/* Decorative corner accent */}
          <div className="absolute top-0 left-0 w-1 h-full bg-garage-gold" />
          <div className="absolute top-0 right-0 w-1 h-full bg-garage-gold/30" />

          <div className="pl-8 pr-6 py-8 sm:py-10 flex flex-col md:flex-row md:items-center gap-8">
            {/* Icon + Badge */}
            <div className="flex-shrink-0 flex flex-col items-start gap-3">
              <div className="w-14 h-14 flex items-center justify-center bg-garage-gold/10 border border-garage-gold/20">
                <MapPin className="h-7 w-7 text-garage-gold" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-garage-gold text-garage-dark font-display font-black text-xs tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-garage-dark animate-pulse" />
                Mobile Service
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="font-display font-semibold text-xs tracking-[0.3em] uppercase text-garage-muted mb-1">
                We Come To You
              </p>
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase text-garage-light mb-3">
                Doorstep Detailing
              </h3>
              <p className="text-garage-muted text-sm sm:text-base leading-relaxed max-w-2xl mb-5">
                Skip the drive — our expert detailers come directly to your home, office, or any preferred location.
                Get a showroom-quality detail without leaving your driveway. Available for all service packages.
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  'At your home or office',
                  'Flexible scheduling',
                  'All packages available',
                  'No travel hassle',
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-garage-light/80">
                    <Check className="h-3.5 w-3.5 text-garage-gold flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0 flex flex-col items-start md:items-center gap-2">
              <p className="font-display font-black text-3xl text-garage-gold">Custom</p>
              <p className="text-xs text-garage-muted font-display tracking-widest uppercase mb-2">Pricing</p>
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-garage-gold text-garage-dark font-display font-black text-sm tracking-[0.2em] uppercase transition-all duration-200 hover:bg-garage-gold-light whitespace-nowrap"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
