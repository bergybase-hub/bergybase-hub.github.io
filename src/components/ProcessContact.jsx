import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your business goals, target audience, and requirements.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We develop a comprehensive plan and roadmap to ensure project success.',
  },
  {
    number: '03',
    title: 'Design & Dev',
    description: 'Our team crafts the UI/UX and builds the solution using cutting-edge tech.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy your product and provide ongoing support and optimization.',
  },
];

const ProcessContact = () => {
  return (
    <section id="process" className="py-20 bg-gray-50">
      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-wide text-primary-dark mb-4">OUR PROCESS</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven workflow that delivers results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center relative overflow-hidden group hover:shadow-md transition-shadow">
               <div className="w-12 h-12 bg-accent-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                 {step.number}
               </div>
               <h3 className="text-xl font-bold font-subheading text-primary-dark mb-2 relative z-10">{step.title}</h3>
               <p className="text-gray-600 relative z-10">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      {/* <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-dark rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 text-white">
              <h2 className="text-3xl font-bold font-heading tracking-wide mb-6">Let's Talk</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Ready to start your next project? Contact us today.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-accent-lime" />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-accent-lime" />
                  </div>
                  <span>hello@bergybit.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent-lime" />
                  </div>
                  <span>123 Tech Avenue, Innovation City</span>
                </div>
              </div>
            </div>
            
            <div className="p-10 bg-white">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-blue focus:border-transparent outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-accent-blue text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default ProcessContact;
