import React from 'react';
import { Sparkles, ArrowUp, Shield } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      
      {/* Slogan & Banner Section */}
      <div className="bg-gradient-to-r from-pubali-green-dark via-pubali-green to-pubali-green-dark py-6 text-center text-white border-b border-pubali-gold/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <Sparkles className="w-5 h-5 text-pubali-gold animate-pulse" />
          <p className="text-base sm:text-lg font-bold tracking-wide">
            &ldquo;লেনদেন হচ্ছে ক্যাশলেস, বদলে যাচ্ছে বাংলাদেশ&rdquo;
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-slate-800 pb-8">
          
          {/* Col 1: Branding */}
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-lg bg-pubali-green flex items-center justify-center border border-pubali-gold/20">
              <span className="text-pubali-gold text-xl font-bold">পূ</span>
            </div>
            <div className="text-left">
              <p className="text-white font-bold leading-none">পূবালী ব্যাংক পিএলসি</p>
              <p className="text-[9px] text-slate-500 uppercase tracking-widest leading-none mt-1">Pubali Bank PLC</p>
            </div>
          </div>

          {/* Col 2: Central Text */}
          <div className="text-center text-xs space-y-1">
            <p className="font-semibold text-slate-300">ডিজিটাল বাংলাদেশ গড়তে পূবালী ব্যাংকের প্রয়াস</p>
            <p className="text-slate-500">খামারগ্রাম শাখা ও বেলকুচি উপশাখা, সিরাজগঞ্জ অঞ্চল।</p>
          </div>

          {/* Col 3: Safe badge and Back to top */}
          <div className="flex items-center justify-center md:justify-end space-x-4">
            <div className="flex items-center space-x-1.5 text-xs text-emerald-500 bg-emerald-500/5 px-2.5 py-1 rounded-full border border-emerald-500/10">
              <Shield className="w-3.5 h-3.5" />
              <span>বাংলাদেশ ব্যাংক অনুমোদিত</span>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
              title="উপরে যান"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} পূবালী ব্যাংক পিএলসি। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex space-x-6">
            <a href="https://bqr.pubalibankbd.com" target="_blank" rel="noopener noreferrer" className="hover:text-pubali-gold transition-colors">
              মার্চেন্ট ড্যাশবোর্ড
            </a>
            <a href="https://www.pubalibangla.com" target="_blank" rel="noopener noreferrer" className="hover:text-pubali-gold transition-colors">
              অফিসিয়াল ওয়েবসাইট
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
