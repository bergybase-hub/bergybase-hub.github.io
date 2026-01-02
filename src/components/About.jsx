import React from 'react';
import { Eye, ShieldCheck, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary-light text-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="block font-bold font-subheading text-lg tracking-widest mb-2 uppercase">
              <span className="text-accent-blue">—</span> <span className="text-primary-dark">ABOUT US</span> <span className="text-accent-blue">—</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-wide mb-6">EMPOWERING INNOVATION AND GROWTH.</h2>
            <p className="text-lg text-gray-600 mb-6">
              At BergyBit, we believe that technology is the catalyst for meaningful change. 
              Our mission is to partner with visionary businesses to build robust, scalable, 
              and user-centric software solutions that drive real-world results.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We don't just write code; we architect the future of your business with a focus 
              on quality, transparency, and long-term partnership.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
                  <Eye className="h-8 w-8 text-accent-blue group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-1">Transparency</h3>
                  <p className="text-gray-600">Clear communication and open collaboration at every step of the journey.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-lime-50 p-3 rounded-lg group-hover:bg-accent-lime group-hover:text-white transition-colors duration-300">
                  <ShieldCheck className="h-8 w-8 text-accent-lime group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-1">Quality</h3>
                  <p className="text-gray-600">Rigorous testing and best practices ensuring bug-free, reliable code.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-purple-50 p-3 rounded-lg group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                  <TrendingUp className="h-8 w-8 text-purple-500 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-1">Scalability</h3>
                  <p className="text-gray-600">Solutions designed to grow effortlessly alongside your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
