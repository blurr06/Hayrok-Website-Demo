
import React, { useEffect, useRef, useState } from 'react';

export const IntelligenceFabric: React.FC<{ density?: number; interactivity?: boolean; isDark?: boolean }> = ({ 
  density = 1, 
  interactivity = false, // Disabled by default for performance
  isDark = false 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Use Intersection Observer to only animate when visible
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrame: number;
    let width: number;
    let height: number;
    let lastTime = 0;
    const FPS_LIMIT = 30; // Limit to 30fps for performance
    const frameInterval = 1000 / FPS_LIMIT;

    // Reduced particle count for performance
    const particleCount = Math.floor(20 * density);
    const particles: { x: number, y: number, size: number, speed: number, opacity: number, orange: boolean }[] = [];
    
    const init = () => {
      width = canvas.width = containerRef.current?.offsetWidth || window.innerWidth;
      height = canvas.height = containerRef.current?.offsetHeight || window.innerHeight;
      
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({ 
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 4 + 2,
          speed: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.3 + 0.1,
          orange: Math.random() > 0.7
        });
      }
    };

    const draw = (time: number) => {
      // Throttle frame rate
      if (time - lastTime < frameInterval) {
        animationFrame = requestAnimationFrame(draw);
        return;
      }
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Gentle floating motion
        p.y -= p.speed;
        p.x += Math.sin(time * 0.001 + p.y * 0.01) * 0.3;
        
        // Wrap around
        if (p.y < -p.size) {
          p.y = height + p.size;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        if (p.orange) {
          ctx.fillStyle = isDark 
            ? `rgba(255, 95, 0, ${p.opacity})` 
            : `rgba(255, 136, 0, ${p.opacity * 0.6})`;
        } else {
          ctx.fillStyle = isDark 
            ? `rgba(56, 189, 248, ${p.opacity * 0.3})` 
            : `rgba(255, 200, 150, ${p.opacity * 0.5})`;
        }
        
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(draw);
    };

    const handleResize = () => init();

    window.addEventListener('resize', handleResize);
    
    init();
    animationFrame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, [density, isDark, isVisible]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ 
          opacity: 0.8,
          willChange: 'auto' // Hint for GPU optimization
        }}
      />
    </div>
  );
};
