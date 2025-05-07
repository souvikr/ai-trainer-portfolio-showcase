
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Souvik's AI training program completely transformed how our marketing team uses AI tools. The ROI has been incredible.",
      name: "Sarah Johnson",
      role: "Marketing Director at Juno"
    },
    {
      quote: "As someone with little technical background, I was intimidated by AI. Souvik made it accessible and now I use it daily in my workflow.",
      name: "Michael Chen",
      role: "Content Strategist at Cutting Edge School"
    },
    {
      quote: "The custom AI solution Souvik developed for our customer service team reduced response times by 60%. Highly recommended!",
      name: "Alex Rivera",
      role: "Customer Experience Manager at Steora"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  // Handle autoplay
  useEffect(() => {
    let interval: number;
    
    if (autoplay) {
      interval = setInterval(next, 5000) as unknown as number;
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);
  
  return (
    <section className="py-24 bg-primary-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">
            Don't just take my word for it - hear from the people I've worked with.
          </p>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto px-4"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <blockquote className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
                    <div className="text-2xl text-gray-600 dark:text-gray-300 mb-6 font-light italic">
                      "{testimonial.quote}"
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prev}
              className="rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant={index === current ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrent(index)}
                className={index === current ? "bg-primary text-white" : ""}
              >
                {index + 1}
              </Button>
            ))}
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={next}
              className="rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
