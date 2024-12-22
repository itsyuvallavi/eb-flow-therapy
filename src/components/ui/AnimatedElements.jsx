import React from 'react';

export const FadeInSection = ({ children, delay = 0, className = '' }) => (
  <div
    className={`animate-fade-in ${delay ? `animate-delay-${delay}` : ''} ${className}`}
  >
    {children}
  </div>
);

export const FloatingElement = ({ children, className = '' }) => (
  <div className={`animate-float ${className}`}>
    {children}
  </div>
);

export const PulsingElement = ({ children, className = '' }) => (
  <div className={`animate-pulse-slow ${className}`}>
    {children}
  </div>
);

export const HoverCard = ({ children, className = '' }) => (
  <div 
    className={`transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${className}`}
  >
    {children}
  </div>
);

export const GradientBackground = ({ children, className = '' }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-b from-neutral-100/20 to-neutral-300/20" />
    <div className="relative z-10">{children}</div>
  </div>
);

export const ScrollProgress = () => {
  const [scroll, setScroll] = React.useState(0);

  React.useEffect(() => {
    const updateScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (totalScroll / windowHeight) * 100;
      setScroll(scrolled);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-200/20 z-50">
      <div 
        className="h-full bg-neutral-200 transition-all duration-150"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
};