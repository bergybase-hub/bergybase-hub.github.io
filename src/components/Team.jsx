import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const team = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emily Davis',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'David Wilson',
    role: 'Senior Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">MEET OUR TEAM.</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A diverse team of experts passionate about technology.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
              <img 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-accent-light" 
                src={member.image} 
                alt={member.name} 
              />
              <h3 className="text-xl font-bold text-primary-dark">{member.name}</h3>
              <p className="text-accent-blue font-medium mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-accent-blue transition"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="text-gray-400 hover:text-blue-700 transition"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="text-gray-400 hover:text-black transition"><Github className="h-5 w-5" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team;