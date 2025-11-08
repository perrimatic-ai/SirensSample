import React from 'react';
import { Smartphone, Film, Wand2, Crown, Sparkles, Apple, Tv } from 'lucide-react';

const WhySound = () => {
  const soundExamples = [
    {
      brand: "Paytm",
      sound: "The Notification",
      icon: Smartphone,
      description: "That distinctive payment success sound"
    },
    {
      brand: "Apple",
      sound: "Classic Ringtone",
      icon: Apple,
      description: "Everyone knows that sound"
    },
    {
      brand: "Netflix",
      sound: "Ta-Dum",
      icon: Tv,
      description: "Two notes that mean entertainment"
    },
    {
      brand: "Avengers",
      sound: "Theme Music",
      icon: Film,
      description: "Epic orchestral hero entrance"
    },
    {
      brand: "Harry Potter",
      sound: "Hedwig's Theme",
      icon: Wand2,
      description: "Magical celesta that transports you"
    }
  ];

  return (
    <section id="why-sound" className="relative overflow-hidden">
      {/* Wave Divider */}
      <div className="wave-divider bg-gradient-to-b from-golden-ray to-coral-whisper">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="wave" fill="rgba(255, 215, 0, 0.6)"></path>
          <path d="M1200,0H0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="wave" fill="rgba(255, 215, 0, 0.4)"></path>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="wave" fill="rgba(255, 107, 53, 0.2)"></path>
        </svg>
      </div>

      <div className="py-24 bg-gradient-to-b from-deep-current via-mystic-waters to-ocean-depths relative">
      {/* Underwater Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="light-ray"
            style={{
              left: `${10 + i * 10}%`,
              top: `${Math.random() * 70}%`,
              animationDelay: `${i * 0.6}s`,
              transform: `rotate(${-20 + Math.random() * 40}deg)`,
            }}
          />
        ))}
      </div>

      {/* Floating Underwater Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
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
        {[...Array(8)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="floating-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif-elegant text-4xl md:text-6xl font-bold text-moonlight-pearl mb-8">
            Why Your Brand Needs a <span className="ocean-text-gradient">Sound</span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="font-sans-airy text-xl text-pearl-shimmer leading-relaxed mb-8">
              Think of the roar of a Ferrari, the pop of a soda, or the theme song of your favorite movie - 
              Interstellar, The Godfather. Apple has its classic ringtone. Netflix has its iconic ta-dum. 
              Even the superheroes we grew up with all have their signature sounds.
            </p>
          </div>
        </div>

        {/* Sound Examples Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {soundExamples.map((example, index) => {
            const Icon = example.icon;
            const gradients = [
              'from-soft-aqua to-gentle-teal',
              'from-gentle-teal to-golden-ray',
              'from-golden-ray to-coral-whisper',
              'from-coral-whisper to-crystal-blue'
            ];
            return (
              <div
                key={index}
                className="ocean-card rounded-2xl p-8 transition-all duration-500 group hover:scale-105 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center group-hover:animate-shimmer pearl-glow shadow-lg`}>
                    <Icon className="w-8 h-8 text-moonlight-pearl" />
                  </div>
                </div>
                <h3 className="font-serif-elegant text-xl font-semibold text-moonlight-pearl text-center mb-3">
                  {example.brand}
                </h3>
                <p className="text-soft-aqua text-center font-medium mb-3 text-lg">
                  "{example.sound}"
                </p>
                <p className="font-sans-airy text-pearl-shimmer text-sm text-center leading-relaxed">
                  {example.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Message */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="ocean-card rounded-3xl p-10 md:p-16 pearl-glow">
            <h3 className="font-serif-elegant text-3xl md:text-4xl font-bold text-moonlight-pearl mb-8">
              We Recognize and Remember Through <span className="ocean-text-gradient">Sound</span>
            </h3>
            <p className="font-sans-airy text-xl text-pearl-shimmer leading-relaxed mb-10">
              Now, imagine your business has its own signature sound. Your brand isn't just seen - 
              it's <span className="font-semibold text-soft-aqua">heard even before it's seen</span>. 
              People remember your sound, the feeling it evokes - not just your business, but your personal brand, 
              the signature sound of your wedding, birthday, company, or any event.
            </p>
            
            <div className="text-center mb-10">
              <div className="flex items-center justify-center mb-4">
                <Crown className="w-10 h-10 text-golden-ray mr-4 animate-shimmer" />
                <h4 className="font-serif-elegant text-4xl font-bold ocean-text-gradient">
                  Your Own Theme Song.
                </h4>
                <Crown className="w-10 h-10 text-golden-ray ml-4 animate-shimmer" />
              </div>
            </div>

            <div className="border-t border-soft-aqua/20 pt-10">
              <p className="font-sans-airy text-lg text-pearl-shimmer leading-relaxed mb-8">
                It's the choice between being a company and being a brand, between merely existing and being unforgettable. 
                Think about it - nothing stirs you over a normal phone ring, yet everyone recognizes the instant an Apple ringtone plays.
              </p>
              
              <div className="text-center">
                <p className="font-serif-elegant text-2xl md:text-3xl font-bold text-moonlight-pearl mb-8 flex items-center justify-center flex-wrap">
                  The choice is yours: just exist… or 
                  <span className="ocean-text-gradient ml-2 flex items-center">
                    <Sparkles className="w-7 h-7 mr-2 animate-shimmer" />
                    choose sound
                    <Sparkles className="w-7 h-7 ml-2 animate-shimmer" />
                  </span>
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="ocean-button text-moonlight-pearl px-12 py-5 rounded-full font-semibold text-xl transition-all duration-300 hover:shadow-lg hover:scale-105 ripple-container"
                >
                  Choose Your Sound
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Underwater Ambient Light */}
      <div className="absolute inset-0 bg-underwater-light pointer-events-none opacity-40"></div>
      </div>
    </section>
  );
};

export default WhySound;
