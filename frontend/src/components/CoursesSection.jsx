import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Calendar, User, Tag } from 'lucide-react';
import { courses } from '../data/mockData';

const CoursesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Delivering Job Oriented Training Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At SD Hub Qutubshahi, we offer a wide range of job-oriented training programs. Whether you are interested in coding, software development, digital marketing, Web Development, etc., we have a program that suits your profile and interest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
              
              <CardContent className="space-y-2">
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
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;