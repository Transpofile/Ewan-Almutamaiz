import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const { error } = await supabase.from('inquiries').insert([{
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        message: formData.message
      }]);
      
      if (error) throw error;
      
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mb-6">Seamless Client Inquiries</h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Ready to optimize your supply chain or explore new markets? Reach out to our expert team for dedicated support and tailored trading solutions.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-brand-100 border border-brand-200 text-brand-600 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-brand-900 font-semibold mb-1">Office</h4>
                  <p className="text-slate-600">B 805, Baniyas Complex<br/>Deira, Dubai-UAE</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-brand-100 border border-brand-200 text-brand-600 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-brand-900 font-semibold mb-1">Tel</h4>
                  <p className="text-slate-600">+71 4 566 3256</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-brand-100 border border-brand-200 text-brand-600 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-brand-900 font-semibold mb-1">Email Inquiry</h4>
                  <p className="text-slate-600">ewanalmutamaiz@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="p-8 md:p-10 rounded-2xl bg-white/70 border border-brand-200/50 backdrop-blur-xl shadow-2xl shadow-brand-900/5 flex flex-col gap-6" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-semibold text-brand-900 mb-2">Send us a message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">First Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-white/60 border border-slate-200 rounded-lg px-4 py-3 text-brand-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all shadow-inner" 
                    placeholder="John" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Last Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full bg-white/60 border border-slate-200 rounded-lg px-4 py-3 text-brand-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all shadow-inner" 
                    placeholder="Doe" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/60 border border-slate-200 rounded-lg px-4 py-3 text-brand-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all shadow-inner" 
                  placeholder="john@company.com" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/60 border border-slate-200 rounded-lg px-4 py-3 text-brand-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all resize-none shadow-inner" 
                  placeholder="How can we help you?"
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="mt-2 w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium transition-all shadow-[0_4px_14px_0_rgba(22,38,64,0.39)] hover:shadow-[0_6px_20px_rgba(22,38,64,0.23)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === 'success' ? (
                  <>
                    <span>Message Sent</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">There was an error sending your message. Please try again.</p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
