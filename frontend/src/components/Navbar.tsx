import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function scrollToSection(href: string) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-garage-dark/95 backdrop-blur-md shadow-lg shadow-black/50 border-b border-garage-gold/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-3 group"
          >
            <img
              src="/assets/generated/kare-logo.dim_256x256.png"
              alt="Kare Detailing Garage Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-sm"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-garage-gold text-lg md:text-xl tracking-wider uppercase">
                Kare
              </span>
              <span className="font-display font-bold text-garage-light text-xs md:text-sm tracking-[0.2em] uppercase">
                Detailing Garage
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 font-display font-semibold text-sm tracking-widest uppercase text-garage-muted hover:text-garage-gold transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-garage-gold group-hover:w-4/5 transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="ml-4 px-5 py-2 bg-garage-gold text-garage-dark font-display font-black text-sm tracking-widest uppercase hover:bg-garage-gold-light transition-colors duration-200"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-garage-light hover:text-garage-gold hover:bg-transparent"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-garage-panel border-l border-garage-gold/20 w-72"
            >
              <div className="flex flex-col h-full pt-8">
                <div className="flex items-center gap-3 mb-10 px-2">
                  <img
                    src="/assets/generated/kare-logo.dim_256x256.png"
                    alt="Kare Detailing Garage Logo"
                    className="h-10 w-10 object-contain rounded-sm"
                  />
                  <div className="flex flex-col leading-none">
                    <span className="font-display font-black text-garage-gold text-lg tracking-wider uppercase">
                      Kare
                    </span>
                    <span className="font-display font-bold text-garage-light text-xs tracking-[0.2em] uppercase">
                      Detailing Garage
                    </span>
                  </div>
                </div>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-left px-4 py-4 font-display font-bold text-base tracking-widest uppercase text-garage-muted hover:text-garage-gold hover:bg-garage-gold/5 transition-colors duration-200 border-b border-white/5"
                      >
                        {link.label}
                      </button>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto px-4 pb-8">
                  <SheetClose asChild>
                    <button
                      onClick={() => scrollToSection('#contact')}
                      className="w-full py-3 bg-garage-gold text-garage-dark font-display font-black text-sm tracking-widest uppercase hover:bg-garage-gold-light transition-colors duration-200"
                    >
                      Book Now
                    </button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
