import React from 'react';
import { Database, Cpu, Globe } from 'lucide-react';

const steps = [
  { 
    id: '01', 
    title: 'INGEST', 
    icon: <Database className="w-8 h-8 text-gold" />, 
    desc: 'Real-time aggregation of fragmented liquidity pools.' 
  },
  { 
    id: '02', 
    title: 'COMPUTE', 
    icon: <Cpu className="w-8 h-8 text-trust" />, 
    desc: 'Algorithmic risk assessment and routing optimization.' 
  },
  { 
    id: '03', 
    title: 'EXECUTE', 
    icon: <Globe className="w-8 h-8 text-white" />, 
    desc: 'Atomic settlement across compliant jurisdictions.' 
  },
];

const SystemFlow: React.FC = () => {
  return (
    <section id="protocol" className="relative z-10 w-full py-32 px-4 bg-void scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 border-l-4 border-gold pl-6">
          <h2 className="font-display font-bold text-4xl text-white mb-4">PROTOCOL_LOGIC</h2>
          <p className="font-mono text-silver text-sm uppercase tracking-wide">Autonomous. Deterministic. Immutable.</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-12 left-[16%] right-[16%] h-px bg-silver/20 hidden md:block" />

          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-start bg-void md:bg-transparent p-6 md:p-0">
              <div className="bg-overlay border border-silver/10 p-4 rounded-md mb-6 shadow-xl relative group hover:border-gold/50 transition-colors">
                {step.icon}
                <div className="absolute -top-3 -right-3 bg-void border border-silver/20 px-2 py-1 text-[10px] font-mono text-silver">
                    STEP_{step.id}
                </div>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">{step.title}</h3>
              <p className="font-sans text-silver/70 text-sm leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemFlow;