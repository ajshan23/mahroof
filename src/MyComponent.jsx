// GraphGrid.js

import React from 'react';

const MyComponent = ({ width, height, step }) => {
  const lines = [];

  const lineOpacity = 0.05; // Adjust the opacity here (0 = fully transparent, 1 = fully opaque)

  const numHorizontalLines = Math.ceil(height / step);
  const numVerticalLines = Math.ceil(width / step);

  for (let i = 0; i < numHorizontalLines; i++) {
    lines.push(
      <line
        key={`h${i}`}
        x1="0"
        y1={i * step}
        x2={width}
        y2={i * step}
        stroke={`rgba(127, 130, 123, ${lineOpacity})`} // Change the RGB values and opacity here
        strokeWidth="1"
      />
    );
  }

  for (let i = 0; i < numVerticalLines; i++) {
    lines.push(
      <line
        key={`v${i}`}
        x1={i * step}
        y1="0"
        x2={i * step}
        y2={height}
        stroke={`rgba(127, 130, 123, ${lineOpacity})`} // Change the RGB values and opacity here
        strokeWidth="1"
      />
    );
  }

  return (
    <svg width={width} height={height} className="grid bg-slate-100 " >
      {lines}
    </svg>
  );
};

export default MyComponent;
