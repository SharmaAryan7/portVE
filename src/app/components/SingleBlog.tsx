import { Link, useParams } from "react-router";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

export function SingleBlog() {
  const { slug } = useParams();

  const relatedArticles = [
    {
      title: "Advanced Color Grading Techniques",
      category: "Design Tips",
      image: "🎨",
      readTime: "6 min read",
    },
    {
      title: "Creating Engaging Video Intros",
      category: "Editing Tips",
      image: "🎬",
      readTime: "7 min read",
    },
    {
      title: "Social Media Growth Strategies",
      category: "Content Growth",
      image: "📱",
      readTime: "8 min read",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-12 px-8">
        <div className="max-w-[900px] mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#B8B8B8] hover:text-[#FF6B00] transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <div className="aspect-video bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-white/10 flex items-center justify-center text-8xl mb-8">
            🎥
          </div>

          <div className="flex items-center gap-4 text-sm text-[#B8B8B8] mb-6">
            <span className="text-[#FF6B00]">Editing Tips</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>May 1, 2026</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>5 min read</span>
            </div>
          </div>

          <h1 style={{ fontSize: '48px', lineHeight: '1.2' }} className="text-white mb-6">
            10 Tips for Creating Viral Reels
          </h1>

          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-white/10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] flex items-center justify-center text-2xl">
              👨‍💻
            </div>
            <div>
              <div className="text-white">John Doe</div>
              <div className="text-[#B8B8B8] text-sm">Video Editor & Designer</div>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-[#B8B8B8] text-lg leading-relaxed mb-6">
              Creating viral reels isn't just about luck—it's about understanding what makes content
              shareable and engaging. In this comprehensive guide, I'll share the exact strategies
              I've used to create reels that have generated millions of views for my clients.
            </p>

            <h2 className="text-white text-3xl mt-12 mb-6">1. Hook Them in the First 3 Seconds</h2>
            <p className="text-[#B8B8B8] text-lg leading-relaxed mb-6">
              The first three seconds are crucial. Your audience is scrolling fast, and you need to
              give them a reason to stop. Start with a bold statement, an intriguing question, or
              striking visuals that demand attention.
            </p>

            <h2 className="text-white text-3xl mt-12 mb-6">2. Use Trending Audio Wisely</h2>
            <p className="text-[#B8B8B8] text-lg leading-relaxed mb-6">
              Trending audio can significantly boost your reach, but it needs to fit your content
              naturally. Don't force a trend—instead, find creative ways to incorporate popular
              sounds that align with your message.
            </p>

            <h2 className="text-white text-3xl mt-12 mb-6">3. Keep It Short and Punchy</h2>
            <p className="text-[#B8B8B8] text-lg leading-relaxed mb-6">
              Attention spans are shorter than ever. Aim for 15-30 seconds for maximum engagement.
              Every second should add value—cut anything that doesn't serve the story.
            </p>

            <h2 className="text-white text-3xl mt-12 mb-6">4. Master the Art of Transitions</h2>
            <p className="text-[#B8B8B8] text-lg leading-relaxed mb-6">
              Smooth, creative transitions keep viewers watching. Whether it's a simple cut on
              movement or a complex morphing effect, transitions should feel seamless and add to
              the visual appeal.
            </p>

            <h2 className="text-white text-3xl mt-12 mb-6">5. Tell a Story</h2>
            <p className="text-[#B8B8B8] text-lg leading-relaxed mb-6">
              Even in 15 seconds, you can tell a compelling story. Have a clear beginning, middle,
              and end. Create anticipation, deliver value, and leave them wanting more.
            </p>

            <h2 className="text-white text-3xl mt-12 mb-6">6. Optimize for Silent Viewing</h2>
            <p className="text-[#B8B8B8] text-lg leading-relaxed mb-6">
              Many people watch with sound off. Use captions, text overlays, and visual storytelling
              to ensure your message comes across even without audio.
            </p>

            <h2 className="text-white text-3xl mt-12 mb-6">7. Create Pattern Interrupts</h2>
            <p className="text-[#B8B8B8] text-lg leading-relaxed mb-6">
              Sudden changes in color, movement, or composition grab attention. Use these
              strategically to keep viewers engaged throughout the entire reel.
            </p>

            <h2 className="text-white text-3xl mt-12 mb-6">8. End with a Call-to-Action</h2>
            <p className="text-[#B8B8B8] text-lg leading-relaxed mb-6">
              Don't let viewers scroll away without taking action. Ask them to follow, comment,
              share, or check out your link. Make it specific and compelling.
            </p>

            <h2 className="text-white text-3xl mt-12 mb-6">9. Post at Optimal Times</h2>
            <p className="text-[#B8B8B8] text-lg leading-relaxed mb-6">
              Analyze your audience insights to find when they're most active. Posting at the right
              time can significantly boost your initial engagement, which helps the algorithm push
              your content further.
            </p>

            <h2 className="text-white text-3xl mt-12 mb-6">10. Analyze and Iterate</h2>
            <p className="text-[#B8B8B8] text-lg leading-relaxed mb-6">
              Track what works and what doesn't. Look at completion rates, saves, and shares—not
              just likes. Use this data to refine your approach and create even better content.
            </p>

            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 mt-12">
              <h3 className="text-white text-2xl mb-4">Key Takeaway</h3>
              <p className="text-[#B8B8B8] text-lg leading-relaxed">
                Creating viral reels is a combination of creativity, strategy, and understanding
                your audience. Focus on delivering value, telling compelling stories, and
                continuously learning from your analytics. With these principles, you'll be well
                on your way to creating content that resonates and spreads.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-[#1A1A1A]">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-white text-3xl mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <Link
                key={index}
                to={`/blog/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <div className="aspect-video bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center text-6xl mb-4 group-hover:border-[#FF6B00] group-hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] transition-all">
                  {article.image}
                </div>
                <div className="flex items-center gap-4 text-sm text-[#B8B8B8] mb-2">
                  <span className="text-[#FF6B00]">{article.category}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-white text-xl group-hover:text-[#FF6B00] transition-colors">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 style={{ fontSize: '40px', lineHeight: '1.2' }} className="text-white mb-6">
            Ready to Create<br />
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] bg-clip-text text-transparent">
              Amazing Content?
            </span>
          </h2>
          <p className="text-[#B8B8B8] text-lg mb-8">
            Let's work together to bring your vision to life
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] text-white rounded-full hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
