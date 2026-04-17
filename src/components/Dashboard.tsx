import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  ChevronRight, 
  PlusCircle, 
  User, 
  Clock,
  Briefcase
} from 'lucide-react';
import { motion } from 'motion/react';

interface DashboardProps {
  onNewPermit: () => void;
  onViewPermit: (id: string) => void;
}

export default function Dashboard({ onNewPermit, onViewPermit }: DashboardProps) {
  const activePermits = [
    {
      id: 'PTW-8829',
      title: 'Welding Operation - Tank Farm B',
      user: 'J. VANCE',
      time: 'EXPIRES 16:00',
      status: 'IN PROGRESS',
      type: 'hot',
      color: 'bg-error',
      statusBg: 'bg-error-container',
      statusText: 'text-on-error-container'
    },
    {
      id: 'PTW-9041',
      title: 'Silo Maintenance Entry',
      user: 'M. CHEN',
      time: 'SUBMITTED 08:30',
      status: 'AWAITING APPROVAL',
      type: 'confined',
      color: 'bg-secondary-container',
      statusBg: 'bg-secondary-container',
      statusText: 'text-on-secondary-container'
    },
    {
      id: 'PTW-9102',
      title: 'Routine Filter Exchange',
      user: 'SELF',
      time: 'LAST EDITED 1H AGO',
      status: 'DRAFT',
      type: 'general',
      color: 'bg-primary-container',
      statusBg: 'bg-white/10',
      statusText: 'text-on-surface-variant'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Summary Section */}
      <section className="stats-row grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-8 flex flex-col justify-between min-h-[240px] relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="font-headline text-7xl font-light text-primary tracking-tighter mb-1">42.8<span className="text-xl opacity-40 ml-2">%</span></h2>
            <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-on-surface-variant">Resource Load</p>
          </div>
          
          <div className="relative z-10 mt-8">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-secondary-container" />
                <span className="font-semibold text-white uppercase text-[10px] tracking-wider">2 ISSUED</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10">
                <AlertTriangle className="w-5 h-5 text-error" />
                <span className="font-semibold text-white uppercase text-[10px] tracking-wider">1 HOT WORK</span>
              </div>
            </div>
            <div className="h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
              <div className="w-[42.8%] h-full bg-secondary-container rounded-full"></div>
            </div>
          </div>

          <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none transition-transform group-hover:scale-105 duration-700">
            <img 
              className="w-full h-full object-cover grayscale brightness-200" 
              src="https://picsum.photos/seed/glass-industry/800/800" 
              alt="Industrial background"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="glass-card p-8 flex flex-col justify-between border-l-4 border-secondary-container min-h-[240px]">
          <div>
            <h2 className="font-headline text-7xl font-light text-white tracking-tighter mb-1">08</h2>
            <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-on-surface-variant">In Collaboration</p>
            <p className="text-[12px] text-green-400 mt-3 flex items-center gap-2 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
              3 users active now
            </p>
          </div>
          <button 
            className="w-full h-14 bg-white text-black font-semibold uppercase tracking-widest hover:bg-opacity-90 active:scale-[0.98] transition-all rounded-xl mt-6 shadow-xl"
          >
            Review Now
          </button>
        </div>
      </section>

      {/* Operations Grid */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2 mb-8">
          <div>
            <h3 className="font-headline text-3xl font-light tracking-tight uppercase">Current Operations</h3>
            <p className="text-xs font-medium text-on-surface-variant uppercase tracking-widest mt-1">Status Overview / Remote Monitor</p>
          </div>
          <span className="font-label text-[10px] font-semibold text-on-surface-variant uppercase tracking-widest opacity-60">Updated 2m ago</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activePermits.map((permit, idx) => (
            <motion.div 
              key={permit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 flex flex-col justify-between min-h-[220px] rounded-[28px] group hover:translate-y-[-4px] transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/10">Project {permit.id.slice(4)}</div>
                  <div className={`${permit.statusText} text-[10px] font-black uppercase tracking-[0.2em] opacity-80`}>
                    {permit.status}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white group-hover:text-secondary-container transition-colors line-clamp-1">{permit.title}</h4>
                <p className="text-sm text-on-surface-variant font-medium mt-2 line-clamp-2 leading-relaxed">Safety operational deck for {permit.title}. Ensure all protocols are reviewed.</p>
              </div>
              
              <div className="flex items-center justify-between mt-8 border-t border-white/5 pt-6">
                <div className="flex items-center gap-4 text-on-surface-variant font-semibold text-[10px] uppercase tracking-widest">
                  <span className="flex items-center gap-2"><User className="w-3 h-3" /> {permit.user}</span>
                  <span className="opacity-30">|</span>
                  <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {permit.time}</span>
                </div>
                <button 
                  onClick={() => onViewPermit(permit.id)}
                  className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl cursor-pointer hover:bg-white text-white hover:text-black transition-all duration-300 border border-white/10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAB */}
      <button 
        onClick={onNewPermit}
        className="fixed bottom-12 right-12 z-50 flex items-center gap-4 bg-white text-black px-10 h-20 shadow-[0_20px_50px_rgba(0,0,0,0.4)] active:scale-95 transition-all rounded-[32px] font-semibold uppercase tracking-widest hover:brightness-110 group hidden md:flex"
      >
        <PlusCircle className="w-8 h-8 group-hover:rotate-90 transition-transform duration-500" />
        <span>New Permit</span>
      </button>
    </div>
  );
}
