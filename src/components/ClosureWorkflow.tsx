import React from 'react';
import { 
  CheckCircle2, 
  Lock, 
  Archive, 
  Pencil, 
  MoreHorizontal,
  ClipboardCheck,
  PackageCheck,
  ShieldAlert
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ClosureWorkflow() {
  return (
    <div className="pb-32 px-4 md:px-0">
      <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-secondary-container text-white px-4 py-1 font-semibold text-[10px] tracking-[2px] uppercase rounded-full shadow-lg">
              Closure Phase / 13-14
            </span>
          </div>
          <h2 className="font-light text-7xl md:text-9xl tracking-tighter text-white leading-none uppercase italic">PTW-7742-AX</h2>
        </div>
        <div className="glass-card p-8 flex flex-col gap-2 rounded-[28px] border-l-4 border-secondary-container shadow-2xl overflow-hidden relative">
          <p className="font-semibold text-[10px] uppercase tracking-[2px] text-on-surface-variant mb-1">Grid Location</p>
          <p className="font-light text-3xl uppercase tracking-tight text-white italic">Turbine Bay-04</p>
          <div className="absolute right-0 top-0 w-32 h-32 bg-secondary-container/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column */}
        <section className="lg:col-span-7 flex flex-col gap-10">
          <div className="glass-card p-10 rounded-[28px] shadow-2xl">
            <div className="flex items-center gap-4 mb-10 overflow-hidden border-b border-white/10 pb-6">
              <ClipboardCheck className="w-8 h-8 text-secondary-container shrink-0" />
              <h3 className="font-light text-4xl uppercase tracking-tighter text-white italic underline decoration-secondary-container decoration-4 underline-offset-8">Final Inspection</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { label: 'Site Restored', desc: 'Equipment returned to original operational configuration.' },
                { label: 'LOTO Cleared', desc: 'All Lock-Out devices verified and removed.' },
                { label: 'Zone Sanitized', desc: 'Debris and maintenance artifacts cleared.' }
              ].map((item, i) => (
                <label key={i} className="flex items-center p-6 bg-white/5 rounded-2xl cursor-pointer group hover:bg-white/10 transition-all border border-white/5 hover:border-white/10">
                  <input type="checkbox" className="w-8 h-8 rounded-lg bg-white/5 border-2 border-white/10 text-secondary-container focus:ring-0 mr-8 cursor-pointer" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-xl uppercase tracking-tight text-white">{item.label}</span>
                    <span className="text-on-surface-variant text-[11px] font-medium uppercase tracking-widest opacity-60 mt-1">{item.desc}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="glass-card p-1 pb-1 rounded-[32px] bg-gradient-to-br from-secondary-container to-white/10">
            <div className="glass-card p-12 flex flex-col items-center justify-center text-center gap-8 rounded-[30px] border-none">
              <div className="p-6 bg-secondary-container/20 rounded-full border border-secondary-container/30 shadow-[0_0_30px_rgba(219,39,119,0.3)]">
                <PackageCheck className="text-secondary-container w-12 h-12" />
              </div>
              <div className="space-y-4">
                <h4 className="font-light text-4xl uppercase tracking-tighter text-white italic">Vault Persistence</h4>
                <p className="font-medium text-white/50 text-sm max-w-sm leading-relaxed uppercase tracking-widest">
                  Record encryption active. Permanent safety archive migration pending final signature.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column */}
        <aside className="lg:col-span-5 flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <h3 className="font-semibold text-[11px] uppercase tracking-[2px] text-on-surface-variant">Sequential Approval Flow</h3>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>
          
          <div className="space-y-6">
            {/* Active Sig */}
            <div className="glass-card p-10 py-12 border-l-8 border-secondary-container shadow-2xl flex flex-col gap-8 rounded-[28px] bg-secondary-container/5">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-[10px] uppercase tracking-[2px] text-secondary-container mb-2">Auth Stage 01</p>
                  <h4 className="font-light text-3xl text-white uppercase italic leading-none">Safety Signature</h4>
                </div>
                <div className="h-4 w-4 bg-secondary-container rounded-full animate-pulse shadow-[0_0_15px_rgba(219,39,119,1)]"></div>
              </div>
              <button className="bg-white text-black h-16 font-semibold uppercase tracking-[2px] transition-all flex items-center justify-center gap-3 shadow-2xl rounded-2xl active:scale-95 text-xs">
                <Pencil className="w-5 h-5" />
                Authorize Closure
              </button>
            </div>

            {/* Locked Sigs */}
            {['Area Manager', 'Chief Engineer'].map((role, i) => (
              <div key={i} className="glass-card p-8 flex items-center justify-between rounded-[28px] opacity-40 grayscale border-white/5">
                <div>
                  <p className="font-semibold text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Sig 0{i+2}</p>
                  <h4 className="font-light text-2xl text-white uppercase italic">{role}</h4>
                </div>
                <Lock className="w-6 h-6 opacity-40" />
              </div>
            ))}
          </div>

          <div className="glass-card p-10 rounded-[28px] shadow-2xl flex flex-col gap-8">
            <p className="font-semibold text-[10px] uppercase tracking-[4px] text-on-surface-variant text-center opacity-60">Hold to Finalize Archive</p>
            <button className="w-full h-32 glass-card bg-secondary-container/10 border-dashed border-secondary-container/30 text-white flex items-center justify-center gap-6 group relative overflow-hidden rounded-[32px] active:scale-95 transition-all shadow-xl">
              <div className="absolute inset-x-0 bottom-0 top-full bg-secondary-container/20 transition-all duration-2000 group-active:top-0"></div>
              <Archive className="w-10 h-10 text-secondary-container group-active:scale-110 transition-transform" />
              <span className="font-light text-3xl uppercase tracking-tighter italic">Archive Vault</span>
            </button>
          </div>
        </aside>
      </div>

      <div className="mt-20 w-full h-96 rounded-[40px] overflow-hidden glass-card border-white/5 shadow-2xl relative">
        <img className="w-full h-full object-cover opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000 saturate-0" src="https://picsum.photos/seed/turbine/1200/600" alt="Turbine bay" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <p className="absolute bottom-10 left-10 text-white font-light text-4xl italic uppercase tracking-tighter">Sector 4 Containment Zone</p>
      </div>
    </div>
  );
}
