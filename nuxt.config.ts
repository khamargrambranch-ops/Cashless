// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui'
  ],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2026-07-09',
  devtools: { enabled: false },
  // Disable server-side rendering for a pure SPA or client-side hydration compatibility in the container if needed,
  // but let's keep it enabled/disabled depending on default. Let's make it SPA (ssr: false) for simplicity and robust static delivery.
  ssr: false,
  app: {
    head: {
      script: [
        {
          // এখানে 'children' এর বদলে 'innerHTML' ব্যবহার করা হয়েছে
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','	GTM-55ZSWSQF');`,
          type: "text/javascript",
        },
      ],
      noscript: [
        {
          // noscript এর ক্ষেত্রেও innerHTML ব্যবহার করা ভালো
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=	GTM-55ZSWSQF"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          tagPosition: "bodyOpen",
        },
      ],
    },
  },
})
