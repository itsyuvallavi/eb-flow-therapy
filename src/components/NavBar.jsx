import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import logoWhite from "../assets/logo_white.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [crossedHero, setCrossedHero] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const mobileProgress = Math.min(scrollPosition / 100, 1);
      setScrollProgress(mobileProgress);

      if (isHomePage) {
        const heroSection = document.querySelector('section');
        if (heroSection) {
          const heroHeight = heroSection.offsetHeight;
          setCrossedHero(scrollPosition > heroHeight - 100);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const getNavBackground = () => {
    if (isMenuOpen) {
      return "bg-mountain-shadow/20 backdrop-blur-md md:bg-transparent md:backdrop-blur-none";
    }
    
    if (scrollProgress > 0 || !isHomePage) {
      return "md:bg-mountain-peak/10 md:backdrop-blur-sm";
    }
    
    return "";
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${getNavBackground()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo Container */}
          <div className="flex-1 flex justify-start">
            <Link 
              to="/"
              className="h-16 md:h-24 relative"
              style={{
                opacity: isMobile ? 1 - scrollProgress : 1
              }}
            >
              {/* Base Color Logo */}
              <img 
                src={logo}
                alt="Logo"
                className={`h-full w-auto transition-opacity duration-500
                  ${!isHomePage || crossedHero ? 'opacity-100' : 'opacity-0'}`}
              />
              
              {/* Homepage White Logo Overlay */}
              {isHomePage && (
                <img 
                  src={logoWhite}
                  alt="Logo"
                  className={`absolute top-0 left-0 h-full w-auto transition-opacity duration-500
                    ${crossedHero ? 'opacity-0' : 'opacity-100'}`}
                />
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "HOME", path: "/" },
              { name: "OUR TEAM", path: "/our-team" },
              { name: "SERVICES", path: "/services" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-sm font-medium transition-colors duration-200 group text-mountain-shadow hover:text-mountain-shadow"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full bg-mountain-shadow" />
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2 text-sm font-medium border-2 rounded-full transition-all duration-300 hover:scale-105 
                text-mountain-shadow border-mountain-shadow hover:bg-mountain-shadow hover:text-mountain-terra"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex-1 flex justify-end md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 z-20"
              aria-label="Toggle menu"
            >
              <svg
                className="w-10 h-10 text-mountain-shadow"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} 
            overflow-hidden bg-white/90 backdrop-blur-sm rounded-lg mt-2`}
        >
          <div className="py-4 space-y-4">
            {[
              { name: "HOME", path: "/" },
              { name: "OUR TEAM", path: "/our-team" },
              { name: "SERVICES", path: "/services" },
              { name: "CONTACT", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-2 text-sm font-medium text-mountain-shadow 
                  hover:bg-mountain-shadow/10 rounded-lg transition-colors text-right"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;