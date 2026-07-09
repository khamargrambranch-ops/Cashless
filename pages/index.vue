<script setup lang="ts">
import { ref, computed } from 'vue'

// Interactive Standee/QR simulator state
const merchantName = ref('মেসার্স খামারগ্রাম স্টোর')
const isTestPaying = ref(false)
const paySuccess = ref(false)
const amount = ref('৫০০')

const triggerPaymentTest = () => {
  isTestPaying.value = true
  setTimeout(() => {
    isTestPaying.value = false
    paySuccess.value = true
  }, 1800)
}

const closeSuccess = () => {
  paySuccess.value = false
}

// Savings Calculator state
const salesVolume = ref(100000)
const otherChargeRate = ref(1.85)

const monthlySavings = computed(() => {
  return Math.round((salesVolume.value * otherChargeRate.value) / 100)
})

const annualSavings = computed(() => {
  return monthlySavings.value * 12
})

// Conversion helper for Bengali numbers
const convertToBengaliNumber = (num: number) => {
  const englishToBengaliMap: { [key: string]: string } = {
    '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
    '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯',
    ',': ',', '.': '.'
  }
  return num.toLocaleString('en-IN').split('').map(char => englishToBengaliMap[char] || char).join('')
}

// FAQ State
const openFaqIndex = ref<number | null>(null)
const toggleFaq = (index: number) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}

// Scrolling helpers
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Scoll to top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Benefits static list
const benefits = [
  {
    id: 1,
    title: '০% মার্চেন্ট চার্জ (No MDR)',
    badge: '১০০% ফ্রি',
    description: 'PI App ব্যবহারের মাধ্যমে লেনদেনে কোনো অতিরিক্ত ফি বা কমিশন কাটা হবে না। শতভাগ ফ্রি ডিজিটাল পেমেন্ট গ্রহণ করুন।',
    icon: 'i-heroicons-receipt-percent',
    colorClass: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    id: 2,
    title: 'তাৎক্ষণিক পেমেন্ট সেটেলমেন্ট',
    badge: 'রিয়েল-টাইম',
    description: 'কিউআর-এর মাধ্যমে পেমেন্ট গ্রহণের পর অর্থ তাৎক্ষণিকভাবে ব্যবসায়ীর ব্যাংক অ্যাকাউন্টে জমা হবে।',
    icon: 'i-heroicons-bolt',
    colorClass: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    id: 3,
    title: 'দ্রুত কিউআর জেনারেট',
    badge: 'ইনস্ট্যান্ট প্রিন্ট',
    description: 'রেজিস্ট্রেশনের পর আমাদের শাখা বা উপশাখা থেকে তাৎক্ষণিকভাবে বাংলা কিউআর কোড প্রস্তুত করে দেওয়া হবে।',
    icon: 'i-heroicons-qr-code',
    colorClass: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    id: 4,
    title: 'পেপারলেস e-KYC অ্যাকাউন্ট',
    badge: 'ঝামেলামুক্ত',
    description: 'PI App ব্যবহার করে কোনো ঝামেলার কাগজপত্র ছাড়াই ডিজিটাল উপায়ে দ্রুত মার্চেন্ট অ্যাকাউন্ট খুলুন।',
    icon: 'i-heroicons-document-check',
    colorClass: 'bg-purple-50 text-purple-600 border-purple-100',
  },
  {
    id: 5,
    title: 'ট্রেড লাইসেন্স ব্যতীত অ্যাকাউন্ট',
    badge: 'সহজ শর্ত',
    description: 'ছোট ও মাঝারি উদ্যোক্তাদের সুবিধার্থে Micro Merchant ক্যাটাগরিতে ট্রেড লাইসেন্স ছাড়াই অ্যাকাউন্ট খোলা যাবে।',
    icon: 'i-heroicons-star',
    colorClass: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },
  {
    id: 6,
    title: 'রিয়েল-টাইম ওয়েব ড্যাশবোর্ড',
    badge: 'অনলাইন পোর্টাল',
    description: 'bqr.pubalibankbd.com ড্যাশবোর্ডের মাধ্যমে সহজেই যেকোনো ডিভাইস থেকে দৈনিক বেচাকেনার হিসাব পর্যবেক্ষণ করতে পারবেন।',
    icon: 'i-heroicons-chart-bar',
    colorClass: 'bg-teal-50 text-teal-600 border-teal-100',
  },
  {
    id: 7,
    title: 'ধর্মীয় ও দাতব্য প্রতিষ্ঠানে বিশেষ ছাড়',
    badge: 'সম্পূর্ণ ফ্রি',
    description: 'মসজিদ, মাদ্রাসা, মন্দির, গির্জা ও প্যাগোডার মতো ধর্মীয় প্রতিষ্ঠানের লেনদেনে কোনো মার্চেন্ট কমিশন নেই।',
    icon: 'i-heroicons-heart',
    colorClass: 'bg-rose-50 text-rose-600 border-rose-100',
  },
  {
    id: 8,
    title: 'সম্পূর্ণ বিনামূল্যে ফান্ড ট্রান্সফার',
    badge: 'চার্জ ফ্রি',
    description: 'PI App-এর মাধ্যমে NPSB, BEFTN বা RTGS ব্যবহার করে যেকোনো ব্যাংক ও MFS-এ চার্জ ছাড়াই ফান্ড ট্রান্সফার করুন।',
    icon: 'i-heroicons-arrows-right-left',
    colorClass: 'bg-cyan-50 text-cyan-600 border-cyan-100',
  },
]

