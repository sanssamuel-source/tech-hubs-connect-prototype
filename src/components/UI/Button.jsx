import React from 'react';

export default function Button({ children, variant = 'primary', onClick, className = '', style = {} }) {
  return (
    <button 
      className={`btn btn-${variant} ${className}`} 
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}
