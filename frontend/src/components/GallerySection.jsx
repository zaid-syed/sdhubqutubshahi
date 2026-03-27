import React from 'react';
import { Button } from './ui/button';
import { galleries } from '../data/mockData';

const GallerySection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {galleries.map((gallery) => (
            <div key={gallery.id} className="">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {gallery.title}
                </h3>
                <Button 
                  variant="outline" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  View More
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {gallery.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer aspect-video"
                  >
                    <img 
                      src={image} 
                      alt={`${gallery.title} ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;