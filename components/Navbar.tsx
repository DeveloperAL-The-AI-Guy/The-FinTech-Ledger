import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Navbar: React.FC = () => {
  
  // Manual scroll handler to guarantee movement
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Optional: Update URL without jumping
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '/');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 sm:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto glass-panel rounded-lg px-6 py-3 flex items-center justify-between pointer-events-auto shadow-2xl shadow-black/50">
        {/* Brand - Resets to top */}
        <a 
          href="/" 
          onClick={scrollToTop}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer group"
        >
          <ShieldCheck className="text-gold w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all" />
          <span className="font-display font-bold text-white tracking-widest text-sm md:text-base">
            LEDGER<span className="text-gold">.SYS</span>
          </span>
        </a>

        {/* Anchors - Hidden on small mobile */}
        <div className="hidden md:flex items-center space-x-8">
          {['MARKET', 'ANALYTICS', 'PROTOCOL'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className="font-mono text-xs text-silver hover:text-white hover:text-glow transition-all tracking-wider cursor-pointer relative group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <a 
          href="#access"
          onClick={(e) => scrollToSection(e, 'access')}
          className="bg-trust hover:bg-blue-600 text-white font-mono text-xs font-bold px-5 py-2 rounded-sm transition-all border border-blue-400/30 uppercase tracking-widest flex items-center cursor-pointer shadow-[0_0_15px_rgba(45,107,255,0.3)] hover:shadow-[0_0_25px_rgba(45,107,255,0.6)]"
        >
          Connect_Terminal
        </a>
      </div>
    </nav>
  );
};

export default Navbar;