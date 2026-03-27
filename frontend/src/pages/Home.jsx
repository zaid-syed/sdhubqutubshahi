import React from 'react';
import TechCarousel from '../components/sections/TechCarousel';
import CoursesSection from '../components/sections/CoursesSection';
import ServicesSection from '../components/sections/ServicesSection';
import StatsSection from '../components/sections/StatsSection';
import NewsSection from '../components/sections/NewsSection';
import GalleriesSection from '../components/sections/GalleriesSection';

const Home = () => {
  return (
    <div>
      <TechCarousel />
      <CoursesSection />
      <ServicesSection />
      <StatsSection />
      <NewsSection />
      <GalleriesSection />
    </div>
  );
};

export default Home;