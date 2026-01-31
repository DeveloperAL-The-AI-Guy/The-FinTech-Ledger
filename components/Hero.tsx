import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 px-4 z-10">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Tagline / Value Prop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center space-x-2 mb-6"
        >
          <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="font-mono text-gold text-xs uppercase tracking-[0.2em]">
            System Status: Nominal
          </span>
          <div className="h-px w-12 bg-gold/30" />
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-tight mb-8"
        >
          VELOCITY OF <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver via-white to-silver text-glow">
            VALUE
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-sans text-silver text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
        >
          The definitive ledger for high-frequency assets. <br className="hidden md:block"/>
          <span className="text-white font-medium">Zero latency. Infinite scale. Total recall.</span>
        </motion.p>

        {/* CTA Group */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <button className="group relative bg-trust hover:bg-blue-600 text-white font-display font-bold text-sm px-8 py-4 rounded-sm transition-all overflow-hidden">
            <span className="relative z-10 flex items-center tracking-widest uppercase">
              Deploy Protocol
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
          </button>

          <button className="group flex items-center space-x-2 text-silver hover:text-gold transition-colors font-mono text-sm uppercase tracking-wider">
            <span>Read_Documentation</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
        
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center space-y-2 opacity-50"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold to-transparent" />
        <span className="font-mono text-[10px] text-gold tracking-widest">SCROLL</span>
      </motion.div>
    </section>
  );
};

export default Hero;