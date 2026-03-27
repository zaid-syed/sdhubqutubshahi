import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { TrendingUp, Award, Briefcase } from 'lucide-react';
import { successStories } from '../../data/testimonials';

const SuccessStoriesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real transformations, real people, real success. These are just a few of the many success stories from our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <Card 
              key={story.id}
              className="hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    Success
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {story.title}
                </CardTitle>
                <p className="text-sm text-blue-600 font-medium">{story.course}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Before & After */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-semibold text-sm">Before:</span>
                    <span className="text-gray-600 text-sm">{story.beforeRole}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-semibold text-sm">After:</span>
                    <span className="text-gray-900 text-sm font-medium">{story.afterRole}</span>
                  </div>
                </div>

                {/* Story */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {story.story}
                </p>

                {/* Achievement Badge */}
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <p className="text-sm font-semibold text-blue-900">{story.achievement}</p>
                  </div>
                </div>

                {/* Salary */}
                {story.salary && (
                  <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                    <span className="text-sm text-gray-600">Current Status:</span>
                    <span className="text-lg font-bold text-green-600">{story.salary}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;