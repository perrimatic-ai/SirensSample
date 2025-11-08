import React, { useEffect, useRef, useState } from 'react';
import { Play, Sparkles } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([]);

  useEffect(() => {
    const createParticles = () => {
      const particleCount = 120;
      const newParticles = Array.from({ length: particleCount }, (_, i) => {
        const angle = (i / particleCount) * Math.PI * 2;
        const distance = 250 + Math.random() * 150;
        return {
          id: i,
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        };
      });
      setParticles(newParticles);
    };

    createParticles();

    const handleScroll = () => {
      if (heroRef.current) {
        const scrollTop = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        const progress = Math.min(scrollTop / (heroHeight * 0.8), 1);
        setScrollY(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const moonTranslateY = scrollY * 500;
  const moonScale = Math.max(0.5, 1 - scrollY * 0.6);
  const moonOpacity = Math.max(0, 1 - scrollY * 1.2);

  const contentOpacity = Math.max(0, 1 - scrollY * 1.5);
  const contentTranslateY = scrollY * 250;

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen bg-ocean-gradient overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute light-ray"
            style={{
              left: `${15 + i * 15}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${i * 0.8}s`,
              transform: `rotate(${-20 + Math.random() * 40}deg)`,
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div
        ref={containerRef}
        className="relative z-10 w-full h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Moon with Converging Particles */}
        <div
          className="relative flex items-center justify-center transition-none"
          style={{
            transform: `translateY(${moonTranslateY}px) scale(${moonScale})`,
            opacity: moonOpacity,
            willChange: 'transform, opacity',
          }}
        >
          {/* Particle System */}
          <div className="absolute w-full h-full flex items-center justify-center">
            {particles.map((particle) => {
              const convergence = 1 - scrollY;
              const currentX = particle.x * convergence;
              const currentY = particle.y * convergence;
              const particleOpacity = Math.max(0, 1 - scrollY * 2);

              return (
                <div
                  key={particle.id}
                  className="particle-dot absolute"
                  style={{
                    transform: `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px)) scale(${
                      0.5 + Math.random() * 0.5
                    })`,
                    opacity: particleOpacity,
                    transition: 'none',
                    willChange: 'transform, opacity',
                  }}
                />
              );
            })}
          </div>

          {/* Central Moon Orb */}
          <div className="moon-core relative z-10">
            <div className="moon-glow" />
            <div className="moon-circle" />
          </div>
        </div>

        {/* Hero Content */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-4xl px-6 z-20 transition-none"
          style={{
            opacity: contentOpacity,
            transform: `translate(-50%, calc(-50% + ${contentTranslateY}px))`,
            willChange: 'transform, opacity',
          }}
        >
          <h1 className="font-serif-elegant text-6xl md:text-7xl lg:text-8xl font-bold text-moonlight-pearl mb-8 leading-tight">
            Every Brand Has a Look.
            <br />
            Only the <span className="ocean-text-gradient">Great Ones</span> Have a{' '}
            <span className="ocean-text-gradient">Sound</span>.
          </h1>

          <p className="font-sans-airy text-lg md:text-2xl text-pearl-shimmer mb-12 leading-relaxed">
            We create signature sounds and comprehensive digital experiences that make your brand{' '}
            <span className="font-semibold text-soft-aqua">unforgettable</span> — heard even before it's seen.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group ocean-button text-moonlight-pearl px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ripple-container">
              <span className="flex items-center gap-3 relative z-10">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Hear Our Sound Demos
              </span>
            </button>
            <button className="group border-2 border-golden-ray text-golden-ray hover:bg-golden-ray hover:text-ocean-depths px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Get Your Free Consultation
            </button>
          </div>

          {/* Sound Wave Visualization */}
          <div className="ocean-sound-wave mb-12">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="ocean-sound-bar" />
            ))}
          </div>

          <p className="font-sans-airy text-pearl-shimmer text-sm flex items-center justify-center opacity-80">
            <Sparkles className="w-5 h-5 mr-3 text-golden-ray animate-shimmer" />
            Creating signature audio identities for brands worldwide
            <Sparkles className="w-5 h-5 ml-3 text-golden-ray animate-shimmer" />
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-moonlight-pearl rounded-full flex items-center justify-center opacity-60">
          <div className="w-1 h-2 bg-moonlight-pearl rounded-full animate-pulse" />
        </div>
      </div>

      {/* Ambient Light Overlay */}
      <div className="absolute inset-0 bg-underwater-light pointer-events-none opacity-25" />
    </section>
  );
};

export default Hero;
