import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-mountain-shadow/5 backdrop-blur-sm w-full py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col space-y-6">
          {/* Main Links */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center space-x-6">
              <Link to="/" className="text-mountain-shadow/70 text-sm hover:text-mountain-terra transition-colors">
                Home
              </Link>
              <Link to="/our-team" className="text-mountain-shadow/70 text-sm hover:text-mountain-terra transition-colors">
                Our Team
              </Link>
              <Link to="/services" className="text-mountain-shadow/70 text-sm hover:text-mountain-terra transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-mountain-shadow/70 text-sm hover:text-mountain-terra transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Copyright & Legal */}
          <div className="border-t border-mountain-shadow/10 pt-6">
            <p className="text-xs text-mountain-shadow/60 text-center max-w-4xl mx-auto leading-relaxed">
              Copyright © EB &amp; Flow Marriage Therapy, Inc. {currentYear} All Rights Reserved. 
              No part of this document may be reproduced without written consent from the author or as otherwise noted. 
              Sections of this website may contain material otherwise copyrighted by 3rd parties, as noted individually, 
              and are protected under their specific terms of use.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;