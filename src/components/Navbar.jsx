import React, { useState, useEffect } from 'react';

function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header id="main-header" className={`fixed top-0 left-0 w-full z-50 px-4 md:px-8 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className={`max-w-7xl mx-auto bg-surface/80 backdrop-blur-md border border-border rounded-full px-6 flex items-center justify-between premium-shadow transition-all duration-500 ${scrolled ? 'py-2' : 'py-3'}`}>
        {/* Brand Logo */}
        <a href="#" className="font-serif text-2xl font-bold tracking-tight text-primary select-none flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 bg-primary rounded-full"></span>
          LAZZATI
        </a>

        {/* Desktop Links */}
        <nav class="hidden md:flex items-center gap-8 font-medium text-sm tracking-wider uppercase">
          <a href="#story" className="text-text-secondary hover:text-primary transition-colors py-1">Story</a>
          <a href="#menu" className="text-text-secondary hover:text-primary transition-colors py-1">Menu</a>
          <a href="#reservation" className="text-text-secondary hover:text-primary transition-colors py-1">Reservations</a>
          <a href="#contact" className="text-text-secondary hover:text-primary transition-colors py-1">Contact</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="w-10 h-10 rounded-full flex items-center justify-center text-text-secondary hover:bg-surface-container transition-colors" aria-label="Toggle Theme">
            <span className="material-symbols-outlined">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Book CTA */}
          <a href="#reservation" className="hidden sm:inline-block bg-primary hover:bg-primary-hover text-white text-xs font-semibold tracking-wider uppercase px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95">
            Book Table
          </a>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none" aria-label="Toggle Menu">
            <span className={`w-6 h-0.5 bg-text-primary transition-transform duration-300 ${mobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-text-primary transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-text-primary transition-transform duration-300 ${mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 top-[88px] bg-bg/95 backdrop-blur-md z-40 flex flex-col items-center justify-center p-8 border-t border-border transition-colors duration-500">
          <nav className="flex flex-col items-center gap-6 font-serif text-3xl text-center">
            <a href="#story" onClick={toggleMobileMenu} className="text-text-primary hover:text-primary transition-colors">Our Story</a>
            <a href="#menu" onClick={toggleMobileMenu} className="text-text-primary hover:text-primary transition-colors">Signature Menu</a>
            <a href="#reservation" onClick={toggleMobileMenu} className="text-text-primary hover:text-primary transition-colors">Book a Table</a>
            <a href="#contact" onClick={toggleMobileMenu} className="text-text-primary hover:text-primary transition-colors">Connect</a>
          </nav>
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <span className="material-symbols-outlined text-[18px]">phone</span> +92 71 5612345
            </div>
            <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold tracking-wider uppercase px-8 py-3 rounded-full transition-all">
              WhatsApp Chat
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