// Onboarding steps
const steps = [
  {
    number: '০১',
    title: 'আমাদের শাখায় যোগাযোগ',
    description: 'আপনার জাতীয় পরিচয়পত্র (NID), পাসপোর্ট সাইজ ছবি ও ব্যাংক হিসাবের তথ্য নিয়ে আমাদের নিকটস্থ খামারগ্রাম শাখা বা বেলকুচি উপশাখায় যোগাযোগ করুন।',
    icon: 'i-heroicons-user-plus',
    color: 'bg-[#0A5C36] text-white',
  },
  {
    number: '০২',
    title: 'তাৎক্ষণিক কিউআর অ্যাক্টিভেশন',
    description: 'আমাদের দায়িত্বপ্রাপ্ত কর্মকর্তা অত্যন্ত দ্রুততার সাথে আপনার ব্যাংক হিসাবের সাথে সংযুক্ত বাংলা কিউআর কোড এবং মার্চেন্ট আইডি জেনারেট ও অ্যাক্টিভ করে দেবেন।',
    icon: 'i-heroicons-qr-code',
    color: 'bg-[#D4AF37] text-slate-950',
  },
  {
    number: '০৩',
    title: 'দোকানে ডিসপ্লে ও পেমেন্ট গ্রহণ',
    description: 'আপনার দোকানে কিউআর স্ট্যান্ডি/ডিসপ্লে ঝুলিয়ে দিন এবং যেকোনো মোবাইল ব্যাংকিং বা ব্যাংক অ্যাপ থেকে সরাসরি চার্জ ছাড়াই টাকা গ্রহণ শুরু করুন!',
    icon: 'i-heroicons-home-modern',
    color: 'bg-emerald-600 text-white',
  },
]

// Contacts branch info
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
]

