import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Calendar, User, Tag, Clock, BookOpen, ArrowLeft } from 'lucide-react';
import ApplyModal from '../components/ApplyModal';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h2>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Course Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {course.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {course.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-700">
                <User className="w-5 h-5 mr-3 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Instructor</p>
                  <p className="font-medium">{course.instructor}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Start Date</p>
                  <p className="font-medium">{course.startDate}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 mr-3 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-medium">{course.duration || '3-6 months'}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <BookOpen className="w-5 h-5 mr-3 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Level</p>
                  <p className="font-medium">Beginner to Advanced</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-3 transition-all duration-300"
                  onClick={() => setIsApplyModalOpen(true)}
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => navigate('/courses')}
                >
                  View All Courses
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Course Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {course.fullDescription || course.description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This comprehensive program is designed to equip you with practical skills and industry-relevant knowledge. 
                  Our hands-on approach ensures you're job-ready by the end of the course.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {(course.topics || [
                    'Fundamental concepts and best practices',
                    'Industry-standard tools and technologies',
                    'Hands-on projects and real-world applications',
                    'Problem-solving and analytical skills',
                    'Career preparation and interview techniques'
                  ]).map((topic, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-blue-600 mr-3 mt-1">✓</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {course.prerequisites || 'Basic computer knowledge and enthusiasm to learn. No prior experience required for beginners.'}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Course Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Hands-on Training</p>
                    <p className="text-sm text-gray-600">Practical projects and assignments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Expert Instructors</p>
                    <p className="text-sm text-gray-600">Learn from industry professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <Tag className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Certification</p>
                    <p className="text-sm text-gray-600">Get certified upon completion</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <ApplyModal 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)}
        courseTitle={course.title}
      />
    </div>
  );
};

export default CourseDetails;