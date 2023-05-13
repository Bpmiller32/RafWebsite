<script setup lang="ts">
import { ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";

const props = defineProps(["message"]);
</script>

<template>
  <div class="flex items-start">
    <ChevronDoubleRightIcon
      class="h-5 w-5 mr-1 mt-1 flex-none shrink-0"
    ></ChevronDoubleRightIcon>
    <p>{{ props.message }}</p>
  </div>
</template>
