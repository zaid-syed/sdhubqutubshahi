import React, { useState } from 'react';
import { Button } from '../ui/button';
import ImageLightbox from '../ImageLightbox';

const GallerySection = ({ gallery }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? gallery.images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === gallery.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="mb-12 animate-slide-up">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {gallery.title}
          </h3>
          <Button 
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
          >
            View More
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.images.map((image, index) => (
            <div 
              key={index} 
              onClick={() => openLightbox(index)}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer aspect-video"
              style={{ animation: `fadeInScale 0.5s ease-out ${index * 0.1}s both` }}
            >
              <img 
                src={image} 
                alt={`${gallery.title} ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                  Click to view
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={gallery.images}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default GallerySection;
