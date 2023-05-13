import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'

export default defineNuxtPlugin(() => {
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyBR06Nu6zbyU6faKzPuWHmLD0t4xn3PvRc",
    authDomain: "raftechnologywebsite.firebaseapp.com",
    projectId: "raftechnologywebsite",
    storageBucket: "raftechnologywebsite.appspot.com",
    messagingSenderId: "55276429092",
    appId: "1:55276429092:web:bffa91f196e2a1b5e6ddb1",
    measurementId: "G-3P4E2CR4ZE"
  })

  return {
    provide: {
      firebaseApp,
    },
  }
})