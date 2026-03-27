import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { news } from '../data/news';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';

const NewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const newsItem = news.find(n => n.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">News Not Found</h2>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <Card>
          {/* Featured Image */}
          <div className="relative overflow-hidden h-96">
            <img 
              src={newsItem.image} 
              alt={newsItem.title}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                <span>{newsItem.date}</span>
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2 text-blue-600" />
                <span>{newsItem.category}</span>
              </div>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900">
              {newsItem.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {newsItem.excerpt}
            </p>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {newsItem.content}
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                We are excited to announce this new development at SD Hub Qutubshahi. 
                This represents another step forward in our commitment to providing quality education and training opportunities.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Our programs are designed to equip students with the skills and knowledge needed to succeed in today's 
                competitive job market. We focus on practical, hands-on learning that prepares students for real-world challenges.
              </p>

              <p className="text-gray-700 leading-relaxed">
                For more information about this announcement or to learn more about our programs, please contact us or visit our courses page.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => navigate('/courses')}
              >
                Explore Our Courses
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewsDetails;