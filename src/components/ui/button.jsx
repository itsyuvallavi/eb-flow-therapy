import React from 'react';
import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  className = '', 
  variant = 'default', 
  asChild = false,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-primary-sage hover:bg-primary-forest text-white focus:ring-primary-sage",
    ghost: "hover:bg-gray-100 text-gray-600 hover:text-gray-900",
    outline: "border border-gray-300 hover:bg-gray-50 text-gray-700"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: classes,
      ref,
      ...props
    });
  }

  return (
    <button className={classes} ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };