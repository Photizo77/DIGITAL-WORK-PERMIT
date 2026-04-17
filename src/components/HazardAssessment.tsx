import React from 'react';
import { 
  ArrowLeft,
  ArrowRight, 
  Lock, 
  HardHat, 
  Hand, 
  Accessibility, 
  Eye, 
  MoveRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface HazardAssessmentProps {
  onBack: () => void;
  onNext: () => void;
}

export default function HazardAssessment({ onBack, onNext }: HazardAssessmentProps) {
  const steps = [true, false, false, false, false, false];

  return (
    <div className="pb-32">
      {/* Header Phase */}
      <section className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <button 
              onClick={onBack}
              className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="font-semibold text-secondary-container uppercase tracking-[2px] text-xs">Phase 01 / 06</span>
          </div>
          <h1 className="font-headline text-5xl font-light tracking-tighter text-white uppercase italic">Hazard Identification</h1>
          <p className="text-on-surface-variant font-medium mt-4 text-lg max-w-2xl leading-relaxed">Systematic analysis of potential risks at Site 7A. Define all operational boundaries and physical stressors.</p>
        </div>
        <div className="glass-card px-8 py-4 rounded-2xl border-l-4 border-secondary-container">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Safety Rating</p>
          <p className="text-3xl font-light tracking-tighter">CAT-IV LIKELY</p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
          {/* Hazards */}
          <section className="glass-card p-10 rounded-[28px]">
            <h3 className="font-headline font-semibold text-xs uppercase tracking-[2px] text-on-surface-variant border-b border-white/10 pb-6 mb-8">Active Hazard Profile</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {['HOT WORK', 'HEIGHTS', 'CONFINED'].map((hazard) => (
                <label key={hazard} className={`p-6 rounded-2xl cursor-pointer transition-all border-2 flex flex-col justify-between h-40 bg-white/5 border-white/10 text-on-surface-variant hover:bg-white/10`}>
                  <div>
                    <p className="font-black text-xs tracking-widest leading-none mb-2">{hazard}</p>
                    <p className="text-[10px] opacity-60 font-medium uppercase tracking-tighter">Risk Classification: High</p>
                  </div>
                  <input type="checkbox" className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 text-secondary-container focus:ring-0 cursor-pointer" />
                </label>
              ))}
            </div>
          </section>

          {/* PPE Selection */}
          <section className="glass-card p-10 rounded-[28px]">
            <h3 className="font-headline font-semibold text-xs uppercase tracking-[2px] text-on-surface-variant border-b border-white/10 pb-4 mb-8">Mandatory PPE Deployment</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'HELMET', icon: <HardHat className="w-10 h-10" /> },
                { label: 'GLOVES', icon: <Hand className="w-10 h-10" /> },
                { label: 'HARNESS', icon: <Accessibility className="w-10 h-10" /> },
                { label: 'EYE PRO', icon: <Eye className="w-10 h-10" /> }
              ].map((ppe) => (
                <label key={ppe.label} className="flex flex-col items-center text-center p-8 bg-white/5 hover:bg-white/10 transition-all cursor-pointer rounded-2xl border border-white/10 group">
                  <span className="text-white mb-4 grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100">{ppe.icon}</span>
                  <span className="font-semibold text-[10px] mb-6 tracking-widest text-on-surface-variant group-hover:text-white transition-colors uppercase">{ppe.label}</span>
                  <input type="checkbox" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-secondary-container focus:ring-0 cursor-pointer" />
                </label>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <section className="glass-card p-8 rounded-[28px] border-l-4 border-secondary-container h-full">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="text-secondary-container w-6 h-6" />
              <h3 className="font-headline font-semibold text-xs uppercase tracking-widest">Isolation / LOTO</h3>
            </div>
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-2 font-headline">Point ID</label>
                <input 
                  type="text" 
                  placeholder="e.g. ISO-VENT-049"
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-4 text-white font-semibold placeholder:text-white/20 focus:outline-none focus:border-secondary-container transition-all"
                />
              </div>
              <div className="p-6 bg-secondary-container/10 border-2 border-secondary-container/30 rounded-2xl">
                <p className="text-[10px] font-bold text-secondary-container uppercase tracking-widest mb-4 font-headline">Isolation Verified?</p>
                <div className="flex gap-4">
                  <button type="button" className="flex-1 h-12 bg-secondary-container text-white font-bold text-xs rounded-xl shadow-lg uppercase tracking-widest">Yes</button>
                  <button type="button" className="flex-1 h-12 bg-white/5 border border-white/10 text-white font-bold text-xs rounded-xl uppercase tracking-widest hover:bg-white/10">No</button>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-6 flex flex-col gap-4">
            <button 
              onClick={onNext}
              className="w-full h-20 bg-white text-black font-semibold uppercase tracking-[2px] transition-all flex items-center justify-center gap-4 hover:brightness-90 active:scale-[0.98] shadow-2xl rounded-[32px]"
            >
              Save & Next Screen
              <MoveRight className="w-5 h-5" />
            </button>
            <button type="button" className="w-full h-16 bg-white/5 border border-white/10 text-on-surface-variant font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all rounded-[28px]">
              Store as Safety Draft
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
