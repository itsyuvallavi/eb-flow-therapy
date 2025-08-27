import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const LazyBackground = ({ 
  src, 
  className = '', 
  style = {}, 
  children, 
  placeholder = 'bg-gray-100',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = src;
  }, [isInView, src]);

  const backgroundStyle = {
    ...style,
    ...(isLoaded && {
      backgroundImage: `url(${src})`,
    }),
    transition: 'opacity 0.3s ease-in-out',
    opacity: isLoaded ? style.opacity || 1 : 0,
  };

  return (
    <div
      ref={ref}
      className={`${className} ${!isLoaded ? placeholder : ''}`}
      style={backgroundStyle}
      {...props}
    >
      {children}
    </div>
  );
};

LazyBackground.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  placeholder: PropTypes.string,
};

export default LazyBackground;