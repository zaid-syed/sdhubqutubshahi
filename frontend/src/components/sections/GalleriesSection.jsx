import React from 'react';
import GallerySection from '../common/GallerySection';
import { galleries } from '../../data/galleries';

const GalleriesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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