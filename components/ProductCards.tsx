import React from 'react';
import { Hexagon, Globe, BarChart2, Sparkles, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 'genesis',
    name: 'Genesis Platform',
    status: 'Live',
    description: 'NextGen Pentesting platform powered by Hay AI. Continuous, automated reconnaissance and zero-false-positive reporting.',
    icon: Hexagon,
    features: ['Continuous Pentesting', 'Auto Recon', 'Verified Fixes']
  },
  {
    id: 'scorecard',
    name: 'Security Scorecard',
    status: 'Live',
    description: 'Benchmarking and scoring module. Compare your posture against industry peers with objective metrics.',
    icon: BarChart2,
    features: ['Industry Benchmarks', 'Risk Scoring', 'Board Reports']
  },
  {
    id: 'insights',
    name: 'Hay AI Insights',
    status: 'Live',
    description: 'AI-generated context for every finding. Understand the business impact and remediation path instantly.',
    icon: Sparkles,
    features: ['AI Remediation', 'Impact Analysis', 'Context Awareness']
  },
  {
    id: 'surfaceiq',
    name: 'SurfaceIQ',
    status: 'Coming Soon',
    description: 'Complete attack surface visibility. Identify shadow IT and exposed assets before they are exploited.',
    icon: Globe,
    features: ['Asset Discovery', 'Exposure Mapping', 'Shadow IT']
  }
];

export const ProductCards: React.FC = () => {
  return (
    <section id="platform" className="py-24 relative bg-hayrok-dark border-t border-hayrok-border">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Unified <span className="text-hayrok-orange">Risk Intelligence</span></h2>
          <p className="text-slate-400 text-lg">
            Less noise, more fixes. Hayrok consolidates offensive security into a single, intelligent ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-hayrok-panel rounded-xl p-6 border border-hayrok-border hover:border-hayrok-orange/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-hayrok-orange/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-lg ${product.status === 'Live' ? 'bg-hayrok-orange text-white' : 'bg-slate-800 text-slate-300 group-hover:bg-slate-700'}`}>
                    <product.icon size={24} />
                  </div>
                  {product.status === 'Coming Soon' && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-400 px-2 py-1 rounded">
                      Coming Soon
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-hayrok-orange transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 min-h-[80px]">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-slate-500">
                      <div className="w-1 h-1 bg-hayrok-orange rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="#" className="inline-flex items-center text-sm font-semibold text-white hover:text-hayrok-orange transition-colors">
                  Learn more <ArrowUpRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
