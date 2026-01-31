import React from 'react';
import ParticleLedger from './components/ParticleLedger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DataTerminal from './components/DataTerminal';
import MetricsLoop from './components/MetricsLoop';
import SystemFlow from './components/SystemFlow';
import OfferCTA from './components/OfferCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-void text-silver overflow-hidden">
      {/* Layer 2: Particle System (Background) */}
      <ParticleLedger />

      {/* Layer 3+: Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <DataTerminal />
          <MetricsLoop />
          <SystemFlow />
          <OfferCTA />
        </main>
        <Footer />
      </div>
      
      {/* Noise Texture Overlay (Layer 1) implemented via CSS pointer-events-none */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[1] mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
};

export default App;