import React from 'react';

export default function Input({ label, type = 'text', id, value, onChange, placeholder, helpText }) {
  return (
    <div className="form-group">
      {label && <label htmlFor={id} className="form-label">{label}</label>}
      <input
        type={type}
        id={id}
        className="form-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {helpText && <span className="form-help">{helpText}</span>}
    </div>
  );
}
