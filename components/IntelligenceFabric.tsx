
import React, { useEffect, useRef } from 'react';

export const IntelligenceFabric: React.FC<{ density?: number; interactivity?: boolean; isDark?: boolean }> = ({ 
  density = 1, 
  interactivity = true,
  isDark = false 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrame: number;
    let width: number;
    let height: number;

    // Projection settings
    const fieldOfView = 400;
    const gridScale = 30; // Spacing between points
    const rows = Math.floor(40 * density);
    const cols = Math.floor(60 * density);
    
    // Dynamic particle array to avoid recreation every frame
    const points: { x: number, z: number, orange: boolean }[] = [];
    
    const init = () => {
      width = canvas.width = containerRef.current?.offsetWidth || window.innerWidth;
      height = canvas.height = containerRef.current?.offsetHeight || window.innerHeight;
      
      points.length = 0;
      for (let x = -cols / 2; x < cols / 2; x++) {
        for (let z = -rows / 2; z < rows / 2; z++) {
          points.push({ 
            x: x * gridScale, 
            z: z * gridScale,
            orange: Math.random() > 0.92 // 8% chance to be a "highlight" point
          });
        }
      }
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      
      // Professional Blend Mode for Luminous Effects
      ctx.globalCompositeOperation = isDark ? 'screen' : 'multiply';
      
      const centerX = width / 2;
      const centerY = height / 2 + 50; // Shift horizon down slightly
      const slowTime = time * 0.0005;

      points.forEach((p) => {
        // Calculate 3D Height (Y) using multi-layered waves
        // This creates the "breathing terrain" effect
        const d = Math.sqrt(p.x * p.x + p.z * p.z);
        let y = Math.sin(p.x * 0.01 + slowTime) * 25;
        y += Math.cos(p.z * 0.008 - slowTime * 0.8) * 35;
        y += Math.sin(d * 0.005 + slowTime) * 20;

        // Mouse Interaction Displacement
        if (interactivity) {
          const dx = (p.x + centerX) - mouse.current.x;
          const dz = (p.z + centerY) - mouse.current.y;
          const distToMouse = Math.sqrt(dx * dx + dz * dz);
          if (distToMouse < 200) {
            y -= (1 - distToMouse / 200) * 40;
          }
        }

        // 3D Projection Calculation
        const perspective = fieldOfView / (fieldOfView + p.z);
        const sx = p.x * perspective + centerX;
        const sy = y * perspective + centerY + (p.z * 0.5); // Tilt effect

        // Depth-based Styling (Bokeh simulation)
        const opacityBase = isDark ? 0.6 : 0.2;
        const opacity = (1 - (p.z + (rows * gridScale / 2)) / (rows * gridScale)) * opacityBase;
        const size = Math.max(0.5, (1.5 * perspective));

        if (sx > 0 && sx < width && sy > 0 && sy < height) {
          ctx.beginPath();
          
          if (p.orange) {
            // Bright highlight nodes
            ctx.fillStyle = isDark 
              ? `rgba(255, 95, 0, ${opacity * 1.5})` 
              : `rgba(255, 95, 0, ${opacity * 2.5})`;
            ctx.arc(sx, sy, size * 1.5, 0, Math.PI * 2);
          } else {
            // Base infrastructure nodes (Indigo/Blue)
            ctx.fillStyle = isDark 
              ? `rgba(56, 189, 248, ${opacity * 0.5})` 
              : `rgba(15, 23, 42, ${opacity * 0.3})`;
            ctx.arc(sx, sy, size, 0, Math.PI * 2);
          }
          
          ctx.fill();
        }
      });

      animationFrame = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleResize = () => init();

    window.addEventListener('resize', handleResize);
    if (interactivity) window.addEventListener('mousemove', handleMouseMove);
    
    init();
    draw(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [density, isDark, interactivity]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-90"
        style={{ 
          filter: isDark ? 'blur(0.4px) contrast(1.1)' : 'none',
        }}
      />
    </div>
  );
};
