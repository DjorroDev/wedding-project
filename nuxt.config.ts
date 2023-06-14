// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_FB_API_KEY,
      authDomain: process.env.NUXT_FB_AUTH_DOMAIN,
      projectId: process.env.NUXT_FB_PROJECT_ID,
      storageBucket: process.env.NUXT_FB_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_FB_MESSAGING_SENDER_ID,
      appId: process.env.NUXT_FB_APP_ID,
      measurementId: process.env.NUXT_FB_MEASUREMENT_ID,
    },
  },
  modules: ["nuxt-swiper", "@nuxt/image-edge", "nuxt-icon", "nuxt-headlessui"],
  // plugins: [
  //     'firestore'
  // ],
  swiper: {},
  image: {
    provider: "storyblok",
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
  },
  ssr: false,
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
