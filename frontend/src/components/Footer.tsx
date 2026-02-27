import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function scrollToSection(href: string) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'kare-detailing-garage');

  return (
    <footer className="bg-garage-panel border-t border-garage-gold/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/kare-logo.dim_256x256.png"
                alt="Kare Detailing Garage"
                className="h-12 w-12 object-contain rounded-sm"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display font-black text-garage-gold text-xl tracking-wider uppercase">
                  Kare
                </span>
                <span className="font-display font-bold text-garage-light text-sm tracking-[0.2em] uppercase">
                  Detailing Garage
                </span>
              </div>
            </div>
            <p className="text-garage-muted text-sm leading-relaxed max-w-xs">
              Premium auto detailing services with meticulous attention to detail. Making every vehicle shine since day one.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: SiFacebook, label: 'Facebook', href: '#' },
                { Icon: SiInstagram, label: 'Instagram', href: '#' },
                { Icon: SiX, label: 'X (Twitter)', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-garage-gold/20 text-garage-muted hover:text-garage-gold hover:border-garage-gold/50 transition-colors duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-black text-sm tracking-[0.3em] uppercase text-garage-gold mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-display font-semibold text-sm tracking-wider uppercase text-garage-muted hover:text-garage-gold transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-black text-sm tracking-[0.3em] uppercase text-garage-gold mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                'Basic Exterior Wash — ₹599',
                'Interior + Exterior — ₹1499',
                'Bike Wash — ₹299',
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="font-display font-semibold text-sm tracking-wider text-garage-muted hover:text-garage-gold transition-colors duration-200"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 border border-garage-gold/20 bg-garage-gold/5">
              <p className="font-display font-bold text-xs tracking-widest uppercase text-garage-gold mb-1">
                Hours
              </p>
              <p className="text-sm text-garage-muted">Mon – Sun: 8:00 AM – 4:00 PM</p>
              <p className="text-sm text-garage-muted mt-1">
                <a
                  href="tel:+918527230903"
                  className="hover:text-garage-gold transition-colors duration-200"
                >
                  +91 8527230903
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-garage-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-garage-muted font-display tracking-wider">
            © {year} Kare Detailing Garage. All rights reserved.
          </p>
          <p className="text-xs text-garage-muted flex items-center gap-1.5">
            Built with{' '}
            <Heart className="h-3 w-3 text-garage-gold fill-garage-gold" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-garage-gold hover:text-garage-gold-light transition-colors duration-200 font-semibold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
