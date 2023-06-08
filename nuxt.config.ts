// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-swiper',
        '@nuxt/image-edge',
        'nuxt-icon',
    ],
    swiper: {

    },
    image: {
        provider: "storyblok",
        storyblok: {
          baseURL: 'https://a.storyblok.com'
        }
    },
    ssr: false,
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
