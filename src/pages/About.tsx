
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  const skills = [
    "Python", "TensorFlow", "ChatGPT", "Prompt Engineering", "Data Analysis", 
    "Natural Language Processing", "Machine Learning", "Large Language Models", 
    "Deep Learning", "AI Training", "Consulting"
  ];

  const timeline = [
    {
      year: "2024",
      title: "Partnered with Juno",
      description: "Formed a strategic partnership with Juno to develop AI-powered analytics systems for customer retention."
    },
    {
      year: "2023",
      title: "Expanded AI Training Programs",
      description: "Launched expanded training program offerings including workshops, one-on-one coaching and custom AI solutions."
    },
    {
      year: "2022",
      title: "Trained 100+ Participants",
      description: "Reached a milestone of training over 100 professionals in AI technologies and applications."
    },
    {
      year: "2020",
      title: "Started AI Coaching",
      description: "Founded my AI coaching practice to help organizations effectively implement AI technologies."
    },
    {
      year: "2018",
      title: "AI Research Role",
      description: "Joined a leading tech company as an AI Research Associate focused on natural language processing."
    },
    {
      year: "2016",
      title: "Master's Degree in AI",
      description: "Completed a Master's degree in Artificial Intelligence and Machine Learning."
    }
  ];

  const faqs = [
    {
      question: "What types of clients do you work with?",
      answer: "I work with a diverse range of clients from startups to enterprise companies across various industries including education, technology, finance, and healthcare. Any organization looking to implement AI solutions or train their team on AI technologies can benefit from my services."
    },
    {
      question: "How long does a typical AI training program take?",
      answer: "Training programs are customized to meet specific needs and goals. Workshops typically range from half-day sessions to comprehensive multi-week programs. One-on-one coaching usually involves 4-8 sessions over 1-2 months. Custom AI solution development timelines vary based on project complexity."
    },
    {
      question: "Do I need technical knowledge to benefit from your training?",
      answer: "Not at all! My training programs are designed for participants with various technical backgrounds. I offer specialized tracks for both technical and non-technical professionals, ensuring everyone can benefit regardless of their prior experience with AI technologies."
    },
    {
      question: "How do you measure the success of your training?",
      answer: "Success metrics are defined collaboratively with clients before training begins. These typically include practical application of AI tools, successful implementation of AI projects, efficiency improvements, and qualitative feedback from participants. I also offer follow-up sessions to ensure long-term adoption."
    }
  ];

  return (
    <>
      <section className="pt-20 pb-10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Get to know my background, skills, and experience
            </p>
          </div>
          
          {/* Bio Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-lg">
                {/* This would be replaced with an actual headshot in a real portfolio */}
                <div className="bg-gradient-to-br from-primary to-primary-600 w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                  SR
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">I'm an AI Trainer with 5+ years of experience</h2>
              
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p>
                  I specialize in helping organizations and individuals harness the power of artificial intelligence through practical, results-focused training and consulting services.
                </p>
                <p>
                  With a background in both AI research and practical implementation, I bridge the gap between complex AI technologies and real-world business applications. My approach focuses on demystifying AI and making it accessible to everyone, regardless of technical background.
                </p>
                <p>
                  I've worked with organizations across various industries including education, technology, finance, and healthcare to implement AI solutions that drive measurable results.
                </p>
                <p>
                  My goal is to empower my clients to not just understand AI, but to effectively leverage it to solve problems, improve efficiency, and create new opportunities.
                </p>
              </div>
            </div>
          </div>
          
          {/* Skills Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
              Skills & Tools
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-sm py-2 px-4 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Timeline Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-10 text-center text-gray-800 dark:text-gray-200">
              My Journey
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                
                {/* Timeline entries */}
                <div className="space-y-12">
                  {timeline.map((event, index) => (
                    <div 
                      key={index} 
                      className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                      <div className="flex-1 md:w-1/2"></div>
                      
                      {/* Timeline dot */}
                      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-gray-900 z-10"></div>
                      
                      {/* Content */}
                      <div className="flex-1 ml-12 md:ml-0 md:w-1/2 md:px-8 relative">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                          <div className="font-semibold text-primary text-lg mb-1">
                            {event.year}
                          </div>
                          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQs Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-10 text-center text-gray-800 dark:text-gray-200">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 dark:border-gray-700">
                    <AccordionTrigger className="text-left py-6 font-medium text-gray-900 dark:text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300 pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
