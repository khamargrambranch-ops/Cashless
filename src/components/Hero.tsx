import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QrCode, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onScrollToContact: () => void;
  onScrollToBenefits: () => void;
}

export default function Hero({ onScrollToContact, onScrollToBenefits }: HeroProps) {
  const [merchantName, setMerchantName] = useState('মেসার্স খামারগ্রাম স্টোর');
  const [isTestPaying, setIsTestPaying] = useState(false);
  const [paySuccess, setPaySuccess] = useState(false);
  const [amount, setAmount] = useState('৫০০');

  // Trigger auto payment simulation effect for engagement
  const triggerPaymentTest = () => {
    setIsTestPaying(true);
    setTimeout(() => {
      setIsTestPaying(false);
      setPaySuccess(true);
    }, 1800);
  };

  const closeSuccess = () => {
    setPaySuccess(false);
  };

  return (
    <header className="relative overflow-hidden bg-slate-900 text-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,92,54,0.15),transparent_45%)]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-pubali-green/10 rounded-full blur-3xl" />

      {/* Top Navbar */}
      <nav className="relative z-10 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Pubali Bank Custom Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-pubali-green flex items-center justify-center border border-pubali-gold/30 shadow-md">
              {/* Emblem representing the brand */}
              <span className="text-pubali-gold text-2xl font-bold">পূ</span>
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight text-white flex items-center">
                পূবালী ব্যাংক পিএলসি
                <span className="ml-2 px-1.5 py-0.5 text-[10px] bg-pubali-gold text-slate-950 font-bold rounded">বাংলা QR</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">
                Pubali Bank PLC
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={onScrollToBenefits} 
              className="text-sm font-medium text-slate-300 hover:text-pubali-gold transition-colors cursor-pointer"
            >
              কিউআর-এর সুবিধাসমূহ
            </button>
            <button 
              onClick={onScrollToContact} 
              className="px-4 py-2 rounded-lg bg-pubali-green hover:bg-pubali-green-light border border-pubali-gold/20 text-sm font-semibold text-white shadow-md hover:shadow-pubali-green/10 transition-all cursor-pointer"
            >
              আজই যোগাযোগ করুন
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Body */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Campaign Slogans & Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-pubali-green/30 border border-pubali-green-light text-pubali-gold text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>১০০% চার্জ ফ্রি ডিজিটাল পেমেন্ট</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              ক্যাশলেস ব্যবসার নতুন দিগন্ত —{' '}
              <span className="text-pubali-gold block sm:inline">
                পূবালী ব্যাংক পিএলসি বাংলা কিউআর (Bangla QR)
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              খামারগ্রাম, এনায়েতপুর, খুকনি, শাহজাদপুর ও বেলকুচি অঞ্চলের ব্যবসায়ী ভাই-বোনদের জন্য সম্পূর্ণ বিনা খরচে আধুনিক ডিজিটাল পেমেন্ট সমাধান। কোনো মার্চেন্ট ফি নেই, ঝামেলামুক্ত তাৎক্ষণিক সেটেলমেন্ট!
            </p>

            {/* Micro Badges of Trust */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 text-slate-300 bg-slate-800/50 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-pubali-gold shrink-0" />
                <span className="text-sm font-medium">০% মার্চেন্ট চার্জ</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300 bg-slate-800/50 p-2.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-pubali-gold shrink-0" />
                <span className="text-sm font-medium">নিরাপদ ব্যাংকিং</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300 bg-slate-800/50 p-2.5 rounded-lg border border-slate-800 col-span-2 sm:col-span-1">
                <Zap className="w-5 h-5 text-pubali-gold shrink-0" />
                <span className="text-sm font-medium">তাৎক্ষণিক জমা</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onScrollToContact}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-pubali-gold hover:bg-pubali-gold-light text-slate-950 font-bold text-base shadow-lg shadow-pubali-gold/15 hover:shadow-pubali-gold/25 transform hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>ফ্রি কিউআর কোড নিন</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onScrollToBenefits}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>কিউআর-এর সুবিধাসমূহ</span>
                <QrCode className="w-5 h-5 text-pubali-gold" />
              </button>
            </div>
          </div>

          {/* Right Side: Interactive Bangla QR Standee Simulator */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Control Panel Card */}
            <div className="w-full max-w-sm mb-4 bg-slate-800/85 backdrop-blur-sm p-4 rounded-xl border border-slate-700/60 shadow-md">
              <h3 className="text-sm font-semibold text-pubali-gold mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 animate-bounce" />
                নিজে চেষ্টা করে দেখুন (QR Standee Simulator)
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">আপনার দোকানের নাম লিখুন:</label>
                  <input
                    type="text"
                    value={merchantName}
                    onChange={(e) => setMerchantName(e.target.value.slice(0, 32))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-pubali-gold transition-all"
                    placeholder="যেমন: ভাই ভাই স্টোর"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">টেস্ট পেমেন্ট অ্যামাউন্ট:</label>
                    <select
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none focus:border-pubali-gold"
                    >
                      <option value="১০০">১০০ টাকা</option>
                      <option value="৫০০">৫০০ টাকা</option>
                      <option value="১,০০০">১,০০০ টাকা</option>
                      <option value="৫,০০০">৫,০০০ টাকা</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={triggerPaymentTest}
                      disabled={isTestPaying || paySuccess}
                      className="w-full bg-pubali-green hover:bg-pubali-green-light text-white font-bold text-xs py-2 px-3 rounded-lg border border-pubali-gold/30 disabled:opacity-50 transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      {isTestPaying ? 'পেমেন্ট হচ্ছে...' : 'পেমেন্ট টেস্ট করুন'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Standee Frame Container */}
            <div className="relative w-full max-w-[320px] bg-white text-slate-900 rounded-3xl p-5 shadow-2xl border-4 border-slate-100 flex flex-col items-center">
              
              {/* Standee Hanging Loop style element */}
              <div className="absolute -top-3 w-16 h-3 bg-slate-200 rounded-t-full" />

              {/* Pubali Bank Logo Header inside Standee */}
              <div className="w-full flex items-center justify-between border-b pb-3 mb-4">
                <div className="flex items-center space-x-1.5">
                  <div className="w-7 h-7 bg-pubali-green rounded-md flex items-center justify-center">
                    <span className="text-pubali-gold text-sm font-bold">পূ</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-[10px] font-bold text-pubali-green leading-none">পূবালী ব্যাংক পিএলসি</h4>
                    <p className="text-[6px] text-slate-500 font-mono tracking-wide leading-none">PUBALI BANK PLC</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[7px] font-bold text-slate-400 uppercase tracking-wider">Merchant Pay</span>
                </div>
              </div>

              {/* Bangla QR Official Style Badge */}
              <div className="w-full bg-slate-100 py-1.5 px-3 rounded-lg flex items-center justify-between mb-4 border border-slate-200">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-ping" />
                  <span className="text-[9px] font-bold text-slate-700">বাংলাদেশ ব্যাংক অনুমোদিত</span>
                </div>
                <div className="flex items-center space-x-0.5">
                  {/* Styled simulated logo for Bangla QR */}
                  <span className="text-[9px] font-extrabold text-orange-600 bg-orange-100 px-1 rounded">বাংলা</span>
                  <span className="text-[9px] font-extrabold text-emerald-600 bg-emerald-100 px-1 rounded">QR</span>
                </div>
              </div>

              {/* Dynamic Merchant Business Name Box */}
              <div className="w-full bg-pubali-green/5 border border-pubali-green/20 py-2.5 px-3 rounded-xl text-center mb-4">
                <p className="text-[10px] text-slate-500 font-medium">মার্চেন্ট হিসাবের নাম:</p>
                <p className="text-sm font-bold text-pubali-green truncate" title={merchantName}>
                  {merchantName || 'আপনার দোকানের নাম'}
                </p>
              </div>

              {/* QR Code Graphic Frame */}
              <div className="relative w-48 h-48 bg-slate-50 rounded-2xl border-2 border-dashed border-pubali-green/30 flex items-center justify-center p-3 group overflow-hidden">
                
                {/* QR Laser scanning effect */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-emerald-500 shadow-[0_0_10px_#10b981] animate-[bounce_3s_infinite]" />

                {/* Simulated Complex QR Code SVG */}
                <svg className="w-full h-full text-slate-800" viewBox="0 0 100 100" fill="currentColor">
                  {/* Corners */}
                  <rect x="5" y="5" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="11" y="11" width="10" height="10" />
                  
                  <rect x="73" y="5" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="79" y="11" width="10" height="10" />

                  <rect x="5" y="73" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="11" y="79" width="10" height="10" />

                  <rect x="79" y="79" width="10" height="10" />
                  
                  {/* Alignment patterns */}
                  <rect x="75" y="50" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="78" y="53" width="2" height="2" />

                  {/* Random QR points */}
                  <rect x="32" y="6" width="6" height="6" />
                  <rect x="42" y="12" width="8" height="4" />
                  <rect x="55" y="8" width="4" height="8" />
                  <rect x="63" y="15" width="6" height="4" />

                  <rect x="6" y="32" width="8" height="6" />
                  <rect x="18" y="42" width="6" height="8" />
                  <rect x="10" y="55" width="4" height="6" />

                  <rect x="32" y="32" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="36" y="36" width="4" height="4" />

                  {/* More points for authentic QR density */}
                  <rect x="50" y="30" width="6" height="4" />
                  <rect x="60" y="35" width="8" height="6" />
                  <rect x="48" y="45" width="10" height="4" />
                  <rect x="62" y="48" width="6" height="8" />

                  <rect x="30" y="52" width="8" height="6" />
                  <rect x="40" y="62" width="6" height="8" />
                  <rect x="32" y="75" width="4" height="10" />
                  <rect x="44" y="80" width="10" height="6" />
                  <rect x="58" y="75" width="8" height="4" />

                  <rect x="52" y="60" width="12" height="10" />
                  <rect x="68" y="65" width="6" height="6" />
                  <rect x="68" y="75" width="6" height="12" />
                </svg>

                {/* Center Badge representing Interoperable Bangla QR */}
                <div className="absolute w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border border-slate-100">
                  <div className="w-9 h-9 bg-pubali-green rounded-lg flex items-center justify-center">
                    <span className="text-pubali-gold text-xs font-black">QR</span>
                  </div>
                </div>

                {/* Simulation Paying State Overlay */}
                <AnimatePresence>
                  {isTestPaying && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-slate-900/80 flex flex-col items-center justify-center text-white"
                    >
                      <div className="w-12 h-12 rounded-full border-4 border-pubali-gold border-t-transparent animate-spin mb-2" />
                      <p className="text-xs font-semibold">পেমেন্ট স্ক্যান হচ্ছে...</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Supported Payment Logos Banner inside Standee */}
              <div className="w-full mt-4 text-center">
                <p className="text-[8px] text-slate-400 uppercase font-bold tracking-wider mb-2">SCAN & PAY WITH ANY APP</p>
                
                {/* Simulated mini icons of bKash, Nagad, Rocket, PI App */}
                <div className="grid grid-cols-4 gap-1 items-center justify-center">
                  <div className="bg-pink-50 border border-pink-100 rounded py-1 px-1 flex flex-col items-center">
                    <span className="text-[7px] font-bold text-pink-600 leading-none">bKash</span>
                  </div>
                  <div className="bg-orange-50 border border-orange-100 rounded py-1 px-1 flex flex-col items-center">
                    <span className="text-[7px] font-bold text-orange-600 leading-none">Nagad</span>
                  </div>
                  <div className="bg-purple-50 border border-purple-100 rounded py-1 px-1 flex flex-col items-center">
                    <span className="text-[7px] font-bold text-purple-700 leading-none">Rocket</span>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 rounded py-1 px-1 flex flex-col items-center">
                    <span className="text-[7px] font-bold text-emerald-800 leading-none">PI App</span>
                  </div>
                </div>
                
                <p className="text-[8px] text-slate-500 mt-2 font-medium">
                  বিকাশ, নগদ, রকেট, উপায় ও যেকোনো ব্যাংক অ্যাপ
                </p>
              </div>
            </div>

            {/* Test Payment Success Modal Overlay */}
            <AnimatePresence>
              {paySuccess && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
                >
                  <motion.div 
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl border border-slate-100"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-1">লেনদেন সম্পূর্ণ সফল!</h3>
                    <p className="text-xs text-emerald-600 font-semibold bg-emerald-50 py-1 px-2.5 rounded-full inline-block mb-4">
                      ০% মার্চেন্ট চার্জ প্রযোজ্য হয়েছে
                    </p>
                    
                    <div className="bg-slate-50 rounded-xl p-4 text-left space-y-2.5 border border-slate-100 mb-5">
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>দোকানের নাম:</span>
                        <span className="font-bold text-slate-800">{merchantName}</span>
                      </div>
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>পেমেন্ট মাধ্যম:</span>
                        <span className="font-semibold text-slate-800">বিকাশ / এমএফএস (MFS)</span>
                      </div>
                      <div className="flex justify-between text-xs text-slate-500 border-t pt-2.5 border-slate-200">
                        <span className="font-semibold text-slate-800">প্রাপ্ত অর্থ:</span>
                        <span className="font-bold text-pubali-green text-sm">{amount} টাকা</span>
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>মার্চেন্ট ফি (MDR):</span>
                        <span className="text-emerald-600 font-bold">০.০০ টাকা (সম্পূর্ণ ফ্রি)</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                      এইভাবেই গ্রাহক স্ক্যান করার সাথে সাথে কোনো চার্জ ছাড়াই টাকা সরাসরি আপনার পূবালী ব্যাংক অ্যাকাউন্টে জমা হয়ে যাবে।
                    </p>

                    <button
                      onClick={closeSuccess}
                      className="w-full bg-pubali-green hover:bg-pubali-green-light text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all cursor-pointer"
                    >
                      বুঝেছি, ধন্যবাদ!
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </header>
  );
}
