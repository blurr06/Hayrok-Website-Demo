
import React from 'react';
import { Hexagon, Globe, BarChart2, Sparkles, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 'genesis',
    name: 'Genesis Platform',
    status: 'Live',
    description: 'NextGen Pentesting platform powered by Hay AI. Continuous, automated reconnaissance.',
    icon: Hexagon,
    features: ['Continuous Pentesting', 'Auto Recon', 'Verified Fixes']
  },
  {
    id: 'scorecard',
    name: 'Security Scorecard',
    status: 'Live',
    description: 'Benchmarking and scoring module. Compare your posture against industry peers.',
    icon: BarChart2,
    features: ['Industry Benchmarks', 'Risk Scoring', 'Board Reports']
  },
  {
    id: 'insights',
    name: 'Hay AI Insights',
    status: 'Live',
    description: 'AI-generated context for every finding. Understand impact and remediation instantly.',
    icon: Sparkles,
    features: ['AI Remediation', 'Impact Analysis', 'Context Awareness']
  },
  {
    id: 'surfaceiq',
    name: 'SurfaceIQ',
    status: 'Coming Soon',
    description: 'Complete attack surface visibility. Identify shadow IT before it is exploited.',
    icon: Globe,
    features: ['Asset Discovery', 'Exposure Mapping', 'Shadow IT']
  }
];

export const ProductCards: React.FC = () => {
  return (
    <section id="platform" className="py-32 relative bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-hayrok-orange uppercase tracking-[0.3em] mb-4">Unified Ecosystem</h2>
          <h3 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">Engineered for <br/> <span className="text-hayrok-orange">Risk Reduction</span></h3>
          <p className="text-slate-500 text-xl font-medium">
            Less noise, more fixes. Hayrok consolidates offensive security into a single, intelligent lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white rounded-[2.5rem] p-10 border border-slate-200 hover:border-hayrok-orange/50 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl shadow-lg transition-all duration-500 ${product.status === 'Live' ? 'bg-hayrok-dark text-white group-hover:bg-hayrok-orange group-hover:scale-110' : 'bg-slate-100 text-slate-400'}`}>
                    <product.icon size={28} />
                  </div>
                </div>

                <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-hayrok-orange transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-slate-500 text-base leading-relaxed mb-8 font-medium">
                  {product.description}
                </p>

                <div className="space-y-3 mb-10">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs font-bold text-slate-400">
                      <div className="w-1.5 h-1.5 bg-hayrok-orange/30 rounded-full mr-3 group-hover:bg-hayrok-orange transition-colors" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-sm font-black text-slate-900 hover:text-hayrok-orange transition-colors uppercase tracking-widest">
                  Explore Module <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
