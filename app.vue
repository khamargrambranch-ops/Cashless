<script setup lang="ts">

useHead({
  title: "Bangla QR",
  script: [
    {
      src: "https://salesmanbot.netlify.app/widget.js",
      async: true,
      "data-key": "sb_live_8d10bdf6c1fa96a5e3189e501df8b6a0"
    }
  ]
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

