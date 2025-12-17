import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCards } from './components/ProductCards';
import { HowItWorks } from './components/HowItWorks';
import { HayAiSection } from './components/HayAiSection';
import { ScorecardSection } from './components/ScorecardSection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { Footer } from './components/Footer';
import { Search, Zap, Lock } from 'lucide-react';

function App() {
  return (
    <div className="bg-hayrok-dark min-h-screen text-white selection:bg-hayrok-orange selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Value Prop Banner */}
        <section className="py-10 bg-hayrok-panel/50 border-y border-hayrok-border backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 group">
                <div className="p-3 bg-hayrok-orange/10 rounded-lg text-hayrok-orange group-hover:scale-110 transition-transform">
                  <Search size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Auto Reconnaissance</h3>
                  <p className="text-slate-500 text-sm">Continuous asset discovery</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-4 group border-l-0 md:border-l border-hayrok-border/50 md:pl-8">
                <div className="p-3 bg-hayrok-orange/10 rounded-lg text-hayrok-orange group-hover:scale-110 transition-transform">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Verified Results</h3>
                  <p className="text-slate-500 text-sm">Actionable fixes, zero noise</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-4 group border-l-0 md:border-l border-hayrok-border/50 md:pl-8">
                <div className="p-3 bg-hayrok-orange/10 rounded-lg text-hayrok-orange group-hover:scale-110 transition-transform">
                  <Lock size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Continuous Testing</h3>
                  <p className="text-slate-500 text-sm">24/7 Threat Protection</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HayAiSection />
        
        <ScorecardSection />
        
        <ProductCards />

        <HowItWorks />
        
        <IntegrationsSection />
        
        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-black to-hayrok-orange/20"></div>
           {/* Radial burst */}
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-hayrok-orange/20 filter blur-[100px] rounded-full pointer-events-none"></div>
           
           <div className="container mx-auto px-6 relative z-10 text-center">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                Secure your future <br/> with <span className="text-hayrok-orange">Hayrok</span>
              </h2>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                 Join the forward-thinking companies using Genesis to stay ahead of next-generation threats. 
                 Get fast, clear, actionable outcomes today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                 <button className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-lg text-lg font-bold hover:bg-hayrok-orange hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-10px_rgba(255,107,0,0.5)]">
                    Get Started Now
                 </button>
                 <button className="w-full sm:w-auto px-10 py-5 rounded-lg text-lg font-bold text-white border border-white/20 hover:bg-white/10 transition-all">
                    Talk to Sales
                 </button>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;
