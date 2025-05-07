
import { Lightbulb, Users, Bot, Briefcase } from "lucide-react";

const WhatIDoSection = () => {
  const services = [
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "AI Workshops",
      description: "Customized training sessions for teams to understand and implement AI solutions effectively."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "1:1 Coaching",
      description: "Personalized guidance to help individuals master AI tools and techniques."
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "Custom AI Agents",
      description: "Development of specialized AI solutions tailored to your business needs."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Brand Partnerships",
      description: "Strategic collaborations to integrate AI capabilities into your brand offerings."
    }
  ];

  return (
    <section id="what-i-do" className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">
            I offer comprehensive AI training services to help organizations leverage the power of artificial intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
