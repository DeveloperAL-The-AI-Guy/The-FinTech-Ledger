import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full bg-void border-t border-silver/10 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        <div className="flex flex-col items-center md:items-start">
            <a href="#" className="font-display font-bold text-white text-lg tracking-widest hover:text-gold transition-colors cursor-pointer">
                LEDGER<span className="text-gold">.SYS</span>
            </a>
            <span className="font-mono text-[10px] text-silver/50 mt-1">
                EST. 2024 // NEW YORK // LONDON // TOKYO
            </span>
        </div>

        <div className="flex space-x-8 font-mono text-xs text-silver/60">
            {/* Redirecting placeholder links to relevant sections for the one-pager experience */}
            <a href="#access" className="hover:text-gold transition-colors cursor-pointer">LEGAL</a>
            <a href="#access" className="hover:text-gold transition-colors cursor-pointer">COMPLIANCE</a>
            <a href="#protocol" className="hover:text-gold transition-colors cursor-pointer">API_DOCS</a>
            <a href="#market" className="hover:text-gold transition-colors cursor-pointer">STATUS</a>
        </div>

        <div className="font-sans text-[10px] text-silver/30 max-w-xs text-center md:text-right">
            Not an offer to sell securities. Services provided by Ledger Systems International Ltd. Regulated entities only.
        </div>
      </div>
    </footer>
  );
};

export default Footer;