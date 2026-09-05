import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Industrial Machinery',
    category: 'Heavy Equipment',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Raw Materials',
    category: 'Construction & Manufacturing',
    image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Consumer Electronics',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Premium Textiles',
    category: 'Apparel & Fabrics',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mb-4">Featured Product Portfolio</h2>
            <p className="text-slate-600 max-w-2xl text-lg">A selection of our premium global trade categories, sourced with strict quality standards.</p>
          </div>
          <button className="px-6 py-3 rounded-lg border border-brand-200 bg-white/60 text-brand-900 hover:bg-white hover:border-brand-300 shadow-sm transition-all backdrop-blur-md">
            View All Categories
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[16/9] border border-slate-200 shadow-xl shadow-brand-900/10"
            >
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-brand-300 font-medium mb-2 tracking-wide uppercase text-sm">{item.category}</p>
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/30">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
