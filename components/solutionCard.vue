<script setup lang="ts">
const props = defineProps(["image", "title", "description"]);
</script>

<template>
  <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
    <div class="flex-shrink-0">
      <img class="h-48 w-full object-cover" :src="props.image" alt="" />
    </div>
    <div class="flex flex-1 flex-col justify-between bg-white p-6">
      <div class="flex-1">
        <a href="" class="mt-2 block">
          <p class="text-xl font-semibold text-gray-900">{{ props.title }}</p>
          <p class="mt-3 text-base text-gray-500">{{ props.description }}</p>
        </a>
      </div>
    </div>
  </div>
</template>
