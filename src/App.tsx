import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhySound from './components/WhySound';
import SoundDemos from './components/SoundDemos';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <WhySound />
      <SoundDemos />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;