import React from 'react';
import { Volume2, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube, Waves, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Wave Divider */}
      <div className="wave-divider bg-gradient-to-b from-mystic-waters to-ocean-depths">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200,0H0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47Z" className="wave" fill="rgba(10, 22, 40, 0.8)"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="wave" fill="rgba(10, 22, 40, 0.6)"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" opacity=".25" className="wave" fill="rgba(10, 22, 40, 0.4)"></path>
        </svg>
      </div>
      
      <div className="bg-gradient-to-b from-ocean-depths to-deep-current text-pearl-shimmer relative">
      {/* Underwater Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="light-ray"
            style={{
              left: `${12 + i * 12}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${i * 0.8}s`,
              transform: `rotate(${-15 + Math.random() * 30}deg)`,
            }}
          />
        ))}
      </div>

      {/* Floating Underwater Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="underwater-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          />
        ))}
        
        {/* Floating Bubbles */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="floating-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${8 + Math.random() * 16}px`,
              height: `${8 + Math.random() * 16}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-soft-aqua">
                <img 
                  src="/SirensLogo.jpeg" 
                  alt="Sirens Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif-elegant text-2xl font-bold ocean-text-gradient">Sirens</span>
            </div>
            <p className="font-sans-airy text-pearl-shimmer leading-relaxed">
              The only digital marketing agency that creates both your online presence and your brand's signature sound.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gradient-to-br from-soft-aqua to-gentle-teal hover:from-gentle-teal hover:to-golden-ray rounded-lg flex items-center justify-center transition-all duration-300 pearl-glow hover:scale-110">
                <Twitter className="w-4 h-4 text-moonlight-pearl" />
              </button>
              <button className="w-10 h-10 bg-gradient-to-br from-gentle-teal to-golden-ray hover:from-golden-ray hover:to-coral-whisper rounded-lg flex items-center justify-center transition-all duration-300 pearl-glow hover:scale-110">
                <Linkedin className="w-4 h-4 text-moonlight-pearl" />
              </button>
              <button className="w-10 h-10 bg-gradient-to-br from-golden-ray to-coral-whisper hover:from-coral-whisper hover:to-crystal-blue rounded-lg flex items-center justify-center transition-all duration-300 pearl-glow hover:scale-110">
                <Instagram className="w-4 h-4 text-moonlight-pearl" />
              </button>
              <button className="w-10 h-10 bg-gradient-to-br from-coral-whisper to-crystal-blue hover:from-crystal-blue hover:to-soft-aqua rounded-lg flex items-center justify-center transition-all duration-300 pearl-glow hover:scale-110">
                <Youtube className="w-4 h-4 text-moonlight-pearl" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif-elegant text-lg font-semibold mb-4 text-moonlight-pearl flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-soft-aqua" />
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-colors hover:translate-x-1 duration-300"
                >
                  Sound Branding
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-colors hover:translate-x-1 duration-300"
                >
                  SEO Optimization
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-colors hover:translate-x-1 duration-300"
                >
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-colors hover:translate-x-1 duration-300"
                >
                  Cinematic ADS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-colors hover:translate-x-1 duration-300"
                >
                  Brand Identity
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif-elegant text-lg font-semibold mb-4 text-moonlight-pearl flex items-center">
              <Waves className="w-4 h-4 mr-2 text-gentle-teal" />
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="font-sans-airy text-pearl-shimmer hover:text-gentle-teal transition-colors hover:translate-x-1 duration-300"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sound-demos')}
                  className="font-sans-airy text-pearl-shimmer hover:text-gentle-teal transition-colors hover:translate-x-1 duration-300"
                >
                  Sound Demos
                </button>
              </li>
              <li>
                <a href="#" className="font-sans-airy text-pearl-shimmer hover:text-gentle-teal transition-colors hover:translate-x-1 duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="font-sans-airy text-pearl-shimmer hover:text-gentle-teal transition-colors hover:translate-x-1 duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="font-sans-airy text-pearl-shimmer hover:text-gentle-teal transition-colors hover:translate-x-1 duration-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif-elegant text-lg font-semibold mb-4 text-moonlight-pearl flex items-center">
              <Mail className="w-4 h-4 mr-2 text-golden-ray" />
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-soft-aqua" />
                <span className="font-sans-airy text-pearl-shimmer">hello@sirens.agency</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-soft-aqua" />
                <span className="font-sans-airy text-pearl-shimmer">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-soft-aqua" />
                <span className="font-sans-airy text-pearl-shimmer">San Francisco, CA</span>
              </li>
            </ul>

            <button 
              onClick={() => scrollToSection('contact')}
              className="mt-4 ocean-button text-moonlight-pearl px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pearl-shimmer/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-sans-airy text-pearl-shimmer text-sm">
            © {currentYear} Sirens Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="font-sans-airy text-pearl-shimmer hover:text-soft-aqua transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Underwater Ambient Light */}
      <div className="absolute inset-0 bg-underwater-light pointer-events-none opacity-10"></div>
      </div>
    </footer>
  );
};

export default Footer;
