import React from 'react';
import floralPattern from '../../assets/floral-pattern.jpg';

const FloralBackground = ({ children, opacity = '0.15' }) => {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${floralPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: opacity,
          mixBlendMode: 'multiply'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FloralBackground;