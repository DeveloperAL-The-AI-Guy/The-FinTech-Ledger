import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full bg-void border-t border-silver/10 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        <div className="flex flex-col items-center md:items-start">
            <span className="font-display font-bold text-white text-lg tracking-widest">
                LEDGER<span className="text-gold">.SYS</span>
            </span>
            <span className="font-mono text-[10px] text-silver/50 mt-1">
                EST. 2024 // NEW YORK // LONDON // TOKYO
            </span>
        </div>

        <div className="flex space-x-8 font-mono text-xs text-silver/60">
            <a href="#" className="hover:text-gold transition-colors">LEGAL</a>
            <a href="#" className="hover:text-gold transition-colors">COMPLIANCE</a>
            <a href="#" className="hover:text-gold transition-colors">API_DOCS</a>
            <a href="#" className="hover:text-gold transition-colors">STATUS</a>
        </div>

        <div className="font-sans text-[10px] text-silver/30 max-w-xs text-center md:text-right">
            Not an offer to sell securities. Services provided by Ledger Systems International Ltd. Regulated entities only.
        </div>
      </div>
    </footer>
  );
};

export default Footer;