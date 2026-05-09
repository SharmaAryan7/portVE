import { useState, useRef } from "react";
import { Link } from "react-router";
import { Play, ArrowRight, Instagram, Mail, MessageCircle, Layers, Film, Sparkles } from "lucide-react";

import profileImg from "../../assets/saurabh_img.jpeg";
import homepageVideo from '../../assets/homepageVideo.mp4';
import videoEditingCollection from "../../assets/videoEditingCollection.jpeg";
import graphicDesigningCollection from "../../assets/graphicDesigningCollection.png";


export function Home() {
  // State to track if video is playing
  const [isPlaying, setIsPlaying] = useState(false);
  // Reference to control the actual HTML video element
  const videoRef = useRef<HTMLVideoElement>(null);

  const stats = [
    { value: "50+", label: "Clients" },
    { value: "20+", label: "Businesses Served" },
    { value: "100+", label: "Projects Delivered" },
    { value: "Fast", label: "Turnaround Time" },
  ];

  const videoTools = [
    { name: "Adobe Premiere Pro", abbr: "Pr", color: "#9999FF" },
    { name: "Adobe After Effects", abbr: "Ae", color: "#9999FF" },
  ];

  const designTools = [
    { name: "Adobe Photoshop", abbr: "Ps", color: "#31A8FF" },
    { name: "Adobe Illustrator", abbr: "Ai", color: "#FF9A00" },
  ];

  const services = [
    { title: "Reel Editing", description: "Engaging short-form content for social media" },
    { title: "YouTube Editing", description: "Long-form content with professional polish" },
    { title: "Motion Graphics", description: "Eye-catching animations and effects" },
    { title: "Thumbnail Design", description: "Click-worthy thumbnails that convert" },
    { title: "Poster Design", description: "Stunning visuals for events and promotions" },
    { title: "Logo Design", description: "Memorable brand identities" },
    { title: "Ad Creatives", description: "High-converting ad designs" },
  ];

  const testimonials = [
    {
      name: "Aryan Sharma",
      role: "Marketing Director",
      comment: "The video editing quality exceeded our expectations. Our engagement increased by 300%!",
      rating: 5,
    },
    {
      name: "Abhishek Shukla",
      role: "Content Creator",
      comment: "Professional, fast, and creative. Exactly what I needed for my YouTube channel.",
      rating: 5,
    },
    {
      name: "Varun Pandey",
      role: "Brand Manager",
      comment: "The designs are stunning and always delivered on time. Highly recommended!",
      rating: 5,
    },
  ];

  const blogPosts = [
    {
      title: "10 Tips for Creating Viral Reels",
      category: "Editing Tips",
      image: "🎥",
      excerpt: "Learn the secrets to creating engaging short-form content that goes viral.",
    },
    {
      title: "Color Grading Guide for Beginners",
      category: "Design Tips",
      image: "🎨",
      excerpt: "Master the art of color grading to make your videos stand out.",
    },
    {
      title: "Case Study: How We Grew a Brand by 500%",
      category: "Case Studies",
      image: "📈",
      excerpt: "A deep dive into our process and the results we achieved.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/10 to-transparent pointer-events-none" />
        <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <h1 style={{ fontSize: '72px', lineHeight: '1.15', letterSpacing: '-0.02em' }} className="text-white mb-10">
              Editing visuals<br />
              <span className="bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] bg-clip-text text-transparent">
                that people remember.
              </span>
            </h1>
            <p className="text-[#B8B8B8] text-xl mb-12 leading-relaxed">
              For creators, brands & businesses<br />that want better content.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="px-10 py-5 bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] text-white rounded-full hover:shadow-[0_0_40px_rgba(255,107,0,0.7)] transition-all flex items-center gap-3 group"
              >
                View Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-10 py-5 bg-[#1A1A1A] border border-white/20 text-white rounded-full hover:border-[#FF6B00] hover:bg-[#1A1A1A]/80 transition-all"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm relative group">
              <div className="absolute inset-0 p-6">
                <div className="bg-[#0D0D0D] rounded-lg h-full border border-white/5 overflow-hidden flex flex-col">
                  
                  {/* --- VIDEO SECTION --- */}
                  <div className="h-3/5 relative overflow-hidden bg-black border-b border-white/5 group/video">
                    <video
                      ref={videoRef}
                      src={homepageVideo}
                      playsInline
                      controls={isPlaying} // Only show native controls once playing
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        isPlaying ? 'opacity-100 z-20' : 'opacity-80 group-hover/video:opacity-100'
                      }`}
                    />
                    
                    {/* Custom Play Button Overlay - Hides when playing */}
                    {!isPlaying && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center z-30 cursor-pointer"
                        onClick={() => {
                          if (videoRef.current) {
                            videoRef.current.play();
                            setIsPlaying(true);
                          }
                        }}
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] flex items-center justify-center shadow-[0_0_30px_rgba(255,107,0,0.5)] group-hover/video:scale-110 transition-transform duration-500">
                          <Play size={24} className="text-white ml-0.5" fill="white" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* --- TIMELINE UI SECTION --- */}
                  <div className="h-2/5 bg-[#0D0D0D]/90 backdrop-blur-sm p-3">
                    <div className="flex gap-2 mb-2">
                      <div className="flex-1 h-2 bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] rounded-full" />
                      <div className="flex-1 h-2 bg-white/10 rounded-full" />
                    </div>
                    <div className="grid grid-cols-4 gap-1.5">
                      <div className="h-8 bg-[#FF6B00]/20 rounded border border-[#FF6B00]/40" />
                      <div className="h-8 bg-[#E6C07B]/20 rounded border border-[#E6C07B]/40" />
                      <div className="h-8 bg-[#FF6B00]/20 rounded border border-[#FF6B00]/40" />
                      <div className="h-8 bg-white/10 rounded border border-white/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-52 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-xl border border-white/10 backdrop-blur-xl p-5 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,0,0,0.5)] pointer-events-none">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B00]/30 to-[#E6C07B]/30 flex items-center justify-center border border-[#FF6B00]/40">
                  <Sparkles size={18} className="text-[#FF6B00]" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Motion Graphics</p>
                  <p className="text-[#B8B8B8] text-xs">Latest Project</p>
                </div>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] rounded-full" />
              </div>
            </div>

            <div className="absolute -top-6 -left-6 w-44 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-xl border border-white/10 backdrop-blur-xl p-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] pointer-events-none">
              <div className="flex items-center gap-2 mb-2">
                <Layers size={16} className="text-[#E6C07B]" />
                <p className="text-white text-xs font-medium">4 Layers Active</p>
              </div>
              <div className="space-y-1.5">
                <div className="h-5 bg-[#FF6B00]/20 rounded border border-[#FF6B00]/30 flex items-center px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                </div>
                <div className="h-5 bg-[#E6C07B]/20 rounded border border-[#E6C07B]/30 flex items-center px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E6C07B]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="trust" className="py-24 px-8 border-y border-white/10 bg-[#0D0D0D]/30">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-6xl font-bold bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] bg-clip-text text-transparent mb-3">
                    {stat.value}
                  </div>
                  <div className="text-[#B8B8B8] text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-8">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-3xl border border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/5 to-[#E6C07B]/5" />
              <div className="w-full h-full flex items-center justify-center text-8xl relative z-10">
                 <img src={profileImg} alt="" className="w-full h-full object-cover"/>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-[#FF6B00]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -right-8 w-56 h-56 bg-[#E6C07B]/10 rounded-full blur-3xl -z-10" />
          </div>

          <div>
            <h2 style={{ fontSize: '52px', lineHeight: '1.2' }} className="text-white mb-8">
              About Me
            </h2>
            <p className="text-[#B8B8B8] text-xl mb-6 leading-relaxed">
              I'm <span className="text-white font-medium">Saurabh Pathak</span>, a passionate Video Editor and Graphic Designer with over 5 years of experience
              helping brands create compelling visual content. My journey started with a simple
              passion for storytelling through visuals, and it has evolved into a career of
              helping businesses grow through high-converting videos and designs.
            </p>
            <p className="text-[#B8B8B8] text-xl mb-10 leading-relaxed">
              I specialize in creating content that not only looks amazing but also drives real
              results. Every project is approached with creativity, precision, and a focus on
              your brand's unique goals.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] border border-white/20 text-white rounded-full hover:border-[#FF6B00] hover:bg-[#1A1A1A]/80 transition-all group"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-[#1A1A1A]">
        <div className="max-w-[1440px] mx-auto">
          <h2 style={{ fontSize: '48px', lineHeight: '1.2' }} className="text-white text-center mb-16">
            Tools I Use
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-[#B8B8B8] text-sm uppercase tracking-wider mb-6">Video Editing Tools</h3>
              <div className="space-y-4">
                {videoTools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-[#0D0D0D] border border-white/10 rounded-xl p-6 hover:border-[#FF6B00]/50 hover:shadow-[0_0_20px_rgba(255,107,0,0.2)] transition-all group flex items-center gap-4"
                  >
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold text-white/90 group-hover:scale-105 transition-transform"
                      style={{
                        backgroundColor: '#1A1A1A',
                        border: `2px solid ${tool.color}`,
                        boxShadow: `0 0 20px ${tool.color}40`
                      }}
                    >
                      {tool.abbr}
                    </div>
                    <div className="text-white font-medium">{tool.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[#B8B8B8] text-sm uppercase tracking-wider mb-6">Graphic Design Tools</h3>
              <div className="space-y-4">
                {designTools.map((tool, index) => (
                  <div
                    key={index}
                    className="bg-[#0D0D0D] border border-white/10 rounded-xl p-6 hover:border-[#E6C07B]/50 hover:shadow-[0_0_20px_rgba(230,192,123,0.2)] transition-all group flex items-center gap-4"
                  >
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold text-white/90 group-hover:scale-105 transition-transform"
                      style={{
                        backgroundColor: '#1A1A1A',
                        border: `2px solid ${tool.color}`,
                        boxShadow: `0 0 20px ${tool.color}40`
                      }}
                    >
                      {tool.abbr}
                    </div>
                    <div className="text-white font-medium">{tool.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 style={{ fontSize: '56px', lineHeight: '1.1' }} className="text-white mb-2">
                Portfolio
              </h2>
              <p className="text-[#B8B8B8] text-2xl mb-6">
                Saurabh Pathak
              </p>
            </div>
            <Link
              to="/portfolio"
              className="hidden md:flex items-center gap-2 px-8 py-4 bg-[#1A1A1A] border border-white/20 text-white rounded-full hover:border-[#FF6B00] hover:bg-[#1A1A1A]/80 transition-all group"
            >
              View Full Portfolio
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* --- VIDEO EDITING PREVIEW CARD --- */}
            <Link to="/portfolio" state={{ activeTab: "video" }} className="group cursor-pointer block">
              <div className="aspect-video bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-white/10 overflow-hidden relative hover:border-[#FF6B00] hover:shadow-[0_0_40px_rgba(255,107,0,0.3)] transition-all">
                
                { <img 
                  src={videoEditingCollection} 
                  alt="Video Editing Portfolio" 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                /> }

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <div className="text-[#FF6B00] text-sm mb-2 uppercase tracking-wider">Video Editing</div>
                    <h3 className="text-white text-2xl font-medium">Viral Reels & YouTube Edits</h3>
                  </div>
                </div>
              </div>
            </Link>

            {/* --- GRAPHIC DESIGN PREVIEW CARD --- */}
            <Link to="/portfolio" state={{ activeTab: "design" }} className="group cursor-pointer block">
              <div className="aspect-video bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-white/10 overflow-hidden relative hover:border-[#E6C07B] hover:shadow-[0_0_40px_rgba(230,192,123,0.3)] transition-all">
                
                { <img 
                  src={graphicDesigningCollection} 
                  alt="Graphic Design Portfolio" 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
                /> }

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <div className="text-[#E6C07B] text-sm mb-2 uppercase tracking-wider">Graphic Design</div>
                    <h3 className="text-white text-2xl font-medium">Logos, Posters & Thumbnails</h3>
                  </div>
                </div>
              </div>
            </Link>

          </div>

          <Link
            to="/portfolio"
            className="md:hidden flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] border border-white/20 text-white rounded-full hover:border-[#FF6B00] transition-all mt-8"
          >
            View Full Portfolio <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section id="services" className="py-32 px-8 bg-[#1A1A1A]">
        <div className="max-w-[1440px] mx-auto">
          <h2 style={{ fontSize: '48px', lineHeight: '1.2' }} className="text-white text-center mb-16">
            Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#FF6B00]/10 to-transparent border border-[#FF6B00]/30 rounded-3xl p-10 hover:shadow-[0_0_50px_rgba(255,107,0,0.3)] transition-all group  relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6B00]/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <Film size={48} className="text-[#FF6B00] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-white text-4xl mb-4 font-medium">Reel Editing</h3>
                <p className="text-[#B8B8B8] text-lg leading-relaxed">Engaging short-form content for social media that captures attention and drives engagement</p>
              </div>
            </div>

            <div className="bg-[#0D0D0D] border border-white/10 rounded-2xl p-8 hover:border-[#FF6B00]/50 hover:shadow-[0_0_30px_rgba(255,107,0,0.2)] transition-all group ">
              <h3 className="text-white text-xl mb-3 group-hover:text-[#FF6B00] transition-colors font-medium">
                YouTube Editing
              </h3>
              <p className="text-[#B8B8B8] text-sm">Long-form content with professional polish</p>
            </div>

            <div className="bg-[#0D0D0D] border border-white/10 rounded-2xl p-8 hover:border-[#E6C07B]/50 hover:shadow-[0_0_30px_rgba(230,192,123,0.2)] transition-all group">
              <h3 className="text-white text-xl mb-3 group-hover:text-[#E6C07B] transition-colors font-medium">
                Motion Graphics
              </h3>
              <p className="text-[#B8B8B8] text-sm">Eye-catching animations and effects</p>
            </div>

            <div className="md:col-span-2 bg-gradient-to-br from-[#E6C07B]/10 to-transparent border border-[#E6C07B]/30 rounded-2xl p-8 hover:shadow-[0_0_40px_rgba(230,192,123,0.3)] transition-all group  relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#E6C07B]/10 rounded-full blur-3xl" />
              <div className="relative z-10 flex items-center gap-6">
                <Sparkles size={36} className="text-[#E6C07B] group-hover:scale-110 transition-transform flex-shrink-0" />
                <div>
                  <h3 className="text-white text-2xl mb-2 font-medium">Thumbnail Design</h3>
                  <p className="text-[#B8B8B8]">Click-worthy thumbnails that convert viewers</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0D0D0D] border border-white/10 rounded-2xl p-8 hover:border-[#FF6B00]/50 hover:shadow-[0_0_30px_rgba(255,107,0,0.2)] transition-all group">
              <h3 className="text-white text-xl mb-3 group-hover:text-[#FF6B00] transition-colors font-medium">
                Poster Design
              </h3>
              <p className="text-[#B8B8B8] text-sm">Stunning visuals for events and promotions</p>
            </div>

            <div className="bg-[#0D0D0D] border border-white/10 rounded-2xl p-8 hover:border-[#E6C07B]/50 hover:shadow-[0_0_30px_rgba(230,192,123,0.2)] transition-all group ">
              <h3 className="text-white text-xl mb-3 group-hover:text-[#E6C07B] transition-colors font-medium">
                Logo Design
              </h3>
              <p className="text-[#B8B8B8] text-sm">Memorable brand identities that stand out</p>
            </div>

            <div className="md:col-span-2 bg-[#0D0D0D] border border-white/10 rounded-2xl p-8 hover:border-[#FF6B00]/50 hover:shadow-[0_0_40px_rgba(255,107,0,0.2)] transition-all group ">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FF6B00]/30 to-[#E6C07B]/30 flex items-center justify-center border border-[#FF6B00]/40 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Layers size={28} className="text-[#FF6B00]" />
                </div>
                <div>
                  <h3 className="text-white text-2xl mb-2 font-medium">Ad Creatives</h3>
                  <p className="text-[#B8B8B8]">High-converting ad designs for digital campaigns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-[1440px] mx-auto">
          <h2 style={{ fontSize: '48px', lineHeight: '1.2' }} className="text-white text-center mb-16">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 hover:border-[#FF6B00]/50 hover:shadow-[0_0_30px_rgba(255,107,0,0.2)] transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B00]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#FF6B00] text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-[#B8B8B8] text-lg mb-8 leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B00]/30 to-[#E6C07B]/30 flex items-center justify-center border border-[#FF6B00]/40 text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-medium">{testimonial.name}</div>
                      <div className="text-[#B8B8B8] text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
       {/* BLOG SECTION */}
      {/* <section className="py-32 px-8 bg-[#1A1A1A]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 style={{ fontSize: '48px', lineHeight: '1.2' }} className="text-white mb-4">
                Latest from the Blog
              </h2>
              <p className="text-[#B8B8B8] text-lg">
                Tips, insights, and case studies
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden md:flex items-center gap-2 px-8 py-4 bg-[#0D0D0D] border border-white/20 text-white rounded-full hover:border-[#FF6B00] hover:bg-[#0D0D0D]/80 transition-all group"
            >
              Read More
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <div className="aspect-video bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-2xl border border-white/10 flex items-center justify-center text-6xl mb-4 group-hover:border-[#FF6B00] group-hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] transition-all relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">{post.image}</div>
                </div>
                <div className="text-[#FF6B00] text-sm mb-2 uppercase tracking-wider">{post.category}</div>
                <h3 className="text-white text-xl mb-2 group-hover:text-[#FF6B00] transition-colors font-medium">
                  {post.title}
                </h3>
                <p className="text-[#B8B8B8]">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-32 px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 style={{ fontSize: '56px', lineHeight: '1.15', letterSpacing: '-0.02em' }} className="text-white mb-8">
            Let's create something<br />
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] bg-clip-text text-transparent">
              people remember.
            </span>
          </h2>
          <p className="text-[#B8B8B8] text-xl mb-14 leading-relaxed">
            Ready to elevate your brand with stunning visuals?<br />Let's talk about your project.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://wa.me/6398498216"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] text-white rounded-full hover:shadow-[0_0_40px_rgba(255,107,0,0.7)] transition-all flex items-center gap-3 group"
            >
              <MessageCircle size={22} strokeWidth={2} />
              <span className="font-medium">WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="px-10 py-5 bg-[#1A1A1A] border border-white/20 text-white rounded-full hover:border-[#FF6B00] hover:bg-[#1A1A1A]/80 transition-all flex items-center gap-3"
            >
              <Mail size={22} strokeWidth={2} />
              <span className="font-medium">Email</span>
            </Link>
            <a
              href="https://www.instagram.com/neuroworksai?igsh=MXJ5OXIwcDMxOWtvMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-[#1A1A1A] border border-white/20 text-white rounded-full hover:border-[#E6C07B] hover:bg-[#1A1A1A]/80 transition-all flex items-center gap-3"
            >
              <Instagram size={22} strokeWidth={2} />
              <span className="font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}