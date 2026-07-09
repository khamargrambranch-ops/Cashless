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
})
