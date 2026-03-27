import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Target, Users, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About SD Hub Qutubshahi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering individuals through quality education and job-oriented training programs.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At SD Hub Qutubshahi, we believe that access to quality education should not be limited by financial constraints. 
                We strive to level the playing field for all individuals who aspire to build successful careers in technology and other fields.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to provide comprehensive, industry-focused training programs that equip students with practical skills 
                and knowledge needed to succeed in today's competitive job market.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">Committed to delivering the highest quality education and training</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">Building a supportive learning community for all students</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Achievement</h3>
                <p className="text-gray-600">Celebrating success and empowering students to reach their goals</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Inclusivity</h3>
                <p className="text-gray-600">Making quality education accessible to everyone</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">What We Offer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Job-Oriented Training Programs</h3>
                <p className="text-gray-700">Comprehensive courses in IT, Data Science, Web Development, Mobile App Development, and more.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Career Counselling</h3>
                <p className="text-gray-700">Personalized guidance to help you navigate your career path with confidence.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Partnerships</h3>
                <p className="text-gray-700">Strong network of industry partners for internships and placement opportunities.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Placement Support</h3>
                <p className="text-gray-700">Comprehensive support including resume building, portfolio development, and interview preparation.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sponsors */}
        <div className="text-center">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Supporters</h2>
              <p className="text-gray-700 mb-4">
                Managed by Professionals Solidarity Forum
              </p>
              <p className="text-gray-600">
                Sponsored by Rahbar Foundation & The Safa Educational Welfare And Charitable Trust
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;