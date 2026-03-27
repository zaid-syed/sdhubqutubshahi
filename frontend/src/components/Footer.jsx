import React from 'react';
import { Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <img 
              src="https://sdhubqutubshahi.com/SD%20Hub%20Logo%20QS%20white.png" 
              alt="SD Hub Logo" 
              className="h-16 w-auto mb-4 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate('/')}
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We believe that access to quality education should not be limited by financial constraints, and we strive to level the playing field for all.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/company/sdhub-qutubshahi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/sdhubqutubshahi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/people/SD-Hub-Qutub-Shahi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigate('/about')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  About us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/contact')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Contact us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/contact')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Registration
                </button>
              </li>
              <li>
                <button 
                  onClick={() => alert('Sign in functionality coming soon!')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigate('/courses')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Courses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('/contact')}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center mb-2">
            © Managed by Professionals Solidarity Forum. Sponsored by Rahbar Foundation & The Safa Educational Welfare And Charitable Trust.
          </p>
          <p className="text-gray-400 text-sm text-center">
            Designed by <a href="https://luminatewebsol.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">Luminate Web Solutions</a>
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/+919154944461" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50 group hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
};

export default Footer;