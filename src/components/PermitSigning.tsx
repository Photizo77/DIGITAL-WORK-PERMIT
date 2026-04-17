import React, { useState } from 'react';
import { 
  Fingerprint, 
  Lock, 
  ShieldCheck, 
  ChevronRight,
  User,
  AlertCircle,
  Pencil,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PermitSigningProps {
  onBack: () => void;
  onSign: () => void;
}

export default function PermitSigning({ onBack, onSign }: PermitSigningProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="pb-32 relative">
      <section className="mb-8">
        <div className="glass-card p-10 py-12 rounded-[28px] border-l-8 border-secondary-container flex flex-col md:flex-row justify-between items-start md:items-end gap-6 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-secondary-container font-semibold text-[11px] uppercase tracking-[2px]">Workflow Stage / 07-10</span>
            <h1 className="text-7xl font-light tracking-tighter text-white mt-4 uppercase italic">Permit #882-QX</h1>
            <p className="text-on-surface-variant font-medium mt-4 max-w-xl text-lg opacity-80 leading-relaxed">High-Voltage Substation Maintenance. Grid Isolation required. Area: Sector-7 North Wing.</p>
          </div>
          <div className="flex flex-col items-end relative z-10">
            <div className="bg-secondary-container text-white px-8 py-3 rounded-full font-semibold text-[10px] tracking-[2px] flex items-center gap-3 shadow-xl uppercase">
              <AlertCircle className="w-4 h-4" />
              Pending Signature
            </div>
          </div>
          <div className="absolute right-0 top-0 w-64 h-64 bg-secondary-container/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </section>

      {/* Approval Chain */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Step 1 */}
        <div className="glass-card p-8 flex flex-col h-full rounded-[28px] relative overflow-hidden group border-white/5 opacity-60">
          <span className="font-semibold text-[10px] uppercase tracking-widest text-on-surface-variant opacity-50">Step 01</span>
          <h3 className="font-light text-2xl mt-2 text-white">Contractor Safety Officer</h3>
          <div className="mt-8 pt-6 border-t border-white/5">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Signed & Verified</span>
            </div>
            <p className="text-[10px] font-medium mt-1 uppercase text-on-surface-variant">J. VANDERGRIFT — 08:42 AM</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="glass-card p-8 flex flex-col h-full rounded-[28px] border-secondary-container shadow-[0_20px_40px_rgba(219,39,119,0.2)] bg-secondary-container/10 relative">
          <span className="font-semibold text-[10px] uppercase tracking-[2px] text-secondary-container">Step 02 / Active</span>
          <h3 className="font-light text-2xl mt-2 text-white uppercase tracking-tight">Area In-Charge</h3>
          <div className="mt-8 space-y-6">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/40">Required Action</p>
              <p className="text-base font-medium mt-1">Validate Site Isolation Status</p>
            </div>
            <button 
              onClick={() => setShowOverlay(true)}
              className="w-full h-14 bg-white text-black font-semibold text-xs tracking-widest rounded-xl flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl uppercase"
            >
              <Pencil className="w-4 h-4" />
              Sign Now
            </button>
          </div>
        </div>

        {/* Step 3 */}
        <div className="glass-card p-8 flex flex-col h-full rounded-[28px] opacity-20 filter grayscale border-white/5">
          <span className="font-semibold text-[10px] uppercase tracking-widest text-on-surface-variant">Step 03</span>
          <h3 className="font-light text-2xl mt-2 uppercase text-on-surface">Department Engineer</h3>
          <div className="mt-auto pt-6 border-t border-white/5">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <Lock className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Awaiting Previous</span>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Details */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-10 rounded-[28px]">
          <h4 className="font-semibold text-[11px] uppercase tracking-[2px] text-on-surface-variant border-b border-white/10 pb-4 mb-8">Mandatory PPE</h4>
          <div className="flex flex-wrap gap-4">
            {['Hard Hat (Class E)', 'Arc Flash Suit', 'Insulated Gloves'].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/5 p-4 pr-6 rounded-xl border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary-container shadow-[0_0_10px_rgba(219,39,119,0.8)]"></div>
                <span className="font-semibold text-xs uppercase tracking-tighter">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-10 rounded-[28px]">
          <h4 className="font-semibold text-[11px] uppercase tracking-[2px] text-on-surface-variant border-b border-white/10 pb-4 mb-8">Site Geolocation</h4>
          <div className="h-40 bg-black/20 rounded-2xl relative overflow-hidden group border border-white/10">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000 saturate-0" 
              src="https://picsum.photos/seed/substation/800/800"
              alt="Substation location"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-500/80 backdrop-blur-md text-white px-6 py-2 rounded-full text-[10px] font-bold tracking-widest animate-pulse shadow-2xl">
                LIVE ZONE: SECTOR 7
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-3xl flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-card p-12 max-w-md w-full shadow-[0_50px_100px_rgba(0,0,0,0.6)] rounded-[40px] border-t-8 border-secondary-container relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h2 className="font-light text-3xl text-white uppercase tracking-tighter leading-none">Identity Verification</h2>
                  <p className="text-secondary-container text-[11px] font-semibold uppercase tracking-[2px] mt-3">Auth Terminal / Biometric</p>
                </div>
                <div className="w-14 h-14 bg-secondary-container/20 rounded-2xl flex items-center justify-center border border-secondary-container/30">
                  <Fingerprint className="text-secondary-container w-8 h-8" />
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 mb-12">
                {[1, 2].map((i) => (
                  <div key={i} className="h-20 bg-white/5 flex items-center justify-center rounded-2xl border-b-4 border-secondary-container">
                    <div className="w-3 h-3 bg-secondary-container rounded-full shadow-[0_0_15px_rgba(219,39,119,1)]"></div>
                  </div>
                ))}
                {[3, 4].map((i) => (
                  <div key={i} className="h-20 bg-white/5 flex items-center justify-center rounded-2xl border-b-4 border-white/5"></div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => { onSign(); setShowOverlay(false); }}
                  className="h-16 bg-white text-black font-semibold text-sm tracking-widest rounded-xl uppercase hover:brightness-90 transition-all shadow-xl active:scale-95"
                >
                  Confirm Authorization
                </button>
                <button 
                  onClick={() => setShowOverlay(false)}
                  className="h-12 text-on-surface-variant font-bold text-[11px] uppercase tracking-widest hover:text-white transition-colors"
                >
                  Cancel Signature
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
