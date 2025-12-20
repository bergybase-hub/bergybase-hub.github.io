import React from 'react';

const projects = [
  {
    title: 'FinTech Dashboard',
    description: 'A comprehensive financial analytics platform for real-time trading data.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'E-Commerce Redesign',
    description: 'Modernizing a legacy retail platform to boost conversion rates by 40%.',
    image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'HealthCare App',
    description: 'Secure patient portal for appointment scheduling and record management.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Logistics Optimizer',
    description: 'Route optimization engine reducing delivery times and fuel consumption.',
    image: 'https://images.unsplash.com/photo-1494415859740-21e878dd929d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'EdTech Platform',
    description: 'Interactive learning system with analytics for student performance.',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Smart Retail Analytics',
    description: 'In-store analytics and recommendations powered by computer vision.',
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Projects That Define Us.</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how we've helped other businesses transform their digital presence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-xl">
              <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <button className="self-start px-4 py-2 bg-accent-blue text-white font-bold rounded-md hover:bg-opacity-90 transition-colors">
                  View Case Study
                </button>
              </div>
              {/* Fallback content for mobile when not hovering - ensuring visibility on touch devices */}
              <div className="md:hidden p-6 absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/60 to-transparent">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <button className="text-accent-lime font-bold text-left text-sm">View Details &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
