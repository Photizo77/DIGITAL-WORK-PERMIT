import React, { useState } from 'react';
import { 
  SignalHigh, 
  UserCircle, 
  LayoutDashboard, 
  ClipboardList, 
  ShieldCheck, 
  PhoneCall, 
  Map as MapIcon,
  CircleAlert,
  History,
  Settings,
  AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Use standard icons from lucide-react mapping to the placeholders
const DashboardIcon = LayoutDashboard;
const MonitorIcon = ShieldCheck;
const HistoryIcon = History;
const SettingsIcon = Settings;

interface NavigationProps {
  currentScreen: string;
  setScreen: (screen: string) => void;
}

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-[60] flex justify-between items-center px-10 h-24 backdrop-blur-xl border-b border-white/5 bg-black/5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 glass-card bg-secondary-container rounded-xl flex items-center justify-center border-none shadow-[0_0_20px_rgba(219,39,119,0.5)]">
          <SignalHigh className="text-white w-6 h-6" />
        </div>
        <h1 className="text-2xl font-light tracking-tighter text-white">
          Industrial / <span className="font-semibold text-secondary-container">Sentinel</span>
        </h1>
      </div>
      <div className="flex items-center gap-10">
        <div className="hidden lg:flex items-center gap-8 text-on-surface-variant font-semibold text-[10px] uppercase tracking-[2px]">
          <span className="hover:text-white transition-colors cursor-pointer">Network / Site-7A</span>
          <span className="hover:text-white transition-colors cursor-pointer">Protocol / V.3.2</span>
          <span className="hover:text-white transition-colors cursor-pointer">Safety / Green</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center px-6 py-2.5 glass-card rounded-2xl text-[10px] font-bold uppercase tracking-[2px] border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-3 animate-pulse shadow-[0_0_8px_rgba(74,222,128,1)]"></div>
            System Online
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-semibold text-white">User Terminal 01</div>
              <div className="text-[10px] text-on-surface-variant font-medium uppercase tracking-widest opacity-60">Session Active</div>
            </div>
            <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
              <UserCircle className="text-white w-7 h-7 group-hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Sidebar({ currentScreen, setScreen }: NavigationProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
    { id: 'assess', label: 'All Permits', icon: ClipboardList },
    { id: 'monitor', label: 'Safety Protocols', icon: ShieldCheck },
    { id: 'history', label: 'Emergency Contacts', icon: PhoneCall },
    { id: 'settings', label: 'Site Map', icon: MapIcon },
  ];

  return (
    <aside className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 h-[700px] w-20 flex-col items-center py-10 gap-8 z-40 glass-card rounded-[40px]">
      <div className="flex flex-col gap-6 items-center flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setScreen(item.id)}
              title={item.label}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 border border-transparent ${
                isActive 
                ? 'bg-white text-black shadow-[0_8px_16px_rgba(0,0,0,0.2)] scale-110' 
                : 'text-white bg-white/5 hover:bg-white/10 hover:border-white/10'
              }`}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </div>
      
      <button 
        onClick={() => setScreen('settings')}
        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all text-white bg-white/5 hover:bg-white/10 ${currentScreen === 'settings' ? 'bg-white text-black' : ''}`}
      >
        <SettingsIcon className="w-5 h-5" />
      </button>
    </aside>
  );
}

export function BottomNav({ currentScreen, setScreen }: NavigationProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
    { id: 'monitor', label: 'Monitor', icon: MonitorIcon },
    { id: 'history', label: 'History', icon: HistoryIcon },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <footer className="md:hidden fixed bottom-6 left-6 right-6 z-[60] flex justify-around items-center h-20 glass-card rounded-[32px] px-2 shadow-2xl">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentScreen === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setScreen(item.id)}
            className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all active:scale-95 ${
              isActive ? 'bg-white text-black shadow-lg' : 'text-on-surface-variant hover:text-white'
            }`}
          >
            <Icon className="w-6 h-6" />
          </button>
        );
      })}
    </footer>
  );
}
