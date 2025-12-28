import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ProcessContact from './components/ProcessContact';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <ProcessContact />
      {/* <Team /> */}
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;