import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, QrCode, Store, ArrowRight, ArrowDown } from 'lucide-react';

export default function Steps() {
  const steps = [
    {
      number: '০১',
      title: 'আমাদের শাখায় যোগাযোগ',
      description: 'আপনার জাতীয় পরিচয়পত্র (NID), পাসপোর্ট সাইজ ছবি ও ব্যাংক হিসাবের তথ্য নিয়ে আমাদের নিকটস্থ খামারগ্রাম শাখা বা বেলকুচি উপশাখায় যোগাযোগ করুন।',
      icon: UserCheck,
      color: 'bg-emerald-500 text-white',
    },
    {
      number: '০২',
      title: 'তাৎক্ষণিক কিউআর অ্যাক্টিভেশন',
      description: 'আমাদের দায়িত্বপ্রাপ্ত কর্মকর্তা অত্যন্ত দ্রুততার সাথে আপনার ব্যাংক হিসাবের সাথে সংযুক্ত বাংলা কিউআর কোড এবং মার্চেন্ট আইডি জেনারেট ও অ্যাক্টিভ করে দেবেন।',
      icon: QrCode,
      color: 'bg-pubali-gold text-slate-950',
    },
    {
      number: '০৩',
      title: 'দোকানে ডিসপ্লে ও পেমেন্ট গ্রহণ',
      description: 'আপনার দোকানে কিউআর স্ট্যান্ডি/ডিসপ্লে ঝুলিয়ে দিন এবং যেকোনো মোবাইল ব্যাংকিং বা ব্যাংক অ্যাপ থেকে সরাসরি চার্জ ছাড়াই টাকা গ্রহণ শুরু করুন!',
      icon: Store,
      color: 'bg-pubali-green text-white',
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-pubali-green-light uppercase tracking-widest">
            সহজ ৩টি ধাপ
          </h2>
          <p className="text-3xl font-extrabold text-slate-950 tracking-tight sm:text-4xl">
            কীভাবে আপনার বাংলা কিউআর চালু করবেন?
          </p>
          <div className="w-16 h-1 bg-pubali-gold mx-auto rounded-full" />
          <p className="text-slate-600 text-base">
            কোনো দীর্ঘ অপেক্ষা বা জটিল কাগজপত্র ছাড়াই অত্যন্ত দ্রুত ও সহজ প্রক্রিয়ায় আপনি আপনার ক্যাশলেস কিউআর যাত্রা শুরু করতে পারবেন।
          </p>
        </div>

        {/* Steps Layout */}
        <div className="relative">
          {/* Horizontal Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md hover:border-pubali-green/10 transition-all flex flex-col items-center text-center relative group"
                >
                  {/* Step Number Bubble */}
                  <div className={`absolute -top-5 left-8 w-10 h-10 rounded-full ${step.color} font-bold flex items-center justify-center shadow-md text-sm border-2 border-white`}>
                    {step.number}
                  </div>

                  {/* Icon Circular Background */}
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-150 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-pubali-green/20 transition-transform duration-300 mb-6 mt-2">
                    <Icon className="w-8 h-8 text-pubali-green" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                    {step.description}
                  </p>

                  {/* Arrow Indicator for flow on Desktop */}
                  {index < 2 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-slate-100 items-center justify-center shadow-sm z-20 group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-5 h-5 text-pubali-green" />
                    </div>
                  )}

                  {/* Arrow Indicator for flow on Mobile */}
                  {index < 2 && (
                    <div className="lg:hidden flex items-center justify-center mt-6 text-pubali-green/40">
                      <ArrowDown className="w-6 h-6 animate-bounce" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Support Highlight Box */}
        <div className="mt-16 bg-emerald-50/50 border border-emerald-100/60 rounded-2xl p-6 text-center max-w-3xl mx-auto">
          <p className="text-sm text-slate-700 leading-relaxed">
            💡 <strong>আমাদের বিশেষ সুবিধা:</strong> আপনার যদি ব্যবসার ব্যাংক অ্যাকাউন্ট না-ও থাকে, কোনো সমস্যা নেই। আমাদের কর্মকর্তারা বাংলা কিউআর রেজিস্ট্রেশনের সময়েই আপনার জন্য একটি <strong>e-KYC ব্যাংক হিসাব</strong> খুলে দেবেন।
          </p>
        </div>

      </div>
    </section>
  );
}
