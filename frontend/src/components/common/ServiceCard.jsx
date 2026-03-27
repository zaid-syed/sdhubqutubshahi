import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Bell, Users, Briefcase, MessageCircle, Handshake, Award } from 'lucide-react';

const iconMap = {
  Bell,
  Users,
  Briefcase,
  MessageCircle,
  Handshake,
  Award
};

const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon];

  return (
    <Card className="hover:shadow-xl transition-all duration-300 border border-gray-200 group bg-white h-full">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
          <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <CardTitle className="text-xl font-bold text-gray-900">
          {service.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="text-center">
        <CardDescription className="text-gray-600 mb-4">
          {service.description}
        </CardDescription>
        <Button 
          variant="link" 
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          View Details →
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;