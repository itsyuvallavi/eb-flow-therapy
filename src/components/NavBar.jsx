import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/our-team' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'media', label: 'Media', path: '/media' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="bg-[#faf9f6] border-b border-[#e8d5c4] px-6 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src={logo} 
            alt="EB & Flow Therapy" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-[#a8b5a0] ${
                location.pathname === item.path
                  ? 'text-[#a8b5a0]'
                  : 'text-[#6b5d47]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Button 
          asChild 
          className="hidden md:inline-flex bg-[#d4a574] hover:bg-[#c4956a] text-[#5d5043] border-0"
        >
          <Link to="/contact">Book Consultation</Link>
        </Button>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[#faf9f6]/95 backdrop-blur-sm z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-[#a8b5a0]'
                  : 'text-[#6b5d47] hover:text-[#a8b5a0]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button 
            asChild 
            className="mt-8 bg-[#d4a574] hover:bg-[#c4956a] text-[#5d5043] border-0"
          >
            <Link to="/contact" onClick={() => setIsOpen(false)}>Book Consultation</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
export { NavBar as Header };