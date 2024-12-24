// hooks/useIntersectionObserver.jsx
import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Only set to visible if element is actually entering viewport
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Once element is visible, stop observing to prevent re-triggering
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      }
    }, { 
      threshold: 0.2,
      rootMargin: '50px',
      ...options 
    });

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return [elementRef, isVisible];
};

export const FloatingIcon = ({ Icon, className, delay }) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref}
      className={`absolute ${className} transform transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon className="w-8 h-8 text-white/20" />
    </div>
  );
};