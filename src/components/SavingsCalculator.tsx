import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, Sparkles, CheckCircle } from 'lucide-react';

export default function SavingsCalculator() {
  const [salesVolume, setSalesVolume] = useState<number>(100000);
  const [otherChargeRate, setOtherChargeRate] = useState<number>(1.85); // Standard MFS Cashout or Card MDR

  // Calculate savings
  const monthlySavings = Math.round((salesVolume * otherChargeRate) / 100);
  const annualSavings = monthlySavings * 12;

  // Formatting helper for Bengali numbers
  const convertToBengaliNumber = (num: number): string => {
    const englishToBengaliMap: { [key: string]: string } = {
      '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
      '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯',
      ',': ',', '.': '.'
    };
    return num.toLocaleString('en-IN').split('').map(char => englishToBengaliMap[char] || char).join('');
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(10,92,54,0.12),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pubali-green/30 border border-pubali-green text-pubali-gold text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4" /> সাশ্রয় ও লাভ হিসাব করুন
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            বাংলা কিউআর ব্যবহারে আপনার দোকানে কত লাভ?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            অন্যান্য মোবাইল ব্যাংকিং বা ক্রেডিট কার্ড পেমেন্ট গেটওয়েতে গড়ে ১.৫% থেকে ২.০% চার্জ কাটা হয়। কিন্তু পূবালী ব্যাংক কিউআর সম্পূর্ণ চার্জ-ফ্রি! নিচে হিসাব করে দেখুন কত টাকা সাশ্রয় হচ্ছে।
          </p>
        </div>

        {/* Calculator Card Container */}
        <div className="max-w-4xl mx-auto bg-slate-800/60 border border-slate-700/60 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Left Column: Inputs */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-pubali-gold border-b border-slate-700 pb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-500" /> আপনার দোকানের হিসাব দিন
              </h3>
              
              {/* Sales Volume Range Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <label className="text-slate-300 font-medium">মাসিক আনুমানিক ডিজিটাল বেচাকেনা:</label>
                  <span className="text-pubali-gold font-bold text-lg">
                    ৳ {convertToBengaliNumber(salesVolume)} টাকা
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  step="10000"
                  value={salesVolume}
                  onChange={(e) => setSalesVolume(Number(e.target.value))}
                  className="w-full accent-pubali-green cursor-pointer h-2 bg-slate-700 rounded-lg"
                />
                <div className="flex justify-between text-xs text-slate-500 font-mono">
                  <span>৳১০,০০০</span>
                  <span>৳৫,০০,০০০</span>
                  <span>৳১০,০০,০০০</span>
                </div>
              </div>

              {/* Other Rate Selection */}
              <div className="space-y-3">
                <label className="block text-sm text-slate-300 font-medium">
                  অন্যান্য এমএফএস/কার্ড চার্জ রেট (%):
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: '১.৫০%', value: 1.50 },
                    { label: '১.৮৫% (বিকাশ)', value: 1.85 },
                    { label: '২.০০% (কার্ড)', value: 2.00 },
                  ].map((rate) => (
                    <button
                      key={rate.value}
                      onClick={() => setOtherChargeRate(rate.value)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        otherChargeRate === rate.value
                          ? 'bg-pubali-green border-pubali-gold text-white shadow-md'
                          : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      {rate.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Business presets shortcut */}
              <div className="space-y-2">
                <span className="text-xs text-slate-400">ব্যবসার আকার অনুযায়ী সরাসরি নির্বাচন করুন:</span>
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => setSalesVolume(50000)}
                    className="text-xs bg-slate-900 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer"
                  >
                    ছোট মুদি দোকান (৳৫০,০০০)
                  </button>
                  <button 
                    onClick={() => setSalesVolume(200000)}
                    className="text-xs bg-slate-900 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer"
                  >
                    ফার্মেসী/খুচরা বিক্রেতা (৳২,০০,০০০)
                  </button>
                  <button 
                    onClick={() => setSalesVolume(500000)}
                    className="text-xs bg-slate-900 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer"
                  >
                    পাইকারি আড়ৎ (৳৫,০০,০০০)
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Calculations and Benefits Display */}
            <div className="bg-slate-900/80 border border-slate-700/60 p-6 sm:p-8 rounded-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl" />
              
              <div className="text-center md:text-left">
                <span className="text-xs text-slate-400 font-semibold tracking-wider block mb-1">পূবালী ব্যাংক বাংলা কিউআর চার্জ:</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-emerald-500">৳ ০.০০ টাকা</span>
                <span className="ml-2.5 inline-block text-[11px] font-extrabold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 py-0.5 px-2 rounded-md uppercase">
                  শতভাগ ফ্রি
                </span>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-400">প্রতি মাসে নিট সাশ্রয়:</span>
                  <span className="text-xl font-bold text-pubali-gold">৳ {convertToBengaliNumber(monthlySavings)} টাকা</span>
                </div>
                
                <div className="flex justify-between items-center bg-pubali-green/10 border border-pubali-green-light/20 p-3.5 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    <span className="text-sm font-bold text-white">প্রতি বছরে মোট সাশ্রয়:</span>
                  </div>
                  <span className="text-2xl font-black text-emerald-400">৳ {convertToBengaliNumber(annualSavings)} টাকা</span>
                </div>
              </div>

              {/* Psychological motivation conversion block */}
              <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/50 flex items-start gap-2.5">
                <Sparkles className="w-5 h-5 text-pubali-gold shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  বছরে <strong className="text-white">৳{convertToBengaliNumber(annualSavings)} টাকা</strong> সম্পূর্ণ বাঁচিয়ে আপনি নিজের ব্যবসাকে আরও বড় করতে পারবেন অথবা নতুন মালামাল ক্রয় করতে পারবেন। এই বিশাল লাভ হাতছাড়া করবেন না!
                </p>
              </div>

              {/* Secure banking trust lock */}
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>কোনো লুকানো বা বাৎসরিক চার্জ নেই। এটি বাংলাদেশ ব্যাংকের নির্দেশিত জাতীয় কিউআর স্ট্যান্ডআউট।</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
