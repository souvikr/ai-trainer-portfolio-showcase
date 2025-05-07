
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  
  // In a real application, we would fetch the post data based on the slug
  // This is a hardcoded example for the demo
  const post = {
    title: "How I Built an AI-Powered Chatbot in 48 Hours",
    date: "May 5, 2023",
    author: "Souvik Roy",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
    content: `
      <p class="mb-4">Building an AI-powered chatbot used to be a complex endeavor that required extensive knowledge of machine learning and natural language processing. But with the rise of powerful AI APIs and frameworks, it's now possible to create sophisticated chatbots in a matter of days or even hours.</p>

      <p class="mb-4">In this post, I'll walk you through how I built a fully functional AI chatbot in just 48 hours using modern tools and frameworks.</p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Planning the Chatbot</h2>
      
      <p class="mb-4">Before diving into coding, I spent some time defining the scope and functionality of my chatbot:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>It would help users find information about AI training programs</li>
        <li>It should be able to answer common questions about AI concepts</li>
        <li>It should be able to guide users to appropriate learning resources</li>
        <li>It should have a conversational, helpful tone</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Setting Up the Technology Stack</h2>
      
      <p class="mb-4">For this project, I chose the following technologies:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>OpenAI's GPT API for the natural language processing</li>
        <li>React for the front-end user interface</li>
        <li>Node.js for the backend server</li>
        <li>Tailwind CSS for styling</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-8 mb-4">The Implementation Process</h2>
      
      <p class="mb-4">Here's a breakdown of the 48-hour development process:</p>

      <h3 class="text-xl font-semibold mt-6 mb-3">Day 1 (First 24 Hours)</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Hours 1-4: Research and planning</li>
        <li>Hours 5-8: Setting up the project structure and environment</li>
        <li>Hours 9-16: Building the backend API with Node.js</li>
        <li>Hours 17-24: Integrating the OpenAI API and testing responses</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-3">Day 2 (Next 24 Hours)</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Hours 25-32: Developing the React front-end and chat interface</li>
        <li>Hours 33-40: Styling with Tailwind CSS and adding animations</li>
        <li>Hours 41-46: Testing and bug fixing</li>
        <li>Hours 47-48: Deployment and final touches</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Code Implementation</h2>
      
      <p class="mb-4">Here's a snippet of the Node.js code that handles the conversation with the OpenAI API:</p>

      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto mb-6">
<code>const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateResponse(prompt) {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 150,
      temperature: 0.7,
    });
    return completion.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error generating response:", error);
    return "I'm sorry, I'm having trouble processing your request right now.";
  }
}

module.exports = { generateResponse };</code></pre>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Challenges and Solutions</h2>
      
      <p class="mb-4">During the development process, I encountered several challenges:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Context Management:</strong> Maintaining conversation context was tricky. I solved this by implementing a session-based context storage system.</li>
        <li><strong>Response Latency:</strong> API calls introduced some delay. I added typing indicators and optimistic UI updates to improve the user experience.</li>
        <li><strong>Cost Management:</strong> API calls can get expensive. I implemented caching for common questions and rate limiting to manage costs.</li>
      </ol>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Results and Lessons Learned</h2>
      
      <p class="mb-4">The chatbot was successfully completed within the 48-hour timeframe and exceeded my initial expectations in terms of capabilities. Key lessons learned:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Modern AI APIs dramatically reduce the development time for intelligent applications</li>
        <li>Proper prompt engineering is crucial for getting useful responses</li>
        <li>User experience considerations are just as important as the AI functionality</li>
      </ul>
      
      <p class="mb-4">In the next post, I'll explore how to fine-tune the model for specific use cases and improve response quality.</p>
    `
  };

  return (
    <article className="pt-16 pb-24">
      <div className="container-custom max-w-4xl">
        {/* Back button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-primary hover:underline mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>
        
        {/* Header */}
        <header className="mb-8">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <time dateTime="2023-05-05">{post.date}</time>
              <span className="mx-2">•</span>
              <span>by {post.author}</span>
            </div>
          </div>
          
          {/* Featured image */}
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </header>
        
        {/* Post content */}
        <div 
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300" 
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Share buttons */}
        <div className="flex items-center space-x-4 mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Share:</span>
          <button className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white">
            Twitter
          </button>
          <button className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white">
            LinkedIn
          </button>
          <button className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white">
            Facebook
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
