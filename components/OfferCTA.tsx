import React from 'react';
import { ArrowRight } from 'lucide-react';

const OfferCTA: React.FC = () => {
  return (
    <section className="relative z-10 w-full py-32 px-4 flex justify-center bg-market-gradient">
      <div className="max-w-4xl w-full glass-panel p-12 md:p-16 rounded-lg text-center border border-trust/20 shadow-2xl shadow-trust/5">
        
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
          REQUEST ACCESS
        </h2>
        
        <p className="font-sans text-silver text-lg mb-12 max-w-2xl mx-auto">
          The Ledger is currently in closed beta for institutional partners. 
          Secure your position in the queue.
        </p>

        <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="INSTITUTIONAL_EMAIL"
              className="w-full bg-void/80 border border-silver/20 text-white px-6 py-4 font-mono text-sm focus:outline-none focus:border-gold transition-colors rounded-sm placeholder:text-silver/30"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity">
                <span className="text-[10px] text-gold font-mono">REQUIRED</span>
            </div>
          </div>
          
          <button className="w-full bg-gold hover:bg-[#b5952f] text-black font-display font-bold text-sm px-8 py-4 uppercase tracking-widest transition-all flex items-center justify-center space-x-2">
            <span>Initiate Handshake</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="mt-8 font-mono text-[10px] text-silver/40">
          ENCRYPTED TRANSMISSION // 256-BIT
        </p>
      </div>
    </section>
  );
};

export default OfferCTA;