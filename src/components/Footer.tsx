
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6">
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-xl font-bold text-primary dark:text-white">Souvik Roy</h3>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Personal AI trainer and consultant specializing in helping brands leverage AI for real business results.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.linkedin.com/in/souvikroy5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/souvikr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
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
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Souvik Roy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
