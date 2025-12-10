import React from 'react';

export default function Card({ title, description, children, onClick, className = '' }) {
  return (
    <div className={`card ${className}`} onClick={onClick} style={onClick ? {cursor: 'pointer'} : {}}>
      {title && <h3 style={{ marginTop: 0, fontSize: 'var(--font-size-lg)', color: 'var(--color-primary)' }}>{title}</h3>}
      {description && <p style={{ color: 'var(--color-text-mutated)', fontSize: 'var(--font-size-sm)' }}>{description}</p>}
      {children}
    </div>
  );
}
