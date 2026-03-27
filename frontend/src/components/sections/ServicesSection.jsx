import React, { useState } from 'react';
import ServiceCard from '../common/ServiceCard';
import { services } from '../../data/services';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Bell, Users, Briefcase, MessageCircle, Handshake, Award, CheckCircle } from 'lucide-react';

const iconMap = {
  Bell,
  Users,
  Briefcase,
  MessageCircle,
  Handshake,
  Award
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to career development ensures you get the skills, guidance, and support needed to succeed in today's competitive job market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    {React.createElement(iconMap[selectedService.icon], {
                      className: 'w-8 h-8 text-blue-600'
                    })}
                  </div>
                  <DialogTitle className="text-2xl font-bold">{selectedService.title}</DialogTitle>
                </div>
                <DialogDescription className="text-left space-y-6">
                  {/* Overview */}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-2">Overview</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedService.details.overview}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-3">What We Offer</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.details.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-3">Benefits</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <ul className="space-y-2">
                        {selectedService.details.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-700">
                            <span className="text-blue-600">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-lg text-white text-center">
                    <p className="text-lg font-semibold mb-2">Ready to get started?</p>
                    <p className="text-sm opacity-90">Contact us today to learn more about our {selectedService.title.toLowerCase()} services!</p>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServicesSection;