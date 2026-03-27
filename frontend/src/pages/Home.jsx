import React from 'react';
import TechCarousel from '../components/TechCarousel';
import CoursesSection from '../components/CoursesSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import NewsSection from '../components/NewsSection';
import GallerySection from '../components/GallerySection';

const Home = () => {
  return (
    <div>
      <TechCarousel />
      <CoursesSection />
      <ServicesSection />
      <StatsSection />
      <NewsSection />
      <GallerySection />
    </div>
  );
};

export default Home;