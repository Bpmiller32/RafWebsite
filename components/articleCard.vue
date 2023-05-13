<script setup lang="ts">
import { ref } from "vue";
import { Dialog, DialogPanel, TransitionRoot } from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps([
  "title",
  "date",
  "image",
  "author",
  "category",
  "description",
  "hover",
]);

const open = ref(false);
const imageRef = ref(null);

// Dialog control
function OpenDialog() {
  open.value = !open.value;
}

// Rotational effect
const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(imageRef);

const imageTransform = computed(() => {
  const maxRotation = 6;

  const rotateX = (
    maxRotation / 2 -
    (elementY.value / elementHeight.value) * maxRotation
  ).toFixed(2);

  const rotateY = (
    maxRotation / 2 -
    (elementX.value / elementWidth.value) * maxRotation
  ).toFixed(2);

  if (isOutside.value) {
    return "";
  } else {
    return `perspective(${elementWidth.value}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
});
</script>

<template>
  <!-- Dialog box -->
  <ClientOnly>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative" @close="open = false">
        <div
          class="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"
        />

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4"
          >
            <DialogPanel
              class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl"
            >
              <div
                class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
              >
                <button
                  type="button"
                  class="outline-none absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                  @click="open = false"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>

                <div
                  class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8"
                >
                  <div class="sm:col-span-4 lg:col-span-5">
                    <div
                      class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100"
                    >
                      <img
                        :src="useAsset(props.image)"
                        :alt="'Article image for ' + props.title"
                        class="object-cover object-center"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-8 lg:col-span-7">
                    <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">
                      {{ props.title }}
                    </h2>

                    <section class="" aria-labelledby="information-heading">
                      <h3 id="information-heading" class="sr-only">
                        Product information
                      </h3>

                      <div class="flex items-center">
                        <p class="text-lg text-gray-900 sm:text-xl">
                          {{ props.date }}
                        </p>

                        <p
                          class="relative max-w-fit rounded-full bg-gray-50 px-3 ml-5 my-1.5 py-1.5 font-medium text-gray-600"
                        >
                          {{ props.category }}
                        </p>
                      </div>

                      <div class="mt-6">
                        <h4 class="sr-only">Description</h4>

                        <p class="text-sm text-gray-700 whitespace-pre-wrap">
                          {{ props.description }}
                        </p>

                        <slot></slot>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </ClientOnly>

  <!-- Normal homepage preview -->
  <div class="flex flex-col items-start justify-between">
    <div @click="OpenDialog()" class="relative w-full cursor-pointer">
      <img
        ref="imageRef"
        :src="useAsset(props.image)"
        :alt="'Article image for ' + props.title"
        class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        :style="{
          transform: imageTransform,
          transition: 'transform 0.25s ease-out',
        }"
      />
      <div
        class="hoverGlow absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"
        :style="{
          transform: imageTransform,
          transition: 'transform 0.25s ease-out',
        }"
      />
    </div>
    <div class="max-w-xl">
      <div class="mt-8 flex items-center gap-x-4 text-xs">
        <time class="text-gray-500">{{ props.date }}</time>
        <p
          class="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
        >
          {{ props.category }}
        </p>
      </div>
      <div class="group relative cursor-pointer" @click="OpenDialog()">
        <h3
          class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 duration-500"
        >
          {{ props.title }}
        </h3>
        <p
          class="h-[68px] mt-5 line-clamp-3 text-sm leading-6 text-gray-600 group-hover:text-gray-500 duration-500"
        >
          {{ props.description }}
        </p>
      </div>

      <div class="relative mt-8 flex items-center gap-x-4">
        <img
          :src="useAsset(props.author.image)"
          :alt="'Article author picture for ' + props.author.name"
          class="h-10 w-10 rounded-full bg-gray-100"
        />
        <div class="text-sm leading-6">
          <div class="font-semibold text-gray-900">
            <div>
              <span class="absolute inset-0" />
              {{ props.author.name }}
            </div>
          </div>
          <p class="text-gray-600">{{ props.author.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hoverGlow:hover {
  box-shadow: 0 5px 15px v-bind(hover);
}
</style>
