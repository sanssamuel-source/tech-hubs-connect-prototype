import React from 'react';

export default function Select({ label, id, value, onChange, options = [], placeholder, helpText }) {
  return (
    <div className="form-group">
      {label && <label htmlFor={id} className="form-label">{label}</label>}
      <select
        id={id}
        className="form-select"
        value={value}
        onChange={onChange}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {helpText && <span className="form-help">{helpText}</span>}
    </div>
  );
}
