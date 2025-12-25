import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Simulating a network of assets
const nodes = [
  { id: 1, x: 50, y: 50, type: 'cloud' },
  { id: 2, x: 20, y: 30, type: 'endpoint' },
  { id: 3, x: 80, y: 30, type: 'db' },
  { id: 4, x: 35, y: 70, type: 'server' },
  { id: 5, x: 65, y: 70, type: 'container' },
  { id: 6, x: 50, y: 20, type: 'gateway' },
];

const connections = [
  [1, 2], [1, 3], [1, 4], [1, 5], [6, 1], [4, 5], [2, 4]
];

export const InteractiveGraph: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  // Randomly scan nodes to simulate AI finding vulnerabilities
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNode = Math.floor(Math.random() * nodes.length) + 1;
      setActiveNode(randomNode);
      setTimeout(() => setActiveNode(null), 1500);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Simulate scanning progress loop
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] glass-panel rounded-2xl overflow-hidden border border-hayrok-border/50 shadow-2xl shadow-hayrok-orange/10 backdrop-blur-xl">
      {/* Header of simulated dashboard */}
      <div className="absolute top-0 left-0 w-full h-10 border-b border-hayrok-border bg-hayrok-dark/50 flex items-center px-4 gap-2 z-10">
        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        <div className="ml-4 text-xs text-slate-500 font-mono flex items-center gap-2">
            <span>Genesis Engine v1.0</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
        </div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* The Graph */}
      <div className="absolute inset-0 flex items-center justify-center p-10">
        <div className="relative w-full h-full max-w-lg aspect-square">
          <svg className="w-full h-full overflow-visible">
            {/* Connections */}
            {connections.map(([start, end], i) => {
              const startNode = nodes.find(n => n.id === start)!;
              const endNode = nodes.find(n => n.id === end)!;
              
              const isActive = activeNode === start || activeNode === end;

              return (
                <motion.line
                  key={`link-${i}`}
                  x1={`${startNode.x}%`}
                  y1={`${startNode.y}%`}
                  x2={`${endNode.x}%`}
                  y2={`${endNode.y}%`}
                  stroke={isActive ? '#FF6B00' : '#444'}
                  strokeWidth={isActive ? 2 : 1}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.1 }}
                />
              );
            })}

            {/* Nodes */}
            {nodes.map((node) => {
              const isActive = activeNode === node.id;
              
              return (
                <g key={node.id}>
                  {isActive && (
                    <motion.circle
                      cx={`${node.x}%`}
                      cy={`${node.y}%`}
                      r="20"
                      fill="none"
                      stroke="#FF6B00"
                      strokeWidth="1"
                      initial={{ scale: 0.5, opacity: 1 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 1 }}
                    />
                  )}
                  
                  <motion.circle
                    cx={`${node.x}%`}
                    cy={`${node.y}%`}
                    r={isActive ? 8 : 6}
                    fill={isActive ? '#FF6B00' : '#050505'}
                    stroke={isActive ? '#fff' : '#666'}
                    strokeWidth="2"
                    className="cursor-pointer transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                  />

                  {isActive && (
                     <foreignObject x={`${node.x}%`} y={`${node.y}%`} width="120" height="60" className="overflow-visible pointer-events-none">
                        <div className="transform translate-x-4 -translate-y-1/2 bg-hayrok-panel border border-hayrok-orange/40 text-xs p-2 rounded text-white shadow-lg backdrop-blur-md">
                           <div className="font-bold text-hayrok-orange">Vulnerability Found</div>
                           <div className="text-[10px] text-slate-400">CVE-2024-8291</div>
                        </div>
                     </foreignObject>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Floating UI Elements simulating scanning */}
      <div className="absolute bottom-6 right-6 glass-panel p-4 rounded-xl flex flex-col gap-3 min-w-[240px] shadow-2xl border border-white/10 backdrop-blur-xl bg-black/60">
        <div className="flex items-center justify-between text-xs font-mono text-slate-300">
           <div className="flex items-center gap-2">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hayrok-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-hayrok-orange"></span>
              </div>
              <span className="font-bold text-white tracking-wide">
                Hay-AI Scanning...
              </span>
           </div>
           <span className="font-bold text-hayrok-orange">{progress}%</span>
        </div>
        
        {/* Dynamic Progress Bar */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
           <motion.div 
             className="h-full bg-hayrok-orange rounded-full relative"
             initial={{ width: 0 }}
             animate={{ width: `${progress}%` }}
             transition={{ type: "tween", ease: "linear", duration: 0.1 }}
           >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
           </motion.div>
        </div>
        
        {/* Blinking Dots Sequence */}
        <div className="flex gap-1.5 mt-1 pl-1 items-center">
           {[0, 1, 2].map((i) => (
             <motion.div
               key={i}
               className="w-1.5 h-1.5 rounded-full bg-slate-500"
               animate={{ 
                 opacity: [0.3, 1, 0.3], 
                 scale: [0.8, 1.2, 0.8],
                 backgroundColor: ["#64748b", "#FF6B00", "#64748b"]
               }}
               transition={{ 
                 duration: 1.5, 
                 repeat: Infinity, 
                 delay: i * 0.2,
                 ease: "easeInOut"
               }}
             />
           ))}
           <span className="text-[9px] text-slate-400 font-mono ml-2">
             {progress < 30 ? 'Mapping assets' : progress < 70 ? 'Validating paths' : 'Generating proof'}
           </span>
        </div>
      </div>
    </div>
  );
};