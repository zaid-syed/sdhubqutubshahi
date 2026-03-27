import React, { useState, useRef } from 'react';
import { Code2, Cloud, Database, FileCode, BarChart3, Server, TrendingUp, Search, FileText, Layers, BookOpen, Link, Workflow, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';

const TechCarousel = () => {
  const scrollRef = useRef(null);
  const [selectedTech, setSelectedTech] = useState(null);

  const technologies = [
    { 
      name: 'Angular', 
      Icon: Code2,
      description: 'Angular is a powerful TypeScript-based framework for building dynamic web applications. Developed by Google, it provides a complete solution with built-in features for routing, forms, HTTP client, and more.',
      use: 'Enterprise web applications, Single Page Applications (SPAs)'
    },
    { 
      name: 'AWS', 
      Icon: Cloud,
      description: 'Amazon Web Services (AWS) is the world\'s most comprehensive cloud platform with over 200 services. It offers compute power, storage, databases, and machine learning capabilities.',
      use: 'Cloud hosting, scalable applications, serverless computing'
    },
    { 
      name: 'C++', 
      Icon: FileCode,
      description: 'C++ is a high-performance programming language used for system software, game development, and applications requiring direct hardware access and optimal speed.',
      use: 'Game engines, operating systems, embedded systems'
    },
    { 
      name: 'CSS', 
      Icon: FileText,
      description: 'Cascading Style Sheets (CSS) is the styling language for web pages. It controls layout, colors, fonts, and responsive design for beautiful user interfaces.',
      use: 'Web design, responsive layouts, animations'
    },
    { 
      name: 'Excel', 
      Icon: BarChart3,
      description: 'Microsoft Excel is a spreadsheet program for data analysis, calculations, and visualization. Essential for business analytics and financial modeling.',
      use: 'Data analysis, financial modeling, reporting'
    },
    { 
      name: 'Express', 
      Icon: Server,
      description: 'Express.js is a minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications.',
      use: 'Backend APIs, web servers, RESTful services'
    },
    { 
      name: 'Google Analytics', 
      Icon: TrendingUp,
      description: 'Google Analytics tracks and reports website traffic, providing insights into user behavior, conversions, and marketing effectiveness.',
      use: 'Website analytics, user tracking, conversion optimization'
    },
    { 
      name: 'Google SEO', 
      Icon: Search,
      description: 'Search Engine Optimization techniques to improve website visibility in Google search results. Essential for digital marketing and online presence.',
      use: 'Website ranking, organic traffic, digital marketing'
    },
    { 
      name: 'HTML', 
      Icon: Globe,
      description: 'HyperText Markup Language (HTML) is the foundation of web development. It structures content on web pages using elements and tags.',
      use: 'Web pages, content structure, semantic markup'
    },
    { 
      name: 'JavaScript', 
      Icon: Code2,
      description: 'JavaScript is the programming language of the web. It enables interactive web pages and is essential for modern web development.',
      use: 'Interactive websites, web applications, frontend development'
    },
    { 
      name: 'Jupyter Notebook', 
      Icon: BookOpen,
      description: 'Jupyter Notebook is an open-source web application for creating documents with live code, equations, visualizations, and narrative text.',
      use: 'Data science, machine learning, research documentation'
    },
    { 
      name: 'LangChain', 
      Icon: Link,
      description: 'LangChain is a framework for developing applications powered by language models. It simplifies the creation of AI-powered applications.',
      use: 'AI applications, chatbots, language model integration'
    },
    { 
      name: 'MongoDB', 
      Icon: Database,
      description: 'MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. Ideal for modern applications requiring scalability.',
      use: 'Database management, big data, real-time applications'
    },
    { 
      name: 'Node.js', 
      Icon: Layers,
      description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine. It enables server-side JavaScript and is perfect for scalable network applications.',
      use: 'Backend development, APIs, real-time applications'
    },
    { 
      name: 'Power BI', 
      Icon: BarChart3,
      description: 'Microsoft Power BI is a business analytics tool that provides interactive visualizations and business intelligence capabilities.',
      use: 'Business intelligence, data visualization, reporting'
    },
    { 
      name: 'Python', 
      Icon: Workflow,
      description: 'Python is a versatile, high-level programming language known for its simplicity and readability. Widely used in data science, AI, and web development.',
      use: 'Data science, machine learning, automation, web development'
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Learn from 30+ Languages and Technologies
          </h2>
          <p className="text-center text-gray-600 mb-8">Click on any technology to learn more</p>
          
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-blue-50 transition-all duration-300 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>

            {/* Scrollable Container */}
            <div 
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-12"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {technologies.map((tech, index) => {
                const Icon = tech.Icon;
                return (
                  <div 
                    key={index}
                    onClick={() => setSelectedTech(tech)}
                    className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 cursor-pointer group"
                  >
                    <Icon className="w-12 h-12 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-gray-700 text-center px-2">{tech.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-blue-50 transition-all duration-300 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Technology Details Modal */}
      <Dialog open={!!selectedTech} onOpenChange={() => setSelectedTech(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            {selectedTech && (
              <>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <selectedTech.Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <DialogTitle className="text-2xl font-bold">{selectedTech.name}</DialogTitle>
                </div>
                <DialogDescription className="text-left space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">What is {selectedTech.name}?</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedTech.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Used For:</h4>
                    <p className="text-gray-700">{selectedTech.use}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg mt-4">
                    <p className="text-sm text-blue-900">
                      💡 <strong>Learn this at SD Hub Qutubshahi!</strong> Check out our courses to master {selectedTech.name}.
                    </p>
                  </div>
                </DialogDescription>
              </>
            )}
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default TechCarousel;