// FAQs
const faqs = [
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
]
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex flex-col relative antialiased selection:bg-[#0A5C36] selection:text-white">
    
    <!-- 1. Header & Hero Section -->
    <header class="relative overflow-hidden bg-slate-900 text-white">
      <!-- Decorative Background Elements -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,92,54,0.15),transparent_45%)]" />
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#0A5C36]/10 rounded-full blur-3xl" />

      <!-- Top Navbar -->
      <nav class="relative z-10 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div class="flex items-center space-x-3 animate-fade-in">
            <div class="w-12 h-12 rounded-xl bg-[#0A5C36] flex items-center justify-center border border-[#D4AF37]/30 shadow-md">
              <span class="text-[#D4AF37] text-2xl font-bold">পূ</span>
            </div>
            <div>
              <div class="text-lg font-bold tracking-tight text-white flex items-center">
                পূবালী ব্যাংক পিএলসি
                <span class="ml-2 px-1.5 py-0.5 text-[10px] bg-[#D4AF37] text-slate-950 font-bold rounded">বাংলা QR</span>
              </div>
              <div class="text-[10px] uppercase tracking-widest text-slate-400 font-mono">
                Pubali Bank PLC
              </div>
            </div>
          </div>

          <div class="hidden md:flex items-center space-x-6">
            <button 
              @click="scrollToSection('benefits-section')" 
              class="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              কিউআর-এর সুবিধাসমূহ
            </button>
            <button 
              @click="scrollToSection('contacts-section')" 
              class="px-4 py-2 rounded-lg bg-[#0A5C36] hover:bg-[#0D7343] border border-[#D4AF37]/20 text-sm font-semibold text-white shadow-md transition-all cursor-pointer"
            >
              আজই যোগাযোগ করুন
            </button>
          </div>
        </div>
      </nav>

      <!-- Hero Body -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Side: Copy -->
          <div class="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0A5C36]/30 border border-[#0D7343] text-[#D4AF37] text-xs font-semibold tracking-wide">
              <UIcon name="i-heroicons-sparkles" class="w-3.5 h-3.5 animate-pulse" />
              <span>১০০% চার্জ ফ্রি ডিজিটাল পেমেন্ট</span>
            </div>

            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              ক্যাশলেস ব্যবসার নতুন দিগন্ত — 
              <span class="text-[#D4AF37] block sm:inline">
                পূবালী ব্যাংক পিএলসি বাংলা কিউআর (Bangla QR)
              </span>
            </h1>

            <p class="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              খামারগ্রাম, এনায়েতপুর, খুকনি, শাহজাদপুর ও বেলকুচি অঞ্চলের ব্যবসায়ী ভাই-বোনদের জন্য সম্পূর্ণ বিনা খরচে আধুনিক ডিজিটাল পেমেন্ট সমাধান। কোনো মার্চেন্ট ফি নেই, ঝামেলামুক্ত তাৎক্ষণিক সেটেলমেন্ট!
            </p>

            <!-- Badges -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left max-w-md mx-auto lg:mx-0">
              <div class="flex items-center space-x-2 text-slate-300 bg-slate-800/50 p-2.5 rounded-lg border border-slate-800">
                <UIcon name="i-heroicons-receipt-percent" class="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span class="text-sm font-medium">০% মার্চেন্ট চার্জ</span>
              </div>
              <div class="flex items-center space-x-2 text-slate-300 bg-slate-800/50 p-2.5 rounded-lg border border-slate-800">
                <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span class="text-sm font-medium">নিরাপদ ব্যাংকিং</span>
              </div>
              <div class="flex items-center space-x-2 text-slate-300 bg-slate-800/50 p-2.5 rounded-lg border border-slate-800 col-span-2 sm:col-span-1">
                <UIcon name="i-heroicons-bolt" class="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span class="text-sm font-medium">তাৎক্ষণিক জমা</span>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                @click="scrollToSection('contacts-section')"
                class="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#D4AF37] hover:bg-[#F3CD4E] text-slate-950 font-bold text-base shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>ফ্রি কিউআর কোড নিন</span>
                <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
              </button>

              <button
                @click="scrollToSection('benefits-section')"
                class="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>কিউআর-এর সুবিধাসমূহ</span>
                <UIcon name="i-heroicons-qr-code" class="w-5 h-5 text-[#D4AF37]" />
              </button>
            </div>
          </div>

          <!-- Right Side: Interactive Standee Simulator -->
          <div class="lg:col-span-5 flex flex-col items-center">
            
            <!-- Control Panel Card -->
            <div class="w-full max-w-sm mb-4 bg-slate-800/85 backdrop-blur-sm p-4 rounded-xl border border-slate-700/60 shadow-md">
              <h3 class="text-sm font-semibold text-[#D4AF37] mb-2.5 flex items-center gap-1.5">
                <UIcon name="i-heroicons-sparkles" class="w-4 h-4" />
                নিজে চেষ্টা করে দেখুন (QR Standee Simulator)
              </h3>
              <div class="space-y-3">
                <div>
                  <label class="block text-xs text-slate-400 mb-1">আপনার দোকানের নাম লিখুন:</label>
                  <input
                    type="text"
                    v-model="merchantName"
                    maxLength="32"
                    class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="যেমন: ভাই ভাই স্টোর"
                  />
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div>
                    <label class="block text-xs text-slate-400 mb-1">টেস্ট পেমেন্ট অ্যামাউন্ট:</label>
                    <select
                      v-model="amount"
                      class="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="১০০">১০০ টাকা</option>
                      <option value="৫০০">৫০০ টাকা</option>
                      <option value="১,০০০">১,০০০ টাকা</option>
                      <option value="৫,০০০">৫,০০০ টাকা</option>
                    </select>
                  </div>
                  <div class="flex items-end">
                    <button
                      @click="triggerPaymentTest"
                      :disabled="isTestPaying || paySuccess"
                      class="w-full bg-[#0A5C36] hover:bg-[#0D7343] text-white font-bold text-xs py-2 px-3 rounded-lg border border-[#D4AF37]/30 disabled:opacity-50 transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span v-if="isTestPaying">পেমেন্ট হচ্ছে...</span>
                      <span v-else>পেমেন্ট টেস্ট করুন</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Standee Frame Container -->
            <div class="relative w-full max-w-[320px] bg-white text-slate-900 rounded-3xl p-5 shadow-2xl border-4 border-slate-100 flex flex-col items-center">
              
              <!-- Hanging loop -->
              <div class="absolute -top-3 w-16 h-3 bg-slate-200 rounded-t-full" />

              <!-- Pubali Bank Header inside Standee -->
              <div class="w-full flex items-center justify-between border-b pb-3 mb-4">
                <div class="flex items-center space-x-1.5">
                  <div class="w-7 h-7 bg-[#0A5C36] rounded-md flex items-center justify-center">
                    <span class="text-[#D4AF37] text-sm font-bold">পূ</span>
                  </div>
                  <div class="text-left">
                    <h4 class="text-[10px] font-bold text-[#0A5C36] leading-none">পূবালী ব্যাংক পিএলসি</h4>
                    <p class="text-[6px] text-slate-500 font-mono tracking-wide leading-none">PUBALI BANK PLC</p>
                  </div>
                </div>
                <div class="text-right">
                  <span class="text-[7px] font-bold text-slate-400 uppercase tracking-wider">Merchant Pay</span>
                </div>
              </div>

              <!-- Bangladesh Bank Approved tag -->
              <div class="w-full bg-slate-100 py-1.5 px-3 rounded-lg flex items-center justify-between mb-4 border border-slate-200">
                <div class="flex items-center space-x-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-ping" />
                  <span class="text-[9px] font-bold text-slate-700">বাংলাদেশ ব্যাংক অনুমোদিত</span>
                </div>
                <div class="flex items-center space-x-0.5">
                  <span class="text-[9px] font-extrabold text-orange-600 bg-orange-100 px-1 rounded">বাংলা</span>
                  <span class="text-[9px] font-extrabold text-emerald-600 bg-emerald-100 px-1 rounded">QR</span>
                </div>
              </div>

              <!-- Business Name -->
              <div class="w-full bg-[#0A5C36]/5 border border-[#0A5C36]/20 py-2.5 px-3 rounded-xl text-center mb-4">
                <p class="text-[10px] text-slate-500 font-medium">মার্চেন্ট হিসাবের নাম:</p>
                <p class="text-sm font-bold text-[#0A5C36] truncate">
                  {{ merchantName || 'আপনার দোকানের নাম' }}
                </p>
              </div>

              <!-- QR Graphic Frame -->
              <div class="relative w-48 h-48 bg-slate-50 rounded-2xl border-2 border-dashed border-[#0A5C36]/30 flex items-center justify-center p-3 overflow-hidden">
                <div class="absolute inset-x-0 top-0 h-0.5 bg-emerald-500 shadow-[0_0_10px_#10b981] animate-bounce" style="animation-duration: 3s;" />

                <svg class="w-full h-full text-slate-800" viewBox="0 0 100 100" fill="currentColor">
                  <!-- Corners -->
                  <rect x="5" y="5" width="22" height="22" fill="none" stroke="currentColor" stroke-width="6" />
                  <rect x="11" y="11" width="10" height="10" />
                  
                  <rect x="73" y="5" width="22" height="22" fill="none" stroke="currentColor" stroke-width="6" />
                  <rect x="79" y="11" width="10" height="10" />

                  <rect x="5" y="73" width="22" height="22" fill="none" stroke="currentColor" stroke-width="6" />
                  <rect x="11" y="79" width="10" height="10" />

                  <rect x="79" y="79" width="10" height="10" />
                  
                  <rect x="75" y="50" width="8" height="8" fill="none" stroke="currentColor" stroke-width="2" />
                  <rect x="78" y="53" width="2" height="2" />

                  <rect x="32" y="6" width="6" height="6" />
                  <rect x="42" y="12" width="8" height="4" />
                  <rect x="55" y="8" width="4" height="8" />
                  <rect x="63" y="15" width="6" height="4" />

                  <rect x="6" y="32" width="8" height="6" />
                  <rect x="18" y="42" width="6" height="8" />
                  <rect x="10" y="55" width="4" height="6" />

                  <rect x="32" y="32" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" />
                  <rect x="36" y="36" width="4" height="4" />

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

                <div class="absolute w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border border-slate-100">
                  <div class="w-9 h-9 bg-[#0A5C36] rounded-lg flex items-center justify-center">
                    <span class="text-[#D4AF37] text-xs font-black">QR</span>
                  </div>
                </div>

                <!-- Simulation Scanning Overlay -->
                <div v-if="isTestPaying" class="absolute inset-0 bg-slate-900/80 flex flex-col items-center justify-center text-white">
                  <div class="w-12 h-12 rounded-full border-4 border-[#D4AF37] border-t-transparent animate-spin mb-2" />
                  <p class="text-xs font-semibold">পেমেন্ট স্ক্যান হচ্ছে...</p>
                </div>
              </div>

              <!-- Payment Logos inside Standee -->
              <div class="w-full mt-4 text-center">
                <p class="text-[8px] text-slate-400 font-bold tracking-wider mb-2">SCAN & PAY WITH ANY APP</p>
                <div class="grid grid-cols-4 gap-1 items-center justify-center">
                  <div class="bg-pink-50 border border-pink-100 rounded py-1 px-0.5">
                    <span class="text-[7px] font-bold text-pink-600 leading-none">bKash</span>
                  </div>
                  <div class="bg-orange-50 border border-orange-100 rounded py-1 px-0.5">
                    <span class="text-[7px] font-bold text-orange-600 leading-none">Nagad</span>
                  </div>
                  <div class="bg-purple-50 border border-purple-100 rounded py-1 px-0.5">
                    <span class="text-[7px] font-bold text-purple-700 leading-none">Rocket</span>
                  </div>
                  <div class="bg-emerald-50 border border-emerald-100 rounded py-1 px-0.5">
                    <span class="text-[7px] font-bold text-emerald-800 leading-none">PI App</span>
                  </div>
                </div>
                <p class="text-[8px] text-slate-500 mt-2 font-medium">
                  বিকাশ, নগদ, রকেট, উপায় ও যেকোনো ব্যাংক অ্যাপ
                </p>
              </div>

            </div>

            <!-- Success Overlay inside simulator area -->
            <div v-if="paySuccess" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
              <div class="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl border border-slate-100">
                <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UIcon name="i-heroicons-check" class="w-10 h-10" />
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-1">লেনদেন সম্পূর্ণ সফল!</h3>
                <p class="text-xs text-emerald-600 font-semibold bg-emerald-50 py-1 px-2.5 rounded-full inline-block mb-4">
                  ০% মার্চেন্ট চার্জ প্রযোজ্য হয়েছে
                </p>

                <div class="bg-slate-50 rounded-xl p-4 text-left space-y-2.5 border border-slate-100 mb-5">
                  <div class="flex justify-between text-xs text-slate-500">
                    <span>দোকানের নাম:</span>
                    <span class="font-bold text-slate-800">{{ merchantName }}</span>
                  </div>
                  <div class="flex justify-between text-xs text-slate-500">
                    <span>পেমেন্ট মাধ্যম:</span>
                    <span class="font-semibold text-slate-800">বিকাশ / এমএফএস (MFS)</span>
                  </div>
                  <div class="flex justify-between text-xs text-slate-500 border-t pt-2.5 border-slate-200">
                    <span class="font-semibold text-slate-800">প্রাপ্ত অর্থ:</span>
                    <span class="font-bold text-[#0A5C36] text-sm">{{ amount }} টাকা</span>
                  </div>
                  <div class="flex justify-between text-[10px] text-slate-400">
                    <span>মার্চেন্ট ফি (MDR):</span>
                    <span class="text-emerald-600 font-bold">০.০০ টাকা (সম্পূর্ণ ফ্রি)</span>
                  </div>
                </div>

                <p class="text-xs text-slate-500 mb-6 leading-relaxed">
                  এইভাবেই গ্রাহক স্ক্যান করার সাথে সাথে কোনো চার্জ ছাড়াই টাকা সরাসরি আপনার পূবালী ব্যাংক অ্যাকাউন্টে জমা হয়ে যাবে।
                </p>

                <button
                  @click="closeSuccess"
                  class="w-full bg-[#0A5C36] hover:bg-[#0D7343] text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  বুঝেছি, ধন্যবাদ!
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </header>

    <!-- 2. Key Benefits 8-Card Grid -->
    <section id="benefits-section" class="py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 class="text-sm font-bold text-[#0D7343] uppercase tracking-widest">
            কেন পূবালী ব্যাংক বাংলা কিউআর বেছে নেবেন?
          </h2>
          <p class="text-3xl font-extrabold text-slate-950 tracking-tight sm:text-4xl">
            ডিজিটাল পেমেন্টের সেরা ৮টি আধুনিক সুবিধা
          </p>
          <div class="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p class="text-slate-600 text-base">
            বাংলাদেশ ব্যাংক-এর নির্দেশনা অনুযায়ী তৈরি দেশের একমাত্র সমন্বিত কিউআর পেমেন্ট সমাধান, যা আপনার ব্যবসার প্রবৃদ্ধি দ্রুত করতে সাহায্য করবে।
          </p>
        </div>

        <!-- 8 benefits grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="benefit in benefits"
            :key="benefit.id"
            class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-[#0A5C36]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between mb-5">
                <div :class="`w-12 h-12 rounded-xl flex items-center justify-center border ${benefit.colorClass}`">
                  <UIcon :name="benefit.icon" class="w-6 h-6" />
                </div>
                <span v-if="benefit.badge" class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#0A5C36]/10 text-[#0A5C36]">
                  {{ benefit.badge }}
                </span>
              </div>

              <h3 class="text-base font-bold text-slate-900 mb-2.5 leading-snug">
                {{ benefit.title }}
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                {{ benefit.description }}
              </p>
            </div>

            <div class="mt-5 pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span>পূবালী ব্যাংক পিএলসি</span>
              <span class="text-[#D4AF37]">★</span>
            </div>
          </div>
        </div>

        <!-- Callout Banner -->
        <div class="mt-12 bg-gradient-to-r from-[#0A5C36] to-[#074026] text-white rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/20 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-2 text-center md:text-left">
            <span class="bg-[#D4AF37] text-slate-950 text-xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
              ডিজিটাল মার্চেন্ট পোর্টাল
            </span>
            <h3 class="text-xl sm:text-2xl font-bold">সারাদিনের বেচাকেনার হিসাব চোখের সামনে!</h3>
            <p class="text-slate-300 text-sm max-w-2xl">
              ডেস্কটপ বা মোবাইল যেকোনো ডিভাইস থেকে সহজেই <a href="https://bqr.pubalibankbd.com" target="_blank" rel="noopener noreferrer" class="text-[#D4AF37] underline hover:text-white font-mono transition-colors">bqr.pubalibankbd.com</a> ড্যাশবোর্ডে লগইন করে আপনার দৈনিক সকল বেচাকেনা ও পেমেন্টের হিসাব পর্যবেক্ষণ করতে পারবেন।
            </p>
          </div>
          <a
            href="https://bqr.pubalibankbd.com"
            target="_blank"
            rel="noopener noreferrer"
            class="shrink-0 bg-white hover:bg-slate-100 text-slate-950 font-bold px-6 py-3 rounded-xl border border-slate-200 text-sm transition-all flex items-center gap-2 shadow-sm"
          >
            <span>ড্যাশবোর্ড ভিজিট করুন</span>
            <UIcon name="i-heroicons-computer-desktop" class="w-4 h-4 text-[#0A5C36]" />
          </a>
        </div>

      </div>
    </section>

    <!-- 3. Savings Calculator -->
    <section class="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(10,92,54,0.12),transparent_40%)]" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A5C36]/30 border border-[#0A5C36] text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <UIcon name="i-heroicons-calculator" class="w-4 h-4" /> সাশ্রয় ও লাভ হিসাব করুন
          </span>
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            বাংলা কিউআর ব্যবহারে আপনার দোকানে কত লাভ?
          </h2>
          <p class="text-slate-300 text-base max-w-2xl mx-auto">
            অন্যান্য মোবাইল ব্যাংকিং বা ক্রেডিট কার্ড পেমেন্ট গেটওয়েতে গড়ে ১.৫% থেকে ২.০% চার্জ কাটা হয়। কিন্তু পূবালী ব্যাংক কিউআর সম্পূর্ণ চার্জ-ফ্রি! নিচে হিসাব করে দেখুন কত টাকা সাশ্রয় হচ্ছে।
          </p>
        </div>

        <div class="max-w-4xl mx-auto bg-slate-800/60 border border-slate-700/60 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            <div class="space-y-6">
              <h3 class="text-lg font-bold text-[#D4AF37] border-b border-slate-700 pb-3 flex items-center gap-2">
                <UIcon name="i-heroicons-arrow-trending-up" class="w-5 h-5 text-emerald-500" /> আপনার দোকানের হিসাব দিন
              </h3>
              
              <div class="space-y-3">
                <div class="flex justify-between items-center text-sm">
                  <label class="text-slate-300 font-medium">মাসিক আনুমানিক ডিজিটাল বেচাকেনা:</label>
                  <span class="text-[#D4AF37] font-bold text-lg">
                    ৳ {{ convertToBengaliNumber(salesVolume) }} টাকা
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  step="10000"
                  v-model.number="salesVolume"
                  class="w-full accent-[#0A5C36] cursor-pointer h-2 bg-slate-700 rounded-lg"
                />
                <div class="flex justify-between text-xs text-slate-500 font-mono">
                  <span>৳১০,০০০</span>
                  <span>৳৫,০০,০০০</span>
                  <span>৳১০,০০,০০০</span>
                </div>
              </div>

              <div class="space-y-3">
                <label class="block text-sm text-slate-300 font-medium">
                  অন্যান্য এমএফএস/কার্ড চার্জ রেট (%):
                </label>
                <div class="grid grid-cols-3 gap-2">
                  <button
                    @click="otherChargeRate = 1.50"
                    :class="`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      otherChargeRate === 1.50
                        ? 'bg-[#0A5C36] border-[#D4AF37] text-white shadow-md'
                        : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600'
                    }`"
                  >
                    ১.৫০%
                  </button>
                  <button
                    @click="otherChargeRate = 1.85"
                    :class="`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      otherChargeRate === 1.85
                        ? 'bg-[#0A5C36] border-[#D4AF37] text-white shadow-md'
                        : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600'
                    }`"
                  >
                    ১.৮৫% (বিকাশ)
                  </button>
                  <button
                    @click="otherChargeRate = 2.00"
                    :class="`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      otherChargeRate === 2.00
                        ? 'bg-[#0A5C36] border-[#D4AF37] text-white shadow-md'
                        : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600'
                    }`"
                  >
                    ২.০০% (কার্ড)
                  </button>
                </div>
              </div>

              <div class="space-y-2">
                <span class="text-xs text-slate-400 block">ব্যবসার আকার অনুযায়ী সরাসরি নির্বাচন করুন:</span>
                <div class="flex flex-wrap gap-2">
                  <button 
                    @click="salesVolume = 50000"
                    class="text-xs bg-slate-900 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer"
                  >
                    ছোট মুদি দোকান (৳৫০,০০০)
                  </button>
                  <button 
                    @click="salesVolume = 200000"
                    class="text-xs bg-slate-900 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer"
                  >
                    ফার্মেসী/খুচরা বিক্রেতা (৳২,০০,০০০)
                  </button>
                  <button 
                    @click="salesVolume = 500000"
                    class="text-xs bg-slate-900 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-lg px-2.5 py-1.5 transition-colors cursor-pointer"
                  >
                    পাইকারি আড়ৎ (৳৫,০০,০০০)
                  </button>
                </div>
              </div>
            </div>

            <!-- Calculation Output Column -->
            <div class="bg-slate-900/80 border border-slate-700/60 p-6 sm:p-8 rounded-2xl space-y-6 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl" />
              
              <div class="text-center md:text-left">
                <span class="text-xs text-slate-400 font-semibold tracking-wider block mb-1">পূবালী ব্যাংক বাংলা কিউআর চার্জ:</span>
                <span class="text-3xl sm:text-4xl font-extrabold text-emerald-500 block sm:inline-block">৳ ০.০০ টাকা</span>
                <span class="sm:ml-2.5 inline-block text-[11px] font-extrabold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 py-0.5 px-2 rounded-md uppercase">
                  শতভাগ ফ্রি
                </span>
              </div>

              <div class="space-y-4 pt-4 border-t border-slate-800">
                <div class="flex justify-between items-center">
                  <span class="text-sm text-slate-400">প্রতি মাসে নিট সাশ্রয়:</span>
                  <span class="text-xl font-bold text-[#D4AF37]">৳ {{ convertToBengaliNumber(monthlySavings) }} টাকা</span>
                </div>
                
                <div class="flex justify-between items-center bg-[#0A5C36]/10 border border-[#0D7343]/20 p-3.5 rounded-xl">
                  <div class="flex items-center space-x-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    <span class="text-sm font-bold text-white">প্রতি বছরে মোট সাশ্রয়:</span>
                  </div>
                  <span class="text-2xl font-black text-emerald-400">৳ {{ convertToBengaliNumber(annualSavings) }} টাকা</span>
                </div>
              </div>

              <div class="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/50 flex items-start gap-2.5">
                <UIcon name="i-heroicons-sparkles" class="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <p class="text-xs text-slate-300 leading-relaxed">
                  বছরে <strong class="text-white">৳{{ convertToBengaliNumber(annualSavings) }} টাকা</strong> সম্পূর্ণ বাঁচিয়ে আপনি নিজের ব্যবসাকে আরও বড় করতে পারবেন অথবা নতুন মালামাল ক্রয় করতে পারবেন। এই বিশাল লাভ হাতছাড়া করবেন না!
                </p>
              </div>

              <div class="flex items-center gap-2 text-slate-400 text-xs">
                <UIcon name="i-heroicons-shield-check" class="w-4 h-4 text-emerald-500 shrink-0" />
                <span>কোনো বাৎসরিক বা বাৎসরিক চার্জ নেই। এটি বাংলাদেশ ব্যাংকের নির্দেশিত জাতীয় কিউআর স্ট্যান্ডআউট।</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- 4. Onboarding steps (Step-by-Step Guide) -->
    <section class="py-20 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 class="text-sm font-bold text-[#0D7343] uppercase tracking-widest">
            সহজ ৩টি ধাপ
          </h2>
          <p class="text-3xl font-extrabold text-slate-950 tracking-tight sm:text-4xl">
            কীভাবে আপনার বাংলা কিউআর চালু করবেন?
          </p>
          <div class="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p class="text-slate-600 text-base">
            কোনো দীর্ঘ অপেক্ষা বা জটিল কাগজপত্র ছাড়াই অত্যন্ত দ্রুত ও সহজ প্রক্রিয়ায় আপনি আপনার ক্যাশলেস কিউআর যাত্রা শুরু করতে পারবেন।
          </p>
        </div>

        <div class="relative">
          <div class="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-slate-100 -translate-y-1/2 z-0" />

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
            <div
              v-for="(step, index) in steps"
              :key="step.number"
              class="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md hover:border-[#0A5C36]/10 transition-all duration-300 flex flex-col items-center text-center relative group"
            >
              <div :class="`absolute -top-5 left-8 w-10 h-10 rounded-full ${step.color} font-bold flex items-center justify-center shadow-md text-sm border-2 border-white`">
                {{ step.number }}
              </div>

              <div class="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:border-[#0A5C36]/20 transition-transform duration-300 mb-6 mt-2">
                <UIcon :name="step.icon" class="w-8 h-8 text-[#0A5C36]" />
              </div>

              <h3 class="text-lg font-bold text-slate-900 mb-3">
                {{ step.title }}
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed max-w-sm">
                {{ step.description }}
              </p>

              <!-- Connector Indicators -->
              <div v-if="index < 2" class="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-slate-100 items-center justify-center shadow-sm z-20 group-hover:translate-x-1 transition-transform">
                <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 text-[#0A5C36]" />
              </div>
              <div v-if="index < 2" class="lg:hidden flex items-center justify-center mt-6 text-[#0A5C36]/40">
                <UIcon name="i-heroicons-arrow-down" class="w-6 h-6 animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 bg-emerald-50/50 border border-emerald-100/60 rounded-2xl p-6 text-center max-w-3xl mx-auto">
          <p class="text-sm text-slate-700 leading-relaxed">
            💡 <strong>আমাদের বিশেষ সুবিধা:</strong> আপনার যদি ব্যবসার ব্যাংক অ্যাকাউন্ট না-ও থাকে, কোনো সমস্যা নেই। আমাদের কর্মকর্তারা বাংলা কিউআর রেজিস্ট্রেশনের সময়েই আপনার জন্য একটি <strong>e-KYC ব্যাংক হিসাব</strong> খুলে দেবেন।
          </p>
        </div>

      </div>
    </section>

    <!-- 5. Branch Contacts and Call Details -->
    <section id="contacts-section" class="py-20 bg-slate-50 relative">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(10,92,54,0.04),transparent_40%)]" />

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 class="text-sm font-bold text-[#0D7343] uppercase tracking-widest">
            আমাদের সাথে যোগাযোগ করুন
          </h2>
          <p class="text-3xl font-extrabold text-slate-950 tracking-tight sm:text-4xl">
            নিকটস্থ শাখা ও উপশাখার যোগাযোগের ঠিকানা
          </p>
          <div class="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p class="text-slate-600 text-base">
            আপনার নিকটস্থ পূবালী ব্যাংক শাখায় সরাসরি চলে আসুন অথবা ফোন করে আমাদের মার্চেন্ট প্রতিনিধিদের সাথে যোগাযোগ করুন।
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div
            v-for="branch in branches"
            :key="branch.id"
            class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#0A5C36]/15 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
          >
            <!-- Badge type -->
            <div class="absolute top-0 right-0">
              <span :class="`inline-block text-xs font-bold px-4 py-1.5 rounded-bl-2xl ${
                branch.id === 1 
                  ? 'bg-[#0A5C36] text-white' 
                  : 'bg-[#D4AF37] text-slate-950'
              }`">
                {{ branch.type }}
              </span>
            </div>

            <div>
              <div class="flex items-center space-x-3.5 mb-6">
                <div class="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0A5C36] group-hover:scale-105 transition-transform">
                  <UIcon name="i-heroicons-building-library" class="w-6 h-6" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-900 group-hover:text-[#0A5C36] transition-colors leading-snug">
                    {{ branch.title }}
                  </h3>
                </div>
              </div>

              <div class="space-y-4 text-sm text-slate-600">
                
                <div class="flex items-start space-x-3">
                  <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <p class="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-0.5">ঠিকানা:</p>
                    <p class="leading-relaxed">{{ branch.address }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-3 border-t border-slate-100 pt-3.5">
                  <UIcon name="i-heroicons-clock" class="w-5 h-5 text-[#0A5C36]/70 shrink-0 mt-0.5" />
                  <div>
                    <p class="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-0.5">অফিস সময়সূচী:</p>
                    <p class="leading-relaxed">{{ branch.hours }}</p>
                  </div>
                </div>

                <div class="border-t border-slate-100 pt-3.5 space-y-1.5">
                  <div v-for="(feat, fIdx) in branch.features" :key="fIdx" class="flex items-center space-x-2 text-xs text-slate-500">
                    <UIcon name="i-heroicons-check" class="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{{ feat }}</span>
                  </div>
                </div>

              </div>
            </div>

            <!-- Call lists -->
            <div class="mt-8 pt-6 border-t border-slate-100">
              <p class="text-xs font-bold text-slate-600 uppercase tracking-widest mb-3">
                কল করতে নম্বরে ক্লিক করুন
              </p>
              <div class="grid grid-cols-1 gap-2.5">
                <a
                  v-for="(phone, pIdx) in branch.phones"
                  :key="pIdx"
                  :href="`tel:${phone}`"
                  class="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-[#0A5C36] hover:text-white border border-slate-100 hover:border-[#0A5C36] hover:shadow-md transition-all group/phone text-slate-800"
                >
                  <span class="font-mono text-sm sm:text-base font-bold tracking-wider text-slate-800 group-hover/phone:text-white transition-colors">{{ phone }}</span>
                  <div class="w-8 h-8 rounded-full bg-[#0A5C36]/10 group-hover/phone:bg-white/25 flex items-center justify-center text-[#0A5C36] group-hover/phone:text-white transition-colors">
                    <UIcon name="i-heroicons-phone" class="w-4 h-4" />
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>

        <div class="mt-12 text-center text-xs text-slate-400">
          📍 পূবালী ব্যাংক পিএলসি বাংলাদেশ ব্যাংকের ক্যাশলেস ক্যাম্পেইনের অংশ হিসেবে সিরাজগঞ্জ অঞ্চলের সকল ক্ষুদ্র ও মাঝারি ব্যবসায়ীদের কিউআর কোড প্রদানের জন্য সদা প্রস্তুত।
        </div>

      </div>
    </section>

    <!-- 6. Expandable Accordion FAQs -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-sm font-bold text-[#0D7343] uppercase tracking-widest">
            সাধারণ জিজ্ঞাসা
          </h2>
          <p class="text-3xl font-extrabold text-slate-950 tracking-tight sm:text-4xl">
            বাংলা কিউআর নিয়ে সাধারণ কিছু প্রশ্ন ও উত্তর
          </p>
          <div class="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        <!-- Faqs Accordion List -->
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="border border-slate-100 rounded-2xl bg-slate-50 overflow-hidden transition-all duration-200"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full text-left py-5 px-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:bg-slate-100/50 transition-colors cursor-pointer"
            >
              <span class="flex items-start gap-3 text-sm sm:text-base">
                <UIcon name="i-heroicons-question-mark-circle" class="w-5 h-5 text-[#0A5C36] shrink-0 mt-0.5" />
                <span>{{ faq.question }}</span>
              </span>
              <UIcon
                name="i-heroicons-chevron-down"
                :class="`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-250 ${
                  openFaqIndex === index ? 'rotate-180' : ''
                }`"
              />
            </button>

            <div
              v-show="openFaqIndex === index"
              class="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-white"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 7. Footer Section -->
    <footer class="bg-slate-900 text-slate-400 border-t border-slate-800 mt-auto">
      
      <!-- Slogan strip -->
      <div class="bg-gradient-to-r from-[#074026] via-[#0A5C36] to-[#074026] py-6 text-center text-white border-b border-[#D4AF37]/10">
        <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <UIcon name="i-heroicons-sparkles" class="w-5 h-5 text-[#D4AF37] animate-pulse" />
          <p class="text-base sm:text-lg font-bold tracking-wide">
            &ldquo;লেনদেন হচ্ছে ক্যাশলেস, বদলে যাচ্ছে বাংলাদেশ&rdquo;
          </p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-slate-800 pb-8">
          
          <div class="flex items-center space-x-3 justify-center md:justify-start">
            <div class="w-10 h-10 rounded-lg bg-[#0A5C36] flex items-center justify-center border border-[#D4AF37]/20">
              <span class="text-[#D4AF37] text-xl font-bold">পূ</span>
            </div>
            <div class="text-left">
              <p class="text-white font-bold leading-none">পূবালী ব্যাংক পিএলসি</p>
              <p class="text-[9px] text-slate-500 uppercase tracking-widest leading-none mt-1">Pubali Bank PLC</p>
            </div>
          </div>

          <div class="text-center text-xs space-y-1">
            <p class="font-semibold text-slate-300">ডিজিটাল বাংলাদেশ গড়তে পূবালী ব্যাংকের প্রয়াস</p>
            <p class="text-slate-500">খামারগ্রাম শাখা ও বেলকুচি উপশাখা, সিরাজগঞ্জ অঞ্চল।</p>
          </div>

          <div class="flex items-center justify-center md:justify-end space-x-4">
            <div class="flex items-center space-x-1.5 text-xs text-emerald-500 bg-emerald-500/5 px-2.5 py-1 rounded-full border border-emerald-500/10">
              <UIcon name="i-heroicons-shield-check" class="w-3.5 h-3.5" />
              <span>বাংলাদেশ ব্যাংক অনুমোদিত</span>
            </div>
            <button
              @click="scrollToTop"
              class="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
              title="উপরে যান"
            >
              <UIcon name="i-heroicons-arrow-up" class="w-4 h-4" />
            </button>
          </div>

        </div>

        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p class="text-center sm:text-left">
            © {{ new Date().getFullYear() }} পূবালী ব্যাংক পিএলসি। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div class="flex space-x-6">
            <a href="https://bqr.pubalibankbd.com" target="_blank" rel="noopener noreferrer" class="hover:text-[#D4AF37] transition-colors">
              মার্চেন্ট ড্যাশবোর্ড
            </a>
            <a href="https://www.pubalibangla.com" target="_blank" rel="noopener noreferrer" class="hover:text-[#D4AF37] transition-colors">
              অফিসিয়াল ওয়েবসাইট
            </a>
          </div>
        </div>

      </div>
    </footer>

    <!-- Floating mobile bar (Visible only on mobile) -->
    <div class="md:hidden fixed bottom-4 inset-x-4 z-40 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 p-3 rounded-2xl shadow-2xl flex items-center justify-between gap-3">
      <div class="flex-1 flex flex-col text-left">
        <span class="text-[10px] text-[#D4AF37] font-extrabold tracking-wider uppercase">জরুরী মার্চেন্ট সাপোর্ট:</span>
        <span class="text-xs text-white font-bold truncate">পূবালী ব্যাংক বাংলা কিউআর</span>
      </div>
      
      <div class="flex gap-2 shrink-0">
        <a
          href="tel:01714091043"
          class="px-3 py-2 bg-[#0A5C36] text-white text-xs font-bold rounded-xl border border-[#D4AF37]/10 flex items-center gap-1 hover:bg-[#0D7343] transition-all"
        >
          <UIcon name="i-heroicons-phone" class="w-3.5 h-3.5" />
          <span>খামারগ্রাম</span>
        </a>
        <a
          href="tel:01335065865"
          class="px-3 py-2 bg-[#D4AF37] text-slate-950 text-xs font-bold rounded-xl flex items-center gap-1 hover:bg-[#F3CD4E] transition-all"
        >
          <UIcon name="i-heroicons-phone" class="w-3.5 h-3.5" />
          <span>বেলকুচি</span>
        </a>
      </div>
    </div>

  </div>
</template>

<style>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>
