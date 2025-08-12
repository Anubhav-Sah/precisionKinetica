import React from 'react';

function PlaceholderImg({ className, text }) {
  return (
    <div
      className={`${className} flex items-center justify-center rounded-full text-blue-700 font-bold text-lg`}
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {text}
    </div>
  );
}

export default PlaceholderImg;
