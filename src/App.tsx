import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import SavingsCalculator from './components/SavingsCalculator';
import Steps from './components/Steps';
import Contacts from './components/Contacts';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { Phone } from 'lucide-react';

export default function App() {
  
  // Custom scrolling handlers
  const scrollToContact = () => {
    const element = document.getElementById('contacts-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBenefits = () => {
    const element = document.getElementById('benefits-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative antialiased selection:bg-pubali-green selection:text-white">
      
      {/* 1. Header & Hero with Standee Simulator */}
      <Hero 
        onScrollToContact={scrollToContact} 
        onScrollToBenefits={scrollToBenefits} 
      />

      {/* 2. Key Benefits 8-Card Grid & Portal Feature */}
      <Benefits />

      {/* 3. Interactive No-Fee Savings Calculator */}
      <SavingsCalculator />

      {/* 4. Onboarding Step-by-Step Guide */}
      <Steps />

      {/* 5. Contact Cards for Khamargram and Belkuchi with click-to-call */}
      <Contacts />

      {/* 6. Expandable Accordion Frequently Asked Questions (FAQ) */}
      <Faq />

      {/* 7. Footer with copyright and bank slogan */}
      <Footer />

      {/* 8. Sticky/Floating Mobile Call Bar (Visible only on mobile) */}
      <div className="md:hidden fixed bottom-4 inset-x-4 z-40 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 p-3 rounded-2xl shadow-2xl flex items-center justify-between gap-3 animate-bounce-short">
        <div className="flex-1 flex flex-col text-left">
          <span className="text-[10px] text-pubali-gold font-extrabold tracking-wider uppercase">জরুরী মার্চেন্ট সাপোর্ট:</span>
          <span className="text-xs text-white font-bold truncate">পূবালী ব্যাংক বাংলা কিউআর</span>
        </div>
        
        <div className="flex gap-2 shrink-0">
          <a
            href="tel:01714091043"
            className="px-3 py-2 bg-pubali-green text-white text-xs font-bold rounded-xl border border-pubali-gold/10 flex items-center gap-1 hover:bg-pubali-green-light transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>খামারগ্রাম</span>
          </a>
          <a
            href="tel:01335065865"
            className="px-3 py-2 bg-pubali-gold text-slate-950 text-xs font-bold rounded-xl flex items-center gap-1 hover:bg-pubali-gold-light transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>বেলকুচি</span>
          </a>
        </div>
      </div>

    </div>
  );
}
