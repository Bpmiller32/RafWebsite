<script setup lang="ts">
const props = defineProps(["person"]);
</script>

<template>
  <div :key="props.person.name" class="flex flex-col gap-10 pt-12 sm:flex-row">
    <!-- Portrait -->
    <img
      class="aspect-[4/5] w-52 flex-none rounded-2xl max-h-52 object-cover"
      :src="useAsset(props.person.image)"
      :alt="'Portrait of ' + props.person.name"
    />

    <div class="max-w-xl flex-auto">
      <!-- Name and role -->
      <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">
        {{ props.person.name }}
      </h3>
      <p class="text-base leading-7 text-gray-600">{{ props.person.role }}</p>

      <!-- Description content -->
      <p class="mt-6 text-base leading-7 text-gray-600">
        <p class="mt-4">{{ props.person.description1 }}</p>
        <p class="mt-4">{{ props.person.description2 }}</p>
        <p class="mt-4">{{ props.person.description3 }}</p>
      </p>

      <!-- LinkedIn link -->
      <div v-if="props.person.linkedinUrl" class="mt-6">
        <a
          :href="props.person.linkedinUrl"
          class="text-gray-400 hover:text-gray-500 flex items-center"
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
