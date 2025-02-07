<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import type { PropType } from "vue";
import { LottiePlayer } from "@lottiefiles/lottie-player";

const props = defineProps({
  animationData: {
    type: Object as PropType<any>,
    required: true,
  },
  width: {
    type: Number,
    default: 100,
  },
  height: {
    type: Number,
    default: 100,
  },
  loop: {
    type: Boolean,
    default: false,
  },
});

const playerRef = ref<HTMLElement | null>(null);
const isLoaded = ref(false);
const hasError = ref(false);

onMounted(async () => {
  try {
    if (!customElements.get("lottie-player")) {
      await customElements.define("lottie-player", LottiePlayer);
    }

    if (playerRef.value) {
      const player = playerRef.value as any;

      // Add event listeners
      player.addEventListener("rendered", () => {
        console.log("Lottie animation loaded");
        isLoaded.value = true;
      });

      player.addEventListener("complete", () => {
        console.log("Lottie animation completed");
        if (!props.loop) {
          player.seek("100%");
        }
      });

      player.addEventListener("error", (error: any) => {
        console.error("Lottie animation error:", error);
        hasError.value = true;
      });
    }
  } catch (error) {
    console.error("Error initializing Lottie:", error);
    hasError.value = true;
  }
});
</script>

<template>
  <div class="relative" :style="{ width: `${width}px`, height: `${height}px` }">
    <lottie-player
      ref="playerRef"
      :style="{ width: `${width}px`, height: `${height}px` }"
      :src="animationData"
      :loop="loop"
      autoplay
      mode="normal"
    />

    <!-- Loading state -->
    <div
      v-if="!isLoaded && !hasError"
      class="absolute inset-0 flex items-center justify-center"
    ></div>

    <!-- Error state -->
    <div
      v-if="hasError"
      class="absolute inset-0 flex items-center justify-center text-red-500"
    >
      Error loading animation
    </div>
  </div>
</template>
