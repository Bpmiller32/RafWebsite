<script setup lang="ts">
const props = defineProps([
  "name",
  "imageUrl",
  "description",
  "websiteName",
  "websiteUrl",
  "linkedInUrl",
]);
</script>

<template>
  <div class="flex flex-col gap-6 xl:flex-row">
    <div class="flex justify-center xl:block">
      <img
        class="w-52 h-52 object-contain flex-none rounded-2xl border"
        :src="useAsset(props.imageUrl)"
        :alt="'Company logo for ' + props.name"
      />
    </div>
    <div class="max-w-sm">
      <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">
        {{ props.name }}
      </h3>

      <p class="mt-6 text-base leading-7 text-gray-600 whitespace-pre-wrap">
        {{ props.description }}
      </p>

      <p class="mt-6 text-base leading-7 text-gray-600">Learn more:</p>
      <div class="flex items-center">
        <a
          v-if="props.websiteUrl"
          :href="props.websiteUrl"
          class="flex items-center mr-4 text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ props.websiteName }}</span>

          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>

          <p class="text-gray-600">{{ props.websiteName }}</p>
        </a>

        <a
          v-if="props.linkedInUrl"
          :href="props.linkedInUrl"
          class="flex items-center mr-4 text-gray-400 hover:text-gray-500"
        >
          <svg
            class="h-5 w-5 mr-1"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
              clip-rule="evenodd"
            />
          </svg>

          <p class="text-gray-600">LinkedIn</p>
        </a>
      </div>
    </div>
  </div>
</template>
