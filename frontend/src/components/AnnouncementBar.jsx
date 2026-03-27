import React, { useState, useEffect } from 'react';
import { X, Phone, MapPin, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        // Scrolling down and past 100px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Courses', path: '/courses' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div
      className={`bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 transition-transform duration-300 z-50 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-4 text-sm">
          <a href="tel:+919154944461" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
            <Phone className="w-3 h-3" />
            <span className="hidden sm:inline">+91 91549 44461</span>
          </a>
          <a href="mailto:info@sdhubqutubshahi.com" className="flex items-center gap-1 hover:text-blue-200 transition-colors hidden md:flex">
            <Mail className="w-3 h-3" />
            <span>info@sdhubqutubshahi.com</span>
          </a>
        </div>

        {/* Center: Quick Links */}
        <div className="flex items-center gap-4 text-sm font-medium">
          {quickLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className="hover:text-blue-200 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right: Location */}
        <div className="flex items-center gap-1 text-sm hidden lg:flex">
          <MapPin className="w-3 h-3" />
          <span>Qutub Shahi Tombs, Hyderabad</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;