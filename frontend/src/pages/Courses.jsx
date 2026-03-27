import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/common/CourseCard';
import { courses } from '../data/courses';

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Courses
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of job-oriented training programs designed to help you succeed in your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;