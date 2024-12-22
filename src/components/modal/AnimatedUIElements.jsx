import React from 'react';
import { motion } from 'framer-motion';

export const FadeInSection = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const AnimatedText = ({ text, className = '' }) => (
  <motion.span
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`inline-block ${className}`}
  >
    {text}
  </motion.span>
);

export const AnimatedIcon = ({ children, hover = true }) => (
  <motion.div
    whileHover={hover ? { scale: 1.1, rotate: 5 } : {}}
    className="transition-all duration-300"
  >
    {children}
  </motion.div>
);

export const GradientBackground = ({ children }) => (
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-neutral-100/20 to-neutral-300/20" />
    <div className="relative z-10">{children}</div>
  </div>
);

export const FloatingElement = ({ children, className = '' }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const HoverCard = ({ children }) => (
  <motion.div
    whileHover={{ 
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
    }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    className="rounded-lg bg-white transition-all duration-300"
  >
    {children}
  </motion.div>
);

export const ScrollProgressBar = () => {
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
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-neutral-200 z-50"
      style={{ scaleX: scroll / 100, transformOrigin: "0%" }}
    />
  );
};