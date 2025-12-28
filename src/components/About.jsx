import React from 'react';
import { Eye, ShieldCheck, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary-light text-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">EMPOWERING INNOVATION AND GROWTH.</h2>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Eye className="h-10 w-10 text-accent-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-gray-600">Clear communication and open collaboration at every step.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <ShieldCheck className="h-10 w-10 text-accent-lime mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">Rigorous testing and best practices for bug-free code.</p>
            </div>
             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1 md:col-start-2">
              <TrendingUp className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Scalability</h3>
              <p className="text-gray-600">Solutions designed to grow effortlessly with your business.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;