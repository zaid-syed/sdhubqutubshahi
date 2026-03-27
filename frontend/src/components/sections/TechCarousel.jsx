import React from 'react';
import { Code2, Cloud, Database, FileCode, BarChart3, Server, TrendingUp, Search, FileText, Layers, BookOpen, Link, Workflow, Globe } from 'lucide-react';

const TechCarousel = () => {
  const technologies = [
    { name: 'Angular', Icon: Code2 },
    { name: 'AWS', Icon: Cloud },
    { name: 'C++', Icon: FileCode },
    { name: 'CSS', Icon: FileText },
    { name: 'Excel', Icon: BarChart3 },
    { name: 'Express', Icon: Server },
    { name: 'Google Analytics', Icon: TrendingUp },
    { name: 'Google SEO', Icon: Search },
    { name: 'HTML', Icon: Globe },
    { name: 'JavaScript', Icon: Code2 },
    { name: 'Jupyter Notebook', Icon: BookOpen },
    { name: 'LangChain', Icon: Link },
    { name: 'MongoDB', Icon: Database },
    { name: 'Node.js', Icon: Layers },
    { name: 'Power BI', Icon: BarChart3 },
    { name: 'Python', Icon: Workflow },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Learn from 30+ Languages and Technologies
        </h2>
        
        <div className="relative">
          <div className="flex gap-8 animate-scroll">
            {/* First set */}
            {technologies.map((tech, index) => {
              const Icon = tech.Icon;
              return (
                <div 
                  key={`tech-1-${index}`} 
                  className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-2" />
                  <span className="text-xs font-medium text-gray-700 text-center px-2">{tech.name}</span>
                </div>
              );
            })}
            {/* Duplicate set for seamless loop */}
            {technologies.map((tech, index) => {
              const Icon = tech.Icon;
              return (
                <div 
                  key={`tech-2-${index}`} 
                  className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <Icon className="w-12 h-12 text-blue-600 mb-2" />
                  <span className="text-xs font-medium text-gray-700 text-center px-2">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechCarousel;