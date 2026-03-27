import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NewsCard = ({ newsItem }) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 group cursor-pointer h-full flex flex-col"
      onClick={() => navigate(`/news/${newsItem.id}`)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={newsItem.image} 
          alt={newsItem.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      <CardHeader className="flex-grow">
        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {newsItem.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Calendar className="w-4 h-4 mr-2 text-blue-600" />
          <span>{newsItem.date}</span>
        </div>
        <p className="text-sm text-gray-600">
          {newsItem.category}
        </p>
      </CardContent>
    </Card>
  );
};

export default NewsCard;