import React from 'react';
import CourseCard from '../common/CourseCard';
import { courses } from '../../data/courses';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const CoursesSection = () => {
  const navigate = useNavigate();

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
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300"
            onClick={() => navigate('/courses')}
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;