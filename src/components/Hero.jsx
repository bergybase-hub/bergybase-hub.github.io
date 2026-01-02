import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    subtitle: '— BERGYBIT —',
    title: 'YOUR IDEA, OUR EXPERTISE',
    description: 'We specialize in delivering  cutting-edge technology solutions tailored to your business needs.',
    image: 'https://cdn.pixabay.com/photo/2019/05/26/07/59/handshake-4229701_1280.jpg',
  },
  {
    subtitle: '— BERGYBIT —',
    title: 'BUILDING TOMORROW, TODAY!',
    description: 'We create future-proof software solutions that keep your business ahead of the curve.',
    image: 'https://cdn.pixabay.com/photo/2016/05/26/00/19/man-1416138_1280.jpg',
  },
  {
    subtitle: '— BERGYBIT —',
    title: 'EMPOWERING GROWTH THROUGH TECHNOLOGY',
    description: 'From small startups to large enterprises, we empower  organizations to unlock their full potential through cutting-edge technology solutions.',
    image: 'https://images.unsplash.com/photo-1688380692117-63178554d76d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-primary-dark">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[10000ms]"
            style={{ backgroundImage: `url('${slide.image}')` }}
          ></div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              <span className="block font-bold text-lg md:text-xl tracking-widest mb-4 uppercase">
                <span className="text-accent-blue">—</span> <span className="text-white">BERGYBIT</span> <span className="text-accent-blue">—</span>
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-6 md:leading-normal">
                {slide.title}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
                {slide.description}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-full bg-accent-blue text-white font-bold text-lg hover:bg-opacity-90 transition transform hover:scale-105"
                >
                  Start Your Project
                </a>
                <a
                  href="#portfolio"
                  className="px-8 py-3 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-primary-dark transition transform hover:scale-105"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-20 hidden md:block"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-20 hidden md:block"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-accent-blue w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;