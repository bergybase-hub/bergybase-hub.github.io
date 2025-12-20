import React from 'react';
import { Code, Smartphone, Cloud, Brain, GraduationCap } from 'lucide-react';

const services = [
  {
    title: 'Custom Web Development',
    description: 'Tailor-made web applications built for performance and scalability.',
    icon: <Code className="h-8 w-8 text-accent-lime" />,
    tech: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ],
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences that engage users.',
    icon: <Smartphone className="h-8 w-8 text-accent-blue" />,
    tech: [
      { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
      { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    ],
  },
  {
    title: 'Cloud Solutions',
    description: 'Secure and scalable cloud architecture to power your applications.',
    icon: <Cloud className="h-8 w-8 text-purple-500" />,
    tech: [
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
      { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ],
  },
  {
    title: 'AI Solutions',
    description: 'Machine learning and AI integrations to automate, predict, and personalize experiences.',
    icon: <Brain className="h-8 w-8 text-accent-blue" />,
    tech: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    ],
  },
  {
    title: 'BergyBit Training',
    description: 'Training programs in software development for teams and individuals.',
    icon: <GraduationCap className="h-8 w-8 text-accent-lime" />,
    tech: [
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Our Expertise, Your Advantage.</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to deliver world-class solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-primary-light p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="mb-6 p-4 bg-white rounded-full w-fit shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
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
