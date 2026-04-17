import React from 'react';
import { 
  Zap, 
  MapPin, 
  Users, 
  StickyNote, 
  Camera, 
  Mic, 
  RefreshCcw,
  CheckCircle2,
  CircleStop,
  AlertOctagon
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ActiveMonitor() {
  const personnel = [
    { name: 'Marcus Thorne', role: 'Lead Engineer', img: 'https://picsum.photos/seed/p1/100/100' },
    { name: 'Elena Rodriguez', role: 'Safety Liaison', img: 'https://picsum.photos/seed/p2/100/100' },
    { name: 'Samuel Jenkins', role: 'Operator Class IV', img: 'https://picsum.photos/seed/p3/100/100' }
  ];

  return (
    <div className="min-h-screen pb-32">
      {/* Emergency Stop */}
      <section className="h-[280px] w-full p-4 mb-4">
        <button className="w-full h-full glass-card border-error/50 bg-error/10 text-white flex flex-col items-center justify-center gap-6 transition-all shadow-[0_20px_50px_rgba(239,68,68,0.2)] active:scale-[0.98] group rounded-[40px] overflow-hidden relative">
          <div className="absolute inset-0 bg-error/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <AlertOctagon className="w-20 h-20 mb-2 relative z-10 text-error animate-pulse" />
          <span className="font-light text-6xl tracking-tighter uppercase relative z-10 leading-none">Stop Work</span>
          <span className="font-semibold tracking-[4px] text-[11px] opacity-60 uppercase relative z-10">Emergency All-Stop Trigger</span>
        </button>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4">
        {/* Timer Plate */}
        <div className="md:col-span-8 glass-card p-10 flex flex-col justify-between min-h-[300px] rounded-[28px] border-l-8 border-white/20 shadow-2xl overflow-hidden relative">
          <div className="flex justify-between items-start relative z-10">
            <span className="font-semibold text-on-surface-variant uppercase tracking-[2px] text-[11px]">Work Duration (Elapsed)</span>
            <div className="flex items-center gap-2 text-white font-bold text-[10px] tracking-widest uppercase">
              <motion.span 
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-2 h-2 rounded-full bg-secondary-container"
              />
              Live Connection / SECURE
            </div>
          </div>
          <div className="font-light text-8xl md:text-9xl text-white tracking-tighter leading-none py-10 relative z-10 border-b border-white/5">
            04:22:18
          </div>
          <div className="flex gap-12 relative z-10 mt-6 font-semibold">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-on-surface-variant tracking-widest mb-1">Permit Issued</span>
              <span className="text-base uppercase">08:00 AM</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-on-surface-variant tracking-widest mb-1">Scheduled End</span>
              <span className="text-base uppercase text-secondary-container">04:00 PM</span>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/4"></div>
        </div>

        {/* Site Details */}
        <div className="md:col-span-4 glass-card p-10 flex flex-col gap-8 rounded-[28px]">
          <div className="flex items-center gap-3">
            <MapPin className="text-secondary-container w-6 h-6" />
            <h2 className="font-semibold uppercase text-[11px] tracking-[2px]">Site Location</h2>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-light text-3xl text-white tracking-tight uppercase leading-none italic">Zone-7A Excavation</span>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">Ref ID: IND-992-B</span>
          </div>
          <div className="mt-auto space-y-4">
            <div className="flex justify-between text-[11px] font-medium uppercase tracking-widest text-on-surface-variant">
              <span>Latitude</span>
              <span className="font-semibold text-white">40.7128° N</span>
            </div>
            <div className="flex justify-between text-[11px] font-medium uppercase tracking-widest text-on-surface-variant border-b border-white/5 pb-4">
              <span>Longitude</span>
              <span className="font-semibold text-white">74.0060° W</span>
            </div>
            <div className="h-28 w-full overflow-hidden rounded-2xl bg-black/20 mt-4 border border-white/10 group grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" 
                src="https://picsum.photos/seed/map/400/200"
                alt="Site map"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Personnel */}
        <div className="md:col-span-5 glass-card p-10 flex flex-col gap-10 rounded-[28px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <Users className="w-6 h-6" />
              <h2 className="font-semibold uppercase text-[11px] tracking-[2px]">Authorized Crew</h2>
            </div>
            <span className="bg-white/10 text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase border border-white/10">03 ACTIVE</span>
          </div>
          <div className="space-y-4">
            {personnel.map((person) => (
              <div key={person.name} className="bg-white/5 p-5 flex items-center justify-between rounded-2xl border border-white/5 hover:bg-white/10 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl border-2 border-white/10 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                    <img className="h-full w-full object-cover" src={person.img} alt={person.name} referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm uppercase tracking-tight text-white">{person.name}</span>
                    <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">{person.role}</span>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-secondary-container shadow-[0_0_8px_rgba(219,39,119,1)]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="md:col-span-7 glass-card p-10 flex flex-col gap-10 rounded-[28px]">
          <div className="flex items-center gap-3">
            <StickyNote className="text-secondary-container w-6 h-6" />
            <h2 className="font-semibold uppercase text-[11px] tracking-[2px]">Site Observation Deck</h2>
          </div>
          <div className="flex-grow flex flex-col gap-6">
            <textarea 
              className="w-full h-44 bg-white/5 rounded-2xl border border-white/10 focus:ring-2 focus:ring-secondary-container/20 p-6 font-body text-sm placeholder:text-white/20 text-white resize-none transition-all" 
              placeholder="ENTER REAL-TIME OBSERVATIONS OR HAZARD UPDATES HERE..."
            ></textarea>
            <div className="flex flex-wrap gap-4">
              <button className="h-14 bg-white/5 px-6 flex items-center gap-3 font-semibold text-[10px] uppercase tracking-widest border border-white/10 rounded-xl hover:bg-white/10 transition-all text-white">
                <Camera className="w-4 h-4" />
                Capture
              </button>
              <button className="h-14 bg-white/5 px-6 flex items-center gap-3 font-semibold text-[10px] uppercase tracking-widest border border-white/10 rounded-xl hover:bg-white/10 transition-all text-white">
                <Mic className="w-4 h-4" />
                Log Voice
              </button>
              <button className="ml-auto bg-white text-black px-10 h-14 font-semibold text-xs tracking-widest uppercase hover:brightness-90 transition-all shadow-xl active:scale-95 rounded-xl">
                Sync Command
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
