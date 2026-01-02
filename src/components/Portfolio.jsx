import React from 'react';
import fele1 from '../assets/fele1.png';
import wazobia from '../assets/wazobia.png';
import fele from '../assets/fele.png';
import safe from '../assets/safe.png';
import kora from '../assets/kora.png';


const projects = [
  {
    title: 'Fele Driver',
    description: 'Logistic app for drivers.',
    image: fele1,
    url:"https://apps.apple.com/ph/app/fele-express-driver/id6475085453",
  },
  {
    title: 'Wazobia',
    description: 'Language learning companion.',
    image: wazobia,
    url:"https://play.google.com/store/apps/details?id=com.begy.wazobia&hl=en",
  },
  {
    title: 'Fele Express',
    description: 'Logistic app for users',
    image: fele,
    url:"https://play.google.com/store/apps/details?id=com.vb.fellexpress&hl=en",
  },
  {
    title: 'Safe Point Token',
    description: 'Decentralized Finance Token',
    image: safe,
    url:"https://play.google.com/store/apps/details?id=com.bergybit.safedelivery&hl=en_US&gl=US",
  },
  {
    title: 'KORA 360 Professionals',
    description: 'Dynamic coaching and consulting firm.',
    image: kora,
    url:"https://play.google.com/store/apps/details?id=com.bergybit.safedelivery&hl=en_US&gl=US",

  },
  {
    title: 'Smart Retail Analytics',
    description: 'In-store analytics and recommendations powered by computer vision.',
    image: fele,
    url:"https://play.google.com/store/apps/details?id=com.bergybit.safedelivery&hl=en_US&gl=US",

  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-wide mb-4">SELECTED PROJECTS THAT DEFINE US.</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how we've helped other businesses transform their digital presence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-xl">
              <div className="w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold font-subheading text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
               <a href={project.url}><button className="self-start px-4 py-2 bg-accent-blue text-white font-bold rounded-md hover:bg-opacity-90 transition-colors">
                  View 
                </button></a> 
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
