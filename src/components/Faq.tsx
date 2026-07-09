import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const faqs: FaqItem[] = [
    {
      question: 'বাংলা কিউআর (Bangla QR) পেতে কি কোনো চার্জ দিতে হবে?',
      answer: 'না, বাংলা কিউআর রেজিস্ট্রেশন, স্ট্যান্ডি জেনারেট এবং মার্চেন্ট অ্যাকাউন্ট তৈরি সম্পূর্ণ বিনামূল্যে করা হচ্ছে। এটি ব্যবহারের জন্য কোনো বাৎসরিক বা রিকরিং ফি-ও নেই।',
    },
    {
      question: 'আমার ট্রেড লাইসেন্স নেই, আমি কি বাংলা কিউআর কোড পাবো?',
      answer: 'হ্যাঁ, পাবেন! ছোট ও মাঝারি খুচরা ব্যবসায়ীদের সুবিধার্থে বাংলাদেশ ব্যাংকের নির্দেশনা অনুযায়ী "Micro Merchant" বা অতি ক্ষুদ্র মার্চেন্ট ক্যাটাগরিতে ট্রেড লাইসেন্স ছাড়াই শুধুমাত্র জাতীয় পরিচয়পত্র (NID), পাসপোর্ট সাইজের ছবি এবং দোকানের সাইনবোর্ডের ছবি দিয়ে অ্যাকাউন্ট খুলে কিউআর কোড নেওয়া যায়।',
    },
    {
      question: 'গ্রাহকরা কোন কোন পেমেন্ট অ্যাপ দিয়ে স্ক্যান করে টাকা দিতে পারবেন?',
      answer: 'এটি একটি সর্বজনীন ইন্টারঅপারেবল বাংলা কিউআর (Interoperable Bangla QR)। তাই কাস্টমাররা যেকোনো এমএফএস অ্যাপ (বিকাশ, নগদ, রকেট, উপায়) অথবা যেকোনো বাণিজ্যিক ব্যাংকের মোবাইল ব্যাংকিং অ্যাপ (যেমন পূবালী ব্যাংকের PI App, সিটি টাচ, সেলফিন ইত্যাদি) দিয়ে স্ক্যান করে সরাসরি আপনাকে পেমেন্ট করতে পারবেন।',
    },
    {
      question: 'পেমেন্টের টাকা সরাসরি কোথায় জমা হবে এবং সেটেলমেন্ট কত দ্রুত হয়?',
      answer: 'পেমেন্টের অর্থ সরাসরি ও তাৎক্ষণিকভাবে আপনার পূবালী ব্যাংক অ্যাকাউন্টে জমা হয়ে যাবে। টাকা জমার সাথে সাথেই আপনার মোবাইলে এসএমএস (SMS) নোটিফিকেশন চলে যাবে এবং আপনি রিয়েল-টাইম ড্যাশবোর্ডে তা দেখতে পাবেন।',
    },
    {
      question: 'আমার যদি পূবালী ব্যাংকে আগে থেকে অ্যাকাউন্ট না থাকে, তাহলে কি করবো?',
      answer: 'পূর্বে অ্যাকাউন্ট না থাকলে কোনো সমস্যা নেই। আমাদের খামারগ্রাম শাখা বা বেলকুচি উপশাখায় যোগাযোগ করলে আমাদের দায়িত্বপ্রাপ্ত কর্মকর্তারা মাত্র ৫ মিনিটে ই-কেওয়াইসি (e-KYC) প্রক্রিয়ার মাধ্যমে কোনো পেপারলেস ঝামেলা ছাড়াই নতুন অ্যাকাউন্ট খুলে দেবেন এবং সাথে সাথে কিউআর কোড সচল করে দেবেন।',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-pubali-green-light uppercase tracking-widest">
            সাধারণ জিজ্ঞাসা
          </h2>
          <p className="text-3xl font-extrabold text-slate-950 tracking-tight sm:text-4xl">
            বাংলা কিউআর নিয়ে সাধারণ কিছু প্রশ্ন ও উত্তর
          </p>
          <div className="w-16 h-1 bg-pubali-gold mx-auto rounded-full" />
        </div>

        {/* Faq List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-100 rounded-2xl bg-slate-50 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:bg-slate-100/50 transition-colors cursor-pointer"
                >
                  <span className="flex items-start gap-3 text-sm sm:text-base">
                    <HelpCircle className="w-5 h-5 text-pubali-green shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-400 shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-white/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
