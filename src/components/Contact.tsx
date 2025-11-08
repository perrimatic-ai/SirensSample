import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Waves, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Wave Divider */}
      <div className="wave-divider bg-gradient-to-b from-golden-ray to-coral-whisper">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M598.97,114.72c-17.36,2.72-33.65,8.54-50.09,13.9-22.84,7.44-46,14.24-69.67,19.6C447.33,154.4,415.7,157.8,384,159.44c-63.15,3.27-127.28-9.29-190.16-29.1C157.67,122.13,125.33,110.59,91.84,102.39,28.46,86.6-5.94,80.24,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83,906.67,72,823.78,31,743.84,14.19,661.58-3.15,575.78-4.16,493.39,12.17,435.55,23.9,379.4,43.24,321.39,56.44A600.21,600.21,0,0,1,0,27.35c5.94,52.89,28.46,59.25,91.84,75.04,33.49,8.2,65.83,19.74,101.92,27.95,62.88,19.81,127,32.37,190.16,29.1,31.7-1.64,63.33-5,95.21-11.18,23.7-4.36,46.83-12.16,69.67-19.6,16.44-5.36,32.73-11.18,50.09-13.9Z" className="wave" fill="rgba(255, 215, 0, 0.6)"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="wave" fill="rgba(255, 107, 53, 0.4)"></path>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="wave" fill="rgba(255, 215, 0, 0.2)"></path>
        </svg>
      </div>

      <div className="py-20 bg-gradient-to-b from-deep-current via-mystic-waters to-ocean-depths relative">
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
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="underwater-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 8}s`
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
          <h2 className="font-serif-elegant text-4xl md:text-6xl font-bold text-moonlight-pearl mb-6 flex items-center justify-center">
            <Sparkles className="w-8 h-8 mr-3 text-golden-ray" />
            Let's Create Something <span className="ocean-text-gradient">Amazing</span> Together
            <Sparkles className="w-8 h-8 ml-3 text-golden-ray" />
          </h2>
          <p className="font-sans-airy text-xl text-pearl-shimmer max-w-3xl mx-auto leading-relaxed">
            Ready to give your brand its signature sound? Get in touch and let's discuss how we can amplify your digital presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="ocean-card rounded-2xl p-8 pearl-glow">
              <h3 className="font-serif-elegant text-2xl font-semibold text-moonlight-pearl mb-6 flex items-center">
                <Waves className="w-6 h-6 mr-2 text-soft-aqua" />
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-soft-aqua to-gentle-teal rounded-lg flex items-center justify-center pearl-glow">
                    <Mail className="w-5 h-5 text-moonlight-pearl" />
                  </div>
                  <div>
                    <p className="font-sans-airy text-pearl-shimmer text-sm">Email us at</p>
                    <p className="font-sans-airy text-moonlight-pearl font-medium">hello@sirens.agency</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gentle-teal to-golden-ray rounded-lg flex items-center justify-center pearl-glow">
                    <Phone className="w-5 h-5 text-moonlight-pearl" />
                  </div>
                  <div>
                    <p className="font-sans-airy text-pearl-shimmer text-sm">Call us at</p>
                    <p className="font-sans-airy text-moonlight-pearl font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-golden-ray to-coral-whisper rounded-lg flex items-center justify-center pearl-glow">
                    <MapPin className="w-5 h-5 text-moonlight-pearl" />
                  </div>
                  <div>
                    <p className="font-sans-airy text-pearl-shimmer text-sm">Visit us at</p>
                    <p className="font-sans-airy text-moonlight-pearl font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="ocean-card rounded-2xl p-8 pearl-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-sans-airy text-pearl-shimmer text-sm font-medium mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-soft-aqua" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-ocean-depths border border-pearl-shimmer/30 rounded-lg text-moonlight-pearl placeholder-pearl-shimmer/50 focus:outline-none focus:ring-2 focus:ring-soft-aqua focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block font-sans-airy text-pearl-shimmer text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-soft-aqua" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-ocean-depths border border-pearl-shimmer/30 rounded-lg text-moonlight-pearl placeholder-pearl-shimmer/50 focus:outline-none focus:ring-2 focus:ring-soft-aqua focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-sans-airy text-pearl-shimmer text-sm font-medium mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-soft-aqua" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full pl-12 pr-4 py-3 bg-ocean-depths border border-pearl-shimmer/30 rounded-lg text-moonlight-pearl placeholder-pearl-shimmer/50 focus:outline-none focus:ring-2 focus:ring-soft-aqua focus:border-transparent resize-none transition-all duration-300"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full ocean-button text-moonlight-pearl font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:scale-105"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="ocean-card rounded-xl p-8 text-moonlight-pearl">
            <h3 className="font-serif-elegant text-2xl md:text-3xl font-bold mb-4">
              Ready to <span className="ocean-text-gradient">Sound Different</span>?
            </h3>
            <p className="font-sans-airy text-pearl-shimmer mb-6">
              Let's create something extraordinary together. Your brand deserves to be heard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="ocean-button px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="border border-soft-aqua text-soft-aqua px-8 py-3 rounded-lg font-semibold hover:bg-soft-aqua hover:text-moonlight-pearl transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Underwater Ambient Light */}
      <div className="absolute inset-0 bg-underwater-light pointer-events-none opacity-15"></div>
      </div>
    </section>
  );
};

export default Contact;