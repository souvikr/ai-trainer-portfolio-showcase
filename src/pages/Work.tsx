
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Work = () => {
  const brands = [
    {
      name: "The Cutting Edge School",
      logo: "/lovable-uploads/b7045933-6f48-4d3d-bb1d-92281beccabf.png",
      description: "Trained faculty on integrating AI into curriculum for more effective teaching methods and student learning experiences.",
      url: "https://cuttingedgeschool.com"
    },
    {
      name: "Juno",
      logo: "/lovable-uploads/16813dab-b37e-4c42-a0f7-3a487e3d5d38.png",
      description: "Implemented AI-powered analytics system to help optimize customer retention strategies and improve overall user experience.",
      url: "https://juno.com"
    },
    {
      name: "Steora",
      logo: "/lovable-uploads/ad841855-df9f-4773-b063-a8da20db7710.png",
      description: "Developed custom AI training programs for technical teams to enhance product development and innovation capabilities.",
      url: "https://steora.com"
    }
  ];

  const projects = [
    {
      title: "AI-Powered Customer Service Chatbot",
      description: "Designed and implemented an intelligent customer service chatbot that reduced support ticket volume by 40% and improved customer satisfaction scores.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
      url: "#"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Created a custom analytics dashboard using machine learning models to predict customer behaviors and optimize marketing campaigns.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
      url: "#"
    },
    {
      title: "AI Training Workshop Series",
      description: "Developed and led a 12-week training program for non-technical staff to effectively use AI tools in their daily workflows.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
      url: "#"
    }
  ];

  return (
    <>
      <section className="pt-20 pb-10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Current Work</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I partner with forward-thinking organizations to implement effective AI strategies
            </p>
          </div>
          
          {/* Brands Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-10 text-center text-gray-800 dark:text-gray-200">
              Brands I've Trained
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brands.map((brand, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="p-8 flex justify-center items-center bg-white dark:bg-gray-800 h-48">
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="h-24 w-auto object-contain filter dark:invert-[0.85]" 
                    />
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-gray-900">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {brand.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {brand.description}
                    </p>
                    <a 
                      href={brand.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                      Learn More
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Projects Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-10 text-center text-gray-800 dark:text-gray-200">
              Projects Gallery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <a 
                      href={project.url} 
                      className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                      View Project
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
