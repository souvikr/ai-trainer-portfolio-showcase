
import { motion } from "framer-motion";

const FeaturedLogosSection = () => {
  const logos = [
    {
      name: "The Cutting Edge School",
      image: "/lovable-uploads/b7045933-6f48-4d3d-bb1d-92281beccabf.png",
      url: "https://cuttingedgeschool.com"
    },
    {
      name: "Juno",
      image: "/lovable-uploads/16813dab-b37e-4c42-a0f7-3a487e3d5d38.png",
      url: "https://juno.com"
    },
    {
      name: "Steora",
      image: "/lovable-uploads/ad841855-df9f-4773-b063-a8da20db7710.png",
      url: "https://steora.com"
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-10">
          Featured In
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {logos.map((logo, index) => (
            <motion.a
              key={index}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={logo.image} 
                alt={logo.name} 
                className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity filter dark:invert-[0.85]" 
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLogosSection;
