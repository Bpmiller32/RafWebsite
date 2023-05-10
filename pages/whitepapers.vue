<script setup lang="ts">
import { PaperClipIcon } from "@heroicons/vue/20/solid";

function useAsset(path: string): string {
  const assets = import.meta.glob("~/assets/**/*", {
    eager: true,
    import: "default",
  });
  // @ts-expect-error: wrong type info
  return assets["/assets/" + path];
}
</script>

<template>
  <div class="pt-14">
    <div class="mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <div
        class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
      >
        <div
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 1200 } }"
          :delay="0"
          class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1"
        >
          <p class="text-lg leading-8 text-gray-600">
            Discover the wealth of knowledge in our product brochures and
            whitepapers, providing valuable insights into our offerings and
            their potential advantages for your business.
          </p>

          <ul
            v-motion
            :initial="{ y: 30, opacity: 0 }"
            :enter="{ y: 0, opacity: 1, transition: { duration: 1200 } }"
            :delay="250"
            role="list"
            class="mt-10 divide-y divide-gray-200 rounded-md border border-gray-200"
          >
            <li
              class="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
            >
              <div class="flex w-0 flex-1 items-center">
                <PaperClipIcon
                  class="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span class="ml-2 w-0 flex-1 truncate">ALS Cutsheet</span>
              </div>
              <div class="ml-4 flex-shrink-0">
                <a
                  href="https://ewr1.vultrobjects.com/raf-website/ALS%20Cutsheet%20Rev%202.0%20Final.pdf"
                  class="font-medium text-green-600 hover:text-green-500"
                  >Download</a
                >
              </div>
            </li>

            <li
              class="bg-gray-50 flex items-center justify-between py-3 pl-3 pr-4 text-sm"
            >
              <div class="flex w-0 flex-1 items-center">
                <PaperClipIcon
                  class="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span class="ml-2 w-0 flex-1 truncate"
                  >Argosy Intermodal Product Deck</span
                >
              </div>
              <div class="ml-4 flex-shrink-0">
                <a
                  href="https://ewr1.vultrobjects.com/raf-website/Argosy%20Intermodal%20Product%20Deck%20Rev%201.4.pptx"
                  class="font-medium text-green-600 hover:text-green-500"
                  >Download</a
                >
              </div>
            </li>

            <li
              class="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
            >
              <div class="flex w-0 flex-1 items-center">
                <PaperClipIcon
                  class="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span class="ml-2 w-0 flex-1 truncate"
                  >Argosy Intermodal Product Information</span
                >
              </div>
              <div class="ml-4 flex-shrink-0">
                <a
                  href="https://ewr1.vultrobjects.com/raf-website/Argosy%20Intermodal%20Product%20Information%20Sheet%20Rev%201%207.pdf"
                  class="font-medium text-green-600 hover:text-green-500"
                  >Download</a
                >
              </div>
            </li>

            <li
              class="bg-gray-50 flex items-center justify-between py-3 pl-3 pr-4 text-sm"
            >
              <div class="flex w-0 flex-1 items-center">
                <PaperClipIcon
                  class="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span class="ml-2 w-0 flex-1 truncate"
                  >Inbound ePacket Information</span
                >
              </div>
              <div class="ml-4 flex-shrink-0">
                <a
                  href="https://ewr1.vultrobjects.com/raf-website/Inbound%20ePacket%20Rev%202.0%20Final.pdf"
                  class="font-medium text-green-600 hover:text-green-500"
                  >Download</a
                >
              </div>
            </li>

            <li
              class="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
            >
              <div class="flex w-0 flex-1 items-center">
                <PaperClipIcon
                  class="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span class="ml-2 w-0 flex-1 truncate"
                  >Matthews Inbound Receiving Solution</span
                >
              </div>
              <div class="ml-4 flex-shrink-0">
                <a
                  href="https://ewr1.vultrobjects.com/raf-website/Matthews_InboundReceivingSolution.pdf"
                  class="font-medium text-green-600 hover:text-green-500"
                  >Download</a
                >
              </div>
            </li>

            <li
              class="bg-gray-50 flex items-center justify-between py-3 pl-3 pr-4 text-sm"
            >
              <div class="flex w-0 flex-1 items-center">
                <PaperClipIcon
                  class="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span class="ml-2 w-0 flex-1 truncate"
                  >Parcel Vision Product Sheet</span
                >
              </div>
              <div class="ml-4 flex-shrink-0">
                <a
                  href="https://ewr1.vultrobjects.com/raf-website/parcel%20vision%20product%20sheet.pdf"
                  class="font-medium text-green-600 hover:text-green-500"
                  >Download</a
                >
              </div>
            </li>

            <li
              class="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
            >
              <div class="flex w-0 flex-1 items-center">
                <PaperClipIcon
                  class="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span class="ml-2 w-0 flex-1 truncate"
                  >Postal Core Product Sheet</span
                >
              </div>
              <div class="ml-4 flex-shrink-0">
                <a
                  href="https://ewr1.vultrobjects.com/raf-website/postal%20core%20product%20sheet%202.pdf"
                  class="font-medium text-green-600 hover:text-green-500"
                  >Download</a
                >
              </div>
            </li>
          </ul>
        </div>
        <img
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 1200 } }"
          :delay="500"
          :src="useAsset('WhitepaperSpotlight.webp')"
          alt=""
          class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
        />
      </div>
    </div>
    <div
      class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"
    />
  </div>
</template>
