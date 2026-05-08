import { useState } from "react";
import { Play, X } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router";

// Import all your images here
import FBAds from "../../assets/FBAds.jpeg";
import IgAdPoster from "../../assets/IgAdPoster.jpeg";
import tech_startup from "../../assets/tech _startup_branding.jpeg";
import YTthumbnail from "../../assets/YTthumbnail.jpeg";
import eventPoster from "../../assets/EventPoster.jpeg";

export function Portfolio() {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<"video" | "design">("video");
  
  // Updated state: tracks both the type of media and the source (image URL or YouTube ID)
  const [modalData, setModalData] = useState<{ type: "video" | "image", src: string } | null>(null);

  useEffect(() => {
    // Check if the link passed a specific tab state
    if (location.state && location.state.activeTab) {
      setActiveTab(location.state.activeTab); // Set it to "design" automatically
    }
  }, [location]);

  const videoProjects = [
    {
      title: "Brand Awareness Campaign",
      category: "Reels",
      description: "Viral reel series that generated 2M+ views",
      // image: videoThumb1, 
      youtubeId: "lF4qxooChGU", // Example: "dQw4w9WgXcQ"
    },
    {
      title: "Product Launch Video",
      category: "YouTube Edits",
      description: "Professional product showcase with motion graphics",
      // image: videoThumb2,
      youtubeId: "bjWLODcfpEA", 
    },
    {
      title: "Explainer Animation",
      category: "Motion Graphics",
      description: "Engaging animated explainer for SaaS product",
      // image: videoThumb3,
      youtubeId: "AnXvmFKY8FE",
    },
    {
      title: "Social Media Series",
      category: "Short-form Content",
      description: "30-day content series for Instagram and TikTok",
      // image: videoThumb4,
      youtubeId: "jD10_RWg0o8",
    },
    {
      title: "Corporate Video",
      category: "YouTube Edits",
      description: "Professional corporate presentation with b-roll",
      // image: videoThumb5,
      youtubeId: "Sxx0D3sdKG0",
    },
    {
      title: "Music Video Edit",
      category: "Reels",
      description: "Creative music video with dynamic transitions",
      // image: videoThumb6,
      youtubeId: "zaC43QSSrog",
    },
  ];

  const designProjects = [
    {
      title: "Tech Startup Branding",
      category: "Logos",
      description: "Complete brand identity system",
      image: tech_startup,
    },
    {
      title: "YouTube Thumbnail Set",
      category: "Thumbnails",
      description: "High-CTR thumbnail designs for tech channel",
      image: YTthumbnail,
    },
    {
      title: "Event Poster Design",
      category: "Posters",
      description: "Premium event marketing materials",
      image: eventPoster,
    },
    {
      title: "Facebook Ad Campaign",
      category: "Ad Creatives",
      description: "High-converting ad designs with A/B testing",
      image: FBAds 
    },
    {
      title: "Restaurant Branding",
      category: "Logos",
      description: "Full brand identity for upscale restaurant",
      // image: restaurantImg,
    },
    {
      title: "Instagram Ad Series",
      category: "Ad Creatives",
      description: "Carousel ads that increased ROAS by 300%",
      image: IgAdPoster,
    },
  ];

  const currentProjects = activeTab === "video" ? videoProjects : designProjects;

  return (
    <div className="min-h-screen">
      <section className="py-32 px-8 text-center">
        <div className="max-w-[1440px] mx-auto">
          <h1 style={{ fontSize: '64px', lineHeight: '1.1' }} className="text-white mb-2">
            Portfolio
          </h1>
          <p className="text-[#B8B8B8] text-2xl mb-8">
            Saurabh Pathak
          </p>
          <p className="text-[#B8B8B8] text-lg max-w-2xl mx-auto">
            A curated selection of projects showcasing expertise in video editing and graphic design
          </p>
        </div>
      </section>

      <section className="px-8 pb-32">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-center gap-4 mb-16">
            <button
              onClick={() => setActiveTab("video")}
              className={`px-8 py-4 rounded-full transition-all ${
                activeTab === "video"
                  ? "bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] text-white shadow-[0_0_30px_rgba(255,107,0,0.4)]"
                  : "bg-[#1A1A1A] text-[#B8B8B8] border border-white/10 hover:border-[#FF6B00]"
              }`}
            >
              Video Editing
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`px-8 py-4 rounded-full transition-all ${
                activeTab === "design"
                  ? "bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] text-white shadow-[0_0_30px_rgba(255,107,0,0.4)]"
                  : "bg-[#1A1A1A] text-[#B8B8B8] border border-white/10 hover:border-[#FF6B00]"
              }`}
            >
              Graphic Designing
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => {
                  // Determine what to open based on the active tab and available data
                  if (activeTab === "video" && 'youtubeId' in project && project.youtubeId) {
                    setModalData({ type: "video", src: project.youtubeId });
                  } else if (project.image) {
                    setModalData({ type: "image", src: project.image });
                  }
                }}
              >
                <div className="aspect-video bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-2xl border border-white/10 overflow-hidden mb-4 relative hover:border-[#FF6B00] hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] transition-all">
                  
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  )}

                  {activeTab === "video" && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#FF6B00]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <Play size={24} className="text-white ml-1" fill="white" />
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div>
                      <div className="text-[#FF6B00] text-sm mb-1">{project.category}</div>
                      <p className="text-[#B8B8B8] text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-white text-xl group-hover:text-[#FF6B00] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#B8B8B8] text-sm mt-2">{project.category}</p>
              </div>
            ))}
          </div>

          {activeTab === "video" && (
            <div className="mt-16 p-8 bg-[#1A1A1A] rounded-2xl border border-white/10">
              <h3 className="text-white text-2xl mb-4">Video Editing Categories</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-[#B8B8B8]">• Reels</div>
                <div className="text-[#B8B8B8]">• YouTube Edits</div>
                <div className="text-[#B8B8B8]">• Motion Graphics</div>
                <div className="text-[#B8B8B8]">• Short-form Content</div>
              </div>
            </div>
          )}

          {activeTab === "design" && (
            <div className="mt-16 p-8 bg-[#1A1A1A] rounded-2xl border border-white/10">
              <h3 className="text-white text-2xl mb-4">Graphic Design Categories</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-[#B8B8B8]">• Posters</div>
                <div className="text-[#B8B8B8]">• Thumbnails</div>
                <div className="text-[#B8B8B8]">• Logos</div>
                <div className="text-[#B8B8B8]">• Ad Creatives</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- DYNAMIC MODAL (LIGHTBOX) OVERLAY --- */}
      {modalData && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm transition-opacity"
          onClick={() => setModalData(null)} // Close when clicking background
        >
          {/* Close Cross Icon */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white hover:scale-110 transition-all z-[110]"
            onClick={() => setModalData(null)}
          >
            <X size={40} />
          </button>
          
          {/* Conditionally Render Image OR YouTube Video */}
          {modalData.type === "image" ? (
            <img 
              src={modalData.src} 
              alt="Enlarged Project View" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent clicking the image from closing the modal
            />
          ) : (
            <div 
              className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-default bg-black"
              onClick={(e) => e.stopPropagation()} // Prevent clicking the video from closing the modal
            >
              <iframe
                src={`https://www.youtube.com/embed/${modalData.src}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
}