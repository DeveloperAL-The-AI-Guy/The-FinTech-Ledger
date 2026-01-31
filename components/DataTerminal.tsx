import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { time: '09:00', value: 2400, volume: 120 },
  { time: '09:05', value: 3600, volume: 150 },
  { time: '09:10', value: 3200, volume: 100 },
  { time: '09:15', value: 4800, volume: 220 },
  { time: '09:20', value: 4600, volume: 180 },
  { time: '09:25', value: 5900, volume: 280 },
  { time: '09:30', value: 6200, volume: 300 },
  { time: '09:35', value: 5800, volume: 240 },
  { time: '09:40', value: 7100, volume: 400 },
  { time: '09:45', value: 8500, volume: 550 },
  { time: '09:50', value: 8200, volume: 500 },
  { time: '09:55', value: 9400, volume: 600 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-overlay border border-silver/20 p-3 shadow-lg">
        <p className="font-mono text-xs text-silver mb-1">{label}</p>
        <p className="font-mono text-sm font-bold text-gold">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const DataTerminal: React.FC = () => {
  return (
    <section id="market" className="relative z-10 w-full py-24 px-4 bg-void/50 backdrop-blur-sm border-y border-silver/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b border-silver/10 pb-4">
          <div>
            <h2 className="font-display font-bold text-3xl text-white mb-2">MARKET_DEPTH</h2>
            <p className="font-mono text-silver text-xs tracking-wider">LIVE FEED // AGGREGATED SOURCES</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0 font-mono text-xs">
            <div className="flex flex-col items-end">
              <span className="text-silver/60">VOL_24H</span>
              <span className="text-white">$42.8B</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-silver/60">LATENCY</span>
              <span className="text-gold">4ms</span>
            </div>
          </div>
        </div>

        {/* Chart Window */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-[400px] w-full glass-panel rounded-lg p-2 overflow-hidden"
        >
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-gold z-20" />
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-gold z-20" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-gold z-20" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-gold z-20" />

          {/* Grid Overlay Texture */}
          <div className="absolute inset-0 z-0 opacity-10" 
               style={{ 
                 backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', 
                 backgroundSize: '20px 20px' 
               }} 
          />

          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
              <XAxis 
                dataKey="time" 
                tick={{ fill: '#C0C0C0', fontFamily: 'Roboto Mono', fontSize: 10 }} 
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                orientation="right"
                tick={{ fill: '#C0C0C0', fontFamily: 'Roboto Mono', fontSize: 10 }} 
                axisLine={false}
                tickLine={false}
                domain={['dataMin - 1000', 'dataMax + 1000']}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#D4AF37" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorValue)" 
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Ticker Tape */}
        <div className="flex space-x-8 mt-4 overflow-hidden whitespace-nowrap mask-linear-fade">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="flex space-x-8 animate-marquee font-mono text-xs text-silver/70">
                    <span>BTC/USD <span className="text-trust">+1.2%</span></span>
                    <span>ETH/USD <span className="text-trust">+0.8%</span></span>
                    <span>SOL/USD <span className="text-red-500">-0.4%</span></span>
                    <span>XRP/USD <span className="text-trust">+2.1%</span></span>
                    <span>GLD/USD <span className="text-gold">+0.1%</span></span>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default DataTerminal;