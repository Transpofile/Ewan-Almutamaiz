/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-500/30 text-brand-900 font-sans">
      {/* Animated Background Gradients / Glassmorphism Base */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[0]">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            rotate: [0, 90, 0] 
          }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-brand-300/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1], 
            rotate: [0, -90, 0] 
          }} 
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }} 
          className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-brand-200/30 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1], 
            rotate: [0, 45, 0] 
          }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
          className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-brand-100/40 blur-[100px]" 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
