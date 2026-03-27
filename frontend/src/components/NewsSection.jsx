import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Calendar } from 'lucide-react';
import { news } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const NewsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            LATEST UPDATES AND NEWS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <Card 
              key={item.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 group cursor-pointer"
              onClick={() => navigate(`/news/${item.id}`)}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                  <span>{item.date}</span>
                </div>
                <p className="text-sm text-gray-600">
                  {item.category}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;