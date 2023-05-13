<script setup lang="ts">
const props = defineProps(["title", "email", "phone"]);
</script>

<template>
  <div class="rounded-2xl bg-gray-50 p-10">
    <h3 class="text-base font-semibold leading-7 text-gray-900">
      Sales Information
    </h3>
    <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
      <div>
        <dt class="sr-only">Email</dt>
        <dd>
          <a
            class="font-semibold text-green-600"
            href="mailto:collaborate@example.com"
            >{{ props.email }}</a
          >
        </dd>
      </div>
      <div class="mt-1">
        <dt class="sr-only">Phone number</dt>
        <dd>{{ props.phone }}</dd>
      </div>
    </dl>
  </div>
</template>
