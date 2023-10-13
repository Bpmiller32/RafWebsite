<script setup lang="ts">
import { PaperClipIcon } from "@heroicons/vue/20/solid";

const props = defineProps(["title", "link", "stripe"]);
</script>

<template>
  <div
    :class="{
      'flex items-center justify-between py-3 pl-3 pr-4 text-sm': true,
      'bg-gray-50': props.stripe,
    }"
  >
    <div class="flex w-0 flex-1 items-center">
      <PaperClipIcon
        class="h-5 w-5 flex-shrink-0 text-gray-400"
        aria-hidden="true"
      />
      <span class="ml-2 w-0 flex-1 truncate">{{ props.title }}</span>
    </div>
    <div class="ml-4 flex-shrink-0">
      <a
        :href="props.link"
        target="_blank"
        class="font-medium text-green-600 hover:text-green-500 duration-500"
        >Download</a
      >
    </div>
  </div>
</template>
