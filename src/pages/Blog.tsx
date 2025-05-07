
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: "1",
      title: "How I Built an AI-Powered Chatbot in 48 Hours",
      excerpt: "Learn how I created a fully functional AI chatbot using modern tools and frameworks in just 48 hours, and how you can do it too.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
      date: "May 5, 2023",
      author: "Souvik Roy",
      slug: "ai-powered-chatbot-48-hours"
    },
    {
      id: "2",
      title: "5 Ways AI is Transforming Content Creation",
      excerpt: "Discover how artificial intelligence is revolutionizing content creation across industries and how you can leverage these tools.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
      date: "April 20, 2023",
      author: "Souvik Roy",
      slug: "ai-transforming-content-creation"
    },
    {
      id: "3",
      title: "The Future of AI in Education",
      excerpt: "Exploring how AI is changing the landscape of education and what we can expect in the coming years.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
      date: "March 12, 2023",
      author: "Souvik Roy",
      slug: "future-of-ai-in-education"
    }
  ];

  return (
    <>
      <section className="pt-20 pb-10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Blog</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Insights, guides, and thoughts on AI, training, and technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <time dateTime="2023-02-15">{post.date}</time>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-primary font-medium hover:underline">
                    Read more 
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
