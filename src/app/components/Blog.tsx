import { useState } from "react";
import { Link } from "react-router";
import { Search } from "lucide-react";
import advancePremier from "../../assets/advancePremierBlog.jpeg";
import contentStrategy from "../../assets/ContentStrategyBlog.jpeg";
import creatorJourney from "../../assets/CreatorJourneyBlog.jpeg";
import logoDesign from "../../assets/LogoDesignBlog.jpeg";
import motionGraphic from "../../assets/motionGraphicBlog.jpeg";
import thumbnailDesign from "../../assets/thumbnailDesignBlog.jpeg";

export function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["All", "Editing Tips", "Design Tips", "Case Studies", "Content Growth"];

  const blogPosts = [
    // {
    //   title: "The Psychology of Thumbnail Design",
    //   category: "Design Tips",
    //   image: thumbnailDesign,
    //   excerpt: "Understanding what makes people click on your thumbnails and how to design for maximum CTR.",
    //   date: "April 20, 2026",
    //   readTime: "6 min read",
    // },
    // {
    //   title: "Motion Graphics Trends in 2026",
    //   category: "Editing Tips",
    //   image: motionGraphic,
    //   excerpt: "Stay ahead of the curve with these cutting-edge motion graphics techniques and trends.",
    //   date: "April 15, 2026",
    //   readTime: "7 min read",
    // },
    // {
    //   title: "Building a Content Strategy That Works",
    //   category: "Content Growth",
    //   image: contentStrategy,
    //   excerpt: "Learn how to create a sustainable content strategy that drives consistent growth and engagement.",
    //   date: "April 10, 2026",
    //   readTime: "10 min read",
    // },
    {
      title: "From Zero to 100K: A Creator's Journey",
      category: "Case Studies",
      image: creatorJourney,
      excerpt: "How we helped a content creator grow from zero to 100K followers in 8 months.",
      date: "April 5, 2026",
      readTime: "9 min read",
    },
    // {
    //   title: "Advanced Premiere Pro Shortcuts",
    //   category: "Editing Tips",
    //   image: advancePremier,
    //   excerpt: "Boost your editing speed with these essential keyboard shortcuts and workflow tips.",
    //   date: "March 30, 2026",
    //   readTime: "5 min read",
    // },
    // {
    //   title: "Logo Design Principles That Never Fail",
    //   category: "Design Tips",
    //   image: logoDesign,
    //   excerpt: "Timeless principles for creating memorable and effective logo designs.",
    //   date: "March 25, 2026",
    //   readTime: "8 min read",
    // },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link
                  key={index}
                  to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group"
                >
                  <div className="aspect-video bg-[#1A1A1A] overflow-hidden rounded-2xl border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#FF6B00] group-hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] transition-all">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
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
          ) : (
            <div className="text-center py-16">
              <p className="text-[#B8B8B8] text-lg">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}