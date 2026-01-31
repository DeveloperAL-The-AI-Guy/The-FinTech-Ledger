import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 sm:px-8">
      <div className="max-w-7xl mx-auto glass-panel rounded-lg px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <ShieldCheck className="text-gold w-6 h-6" />
          <span className="font-display font-bold text-white tracking-widest text-sm md:text-base">
            LEDGER<span className="text-gold">.SYS</span>
          </span>
        </div>

        {/* Anchors - Hidden on small mobile */}
        <div className="hidden md:flex items-center space-x-8">
          {['MARKET', 'PROTOCOL', 'ANALYTICS'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs text-silver hover:text-white transition-colors tracking-wider"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <button className="bg-trust hover:bg-blue-600 text-white font-mono text-xs font-bold px-5 py-2 rounded-sm transition-all border border-blue-400/30 uppercase tracking-widest">
          Connect_Terminal
        </button>
      </div>
    </nav>
  );
};

export default Navbar;