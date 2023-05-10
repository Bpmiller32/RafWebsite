// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-headlessui', '@vueuse/motion/nuxt', '@vueuse/nuxt'],
    nitro: {preset: "firebase"},
    
    // vue: {  
    //     compilerOptions: {
    //         isCustomElement: (tag) => ['Vue3Lottie'].includes(tag),
    //     },
    // }
})
