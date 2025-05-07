
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById('what-i-do');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/30 dark:to-secondary/20 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-900 dark:text-white">
            Learn AI with me
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10">
            I help brands & teams unlock AI for real results
          </p>
          
          <div className="flex justify-center">
            <Button 
              onClick={scrollToWork}
              className="btn-primary text-lg group flex items-center gap-2"
              size="lg"
            >
              See My Work
              <ArrowDown className="h-4 w-4 group-hover:animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
