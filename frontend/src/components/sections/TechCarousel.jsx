import React, { useState, useRef, useEffect } from 'react';
import { Code2, Cloud, Database, FileCode, BarChart3, Server, TrendingUp, Search, FileText, Layers, BookOpen, Link, Workflow, Globe, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';

const TechCarousel = () => {
  const scrollRef = useRef(null);
  const [selectedTech, setSelectedTech] = useState(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollInterval = useRef(null);

  const technologies = [
    { name: 'Angular', Icon: Code2, description: 'Angular is a powerful TypeScript-based framework for building dynamic web applications.', use: 'Enterprise web applications, SPAs' },
    { name: 'AWS', Icon: Cloud, description: 'Amazon Web Services is the world\'s most comprehensive cloud platform.', use: 'Cloud hosting, scalable applications' },
    { name: 'C++', Icon: FileCode, description: 'High-performance programming language for system software and game development.', use: 'Game engines, operating systems' },
    { name: 'CSS', Icon: FileText, description: 'Styling language for web pages controlling layout, colors, and responsive design.', use: 'Web design, responsive layouts' },
    { name: 'Excel', Icon: BarChart3, description: 'Spreadsheet program for data analysis and visualization.', use: 'Data analysis, financial modeling' },
    { name: 'Express', Icon: Server, description: 'Minimal and flexible Node.js web application framework.', use: 'Backend APIs, web servers' },
    { name: 'Google Analytics', Icon: TrendingUp, description: 'Track and report website traffic and user behavior.', use: 'Website analytics, user tracking' },
    { name: 'Google SEO', Icon: Search, description: 'Techniques to improve website visibility in search results.', use: 'Website ranking, digital marketing' },
    { name: 'HTML', Icon: Globe, description: 'Foundation of web development structuring content on web pages.', use: 'Web pages, content structure' },
    { name: 'JavaScript', Icon: Code2, description: 'Programming language of the web for interactive pages.', use: 'Interactive websites, web apps' },
    { name: 'Jupyter Notebook', Icon: BookOpen, description: 'Web application for creating documents with live code and visualizations.', use: 'Data science, machine learning' },
    { name: 'LangChain', Icon: Link, description: 'Framework for developing AI-powered applications.', use: 'AI applications, chatbots' },
    { name: 'MongoDB', Icon: Database, description: 'NoSQL database storing data in flexible JSON-like documents.', use: 'Database management, real-time apps' },
    { name: 'Node.js', Icon: Layers, description: 'JavaScript runtime for server-side development.', use: 'Backend development, APIs' },
    { name: 'Power BI', Icon: BarChart3, description: 'Business analytics tool with interactive visualizations.', use: 'Business intelligence, reporting' },
    { name: 'Python', Icon: Workflow, description: 'Versatile programming language for data science and web development.', use: 'Data science, machine learning, automation' },
  ];

  useEffect(() => {
    if (isAutoScrolling && scrollRef.current) {
      autoScrollInterval.current = setInterval(() => {
        if (scrollRef.current) {
          const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
          const currentScroll = scrollRef.current.scrollLeft;
          
          if (currentScroll >= maxScroll - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollRef.current.scrollBy({ left: 2, behavior: 'auto' });
          }
        }
      }, 30);
    }

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [isAutoScrolling]);

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
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 animate-slide-down">
            Learn from 30+ Languages and Technologies
          </h2>
          <p className="text-center text-gray-600 mb-4 animate-slide-down">
            Click on any technology to learn more
          </p>
          
          <div className="flex justify-center items-center gap-2 mb-6">
            <button
              onClick={() => setIsAutoScrolling(!isAutoScrolling)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              {isAutoScrolling ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span className="text-sm font-medium">{isAutoScrolling ? 'Pause' : 'Play'}</span>
            </button>
          </div>
          
          <div className="relative">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-blue-50 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>

            <div 
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-12"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseEnter={() => setIsAutoScrolling(false)}
              onMouseLeave={() => setIsAutoScrolling(true)}
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

            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-blue-50 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default TechCarousel;
