import { Outlet, Link, useLocation, useNavigationType } from "react-router"; // Added useNavigationType
import { Menu, X, ArrowRight, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

export function Root() {
  const location = useLocation();
  const navType = useNavigationType(); // Detects if the user clicked "Back"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/#about", label: "About" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/#services", label: "Services" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path.includes("#")) return false;
    return location.pathname === path;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // Check if the link contains a hash fragment
    if (path.includes("#")) {
      const [route, hash] = path.split("#");
      const targetRoute = route || "/";

      // If we are already on the correct page, prevent default and smooth scroll
      if (location.pathname === targetRoute) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          const offset = 80; // Height of the fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    }
    // Always close the mobile menu on click
    setMobileMenuOpen(false);
  };

  // Handle smooth scrolling and back-button scroll restoration
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Small timeout ensures the DOM has fully painted the new page before calculating position
        setTimeout(() => {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      }
    } else if (navType !== "POP") {
      // ONLY scroll to top if the user is NOT using the Back/Forward browser buttons
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location, navType]);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0D0D0D]/80 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between">
          <Link className="text-xl font-bold text-white hover:text-[#FF6B00] transition-colors" to="/">
            Saurabh Pathak
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`text-sm transition-colors ${
                  isActive(link.path)
                    ? "text-[#FF6B00]"
                    : "text-[#B8B8B8] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link 
            to="/contact"
            className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] text-white rounded-full hover:shadow-[0_0_20px_rgba(255,107,0,0.5)] transition-all" 
          >
            Hire Me
          </Link>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1A1A1A] border-t border-white/10">
            <div className="px-8 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`text-sm transition-colors ${
                    isActive(link.path)
                      ? "text-[#FF6B00]"
                      : "text-[#B8B8B8] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-2.5 bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] text-white rounded-full text-center"
              >
                Hire Me
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <footer className="bg-[#1A1A1A] border-t border-white/10 py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <h3 className="text-white text-3xl font-bold mb-4">Saurabh Pathak</h3>
              <p className="text-[#B8B8B8] text-lg leading-relaxed mb-8">
                Video Editor & Graphic Designer specializing in creating compelling visual content that drives results for creators, brands, and businesses.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/neuroworksai?igsh=MXJ5OXIwcDMxOWtvMw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#0D0D0D] border border-white/10 flex items-center justify-center hover:border-[#FF6B00] hover:bg-[#FF6B00]/10 transition-all"
                >
                  <Instagram className="text-white" size={20} />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 md:col-start-7">
              <h4 className="text-white text-sm uppercase tracking-wider mb-6">Quick Links</h4>
              <div className="flex flex-col gap-3">
                <Link className="text-[#B8B8B8] hover:text-[#FF6B00] transition-colors" to="/">
                  Home
                </Link>
                <Link className="text-[#B8B8B8] hover:text-[#FF6B00] transition-colors" to="/portfolio">
                  Portfolio
                </Link>
                <Link className="text-[#B8B8B8] hover:text-[#FF6B00] transition-colors" to="/blog">
                  Blog
                </Link>
                <Link className="text-[#B8B8B8] hover:text-[#FF6B00] transition-colors" to="/contact">
                  Contact
                </Link>
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white text-sm uppercase tracking-wider mb-6">Services</h4>
              <div className="flex flex-col gap-3">
                <span className="text-[#B8B8B8]">Video Editing</span>
                <span className="text-[#B8B8B8]">Motion Graphics</span>
                <span className="text-[#B8B8B8]">Graphic Design</span>
                <span className="text-[#B8B8B8]">Logo Design</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#B8B8B8] text-sm">
                2026 Saurabh Pathak. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://neuroworks.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B8B8B8] hover:text-[#FF6B00] transition-colors text-sm flex items-center gap-2 group"
              >
                Visit My Agency
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                <span className="text-[#FF6B00]">Neuro Works AI</span>
              </a>
              <Link className="text-[#B8B8B8] hover:text-[#FF6B00] transition-colors text-sm" to="/privacy-policy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}