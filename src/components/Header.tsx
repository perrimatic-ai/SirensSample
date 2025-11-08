import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'ocean-card shadow-2xl backdrop-blur-ocean' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-soft-aqua shadow-lg">
              <img 
                src="/SirensLogo.jpeg" 
                alt="Sirens Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-serif-elegant text-2xl font-bold ocean-text-gradient">Sirens</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-all duration-300 font-medium relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-soft-aqua transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('why-sound')}
              className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-all duration-300 font-medium relative group"
            >
              Why Sound?
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-soft-aqua transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('sound-demos')}
              className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-all duration-300 font-medium relative group"
            >
              Demos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-soft-aqua transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-all duration-300 font-medium relative group"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-soft-aqua transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-soft-aqua transition-all duration-300 group-hover:w-full rounded-full"></span>
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block ocean-button text-moonlight-pearl px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-pearl-shimmer hover:text-soft-aqua transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden ocean-card border-t border-soft-aqua/20 backdrop-blur-ocean">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-3 text-pearl-shimmer hover:text-soft-aqua transition-colors font-medium rounded-lg hover:bg-soft-aqua/10"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why-sound')}
                className="block w-full text-left px-4 py-3 text-pearl-shimmer hover:text-soft-aqua transition-colors font-medium rounded-lg hover:bg-soft-aqua/10"
              >
                Why Sound?
              </button>
              <button 
                onClick={() => scrollToSection('sound-demos')}
                className="block w-full text-left px-4 py-3 text-pearl-shimmer hover:text-soft-aqua transition-colors font-medium rounded-lg hover:bg-soft-aqua/10"
              >
                Demos
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left px-4 py-3 text-pearl-shimmer hover:text-soft-aqua transition-colors font-medium rounded-lg hover:bg-soft-aqua/10"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 text-pearl-shimmer hover:text-soft-aqua transition-colors font-medium rounded-lg hover:bg-soft-aqua/10"
              >
                Contact
              </button>
              <div className="px-4 pt-2">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full ocean-button text-moonlight-pearl px-6 py-3 rounded-full font-medium transition-all duration-300"
                >
                  Get Quote
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
