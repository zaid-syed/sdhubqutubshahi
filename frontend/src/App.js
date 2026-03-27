import React from 'react';
import './App.css';
import Header from './components/Header';
import TechCarousel from './components/TechCarousel';
import CoursesSection from './components/CoursesSection';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';
import NewsSection from './components/NewsSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <TechCarousel />
      <CoursesSection />
      <ServicesSection />
      <StatsSection />
      <NewsSection />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default App;