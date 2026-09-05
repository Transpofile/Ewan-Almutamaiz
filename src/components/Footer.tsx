export default function Footer() {
  return (
    <footer className="bg-brand-950 py-16 border-t border-brand-900 relative z-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="text-sm font-bold text-[#7bc0db] block mb-1">ايوان المتميز للتجارة العامة ش.ذ.م.م</span>
          <span className="text-xl font-bold tracking-wider text-white block mb-1">EWAN ALMUTAMAIZ</span>
          <span className="text-xs font-bold text-[#7bc0db] tracking-[0.2em] uppercase block mb-4">GENERAL TRADING L.L.C</span>
          <p className="text-slate-400 text-sm">&copy; 2026. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
