import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldBeTransparent = isHomePage && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        shouldBeTransparent
          ? "bg-transparent backdrop-blur-sm"
          : "bg-mountain-peak/40 shadow-md backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-24 w-auto my-20" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "HOME", path: "/" },
              { name: "OUR TEAM", path: "/our-team" },
              { name: "SERVICES", path: "/services" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-colors duration-200 group ${
                  shouldBeTransparent
                    ? "text-mountain-forest hover:text-mountain-shadow"
                    : "text-mountain-forest hover:text-mountain-shadow"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                    shouldBeTransparent ? "bg-mountain-forest" : "bg-mountain-shadow"
                  }`}
                ></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-6 py-2 text-sm font-medium border-2 rounded-full transition-all duration-300 hover:scale-105 ${
                shouldBeTransparent
                  ? "text-mountain-forest border-mountain-forest hover:bg-mountain-terra/10"
                  : "text-mountain-shadow border-mountain-shadow hover:bg-mountain-shadow hover:text-mountain-terra"
              }`}
            >
              CONTACT
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              shouldBeTransparent 
                ? "hover:bg-mountain-terra/20" 
                : "hover:bg-mountain-shadow/10"
            }`}
          >
            <svg
              className={`w-6 h-6 ${
                shouldBeTransparent 
                  ? "text-mountain-terra" 
                  : "text-mountain-shadow"
              }`}
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

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-4 space-y-4">
            {[
              { name: "HOME", path: "/" },
              { name: "OUR TEAM", path: "/our-team" },
              { name: "SERVICES", path: "/services" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  shouldBeTransparent
                    ? "text-mountain-terra hover:bg-mountain-terra/20"
                    : "text-mountain-shadow hover:bg-mountain-shadow/10 hover:text-mountain-peak"
                }`}
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