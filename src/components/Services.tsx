import React from 'react';
import { Users, Volume2, BarChart3, Camera, CircleUser as UserCircle, Search, Globe, Building2, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Volume2, 
      title: "Brand Theme Song / Audio Identity",
      description: "Your signature sound that makes your brand instantly recognizable - like Netflix's ta-dum or Apple's ringtone.",
      featured: true,
      color: "from-soft-aqua to-gentle-teal"
    },
    {
      icon: Users,
      title: "Social Authority Content Creation",
      description: "Strategic content creation and planning that establishes your brand as the authority in your space.",
      featured: false,
      color: "from-gentle-teal to-golden-ray"
    },
    {
      icon: Camera,
      title: "Professional Ad Shoots",
      description: "From concept to camera to CGI - professional advertising shoots that captivate and convert your audience.",
      featured: false,
      color: "from-golden-ray to-coral-whisper"
    },
    {
      icon: UserCircle,
      title: "Model Providing",
      description: "Professional modeling services to give your brand the perfect face and personality for any campaign.",
      featured: false,
      color: "from-coral-whisper to-crystal-blue"
    },
    {
      icon: Search,
      title: "SEO & Ads",
      description: "Advanced SEO and strategic advertising that puts your brand where it needs to be found.",
      featured: false,
      color: "from-crystal-blue to-sea-foam"
    },
    {
      icon: Globe,
      title: "Website Design & Creation",
      description: "Professional website design and development that transforms your digital presence into a conversion powerhouse.",
      featured: false,
      color: "from-sea-foam to-aqua-dream"
    },
    {
      icon: Building2,
      title: "Google Listing & Business Registration",
      description: "Complete Google My Business setup and official business registration to establish your legitimate online presence.",
      featured: false,
      color: "from-aqua-dream to-mystic-waters"
    },
    {
      icon: BarChart3,
      title: "The Brand Book",
      description: "Complete brand identity system that ensures consistency across every touchpoint and interaction.",
      featured: false,
      color: "from-aqua-dream to-soft-aqua"
    }
  ];

  return (
    <section id="services" className="relative overflow-hidden">
      {/* Wave Divider */}
      <div className="wave-divider bg-gradient-to-b from-coral-whisper to-golden-ray">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="wave" fill="rgba(255, 215, 0, 0.3)"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="wave" fill="rgba(255, 107, 53, 0.4)"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="wave" fill="rgba(255, 215, 0, 0.6)"></path>
        </svg>
      </div>

      <div className="py-24 bg-gradient-to-b from-deep-current via-ocean-depths to-mystic-waters relative">
      {/* Underwater Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="light-ray"
            style={{
              left: `${15 + i * 15}%`,
              top: `${Math.random() * 60}%`,
              animationDelay: `${i * 0.8}s`,
              transform: `rotate(${-15 + Math.random() * 30}deg)`,
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
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${12 + Math.random() * 6}s`
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
              width: `${6 + Math.random() * 12}px`,
              height: `${6 + Math.random() * 12}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Underwater Ambient Light */}
      <div className="absolute inset-0 bg-underwater-light pointer-events-none opacity-40"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif-elegant text-4xl md:text-6xl font-bold text-moonlight-pearl mb-8">
            Full-Spectrum <span className="ocean-text-gradient">Digital Marketing</span>
          </h2>
          <p className="font-sans-airy text-xl text-pearl-shimmer max-w-4xl mx-auto leading-relaxed">
            From SEO to sound design, we provide comprehensive digital marketing solutions 
            that give your brand a complete competitive advantage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative siren-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                  service.featured ? 'ring-2 ring-soft-aqua ring-opacity-50 pearl-glow' : ''
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-4 left-6 bg-gradient-to-r from-soft-aqua to-gentle-teal text-moonlight-pearl px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Signature Service
                  </div>
                )}

                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-moonlight-pearl" />
                </div>

                <h3 className="font-serif-elegant text-xl font-semibold text-moonlight-pearl mb-4">
                  {service.title}
                </h3>

                <p className="font-sans-airy text-pearl-shimmer leading-relaxed">
                  {service.description}
                </p>

                {service.featured && (
                  <div className="mt-6 flex items-center text-soft-aqua font-medium text-sm">
                    <Volume2 className="w-4 h-4 mr-2" />
                    <span>Our Signature Edge</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="ocean-card rounded-2xl p-12 text-moonlight-pearl">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-ocean-depths to-deep-current rounded-full border-2 border-soft-aqua flex items-center justify-center animate-gentle-float shadow-lg">
                <img 
                  src="/SirensLogo.jpeg" 
                  alt="Sirens Logo" 
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
            </div>
            <h3 className="font-serif-elegant text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="ocean-text-gradient">Sound Different</span>?
            </h3>
            <p className="font-sans-airy text-pearl-shimmer mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Let's discuss how we can amplify your brand with both digital marketing excellence and signature sound design.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="ocean-button text-moonlight-pearl px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 ripple-container"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Underwater Ambient Light */}
      <div className="absolute inset-0 bg-underwater-light pointer-events-none opacity-20"></div>
      </div>
    </section>
  );
};

export default Services;
