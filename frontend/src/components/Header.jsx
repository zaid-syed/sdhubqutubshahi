import React, { useState } from 'react';
import { Menu, X, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://sdhubqutubshahi.com/SD%20Hub%20Logo%20Q%202.png" 
              alt="SD Hub Qutubshahi" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="default" 
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
            >
              Register Now!
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              Sign In
            </Button>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-200">
              <a 
                href="https://www.linkedin.com/company/sdhub-qutubshahi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/sdhubqutubshahi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/people/SD-Hub-Qutub-Shahi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Button 
              variant="default" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Register Now!
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Sign In
            </Button>
            
            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center gap-4 pt-3 border-t border-gray-200">
              <a 
                href="https://www.linkedin.com/company/sdhub-qutubshahi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/sdhubqutubshahi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/people/SD-Hub-Qutub-Shahi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;