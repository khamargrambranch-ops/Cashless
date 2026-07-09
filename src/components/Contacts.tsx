import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Building2, User, Clock, Check } from 'lucide-react';

export default function Contacts() {
  const branches = [
    {
      id: 1,
      type: 'প্রধান শাখা',
      title: 'পূবালী ব্যাংক পিএলসি, খামারগ্রাম শাখা, সিরাজগঞ্জ',
      address: 'হাজী আব্দুল কুদ্দুস সুপার মার্কেট, বেতিল বাস স্ট্যান্ড, এনায়েতপুর, সিরাজগঞ্জ।',
      phones: [
        '01714-091043',
        '01902-520682',
        '01740-097318'
      ],
      hours: 'রবিবার - বৃহস্পতিবার (সকাল ১০:০০ - বিকাল ৪:০০)',
      features: ['সম্পূর্ণ ব্যাংকিং সেবা', 'বাংলা কিউআর প্রিন্ট স্পট', 'মার্চেন্ট অ্যাকাউন্ট সাপোর্ট']
    },
    {
      id: 2,
      type: 'উপশাখা',
      title: 'বেলকুচি উপশাখা, সিরাজগঞ্জ (খামারগ্রাম শাখার অধীনে)',
      address: 'আবুল হাশেম কমপ্লেক্স, চালা, বেলকুচি, সিরাজগঞ্জ।',
      phones: [
        '01335-065865'
      ],
      hours: 'রবিবার - বৃহস্পতিবার (সকাল ১০:০০ - বিকাল ৩:৩০)',
      features: ['সহজ হিসাব খোলা', 'বাংলা কিউআর সাপোর্ট', 'খামারগ্রাম শাখার প্রত্যক্ষ নিয়ন্ত্রণে']
    }
  ];

  return (
    <section id="contacts-section" className="py-20 bg-slate-50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,92,54,0.04),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-pubali-green-light uppercase tracking-widest">
            আমাদের সাথে যোগাযোগ করুন
          </h2>
          <p className="text-3xl font-extrabold text-slate-950 tracking-tight sm:text-4xl">
            নিকটস্থ শাখা ও উপশাখার যোগাযোগের ঠিকানা
          </p>
          <div className="w-16 h-1 bg-pubali-gold mx-auto rounded-full" />
          <p className="text-slate-600 text-base">
            আপনার নিকটস্থ পূবালী ব্যাংক শাখায় সরাসরি চলে আসুন অথবা ফোন করে আমাদের মার্চেন্ট প্রতিনিধিদের সাথে যোগাযোগ করুন।
          </p>
        </div>

        {/* Contacts Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-pubali-green/15 transition-all flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Type Badge */}
              <div className="absolute top-0 right-0">
                <span className={`inline-block text-xs font-bold px-4 py-1.5 rounded-bl-2xl ${
                  branch.id === 1 
                    ? 'bg-pubali-green text-white' 
                    : 'bg-pubali-gold text-slate-950'
                }`}>
                  {branch.type}
                </span>
              </div>

              <div>
                {/* Branch Logo / Building Header */}
                <div className="flex items-center space-x-3.5 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-pubali-green group-hover:scale-105 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-pubali-green transition-colors leading-snug">
                      {branch.title}
                    </h3>
                  </div>
                </div>

                {/* Info Fields */}
                <div className="space-y-4 text-sm text-slate-600">
                  
                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-pubali-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-0.5">ঠিকানা:</p>
                      <p className="leading-relaxed">{branch.address}</p>
                    </div>
                  </div>

                  {/* Operational Hours */}
                  <div className="flex items-start space-x-3 border-t border-slate-100 pt-3.5">
                    <Clock className="w-5 h-5 text-pubali-green/70 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-0.5">অফিস সময়সূচী:</p>
                      <p className="leading-relaxed">{branch.hours}</p>
                    </div>
                  </div>

                  {/* Highlights/Features */}
                  <div className="border-t border-slate-100 pt-3.5 space-y-1.5">
                    {branch.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2 text-xs text-slate-500">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Call-to-Action Contact list */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1">
                  <span>কল করতে নম্বরে ক্লিক করুন</span>
                </p>
                <div className="grid grid-cols-1 gap-2.5">
                  {branch.phones.map((phone, pIdx) => (
                    <a
                      key={pIdx}
                      href={`tel:${phone}`}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-pubali-green hover:text-white border border-slate-100 hover:border-pubali-green hover:shadow-md transition-all group/phone"
                    >
                      <span className="font-mono text-sm sm:text-base font-bold tracking-wider">{phone}</span>
                      <div className="w-8 h-8 rounded-full bg-pubali-green/10 group-hover/phone:bg-white/25 flex items-center justify-center text-pubali-green group-hover/phone:text-white transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Map Placeholder Callout */}
        <div className="mt-12 text-center text-xs text-slate-400">
          📍 পূবালী ব্যাংক পিএলসি বাংলাদেশ ব্যাংকের ক্যাশলেস ক্যাম্পেইনের অংশ হিসেবে সিরাজগঞ্জ অঞ্চলের সকল ক্ষুদ্র ও মাঝারি ব্যবসায়ীদের কিউআর কোড প্রদানের জন্য সদা প্রস্তুত।
        </div>

      </div>
    </section>
  );
}
