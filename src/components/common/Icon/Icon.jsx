import React from 'react';

const Icon = ({ id, width = '20', height = '20', className = '' }) => (
  <svg width={width} height={height} className={className}>
    <use href={`#icon-${id}`} />
  </svg>
);

export default Icon;
