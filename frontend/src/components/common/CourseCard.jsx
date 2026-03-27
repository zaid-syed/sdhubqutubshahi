import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Calendar, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 group cursor-pointer h-full flex flex-col"
      onClick={() => navigate(`/course/${course.id}`)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {course.category}
          </span>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">
          {course.title}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {course.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-2 flex-grow">
        <div className="flex items-center text-sm text-gray-600">
          <User className="w-4 h-4 mr-2 text-blue-600" />
          <span>Instructor: {course.instructor}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2 text-blue-600" />
          <span>Start Date: {course.startDate}</span>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/course/${course.id}`);
          }}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;