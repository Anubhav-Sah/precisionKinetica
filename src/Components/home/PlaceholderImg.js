import React from 'react';

function PlaceholderImg({ className, text }) {
  return (
    <div className={`${className} flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-lg`}>
      {text}
    </div>
  );
}

export default PlaceholderImg;
