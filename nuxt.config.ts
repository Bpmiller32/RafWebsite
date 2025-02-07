export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'RAF' }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    ['@vueuse/motion/nuxt', {
      directives: {
        'pop-bottom': {
          initial: {
            scale: 0,
            opacity: 0,
            y: 100,
          },
          visible: {
            scale: 1,
            opacity: 1,
            y: 0,
          }
        }
      }
    }],
    '@vueuse/nuxt'
  ],

  build: {
    transpile: ['@lottiefiles/lottie-player']
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['lottie-player'].includes(tag)
    }
  },

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  experimental: {
    payloadExtraction: false
  },

  ssr: true,

  compatibilityDate: '2025-02-06'
})
