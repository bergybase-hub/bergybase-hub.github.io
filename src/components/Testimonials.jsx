import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "BergyBit transformed our outdated platform into a modern, high-speed application. Their attention to detail is unmatched.",
    name: "Nastin Gwaza",
    company: "Fele Express",
  },
  {
    quote: "The team was incredibly responsive and transparent throughout the entire process. We delivered on time and under budget.",
    name: "Daniel Tsakar",
    company: "Value Beam LTD",
  },
  {
    quote: "Our user engagement increased by 200% after launching the new mobile app developed by BergyBit. Highly recommended!",
    name: "Audu Peter",
    company: "Wazobia",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-wide text-center mb-16">WHAT OUR CLIENTS SAY.</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl text-center">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-xl md:text-2xl font-medium text-gray-300 mb-8 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="font-bold font-subheading text-white text-lg">{testimonial.name}</div>
                    <div className="text-accent-blue">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prev} 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/10 hover:bg-white/20 p-2 rounded-full transition text-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button 
            onClick={next} 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/10 hover:bg-white/20 p-2 rounded-full transition text-white"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          
           <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
                <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-accent-blue' : 'bg-gray-600'
                }`}
                />
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
