import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: 'THROUGHPUT', value: '1.2M', unit: 'TPS', description: 'Verified transactions' },
  { label: 'SETTLEMENT', value: '<50', unit: 'MS', description: 'Global finality time' },
  { label: 'LIQUIDITY', value: '$84B', unit: 'TVL', description: 'Secured on-chain' },
];

const MetricsLoop: React.FC = () => {
  return (
    <section className="relative z-10 w-full py-24 px-4 bg-void">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {metrics.map((m, idx) => (
            <motion.div 
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group flex flex-col items-center text-center p-8 border border-silver/5 hover:border-gold/30 rounded-lg transition-colors bg-overlay/50"
            >
              {/* Arc Indicator */}
              <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
                 <svg className="w-full h-full transform -rotate-90">
                   <circle
                     cx="64" cy="64" r="60"
                     stroke="#1f2937"
                     strokeWidth="4"
                     fill="transparent"
                   />
                   <motion.circle
                     cx="64" cy="64" r="60"
                     stroke="#D4AF37"
                     strokeWidth="4"
                     fill="transparent"
                     strokeDasharray="377"
                     strokeDashoffset="377"
                     whileInView={{ strokeDashoffset: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                   />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center font-display">
                    <span className="text-3xl font-bold text-white">{m.value}</span>
                    <span className="text-xs text-gold font-mono mt-1">{m.unit}</span>
                 </div>
              </div>

              <h3 className="font-mono text-sm font-bold text-silver mb-2 tracking-widest">{m.label}</h3>
              <p className="font-sans text-sm text-silver/60 max-w-[200px]">{m.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsLoop;