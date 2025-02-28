
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <span className="text-sm font-medium text-[#9003fc] tracking-wider uppercase mb-3 block">
            Latest Articles
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#2A1D5C] to-[#9003fc] bg-clip-text text-transparent">
            Our Blog
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay updated with the latest insights, trends, and tips in the digital world.
          </p>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-gradient-to-r from-[#9003fc] to-[#00E5FF]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {post.author} • {post.date}
                </div>
                <h3 className="font-display text-xl font-bold mb-3 hover:text-[#9003fc] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                <Link to={`/blog/${post.id}`}>
                  <Button className="px-0 py-0 h-auto text-[#9003fc] hover:text-[#7502d1] transition-colors bg-transparent hover:bg-transparent">
                    Read More →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/blog">
            <Button className="px-8 py-3 h-auto bg-[#9003fc] hover:bg-[#7502d1] text-white rounded-lg transition-colors">
              See All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
