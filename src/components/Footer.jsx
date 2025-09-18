import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-700 w-full py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col space-y-8">
          
          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            
            {/* About Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white">EB & Flow Therapy</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Therapy that adapts to your unique story, honoring your journey toward healing and growth.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                <Link to="/" className="text-gray-300 text-sm hover:text-primary-sage transition-colors">
                  Home
                </Link>
                <Link to="/about" className="text-gray-300 text-sm hover:text-primary-sage transition-colors">
                  About
                </Link>
                <Link to="/our-team" className="text-gray-300 text-sm hover:text-primary-sage transition-colors">
                  Meet the Therapists
                </Link>
                <Link to="/services" className="text-gray-300 text-sm hover:text-primary-sage transition-colors">
                  Services
                </Link>
                <Link to="/media" className="text-gray-300 text-sm hover:text-primary-sage transition-colors">
                  Media
                </Link>
                <Link to="/contact" className="text-gray-300 text-sm hover:text-primary-sage transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white">Get in Touch</h4>
              <div className="text-gray-300 text-sm space-y-2">
                <p>Licensed LMFT #127577</p>
                <p>Los Angeles, CA</p>
                <p className="text-primary-sage">*Telehealth only at this time</p>
              </div>
            </div>
            
          </div>
          
          {/* Copyright & Legal */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-xs text-gray-400 text-center max-w-4xl mx-auto leading-relaxed">
              Copyright © EB & Flow Therapy {currentYear} All Rights Reserved.
              Professional therapy services in Los Angeles. HIPAA-compliant and confidential care.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;