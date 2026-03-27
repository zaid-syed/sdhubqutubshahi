import React from 'react';
import GallerySection from '../common/GallerySection';
import { galleries } from '../../data/galleries';

const GalleriesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Moments that matter - Capturing our journey of learning, growth, and celebration
          </p>
        </div>

        <div className="space-y-12">
          {galleries.map((gallery) => (
            <GallerySection key={gallery.id} gallery={gallery} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleriesSection;