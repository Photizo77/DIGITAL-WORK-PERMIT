import React from 'react';
import { 
  AlertTriangle, 
  Clock, 
  Map as MapIcon, 
  Phone, 
  ShieldX, 
  CheckCircle2,
  HardHat,
  Factory
} from 'lucide-react';
import { motion } from 'motion/react';

export default function SimopsAlert() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-2xl flex flex-col md:flex-row overflow-hidden"
    >
      <main className="mt-16 mb-20 md:mb-0 flex-1 relative overflow-hidden flex flex-col p-8 gap-10">
        {/* Alert Header */}
        <div className="glass-card border-error/50 bg-error/10 p-12 py-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_50px_100px_rgba(239,68,68,0.2)] rounded-[40px] relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-80 h-80 bg-error/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="flex items-center gap-10 relative z-10">
            <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <AlertTriangle className="w-12 h-12 text-error" />
            </div>
            <div>
              <h1 className="font-light text-7xl md:text-9xl tracking-tighter text-white uppercase leading-none italic">SIMOPS ALERT</h1>
              <p className="font-semibold text-[14px] uppercase tracking-[4px] text-error mt-6 leading-none animate-pulse">Critical Proximity Failure / Sector 7A</p>
            </div>
          </div>
          <div className="glass-card bg-black/40 p-8 px-12 rounded-[32px] border-l-8 border-error shadow-2xl relative z-10 min-w-[200px] text-center">
            <p className="font-light text-6xl leading-none tracking-tighter text-white">00:14</p>
            <p className="font-semibold text-[10px] uppercase tracking-[3px] text-on-surface-variant mt-4 opacity-60">Decision Timer</p>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Spatial Map */}
          <div className="lg:col-span-8 glass-card rounded-[40px] relative overflow-hidden min-h-[400px] border-white/5 shadow-2xl">
            <div className="absolute inset-0 opacity-10 saturate-0">
              <img className="w-full h-full object-cover" src="https://picsum.photos/seed/blueprint/1200/800" alt="Blueprint" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <motion.div 
                  animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.15, 0.05] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute inset-x-0 inset-y-0 m-auto w-[600px] h-[600px] bg-error rounded-full blur-3xl opacity-10"
                />
                <div className="absolute inset-0 flex items-center justify-center group">
                  <div className="relative z-10 p-12 glass-card bg-black/40 rounded-[48px] border-error shadow-[0_30px_60px_rgba(239,68,68,0.4)] border-2">
                    <span className="font-light text-8xl md:text-[140px] text-white tracking-tighter italic leading-none block">ZONE-7A</span>
                    <div className="bg-error text-white px-8 py-2 mt-8 rounded-full font-bold uppercase tracking-[4px] text-xs shadow-lg inline-block whitespace-nowrap">Conflict Coordinate Verified</div>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full bg-gradient-to-r from-transparent via-error/20 to-transparent blur-sm"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-4 bg-gradient-to-b from-transparent via-error/20 to-transparent blur-sm"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-10 left-10 glass-card p-8 px-10 rounded-[28px] border-l-[12px] border-secondary-container shadow-2xl">
              <p className="font-semibold text-[10px] text-on-surface-variant uppercase tracking-[3px]">Proximity Metric</p>
              <p className="font-light font-headline text-5xl tracking-tighter mt-1 text-white italic">2.4M DISPLACEMENT</p>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {[
              { id: 'PTW-8829', title: 'Welding & Hot Work', team: 'Team Alpha | H. Vance', icon: Factory, color: 'border-secondary-container' },
              { id: 'PTW-9041', title: 'Silo Entry', team: 'Confined Space | J. Doe', icon: HardHat, color: 'border-pink-500/50' }
            ].map((permit) => {
              const Icon = permit.icon;
              return (
                <div key={permit.id} className={`glass-card p-10 py-12 rounded-[32px] border-l-[12px] ${permit.color} shadow-2xl group hover:bg-white/5 transition-all`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-[10px] text-on-surface-variant uppercase tracking-[2px] opacity-60">Conflict ID</p>
                      <h2 className="font-light text-6xl text-white tracking-tighter mt-1 italic">{permit.id}</h2>
                    </div>
                    <Icon className="text-white w-12 h-12 opacity-10 group-hover:opacity-20 transition-all" />
                  </div>
                  <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/5">
                    <p className="font-semibold text-lg uppercase tracking-tight text-white/90">{permit.title}</p>
                    <p className="text-[11px] text-on-surface-variant font-bold uppercase tracking-[2px] mt-2 opacity-50">{permit.team}</p>
                  </div>
                </div>
              );
            })}

            <div className="flex-1 glass-card border-error/20 bg-error/5 p-10 flex flex-col justify-center items-center text-center text-white rounded-[32px] shadow-2xl gap-4">
              <p className="font-light text-4xl uppercase italic tracking-tighter text-error border-b-2 border-error pb-4 px-6 inline-block leading-none">Imminent Flash</p>
              <p className="font-medium text-[15px] opacity-60 mt-4 leading-relaxed uppercase tracking-tight text-on-surface-variant">
                Welding arc identified within 5m of explosive atmosphere (Silo Entry-09). Auto-suppression pending.
              </p>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col md:flex-row gap-8 mt-auto">
          <button className="flex-1 h-20 bg-white/5 glass-card border-white/10 rounded-[28px] text-on-surface-variant font-semibold uppercase tracking-[2px] text-xs flex items-center justify-center gap-4 hover:bg-white/10 transition-all shadow-xl active:scale-95">
            <Phone className="w-5 h-5" />
            Vocalize Alert
          </button>
          <button className="flex-1 h-20 bg-error text-white font-semibold uppercase tracking-[2px] text-xs flex items-center justify-center gap-4 hover:brightness-110 transition-all shadow-2xl active:scale-95 rounded-[28px] ring-4 ring-error/20">
            <ShieldX className="w-5 h-5" />
            Halt Both Permits
          </button>
          <button className="flex-1 h-24 bg-white text-black font-semibold uppercase tracking-[2px] text-sm flex items-center justify-center gap-4 hover:brightness-90 transition-all shadow-2xl active:scale-95 rounded-[32px]">
            <CheckCircle2 className="w-6 h-6" />
            Acknowledge Vector Lock
          </button>
        </div>
      </main>
    </motion.div>
  );
}
