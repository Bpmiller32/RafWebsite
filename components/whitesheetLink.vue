<script setup lang="ts">
import { PaperClipIcon } from "@heroicons/vue/20/solid";

const props = defineProps(["title", "link"]);
</script>

<template>
  <div class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
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
        class="font-medium text-indigo-600 hover:text-indigo-500"
        >Download</a
      >
    </div>
  </div>
</template>
