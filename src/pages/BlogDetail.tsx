
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const blogPosts = [
  {
    id: 1,
    title: "Optimizing Web Performance for Better User Experience",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1024&auto=format&fit=crop",
    author: "Ahmad",
    date: "April 10, 2023",
    description: "Learn how to optimize your website's performance to improve user experience, increase conversions, and boost search engine rankings. We cover key techniques like image optimization, code splitting, lazy loading, and more to ensure your site loads quickly and runs smoothly on all devices.",
    content: `
      <p>In today's digital landscape, website performance is more important than ever. Users expect websites to load quickly and provide a smooth experience, regardless of their device or connection speed. Performance optimization is not just about user satisfaction—it also impacts search engine rankings, conversion rates, and overall business success.</p>
      
      <h2>Why Performance Matters</h2>
      <p>Studies have consistently shown that users are quick to abandon websites that don't load fast enough. According to Google, as page load time increases from 1 second to 3 seconds, the probability of bounce increases by 32%. By 6 seconds, that probability jumps to 106%.</p>
      
      <p>Additionally, Google has made page speed a ranking factor for both desktop and mobile searches, meaning that performance optimization is now also an SEO concern.</p>
      
      <h2>Key Optimization Techniques</h2>
      
      <h3>1. Image Optimization</h3>
      <p>Images often make up the majority of a webpage's size. Optimizing images is one of the most effective ways to improve load times:</p>
      <ul>
        <li>Use modern formats like WebP instead of JPEG or PNG when possible</li>
        <li>Implement responsive images using srcset attribute</li>
        <li>Lazy load images that are not in the viewport</li>
        <li>Properly size images to avoid serving larger images than needed</li>
      </ul>
      
      <h3>2. Code Optimization</h3>
      <p>Minifying and optimizing your code can significantly reduce file sizes:</p>
      <ul>
        <li>Minify CSS, JavaScript, and HTML</li>
        <li>Implement code splitting to only load what's necessary</li>
        <li>Remove unused CSS and JavaScript</li>
        <li>Use tree shaking to eliminate dead code</li>
      </ul>
      
      <h3>3. Caching Strategy</h3>
      <p>Implementing effective caching can dramatically improve repeat visits:</p>
      <ul>
        <li>Set appropriate cache headers for static resources</li>
        <li>Utilize service workers for offline capabilities</li>
        <li>Implement browser caching</li>
        <li>Use CDNs to cache content geographically closer to users</li>
      </ul>
      
      <h2>Measuring Performance</h2>
      <p>To optimize effectively, you need to measure performance. Tools like Google Lighthouse, WebPageTest, and Chrome DevTools provide valuable insights into various performance metrics like:</p>
      <ul>
        <li>First Contentful Paint (FCP)</li>
        <li>Largest Contentful Paint (LCP)</li>
        <li>Cumulative Layout Shift (CLS)</li>
        <li>First Input Delay (FID)</li>
        <li>Time to Interactive (TTI)</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Performance optimization is an ongoing process, not a one-time task. As new technologies emerge and user expectations evolve, it's important to continuously monitor and improve your website's performance. By implementing the techniques outlined in this article, you can create a faster, more efficient website that provides a better user experience and performs better in search rankings.</p>
    `,
  },
  {
    id: 2,
    title: "The Future of UI/UX Design: Trends to Watch",
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1024&auto=format&fit=crop",
    author: "Fathul",
    date: "May 23, 2023",
    description: "Explore the latest trends in UI/UX design that are shaping the digital landscape. From microinteractions to voice user interfaces, discover how these innovations can enhance your digital products and create more engaging, intuitive user experiences that stand out in today's competitive market.",
    content: `
      <p>UI/UX design is constantly evolving, with new trends emerging regularly as technology advances and user expectations change. Staying ahead of these trends is crucial for designers who want to create modern, effective digital experiences. In this article, we explore some of the most influential UI/UX design trends that are shaping the future of digital design.</p>
      
      <h2>1. Dark Mode & Low-Light UIs</h2>
      <p>Dark mode has evolved from a nice-to-have feature to an expected standard. Benefits include:</p>
      <ul>
        <li>Reduced eye strain in low-light environments</li>
        <li>Battery conservation on OLED screens</li>
        <li>Creating a sense of sophistication and premium quality</li>
      </ul>
      <p>The challenge for designers is to maintain readability, accessibility, and brand consistency across both light and dark modes.</p>
      
      <h2>2. Voice User Interfaces (VUI)</h2>
      <p>As smart speakers and voice assistants continue to gain popularity, voice user interfaces are becoming increasingly important. Design considerations include:</p>
      <ul>
        <li>Creating conversational flows that feel natural</li>
        <li>Designing for users who can't see the interface</li>
        <li>Integrating voice with visual interfaces</li>
        <li>Ensuring privacy and security in voice interactions</li>
      </ul>
      
      <h2>3. Microinteractions</h2>
      <p>These small, subtle animations add personality to interfaces and provide feedback to users:</p>
      <ul>
        <li>Button hover states that provide visual feedback</li>
        <li>Form validation animations</li>
        <li>Pull-to-refresh actions</li>
        <li>Progress indicators</li>
      </ul>
      <p>Effective microinteractions enhance the user experience without being distracting.</p>
      
      <h2>4. 3D Elements & Immersive Experiences</h2>
      <p>Advancements in browser capabilities and device processing power have made it possible to incorporate more 3D elements into web and mobile interfaces:</p>
      <ul>
        <li>3D product visualizations</li>
        <li>Spatial interfaces</li>
        <li>Augmented reality experiences</li>
        <li>Immersive storytelling</li>
      </ul>
      
      <h2>5. Accessible Design</h2>
      <p>Accessibility is no longer optional—it's a fundamental aspect of good design:</p>
      <ul>
        <li>High contrast color schemes</li>
        <li>Screen reader compatibility</li>
        <li>Keyboard navigation</li>
        <li>Alternative text for images</li>
        <li>Transcripts for audio content</li>
      </ul>
      
      <h2>6. Neumorphism & Soft UI</h2>
      <p>This design trend creates interfaces that appear soft and extruded from the background, creating a tactile feel:</p>
      <ul>
        <li>Subtle shadows and highlights</li>
        <li>Soft, rounded shapes</li>
        <li>Monochromatic color schemes</li>
        <li>A sense of physical dimensionality</li>
      </ul>
      
      <h2>7. Data Visualization & Personalization</h2>
      <p>As data becomes increasingly important, effectively visualizing it and personalizing experiences based on it are key trends:</p>
      <ul>
        <li>Interactive charts and graphs</li>
        <li>Customized user dashboards</li>
        <li>Personal content recommendations</li>
        <li>User-specific features and functionality</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The future of UI/UX design lies in creating experiences that are not just visually appealing but also intuitive, accessible, and emotionally engaging. By keeping an eye on these trends and thoughtfully implementing relevant ones in your projects, you can create digital experiences that not only meet current user expectations but anticipate future needs as well.</p>
    `,
  },
  {
    id: 3,
    title: "Building Scalable Web Applications with Modern Technology",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1024&auto=format&fit=crop",
    author: "Hidayat",
    date: "June 15, 2023",
    description: "Discover the best practices for building scalable web applications that can handle growth and maintain performance. We cover architectural patterns, cloud infrastructure, database optimization, and caching strategies to ensure your applications can scale efficiently as your user base expands.",
    content: `
      <p>Scalability is a critical consideration when building modern web applications. As your user base grows, your application needs to handle increased traffic and data without performance degradation. This article explores key strategies and technologies for building web applications that can scale effectively.</p>
      
      <h2>Architectural Patterns for Scalability</h2>
      
      <h3>Microservices Architecture</h3>
      <p>Microservices architecture breaks down applications into smaller, loosely coupled services that can be developed, deployed, and scaled independently. Benefits include:</p>
      <ul>
        <li>Independent scaling of individual services based on demand</li>
        <li>Fault isolation to prevent system-wide failures</li>
        <li>Technology flexibility for different components</li>
        <li>Easier continuous deployment and integration</li>
      </ul>
      
      <h3>Serverless Architecture</h3>
      <p>Serverless computing allows developers to build and run applications without thinking about servers. It offers:</p>
      <ul>
        <li>Automatic scaling based on demand</li>
        <li>Pay-per-use pricing model</li>
        <li>Reduced operational complexity</li>
        <li>Faster time to market</li>
      </ul>
      
      <h2>Database Scalability</h2>
      
      <h3>Horizontal Scaling with Sharding</h3>
      <p>Database sharding distributes data across multiple database instances, allowing for horizontal scaling. This approach:</p>
      <ul>
        <li>Spreads read/write load across multiple servers</li>
        <li>Allows for more efficient queries on smaller data sets</li>
        <li>Reduces the impact of individual server failures</li>
      </ul>
      
      <h3>NoSQL Databases</h3>
      <p>NoSQL databases like MongoDB, Cassandra, or DynamoDB are designed for scalability and flexibility:</p>
      <ul>
        <li>Horizontal scaling through distributed architecture</li>
        <li>Flexible schema design for evolving data models</li>
        <li>High write throughput capabilities</li>
        <li>Built-in replication and fault tolerance</li>
      </ul>
      
      <h2>Caching Strategies</h2>
      
      <h3>Content Delivery Networks (CDNs)</h3>
      <p>CDNs cache static content across multiple geographical locations, reducing latency and server load:</p>
      <ul>
        <li>Faster content delivery to users worldwide</li>
        <li>Reduced origin server load</li>
        <li>Protection against traffic spikes</li>
        <li>DDoS mitigation</li>
      </ul>
      
      <h3>In-Memory Caching</h3>
      <p>In-memory caching systems like Redis or Memcached store frequently accessed data in memory:</p>
      <ul>
        <li>Dramatically faster data retrieval</li>
        <li>Reduced database load</li>
        <li>Support for complex data structures</li>
        <li>Distributed caching capabilities</li>
      </ul>
      
      <h2>Frontend Scalability</h2>
      
      <h3>Static Site Generation and JAMstack</h3>
      <p>Pre-rendering pages at build time and serving them as static files offers significant scalability benefits:</p>
      <ul>
        <li>Reduced server-side rendering load</li>
        <li>Easy CDN distribution</li>
        <li>Improved performance and SEO</li>
        <li>Lower hosting costs</li>
      </ul>
      
      <h3>Progressive Web Apps (PWAs)</h3>
      <p>PWAs provide app-like experiences with offline capabilities, reducing server load:</p>
      <ul>
        <li>Offline functionality through service workers</li>
        <li>Reduced server requests</li>
        <li>Improved user experience during poor connectivity</li>
        <li>Lower bandwidth consumption</li>
      </ul>
      
      <h2>Cloud Infrastructure</h2>
      
      <h3>Auto-Scaling</h3>
      <p>Cloud providers offer auto-scaling capabilities that automatically adjust resources based on demand:</p>
      <ul>
        <li>Dynamic resource allocation</li>
        <li>Cost optimization by scaling down during low traffic</li>
        <li>Handling unexpected traffic spikes</li>
        <li>High availability across regions</li>
      </ul>
      
      <h3>Containerization and Orchestration</h3>
      <p>Technologies like Docker and Kubernetes simplify deployment and scaling:</p>
      <ul>
        <li>Consistent environments across development and production</li>
        <li>Efficient resource utilization</li>
        <li>Automated scaling and self-healing</li>
        <li>Rolling updates with zero downtime</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building scalable web applications requires careful consideration of architecture, infrastructure, and technology choices. By implementing these strategies and embracing modern tools and platforms, you can create applications that not only meet current demands but can also scale efficiently as your user base grows. Remember that scalability is not just about handling more users—it's about maintaining performance, reliability, and cost-effectiveness as your application evolves.</p>
    `,
  },
  {
    id: 4,
    title: "The Role of AI in Modern Web Development",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1024&auto=format&fit=crop",
    author: "Ahmad",
    date: "July 8, 2023",
    description: "Explore how artificial intelligence is transforming web development, from automated testing to personalized user experiences. Learn about practical applications of AI that can enhance your web projects and give your business a competitive edge in the rapidly evolving digital landscape.",
    content: `<p>Sample content for blog post 4...</p>`,
  },
  {
    id: 5,
    title: "Security Best Practices for Web Applications",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1024&auto=format&fit=crop",
    author: "Fathul",
    date: "August 19, 2023",
    description: "Learn essential security practices to protect your web applications from common vulnerabilities. This comprehensive guide covers authentication, data encryption, CSRF protection, XSS prevention, and other critical security measures that every web developer should implement.",
    content: `<p>Sample content for blog post 5...</p>`,
  },
  {
    id: 6,
    title: "Creating Accessible Web Experiences for All Users",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1024&auto=format&fit=crop",
    author: "Hidayat",
    date: "September 3, 2023",
    description: "Discover why web accessibility is important and how to implement inclusive design principles in your projects. This article provides practical tips for creating websites that everyone can use, including people with disabilities, while also improving SEO and meeting legal requirements.",
    content: `<p>Sample content for blog post 6...</p>`,
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blogId = parseInt(id || "1");
  
  const post = blogPosts.find(post => post.id === blogId) || blogPosts[0];
  
  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="bg-gray-50 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <Link to="/blog" className="inline-flex items-center text-[#9003fc] hover:text-[#7502d1] mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all articles
          </Link>
          
          <article className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="h-80 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="text-sm text-gray-500 mb-4">
                {post.author} • {post.date} • 10 min read
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">
                {post.title}
              </h1>
              
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </article>
          
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold mb-8">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-lg font-bold mb-2 hover:text-[#9003fc] transition-colors">
                      {relatedPost.title}
                    </h3>
                    <Link to={`/blog/${relatedPost.id}`}>
                      <Button className="px-0 py-0 h-auto text-[#9003fc] hover:text-[#7502d1] transition-colors bg-transparent hover:bg-transparent">
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogDetail;
