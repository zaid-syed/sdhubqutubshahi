import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! 👋 Welcome to SD Hub Qutubshahi! How can I help you today?",
      sender: 'bot',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    { text: '📚 Our Courses', key: 'courses' },
    { text: '📞 Contact Info', key: 'contact' },
    { text: '💼 Placements', key: 'placements' },
    { text: '📍 Location', key: 'location' }
  ];

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Courses
    if (message.includes('course') || message.includes('program') || message.includes('training')) {
      return "We offer various job-oriented courses:\n\n" +
        "🔹 Full Stack Development\n" +
        "🔹 Cloud DevOps\n" +
        "🔹 Data Science + Gen AI\n" +
        "🔹 Mobile App Development\n" +
        "🔹 Data Analytics\n" +
        "🔹 Accounting + Tally ERP\n\n" +
        "Would you like to know more about any specific course?";
    }

    // Contact
    if (message.includes('contact') || message.includes('phone') || message.includes('call') || message.includes('email')) {
      return "📞 Contact Information:\n\n" +
        "Phone: +91 91549 44461\n" +
        "Email: info@sdhubqutubshahi.com\n\n" +
        "You can also click on our WhatsApp button to chat directly!";
    }

    // Placements
    if (message.includes('placement') || message.includes('job') || message.includes('career')) {
      return "💼 We have excellent placement support!\n\n" +
        "Our students have been placed at:\n" +
        "• Tech Marvaly\n" +
        "• Luminate Web Solutions\n" +
        "• AVM Taxation\n" +
        "• And many more companies!\n\n" +
        "We provide resume building, interview preparation, and direct placement assistance.";
    }

    // Location
    if (message.includes('location') || message.includes('address') || message.includes('where')) {
      return "📍 Our Location:\n\n" +
        "SD Hub Qutubshahi\n" +
        "Near Qutub Shahi Tombs\n" +
        "Hyderabad, Telangana\n\n" +
        "Visit our Contact page for detailed directions!";
    }

    // Fees
    if (message.includes('fee') || message.includes('cost') || message.includes('price')) {
      return "💰 For course fees and batch details, please:\n\n" +
        "📞 Call us: +91 91549 44461\n" +
        "📧 Email: info@sdhubqutubshahi.com\n\n" +
        "Our team will provide detailed information about fees, duration, and payment options.";
    }

    // Duration
    if (message.includes('duration') || message.includes('long') || message.includes('time')) {
      return "⏱️ Course Duration:\n\n" +
        "Most courses range from 3-6 months with flexible timings.\n\n" +
        "We offer both weekday and weekend batches to suit your schedule!";
    }

    // Registration
    if (message.includes('register') || message.includes('enroll') || message.includes('join') || message.includes('admission')) {
      return "✅ Ready to join?\n\n" +
        "1. Click 'Register Now' button on our website\n" +
        "2. Call us: +91 91549 44461\n" +
        "3. Visit our campus\n\n" +
        "Our team will guide you through the admission process!";
    }

    // Greeting
    if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
      return "Hello! 👋 I'm here to help you with information about SD Hub Qutubshahi.\n\n" +
        "You can ask me about:\n" +
        "• Courses we offer\n" +
        "• Contact information\n" +
        "• Placements\n" +
        "• Location\n\n" +
        "What would you like to know?";
    }

    // Default response
    return "I'd be happy to help! You can ask me about:\n\n" +
      "📚 Courses and programs\n" +
      "📞 Contact information\n" +
      "💼 Placements and careers\n" +
      "📍 Our location\n" +
      "💰 Fees and duration\n\n" +
      "Or click the quick options below!";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      text: inputMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage]);
    setInputMessage('');

    // Bot response with slight delay
    setTimeout(() => {
      const botResponse = {
        text: getBotResponse(inputMessage),
        sender: 'bot',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 800);
  };

  const handleQuickReply = (key) => {
    const quickMessages = {
      courses: 'Tell me about your courses',
      contact: 'How can I contact you?',
      placements: 'Tell me about placements',
      location: 'Where are you located?'
    };
    
    setInputMessage(quickMessages[key]);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50 group animate-bounce-slow"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col animate-scale-in border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-2">
                <MessageCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">SD Hub Assistant</h3>
                <p className="text-xs text-blue-100">Online • Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-800 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none shadow-md'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-400'
                  }`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-2 bg-white border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply.key}
                  onClick={() => handleQuickReply(reply.key)}
                  className="text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors border border-blue-200"
                >
                  {reply.text}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 transition-all duration-300"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;