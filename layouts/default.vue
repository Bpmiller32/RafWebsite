<script setup lang="ts">
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import RafLogo from "~/assets/RafLogo.json";
import { useMotion } from "@vueuse/motion";

const year = new Date().getFullYear();

const matwLink = ref();

const navigation = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "Partners", href: "/partners" },
  { name: "Whitepapers", href: "/whitepapers" },
  { name: "About RAF", href: "/about" },
];

const mobileMenuOpen = ref(false);

const motionInstance = useMotion(matwLink, {
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: {
    opacity: 1,
    y: 0,
  },
});
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-40 shadow-sm">
    <!-- Nav background slant -->
    <div
      class="-z-20 h-40 absolute overflow-hidden bg-green-200/20 inset-x-0 top-0 opacity-0"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 1200 } }"
      :delay="0"
    ></div>
    <div
      class="bg-white max-h-40 absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] sm:-mr-80 lg:-mr-96"
    ></div>

    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <NuxtLink class="flex" to="/">
            <div class="h-28 w-1"></div>
            <!-- <img class="h-28 w-auto" src="~/assets/RafLogo.png" alt="" /> -->
            <ClientOnly>
              <Vue3Lottie
                :animationData="RafLogo"
                class="h-28 w-28"
                :loop="0"
              />
            </ClientOnly>
          </NuxtLink>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <!-- <TransitionGroup :css="false" @enter="onEnter">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            :to="item.href"
          >
            {{ item.name }}
          </NuxtLink>
        </TransitionGroup> -->

        <NuxtLink
          v-motion
          :initial="{ y: 10, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 200 } }"
          :delay="0"
          class="opacity-0 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hoverFill"
          to="/"
        >
          Home
        </NuxtLink>

        <NuxtLink
          v-motion
          :initial="{ y: 10, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 200 } }"
          :delay="100"
          class="opacity-0 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hoverFill"
          to="/solutions"
        >
          Solutions
        </NuxtLink>

        <NuxtLink
          v-motion
          :initial="{ y: 10, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 200 } }"
          :delay="300"
          class="opacity-0 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hoverFill"
          to="/partners"
        >
          Partners
        </NuxtLink>

        <NuxtLink
          v-motion
          :initial="{ y: 10, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 200 } }"
          :delay="500"
          class="opacity-0 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hoverFill"
          to="/whitepapers"
        >
          Whitepapers
        </NuxtLink>

        <NuxtLink
          v-motion
          :initial="{ y: 10, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 200 } }"
          :delay="700"
          class="opacity-0 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hoverFill"
          to="/about"
        >
          About RAF
        </NuxtLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          v-motion
          :initial="{ y: 10, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 200 } }"
          :delay="900"
          href="http://matthewsautomation.com/"
          class="opacity-0 text-sm font-semibold leading-6 text-gray-900"
          >Matthews Automation <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-40" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="~/assets/RafMobileLogo.webp" alt="" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >{{ item.name }}</a
              >
            </div>
            <div class="py-6">
              <a
                href="http://matthewsautomation.com/"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Matthews Automation</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

  <!-- Page content -->
  <slot></slot>

  <footer>
    <div
      class="mt-16 border-t border-gray-900/10 p-8 md:flex md:items-center md:justify-between"
    >
      <p class="text-xs leading-5 text-gray-500 md:order-1">
        &copy; {{ year }} RAF Technology, Inc. A Matthews International Comapny.
        All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style>
.hoverFill {
  transition: all 0.5s ease;
}
.hoverFill:hover {
  box-shadow: inset 0 0 0 50px #f3f4f6;
}
</style>
