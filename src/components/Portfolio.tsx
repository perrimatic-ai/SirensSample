import React from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign, Waves } from 'lucide-react';

const Portfolio = () => {
  const caseStudies = [
    {
      id: 1,
      client: "TechFlow Solutions",
      industry: "SaaS",
      challenge: "Low brand recognition in competitive market",
      solution: "Complete rebrand with signature sound identity",
      results: {
        brandRecall: "+340%",
        engagement: "+185%",
        conversions: "+120%"
      },
      soundElement: "Innovative notification chime for user onboarding",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      client: "GreenLeaf Organic",
      industry: "E-commerce",
      challenge: "Need to stand out in crowded organic food market",
      solution: "SEO optimization + unique checkout sound experience",
      results: {
        organicTraffic: "+275%",
        salesConversion: "+95%",
        customerRetention: "+160%"
      },
      soundElement: "Calming nature-inspired purchase confirmation sound",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 3,
      client: "UrbanFit Gym",
      industry: "Fitness",
      challenge: "Struggling to compete with larger fitness chains",
      solution: "Local SEO + social media + motivational sound branding",
      results: {
        localSearchRanking: "#1",
        membershipGrowth: "+210%",
        socialFollowing: "+890%"
      },
      soundElement: "Energizing achievement sounds for workout milestones",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="relative overflow-hidden">
      {/* Wave Divider */}
      <div className="wave-divider bg-gradient-to-b from-golden-ray to-coral-whisper">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="wave" fill="rgba(255, 215, 0, 0.6)"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="wave" fill="rgba(255, 107, 53, 0.4)"></path>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="wave" fill="rgba(255, 215, 0, 0.2)"></path>
        </svg>
      </div>

      <div className="py-24 bg-gradient-to-b from-mystic-waters via-ocean-depths to-deep-current relative">
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
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="underwater-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${14 + Math.random() * 6}s`
            }}
          />
        ))}
        
        {/* Floating Bubbles */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="floating-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${12 + Math.random() * 24}px`,
              height: `${12 + Math.random() * 24}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif-elegant text-4xl md:text-6xl font-bold text-moonlight-pearl mb-8">
            Success Stories That Resonate
          </h2>
          <p className="font-sans-airy text-xl text-pearl-shimmer max-w-4xl mx-auto leading-relaxed">
            See how we've transformed brands with strategic digital marketing and signature sound identities 
            that create lasting impressions and drive measurable results.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                study.featured ? 'ring-2 ring-soft-aqua ring-opacity-30' : ''
              }`}
            >
              <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-full object-cover"
                    />
                    {study.featured && (
                      <div className="absolute top-4 left-4 bg-soft-aqua text-moonlight-pearl px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Featured Case
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-serif-elegant text-2xl md:text-3xl font-bold text-ocean-depths">
                        {study.client}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-soft-aqua" />
                    </div>
                    <p className="text-gentle-teal font-medium">{study.industry}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-ocean-depths mb-1">Challenge</h4>
                      <p className="text-mystic-waters">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ocean-depths mb-1">Solution</h4>
                      <p className="text-mystic-waters">{study.solution}</p>
                    </div>
                    <div className="bg-gradient-to-r from-soft-aqua/10 to-gentle-teal/10 p-4 rounded-lg border border-soft-aqua/20">
                      <h4 className="font-semibold text-ocean-depths mb-2 flex items-center">
                        <Waves className="w-4 h-4 mr-2 text-soft-aqua" />
                        Sound Branding Element
                      </h4>
                      <p className="text-mystic-waters text-sm">{study.soundElement}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(study.results).map(([key, value], resultIndex) => {
                      const icons = [TrendingUp, Users, DollarSign];
                      const Icon = icons[resultIndex % icons.length];
                      const labels = {
                        brandRecall: "Brand Recall",
                        engagement: "Engagement",
                        conversions: "Conversions",
                        organicTraffic: "Organic Traffic",
                        salesConversion: "Sales Conversion",
                        customerRetention: "Retention",
                        localSearchRanking: "Local Search",
                        membershipGrowth: "Growth",
                        socialFollowing: "Social Following"
                      };

                      return (
                        <div key={key} className="text-center">
                          <div className="flex justify-center mb-2">
                            <Icon className="w-5 h-5 text-soft-aqua" />
                          </div>
                          <div className="font-bold text-lg text-ocean-depths">{value}</div>
                          <div className="text-xs text-gentle-teal">{labels[key as keyof typeof labels]}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="ocean-card rounded-2xl p-12 text-moonlight-pearl">
            <h3 className="font-serif-elegant text-3xl md:text-4xl font-bold mb-6">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="font-sans-airy text-pearl-shimmer mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Join the brands that have transformed their market presence with our unique combination 
              of digital marketing expertise and signature sound design.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="ocean-button text-moonlight-pearl px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 ripple-container"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>

      {/* Underwater Ambient Light */}
      <div className="absolute inset-0 bg-underwater-light pointer-events-none opacity-15"></div>
      </div>
    </section>
  );
};

export default Portfolio;