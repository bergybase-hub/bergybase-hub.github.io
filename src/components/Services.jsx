import React from 'react';
import { Code, Smartphone, Cloud, Brain, GraduationCap } from 'lucide-react';

const services = [
  {
    title: 'Custom Web Development',
    description: 'Your website is your most important digital asset. We develop custom, high-performance websites that serve as the engine for your business growth. By combining clean code with conversion-focused design, we ensure your site is fast, secure, and fully responsive across all devices—providing a professional foundation that scales as you do.',
    icon: <Code className="h-8 w-8 text-accent-lime" />,
    tech: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ],
  },
  {
    title: 'Mobile App Development',
    description: 'We build more than just apps; we build digital products that drive growth. Our mobile development team specializes in creating intuitive, scalable, and secure applications for iOS and Android. From initial wireframing to final deployment, we ensure your app provides a seamless user journey and a powerful backend to support your business goals.',
    icon: <Smartphone className="h-8 w-8 text-accent-blue" />,
    tech: [
      { name: 'Flutter', logo: 'https://www.svgrepo.com/show/353751/flutter.svg' },
      { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    ],
  },
 
  {
    title: 'AI & ML Development',
    description: 'We design and deploy bespoke AI agents tailored to your unique business logic. Beyond simple chat, our agents are engineered to execute tasks, integrate with your existing tech stack, and act as autonomous team members that scale your operations without increasing your headcount.',
    icon: <Cloud className="h-8 w-8 text-purple-500" />,
    tech: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    ],
  }
 
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-wide text-primary-dark mb-4">OUR EXPERTISE, YOUR ADVANTAGE.</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to scale your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-primary-light p-8 rounded-xl shadow-lg md:shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="mb-6 p-4 bg-white rounded-full w-fit shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-subheading text-primary-dark mb-3">{service.title}</h3>
              <p className="text-lg text-gray-600 mb-6">{service.description}</p>
              <div className="border-t pt-4 border-gray-200">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-3 items-center">
                  {service.tech.map((t, i) => (
                    <span key={i} className="inline-flex items-center gap-2 bg-white px-2 py-1 rounded text-xs font-medium text-gray-700 border border-gray-200">
                      <img src={t.logo} alt={t.name} className="w-4 h-4" />
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
