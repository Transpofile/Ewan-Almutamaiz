import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Anchor } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Services', 'Portfolio', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-white shadow-sm' : 'py-6 bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src="/image.png" 
              alt="EWAN ALMUTAMAIZ Logo" 
              className={`h-16 w-auto object-contain transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-90'}`}
              onError={(e) => { e.currentTarget.style.display = 'none'; }} 
            />
            <div className="flex flex-col justify-center">
              <span className={`text-[12px] md:text-sm font-bold leading-none mb-1 transition-colors ${scrolled ? 'text-[#2b728e]' : 'text-white/90'}`}>
                ايوان المتميز للتجارة العامة ش.ذ.م.م
              </span>
              <span className={`text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wider leading-none transition-colors ${scrolled ? 'text-[#162640]' : 'text-white'}`}>
                EWAN ALMUTAMAIZ
              </span>
              <span className={`text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mt-1 transition-colors ${scrolled ? 'text-[#2b728e]' : 'text-white/90'}`}>
                GENERAL TRADING L.L.C
              </span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className={`transition-colors text-sm font-medium tracking-wide ${scrolled ? 'text-slate-600 hover:text-brand-600' : 'text-slate-200 hover:text-white'}`}>
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none transition-colors ${scrolled ? 'text-brand-900' : 'text-white'}`}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg"
        >
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="block text-slate-600 hover:text-brand-600 transition-colors text-base font-medium"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
