
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const Footer = () => {
  const [email, setEmail] = useState("");
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing!");
    setEmail("");
    // In a real implementation, this would connect to Mailchimp API
    console.log("Newsletter signup:", email);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 mt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-xl font-bold text-primary dark:text-white">Souvik Roy</h3>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Personal AI trainer and consultant specializing in helping brands leverage AI for real business results.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
              Pages
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Subscribe to my newsletter
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Get the latest AI insights and training tips delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-grow px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                />
                <Button type="submit" className="bg-primary hover:bg-primary-700 text-white whitespace-nowrap">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Souvik Roy. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2 md:mt-0">
            <Link to="/privacy" className="hover:text-primary dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            {" | "}
            <Link to="/terms" className="hover:text-primary dark:hover:text-white transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
