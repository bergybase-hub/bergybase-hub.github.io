import React from 'react';
import { Facebook, Twitter, Linkedin, Github, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Bergybit</h3>
            <p className="text-gray-400 mb-6">
              Building the future with code. We transform ideas into profitable digital solutions.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-blue transition"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent-blue transition"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent-blue transition"><Github className="h-5 w-5" /></a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-accent-blue transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-accent-blue transition">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-accent-blue transition">Portfolio</a></li>
              {/* <li><a href="#team" className="text-gray-400 hover:text-accent-blue transition">Team</a></li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
             <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-accent-blue transition">Web Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent-blue transition">Mobile Apps</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent-blue transition">AI Agents</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-accent-blue mr-3 mt-1" />
                <span className="text-gray-400">info@bergybitinnovations.com</span>
              </li>
              {/* <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent-blue mr-3 mt-1" />
                <span className="text-gray-400">123 Innovation Drive,<br />Tech Valley, CA 94043</span>
              </li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            &copy; 2025 Bergybit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
