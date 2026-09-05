import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const backgroundImages = [
  'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1586528116311-ad8ed7c66a7b?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2000'
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={backgroundImages[currentImageIndex]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Background Logistics"
          />
        </AnimatePresence>
        {/* Dark Luxury Overlay */}
        <div className="absolute inset-0 bg-brand-950/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7bc0db] mb-4"
        >
          ايوان المتميز للتجارة العامة ش.ذ.م.م
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-2 drop-shadow-lg"
        >
          EWAN ALMUTAMAIZ
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl font-bold text-[#7bc0db] tracking-[0.2em] uppercase mb-6"
        >
          GENERAL TRADING L.L.C
        </motion.h3>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light"
        >
          Specializing in global import and export services with a focus on <span className="text-white font-medium">supply chain efficiency</span> and <span className="text-white font-medium">reliability</span>.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-medium transition-all shadow-[0_4px_14px_0_rgba(22,38,64,0.39)] hover:shadow-[0_6px_20px_rgba(22,38,64,0.23)]">
            Client Inquiries
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 shadow-sm backdrop-blur-md text-white font-medium transition-all">
            View Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
