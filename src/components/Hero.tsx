import React, { useEffect, useRef, useState } from 'react';
import { Play, Sparkles } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    const particleCount = 80;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 600,
      y: (Math.random() - 0.5) * 600,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);

    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const heroTop = rect.top;
        const heroHeight = rect.height;
        const scrollProgress = Math.max(0, Math.min(1, -heroTop / heroHeight));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const moonScale = 1 - scrollY * 0.5;
  const moonY = scrollY * 800;
  const moonOpacity = 1 - scrollY * 1.5;
  const contentOpacity = 1 - scrollY * 2;
  const contentY = scrollY * 400;

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen bg-ocean-gradient overflow-hidden">
      {/* Underwater Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="light-ray"
            style={{
              left: `${10 + i * 12}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${-10 + Math.random() * 20}deg)`,
            }}
          />
        ))}
      </div>

      {/* Floating Underwater Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
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
        {[...Array(8)].map((_, i) => (
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          {/* Scroll-Triggered Moon with Particle Convergence */}
          <div
            className="relative inline-block mb-12"
            style={{
              transform: `translateY(${moonY}px) scale(${moonScale})`,
              opacity: moonOpacity,
              transition: 'none'
            }}
          >
            <div className="moon-container">
              {/* Particle Dots that Converge */}
              {particles.map((particle) => {
                const convergeFactor = 1 - scrollY;
                const currentX = particle.x * convergeFactor;
                const currentY = particle.y * convergeFactor;

                return (
                  <div
                    key={particle.id}
                    className="particle-dot"
                    style={{
                      transform: `translate(${currentX}px, ${currentY}px)`,
                      transitionDelay: `${particle.delay}s`,
                      opacity: moonOpacity
                    }}
                  />
                );
              })}

              {/* Central Moon Circle */}
              <div className="moon-circle" />
            </div>
          </div>

          <h1
            className="font-serif-elegant text-5xl md:text-7xl font-bold text-moonlight-pearl mb-8 leading-tight"
            style={{
              transform: `translateY(${contentY}px)`,
              opacity: contentOpacity,
              transition: 'none'
            }}
          >
            Every Brand Has a Look.
            <br />
            Only the <span className="ocean-text-gradient">Great Ones</span> Have a <span className="ocean-text-gradient">Sound</span>.
          </h1>
          
          <p
            className="font-sans-airy text-xl md:text-2xl text-pearl-shimmer mb-10 max-w-4xl mx-auto leading-relaxed"
            style={{
              transform: `translateY(${contentY}px)`,
              opacity: contentOpacity,
              transition: 'none'
            }}
          >
            We create signature sounds and comprehensive digital experiences that make your brand 
            <span className="font-medium text-soft-aqua"> unforgettable</span> - heard even before it's seen.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            style={{
              transform: `translateY(${contentY}px)`,
              opacity: contentOpacity,
              transition: 'none'
            }}
          >
            <button className="group ocean-button text-moonlight-pearl px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ripple-container">
              <span className="flex items-center gap-3 relative z-10">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Hear Our Sound Demos
              </span>
            </button>
            <button className="group border-2 border-golden-ray text-golden-ray hover:bg-golden-ray hover:text-ocean-depths px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Get Your Free Consultation
            </button>
          </div>

          {/* Ocean Sound Wave Visualization */}
          <div
            className="ocean-sound-wave mb-12"
            style={{
              transform: `translateY(${contentY}px)`,
              opacity: contentOpacity,
              transition: 'none'
            }}
          >
            {[...Array(8)].map((_, i) => (
              <div key={i} className="ocean-sound-bar"></div>
            ))}
          </div>

          <p
            className="font-sans-airy text-pearl-shimmer text-sm flex items-center justify-center"
            style={{
              transform: `translateY(${contentY}px)`,
              opacity: contentOpacity * 0.8,
              transition: 'none'
            }}
          >
            <Sparkles className="w-5 h-5 mr-3 text-golden-ray animate-shimmer" />
            Creating signature audio identities for brands worldwide
            <Sparkles className="w-5 h-5 ml-3 text-golden-ray animate-shimmer" />
          </p>
        </div>
      </div>

      {/* Underwater Ambient Light */}
      <div className="absolute inset-0 bg-underwater-light pointer-events-none opacity-30"></div>
    </section>
  );
};

export default Hero;