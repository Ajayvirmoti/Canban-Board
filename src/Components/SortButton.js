// SortButton.js
import React from 'react';

const SortButton = ({ onSelect, value, label }) => (
  <option onClick={onSelect} value={value}>
    {label}
  </option>
);

export default SortButton;
