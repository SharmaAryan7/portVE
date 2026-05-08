import { useState } from "react";
import { Link } from "react-router";
import { Search } from "lucide-react";

export function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["All", "Editing Tips", "Design Tips", "Case Studies", "Content Growth"];

  const blogPosts = [
    {
      title: "10 Tips for Creating Viral Reels",
      category: "Editing Tips",
      image: "🎥",
      excerpt: "Learn the secrets to creating engaging short-form content that captures attention and drives engagement on social media platforms.",
      date: "May 1, 2026",
      readTime: "5 min read",
      featured: true,
    },
    {
      title: "Color Grading Guide for Beginners",
      category: "Design Tips",
      image: "🎨",
      excerpt: "Master the art of color grading with this comprehensive guide covering everything from basic theory to advanced techniques.",
      date: "April 28, 2026",
      readTime: "8 min read",
      featured: true,
    },
    {
      title: "Case Study: How We Grew a Brand by 500%",
      category: "Case Studies",
      image: "📈",
      excerpt: "A deep dive into our process and the strategies we used to achieve exceptional growth for a client in just 6 months.",
      date: "April 25, 2026",
      readTime: "12 min read",
      featured: true,
    },
    {
      title: "The Psychology of Thumbnail Design",
      category: "Design Tips",
      image: "🖼️",
      excerpt: "Understanding what makes people click on your thumbnails and how to design for maximum CTR.",
      date: "April 20, 2026",
      readTime: "6 min read",
      featured: false,
    },
    {
      title: "Motion Graphics Trends in 2026",
      category: "Editing Tips",
      image: "✨",
      excerpt: "Stay ahead of the curve with these cutting-edge motion graphics techniques and trends.",
      date: "April 15, 2026",
      readTime: "7 min read",
      featured: false,
    },
    {
      title: "Building a Content Strategy That Works",
      category: "Content Growth",
      image: "📊",
      excerpt: "Learn how to create a sustainable content strategy that drives consistent growth and engagement.",
      date: "April 10, 2026",
      readTime: "10 min read",
      featured: false,
    },
    {
      title: "From Zero to 100K: A Creator's Journey",
      category: "Case Studies",
      image: "🚀",
      excerpt: "How we helped a content creator grow from zero to 100K followers in 8 months.",
      date: "April 5, 2026",
      readTime: "9 min read",
      featured: false,
    },
    {
      title: "Advanced Premiere Pro Shortcuts",
      category: "Editing Tips",
      image: "⌨️",
      excerpt: "Boost your editing speed with these essential keyboard shortcuts and workflow tips.",
      date: "March 30, 2026",
      readTime: "5 min read",
      featured: false,
    },
    {
      title: "Logo Design Principles That Never Fail",
      category: "Design Tips",
      image: "🎯",
      excerpt: "Timeless principles for creating memorable and effective logo designs.",
      date: "March 25, 2026",
      readTime: "8 min read",
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <section className="py-32 px-8 text-center">
        <div className="max-w-[1440px] mx-auto">
          <h1 style={{ fontSize: '64px', lineHeight: '1.1' }} className="text-white mb-6">
            Blog & <span className="bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-[#B8B8B8] text-lg max-w-2xl mx-auto">
            Tips, tutorials, and insights to help you create better content
          </p>
        </div>
      </section>

      <section className="px-8 pb-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category.toLowerCase())}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeCategory === category.toLowerCase()
                      ? "bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] text-white"
                      : "bg-[#1A1A1A] text-[#B8B8B8] border border-white/10 hover:border-[#FF6B00]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8B8B8]" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 pl-12 pr-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-full text-white placeholder-[#B8B8B8] focus:border-[#FF6B00] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {featuredPosts.length > 0 && (
            <>
              <h2 className="text-white text-3xl mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {featuredPosts.map((post, index) => (
                  <Link
                    key={index}
                    to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-white/10 flex items-center justify-center text-6xl mb-4 group-hover:border-[#FF6B00] group-hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] transition-all">
                      {post.image}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[#B8B8B8] mb-2">
                      <span className="text-[#FF6B00]">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-white text-xl mb-2 group-hover:text-[#FF6B00] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#B8B8B8] text-sm">{post.excerpt}</p>
                  </Link>
                ))}
              </div>
            </>
          )}

          {regularPosts.length > 0 && (
            <>
              <h2 className="text-white text-3xl mb-8">All Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <Link
                    key={index}
                    to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-white/10 flex items-center justify-center text-6xl mb-4 group-hover:border-[#FF6B00] group-hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] transition-all">
                      {post.image}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[#B8B8B8] mb-2">
                      <span className="text-[#FF6B00]">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-white text-xl mb-2 group-hover:text-[#FF6B00] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#B8B8B8] text-sm">{post.excerpt}</p>
                  </Link>
                ))}
              </div>
            </>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#B8B8B8] text-lg">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
