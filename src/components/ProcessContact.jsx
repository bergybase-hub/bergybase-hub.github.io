import React from 'react';
import { Mail, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const ProcessContact = () => {
  return (
    <section id="contact" className="py-20 bg-primary-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From idea to launch, we guide you every step of the way.
          </p>
        </div>

        <div className="relative">
          <svg className="absolute left-0 right-0 mx-auto top-0 w-full h-40" viewBox="0 0 1200 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="roadmapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1385c6" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <path d="M0,150 C250,50 450,220 700,130 S1000,50 1200,160" stroke="url(#roadmapGradient)" strokeWidth="14" fill="none" strokeLinecap="round" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-24">
            <div className="relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-200">
                <span className="text-xl font-bold text-accent-blue">1</span>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                <p className="text-gray-600">Contact us via the email below and we will reach out to you within 24 hours.</p>
                <div className="mt-4 inline-flex items-center gap-2 text-accent-blue">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:hello@bergybit.com" className="font-semibold">hello@bergybit.com</a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-200">
                <span className="text-xl font-bold text-accent-blue">2</span>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-2">Schedule A Call</h3>
                <p className="text-gray-600">Tell us about your business requirements and challenges so we can provide a tailored solution for you.</p>
                <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-accent-blue text-white rounded-md font-semibold hover:bg-opacity-90">
                  <Calendar className="h-5 w-5" />
                  Book Consultation
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-200">
                <span className="text-xl font-bold text-accent-blue">3</span>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-2">Receive Estimate</h3>
                <p className="text-gray-600">We will provide you with a full cost and delivery time breakdown within days after the initial call.</p>
                <div className="mt-4 inline-flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-semibold">Detailed proposal & timeline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProcessContact;
