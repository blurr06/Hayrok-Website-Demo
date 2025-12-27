
import React from 'react';

export const MatrixRays: React.FC<{ count?: number; opacity?: number }> = ({ count = 35, opacity = 0.5 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ opacity }}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="matrix-ray animate-ray-fall"
          style={{
            left: `${(i * 100) / count}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
            height: `${150 + Math.random() * 300}px`,
            width: `${Math.random() > 0.8 ? 3 : 1.5}px`,
            opacity: 0.3 + Math.random() * 0.7,
          }}
        />
      ))}
    </div>
  );
};
