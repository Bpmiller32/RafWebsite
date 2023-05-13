<script setup lang="ts">
const whitepapers = [
  {
    title: "Argosy Mobile Datasheet",
    link: "https://ewr1.vultrobjects.com/raf-website/Argosy%20Mobile%20Datasheet.pdf",
    stripe: false,
  },
  {
    title: "Argosy Post Datasheet",
    link: "https://ewr1.vultrobjects.com/raf-website/Argosy%20Post%20Datasheet.pdf",
    stripe: true,
  },
  {
    title: "Argosy Post Platinum Benefits",
    link: "https://ewr1.vultrobjects.com/raf-website/Argosy%20Post%20Platinum%20Benefits.pdf",
    stripe: false,
  },
  {
    title: "SmartMatch Datasheet",
    link: "https://ewr1.vultrobjects.com/raf-website/SmartMatch%20Datasheet.pdf",
    stripe: true,
  },
  {
    title: "SmartMatch-i Datasheet",
    link: "https://ewr1.vultrobjects.com/raf-website/SmartMatch-i%20Datasheet.pdf",
    stripe: false,
  },
  {
    title: "SmartScript Product Sheet",
    link: "https://ewr1.vultrobjects.com/raf-website/SmartScript%20Product%20Sheet.pdf",
    stripe: true,
  },
  {
    title: "ePacket Product Sheet",
    link: "https://ewr1.vultrobjects.com/raf-website/ePacket%20Product%20Sheet.pdf",
    stripe: false,
  },
  {
    title: "Parcel Vision Product Sheet",
    link: "https://ewr1.vultrobjects.com/raf-website/Parcel%20Vision%20Product%20Sheet.pdf",
    stripe: true,
  },
  {
    title: "Address Learning System Product Sheet",
    link: "https://ewr1.vultrobjects.com/raf-website/ALS%20Product%20Sheet.pdf",
    stripe: false,
  },
  {
    title: "Matthews Inbound Receiving Solution",
    link: "https://ewr1.vultrobjects.com/raf-website/Matthews%20Inbound%20Receiving%20Solution.pdf",
    stripe: true,
  },
  {
    title: "Postal Core Solution",
    link: "https://ewr1.vultrobjects.com/raf-website/Postal%20Core%20Solution.pdf",
    stripe: false,
  },
];
</script>

<template>
  <main class="mt-48 mb-28 mx-auto max-w-7xl px-6 lg:px-8">
    <div
      class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
    >
      <!-- Page description and whitepaper links -->
      <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
        <!-- Page description -->
        <p
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 1200 } }"
          :delay="0"
          class="text-lg leading-8 text-gray-600 opacity-0"
        >
          Discover the wealth of knowledge in our product brochures and
          whitepapers, providing valuable insights into our offerings and their
          potential advantages for your business.
        </p>

        <!-- Whitepaper links -->
        <div
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { duration: 1200 } }"
          :delay="500"
          role="list"
          class="mt-10 divide-y divide-gray-200 rounded-md border border-gray-200 opacity-0"
        >
          <WhitepaperLink
            v-for="whitepaper in whitepapers"
            :title="whitepaper.title"
            :link="whitepaper.link"
            :stripe="whitepaper.stripe"
          />
        </div>
      </div>

      <!-- Whitepaper spotlight image -->
      <img
        v-motion
        :initial="{ y: 30, opacity: 0 }"
        :enter="{ y: 0, opacity: 1, transition: { duration: 1200 } }"
        :delay="250"
        :src="useAsset('WhitepaperSpotlight.webp')"
        class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-20 opacity-0"
        alt="Whitepaper spotlight image"
      />
    </div>
  </main>
</template>
