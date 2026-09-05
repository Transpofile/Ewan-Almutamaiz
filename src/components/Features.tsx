import { motion } from 'motion/react';
import { Globe2, Ship, ShieldCheck, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Globe2 className="w-8 h-8 text-brand-600" />,
    title: 'Global Sourcing',
    description: 'Connecting you with premium suppliers and markets worldwide with unmatched reach and reliability.'
  },
  {
    icon: <Ship className="w-8 h-8 text-brand-500" />,
    title: 'Supply Chain Efficiency',
    description: 'Streamlined logistics operations ensuring timely and reliable delivery of goods across borders.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-600" />,
    title: 'Quality Assurance',
    description: 'Rigorous vetting and quality control to maintain the highest standards of international trade.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-brand-500" />,
    title: 'Market Expansion',
    description: 'Strategic insights and support to help scale your business and establish global market presence.'
  }
];

export default function Features() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mb-4">Our Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Delivering excellence in general trading through a robust framework of specialized services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/70 border border-brand-200/50 backdrop-blur-lg shadow-xl shadow-brand-900/5 hover:bg-white hover:-translate-y-1 transition-all group"
            >
              <div className="mb-6 p-4 rounded-xl bg-brand-50 inline-block shadow-sm border border-brand-100 group-hover:scale-110 group-hover:bg-brand-900 group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
