import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web and mobile technologies including React, Flutter, Node.js, Python, and cloud platforms like AWS and Azure."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on complexity. A standard MVP typically takes 4-6 weeks, while larger enterprise solutions can take 4 months or more."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we offer various support and maintenance packages to ensure your software remains secure, up-to-date, and performs optimally."
  },
  {
    question: "How do you handle project management?",
    answer: "We follow Agile methodologies with bi-weekly sprints, regular demos, and transparent communication tools like Jira and Slack to keep you in the loop."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary-dark">Frequently Asked Questions.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-left text-primary-dark">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-accent-blue" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 bg-white">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
