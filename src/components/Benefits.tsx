import React from 'react';
import { motion } from 'motion/react';
import { 
  Percent, 
  Zap, 
  QrCode, 
  FileCheck, 
  Award, 
  LayoutDashboard, 
  HeartHandshake, 
  ArrowRightLeft 
} from 'lucide-react';

interface BenefitItem {
  id: number;
  title: string;
  badge?: string;
  description: string;
  icon: React.ComponentType<any>;
  colorClass: string;
}

export default function Benefits() {
  const benefits: BenefitItem[] = [
    {
      id: 1,
      title: '০% মার্চেন্ট চার্জ (No MDR)',
      badge: '১০০% ফ্রি',
      description: 'PI App ব্যবহারের মাধ্যমে লেনদেনে কোনো অতিরিক্ত ফি বা কমিশন কাটা হবে না। শতভাগ ফ্রি ডিজিটাল পেমেন্ট গ্রহণ করুন।',
      icon: Percent,
      colorClass: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      id: 2,
      title: 'তাৎক্ষণিক পেমেন্ট সেটেলমেন্ট',
      badge: 'রিয়েল-টাইম',
      description: 'কিউআর-এর মাধ্যমে পেমেন্ট গ্রহণের পর অর্থ তাৎক্ষণিকভাবে ব্যবসায়ীর ব্যাংক অ্যাকাউন্টে জমা হবে।',
      icon: Zap,
      colorClass: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      id: 3,
      title: 'দ্রুত কিউআর জেনারেট',
      badge: 'ইনস্ট্যান্ট প্রিন্ট',
      description: 'রেজিস্ট্রেশনের পর আমাদের শাখা বা উপশাখা থেকে তাৎক্ষণিকভাবে বাংলা কিউআর কোড প্রস্তুত করে দেওয়া হবে।',
      icon: QrCode,
      colorClass: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      id: 4,
      title: 'পেপারলেস e-KYC অ্যাকাউন্ট',
      badge: 'ঝামেলামুক্ত',
      description: 'PI App ব্যবহার করে কোনো ঝামেলার কাগজপত্র ছাড়াই ডিজিটাল উপায়ে দ্রুত মার্চেন্ট অ্যাকাউন্ট খুলুন।',
      icon: FileCheck,
      colorClass: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      id: 5,
      title: 'ট্রেড লাইসেন্স ব্যতীত অ্যাকাউন্ট',
      badge: 'সহজ শর্ত',
      description: 'ছোট ও মাঝারি উদ্যোক্তাদের সুবিধার্থে Micro Merchant ক্যাটাগরিতে ট্রেড লাইসেন্স ছাড়াই অ্যাকাউন্ট খোলা যাবে।',
      icon: Award,
      colorClass: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      id: 6,
      title: 'রিয়েল-টাইম ওয়েব ড্যাশবোর্ড',
      badge: 'অনলাইন ড্যাশবোর্ড',
      description: 'bqr.pubalibankbd.com ড্যাশবোর্ডের মাধ্যমে সহজেই যেকোনো ডিভাইস থেকে দৈনিক বেচাকেনার হিসাব পর্যবেক্ষণ করতে পারবেন।',
      icon: LayoutDashboard,
      colorClass: 'bg-teal-50 text-teal-600 border-teal-100',
    },
    {
      id: 7,
      title: 'ধর্মীয় ও দাতব্য প্রতিষ্ঠানে বিশেষ ছাড়',
      badge: 'সম্পূর্ণ ফ্রি',
      description: 'মসজিদ, মাদ্রাসা, মন্দির, গির্জা ও প্যাগোডার মতো ধর্মীয় প্রতিষ্ঠানের লেনদেনে কোনো মার্চেন্ট কমিশন নেই।',
      icon: HeartHandshake,
      colorClass: 'bg-rose-50 text-rose-600 border-rose-100',
    },
    {
      id: 8,
      title: 'সম্পূর্ণ বিনামূল্যে ফান্ড ট্রান্সফার',
      badge: 'চার্জ ফ্রি',
      description: 'PI App-এর মাধ্যমে NPSB, BEFTN বা RTGS ব্যবহার করে যেকোনো ব্যাংক ও MFS-এ চার্জ ছাড়াই ফান্ড ট্রান্সফার করুন।',
      icon: ArrowRightLeft,
      colorClass: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    },
  ];

  return (
    <section id="benefits-section" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-pubali-green-light uppercase tracking-widest">
            কেন পূবালী ব্যাংক বাংলা কিউআর বেছে নেবেন?
          </h2>
          <p className="text-3xl font-extrabold text-slate-950 tracking-tight sm:text-4xl">
            ডিজিটাল পেমেন্টের সেরা ৮টি আধুনিক সুবিধা
          </p>
          <div className="w-16 h-1 bg-pubali-gold mx-auto rounded-full" />
          <p className="text-slate-600 text-base">
            বাংলাদেশ ব্যাংক-এর নির্দেশনা অনুযায়ী তৈরি দেশের একমাত্র সমন্বিত কিউআর পেমেন্ট সমাধান, যা আপনার ব্যবসার প্রবৃদ্ধি দ্রুত করতে সাহায্য করবে।
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-pubali-green/10 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Badge Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${benefit.colorClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {benefit.badge && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-pubali-green/10 text-pubali-green">
                        {benefit.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-slate-900 mb-2.5 leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Micro branding detail at card bottom */}
                <div className="mt-5 pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>পূবালী ব্যাংক পিএলসি</span>
                  <span className="text-pubali-gold">★</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Portal Highlight Callout */}
        <div className="mt-12 bg-gradient-to-r from-pubali-green to-pubali-green-dark text-white rounded-2xl p-6 sm:p-8 border border-pubali-gold/20 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-pubali-gold text-slate-950 text-xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
              ডিজিটাল মার্চেন্ট পোর্টাল
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">সারাদিনের বেচাকেনার হিসাব চোখের সামনে!</h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              ডেস্কটপ বা মোবাইল যেকোনো ডিভাইস থেকে সহজেই <a href="https://bqr.pubalibankbd.com" target="_blank" rel="noopener noreferrer" className="text-pubali-gold underline hover:text-white font-mono transition-colors">bqr.pubalibankbd.com</a> ড্যাশবোর্ডে লগইন করে আপনার দৈনিক সকল বেচাকেনা ও পেমেন্টের হিসাব পর্যবেক্ষণ করতে পারবেন।
            </p>
          </div>
          <a
            href="https://bqr.pubalibankbd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white hover:bg-slate-100 text-slate-950 font-bold px-6 py-3 rounded-xl border border-slate-200 text-sm transition-all flex items-center gap-2 shadow-sm"
          >
            <span>ড্যাশবোর্ড ভিজিট করুন</span>
            <LayoutDashboard className="w-4 h-4 text-pubali-green" />
          </a>
        </div>

      </div>
    </section>
  );
}
