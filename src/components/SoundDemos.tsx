import React, { useState } from 'react';
import { Play, Pause, Volume2, Music, Waves, Sparkles } from 'lucide-react';

const SoundDemos = () => {
  const [playingDemo, setPlayingDemo] = useState<string | null>(null);

  const soundDemos = [
    {
      id: 'netflix-style',
      title: 'Netflix-Style Brand Sound',
      description: 'Deep, memorable audio logo for streaming platform',
      duration: '2.3s',
      category: 'Audio Logo'
    },
    {
      id: 'google-pay-chime',
      title: 'Payment Success Chime',
      description: 'Friendly, trustworthy sound for financial transactions',
      duration: '1.8s',
      category: 'UI Sound'
    },
    {
      id: 'startup-jingle',
      title: 'Tech Startup Jingle',
      description: 'Modern, innovative sound for app launches',
      duration: '3.1s',
      category: 'Brand Jingle'
    },
    {
      id: 'notification-tone',
      title: 'Custom Notification',
      description: 'Subtle, non-intrusive alert sound',
      duration: '1.2s',
      category: 'Notification'
    }
  ];

  const handlePlayPause = (demoId: string) => {
    if (playingDemo === demoId) {
      setPlayingDemo(null);
    } else {
      setPlayingDemo(demoId);
      // Simulate audio playback duration
      setTimeout(() => setPlayingDemo(null), 3000);
    }
  };

  return (
    <section id="sound-demos" className="relative overflow-hidden">
      {/* Wave Divider */}
      <div className="wave-divider bg-gradient-to-b from-coral-whisper to-golden-ray">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="wave" fill="rgba(255, 215, 0, 0.6)"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" opacity=".5" className="wave" fill="rgba(255, 107, 53, 0.4)"></path>
          <path d="M1200,120H0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47Z" opacity=".25" className="wave" fill="rgba(255, 215, 0, 0.2)"></path>
        </svg>
      </div>

      <div className="py-20 bg-gradient-to-b from-deep-current via-mystic-waters to-ocean-depths relative">
      {/* Underwater Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="light-ray"
            style={{
              left: `${12 + i * 12}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${i * 0.7}s`,
              transform: `rotate(${-10 + Math.random() * 20}deg)`,
            }}
          />
        ))}
      </div>

      {/* Floating Underwater Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="underwater-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          />
        ))}
        
        {/* Floating Bubbles */}
        {[...Array(6)].map((_, i) => (
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif-elegant text-4xl md:text-6xl font-bold text-moonlight-pearl mb-6">
            Hear the <span className="ocean-text-gradient">Magic</span>
          </h2>
          <p className="font-sans-airy text-xl text-pearl-shimmer max-w-3xl mx-auto leading-relaxed">
            Experience our signature brand sounds that captivate audiences and create lasting emotional connections. 
            Each sound is crafted to embody your brand's unique personality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {soundDemos.map((demo, index) => {
            const gradients = [
              'from-siren-teal to-cosmic-purple',
              'from-cosmic-purple to-divine-pink',
              'from-divine-pink to-celestial-gold',
              'from-celestial-gold to-aurora-green'
            ];
            
            return (
              <div
                key={demo.id}
                className="ocean-card rounded-2xl p-6 transition-all duration-300 group hover:scale-105 pearl-glow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-medium text-moonlight-pearl bg-gradient-to-r ${gradients[index]} px-3 py-1 rounded-full`}>
                    {demo.category}
                  </span>
                  <span className="text-sm text-pearl-shimmer font-mono">
                    {demo.duration}
                  </span>
                </div>

                <h3 className="font-serif-elegant text-lg font-semibold text-moonlight-pearl mb-2">
                  {demo.title}
                </h3>
                <p className="font-sans-airy text-pearl-shimmer text-sm mb-6 leading-relaxed">
                  {demo.description}
                </p>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handlePlayPause(demo.id)}
                    className={`flex items-center space-x-2 bg-gradient-to-r ${gradients[index]} text-moonlight-pearl px-4 py-2 rounded-lg transition-all duration-300 group-hover:shadow-lg hover:scale-105`}
                  >
                    {playingDemo === demo.id ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">
                      {playingDemo === demo.id ? 'Playing' : 'Play'}
                    </span>
                  </button>

                  <div className="flex items-center space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 bg-gradient-to-t ${gradients[index]} rounded-full transition-all duration-300 ${
                          playingDemo === demo.id
                            ? 'h-6 animate-pulse'
                            : 'h-3'
                        }`}
                        style={{
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {playingDemo === demo.id && (
                  <div className="mt-4 ocean-card rounded-lg p-3">
                    <div className="flex items-center space-x-2 text-soft-aqua">
                      <Volume2 className="w-4 h-4 animate-pulse" />
                      <div className="flex-1 bg-ocean-depths rounded-full h-2 overflow-hidden">
                        <div className={`bg-gradient-to-r ${gradients[index]} h-full rounded-full animate-pulse`} style={{ width: '60%' }} />
                      </div>
                      <Sparkles className="w-4 h-4 animate-pulse" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="font-sans-airy text-pearl-shimmer mb-6 flex items-center justify-center">
            <Waves className="w-5 h-5 mr-2 text-soft-aqua" />
            Ready to create your signature sound?
            <Waves className="w-5 h-5 ml-2 text-soft-aqua" />
          </p>
          <button className="ocean-button text-moonlight-pearl px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
            Start Your Sound Journey
          </button>
        </div>
      </div>

      {/* Underwater Ambient Light */}
      <div className="absolute inset-0 bg-underwater-light pointer-events-none opacity-20"></div>
      </div>
    </section>
  );
};

export default SoundDemos;
