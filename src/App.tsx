import React, { useState } from 'react';
import { Header, Sidebar, BottomNav } from './components/Navigation';
import Dashboard from './components/Dashboard';
import HazardAssessment from './components/HazardAssessment';
import PermitSigning from './components/PermitSigning';
import ActiveMonitor from './components/ActiveMonitor';
import ClosureWorkflow from './components/ClosureWorkflow';
import SimopsAlert from './components/SimopsAlert';
import { AnimatePresence, motion } from 'motion/react';

type Screen = 'dashboard' | 'assess' | 'sign' | 'monitor' | 'history' | 'settings' | 'alert';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return (
          <Dashboard 
            onNewPermit={() => setCurrentScreen('assess')} 
            onViewPermit={(id) => id.includes('9102') ? setCurrentScreen('assess') : setCurrentScreen('sign')} 
          />
        );
      case 'assess':
        return (
          <HazardAssessment 
            onBack={() => setCurrentScreen('dashboard')} 
            onNext={() => setCurrentScreen('sign')} 
          />
        );
      case 'sign':
        return (
          <PermitSigning 
            onBack={() => setCurrentScreen('dashboard')} 
            onSign={() => setCurrentScreen('monitor')} 
          />
        );
      case 'monitor':
        return <ActiveMonitor />;
      case 'history':
        return <ClosureWorkflow />;
      case 'settings':
        return (
          <div className="p-10 bg-surface-container-low border border-surface-dim">
            <h2 className="font-headline font-black text-4xl uppercase tracking-tighter mb-4">Site Map / Settings</h2>
            <p className="font-body opacity-60 uppercase text-xs font-bold tracking-widest">Configuration module restricted to admin personnel.</p>
            <div className="mt-8 h-80 bg-surface-container-highest border-2 border-dashed border-outline-variant flex items-center justify-center">
              <button 
                onClick={() => setCurrentScreen('alert')}
                className="bg-error text-white px-8 py-4 font-headline font-black uppercase tracking-widest text-xs hover:brightness-110 active:scale-95 transition-all"
              >
                Trigger SIMOPS Emergency Demo
              </button>
            </div>
          </div>
        );
      case 'alert':
        return <SimopsAlert />;
      default:
        return <Dashboard 
          onNewPermit={() => setCurrentScreen('assess')} 
          onViewPermit={() => setCurrentScreen('sign')} 
        />;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="mesh-bg"></div>
      <Header />
      
      {currentScreen !== 'alert' && (
        <>
          <Sidebar currentScreen={currentScreen} setScreen={(s) => setCurrentScreen(s as Screen)} />
          <BottomNav currentScreen={currentScreen} setScreen={(s) => setCurrentScreen(s as Screen)} />
        </>
      )}

      <main 
        className={`pt-24 pb-12 transition-all duration-500 ease-in-out font-body ${
          currentScreen === 'alert' 
          ? 'p-0' 
          : 'px-6 max-w-7xl mx-auto md:ml-80'
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Emergency Alert Mini-Bar (if not on alert screen) */}
      {currentScreen !== 'alert' && currentScreen !== 'dashboard' && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          onClick={() => setCurrentScreen('alert')}
          className="fixed bottom-24 right-6 md:bottom-12 md:right-12 z-50 bg-error text-white px-6 py-4 shadow-2xl cursor-pointer hover:brightness-110 active:scale-95 transition-all flex items-center gap-4 border-b-4 border-on-error-container"
        >
          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          <span className="font-headline font-black text-xs uppercase tracking-[0.2em]">Simops Conflict @ Site 7A</span>
        </motion.div>
      )}
    </div>
  );
}
