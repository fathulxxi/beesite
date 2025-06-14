
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Optimizing Web Performance for Better User Experience",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=500&auto=format&fit=crop",
    author: "Ahmad",
    date: "April 10, 2023",
    description: "Learn how to optimize your website's performance to improve user experience, increase conversions, and boost search engine rankings. We cover key techniques like image optimization, code splitting, lazy loading, and more to ensure your site loads quickly and runs smoothly on all devices.",
  },
  {
    id: 2,
    title: "The Future of UI/UX Design: Trends to Watch",
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=500&auto=format&fit=crop",
    author: "Fathul",
    date: "May 23, 2023",
    description: "Explore the latest trends in UI/UX design that are shaping the digital landscape. From microinteractions to voice user interfaces, discover how these innovations can enhance your digital products and create more engaging, intuitive user experiences that stand out in today's competitive market.",
  },
  {
    id: 3,
    title: "Building Scalable Web Applications with Modern Technology",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=500&auto=format&fit=crop",
    author: "Hidayat",
    date: "June 15, 2023",
    description: "Discover the best practices for building scalable web applications that can handle growth and maintain performance. We cover architectural patterns, cloud infrastructure, database optimization, and caching strategies to ensure your applications can scale efficiently as your user base expands.",
  },
  {
    id: 4,
    title: "The Role of AI in Modern Web Development",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=500&auto=format&fit=crop",
    author: "Ahmad",
    date: "July 8, 2023",
    description: "Explore how artificial intelligence is transforming web development, from automated testing to personalized user experiences. Learn about practical applications of AI that can enhance your web projects and give your business a competitive edge in the rapidly evolving digital landscape.",
  },
  {
    id: 5,
    title: "Security Best Practices for Web Applications",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=500&auto=format&fit=crop",
    author: "Fathul",
    date: "August 19, 2023",
    description: "Learn essential security practices to protect your web applications from common vulnerabilities. This comprehensive guide covers authentication, data encryption, CSRF protection, XSS prevention, and other critical security measures that every web developer should implement.",
  },
  {
    id: 6,
    title: "Creating Accessible Web Experiences for All Users",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=500&auto=format&fit=crop",
    author: "Hidayat",
    date: "September 3, 2023",
    description: "Discover why web accessibility is important and how to implement inclusive design principles in your projects. This article provides practical tips for creating websites that everyone can use, including people with disabilities, while also improving SEO and meeting legal requirements.",
  },
];

const Blog = () => {
  return (
    <section className="h-screen flex items-center bg-gradient-to-b from-accent/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-secondary">Latest Articles</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Blog
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Stay updated with the latest insights, trends, and tips in the digital world to keep your business ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          {blogPosts.slice(0, 3).map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-3xl shadow-card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-secondary/20"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <div className="text-sm text-secondary mb-3 font-medium">
                  {post.author} • {post.date}
                </div>
                <h3 className="font-display text-xl font-bold mb-4 hover:text-secondary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{post.description}</p>
                <Link to={`/blog/${post.id}`}>
                  <Button className="group px-0 py-0 h-auto text-secondary hover:text-secondary/80 transition-colors bg-transparent hover:bg-transparent font-medium">
                    Read More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12" data-aos="fade-up" data-aos-delay="300">
          <Link to="/blog">
            <Button className="px-8 py-4 h-auto bg-secondary hover:bg-secondary/90 text-white rounded-2xl transition-all font-medium shadow-lg hover:shadow-xl">
              See All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
