<script setup>
const posts = [
  {
    title: "Argosy Post 5.0 Official Release",
    date: "April 28, 2023",
    image: "GeorgeProfile.webp",
    category: "Solutions",
    author: {
      name: "Bob Randall",
      role: "Program Manager",
      image: "BobProfile.webp",
    },
    description:
      "Introducing the Next Generation of OCR Technology:\n\n\nRAF is thrilled to announce the release of the newest version of our flagship OCR software. Packed with cutting-edge features and advancements, Argosy Post 5.0 is ready to revolutionize the way you process letters, flats, and parcels.\n\nNew featues include:\n\n✉️ USPS CASS Cycle-O Directories\nSmart Match in this release is CASS certified for USPS Cycle O.\n\n🖥️Simplified Argosy Main Installer\nInstallation type can be 'US Outgoing', 'International/Incoming', or both. Directory or recognition components are installed based on the choice.\n\n📊Additional Statistics\nMore statistics captured and added, stat file columns are reimagined for better readability\n\n🔍Improved Recognition\nImproved OCR algorithms that enhance the accuracy and speed of the software\n\n🖋️RAF Handwriting\nRAF Smart Script now available for US addresses.",
  },
  {
    title: "Promat 2023",
    date: "Mar 6, 2023",
    image: "GeorgeProfile.webp",
    category: "Marketing",
    author: {
      name: "George Harbachuk",
      role: "VP of Marketing",
      image: "GeorgeProfile.webp",
    },
    description:
      "As one of the leading expos for material handling, logistics, and supply chain solutions, ProMat 2023 presents an excellent opportunity for us to showcase our latest innovations and technologies to a wide range of industry professionals. Our team is excited to connect with other experts and leaders in the field and to explore new collaborations and partnerships that can help us continue to drive innovation and growth in the industry.\n\nCome visit us a booth S4307!",
  },
  {
    title: "Update on Cycle O",
    date: "February 2, 2023",
    image: "GeorgeProfile",
    category: "News",
    author: {
      name: "Billy Miller",
      role: "Techservices Manager",
      image: "BillyProfile.webp",
    },
    description:
      "The USPS recently held an update meeting on the CASS Cycle O processing cycle, which is set to begin on July 1st, 2023.\n\nCycle O will implement changes to the processing cycle that will enable the USPS to better validate and standardize addresses, resulting in improved accuracy and efficiency in mail delivery. The update will also provide more granular reporting, allowing mailers to better understand their mailing results and improve their address quality over time.\n\nHere is an updated calendar of events for Cycle O from the discussion:\n\n➡️ May 2023: Cycle N Data and Fullfillment Ends\n➡️ July 31st, 2023: Expiration of CASS Cycle N\n➡️ August 1st, 2023: Implementation of CASS Cycle O\n➡️ November 7th, 2023: NCOA Reporting Changes\n\nWe will keep you informed of any future updates we recieve from USPS and as always - please email us at support@raf.com if you have any questions.",
  },
];
</script>

<template>
  <!-- Spotlight section -->
  <div class="relative">
    <!-- Grid pattern -->
    <svg
      class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
          width="200"
          height="200"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
        <path
          d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          stroke-width="0"
        />
      </svg>
      <rect
        width="100%"
        height="100%"
        stroke-width="0"
        fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
      />
    </svg>

    <!-- Color splashes -->
    <div
      class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      aria-hidden="true"
    >
      <div
        class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#048647] to-[#3abf72] opacity-30"
        style="
          clip-path: polygon(
            63.1% 29.5%,
            100% 17.1%,
            76.6% 3%,
            48.4% 0%,
            44.6% 4.7%,
            54.5% 25.3%,
            59.8% 49%,
            55.2% 57.8%,
            44.4% 57.2%,
            27.8% 47.9%,
            35.1% 81.5%,
            0% 97.7%,
            39.2% 100%,
            35.2% 81.4%,
            97.2% 52.8%,
            63.1% 29.5%
          );
        "
      />
    </div>

    <!-- Content: spotlight text and images -->
    <div class="overflow-hidden">
      <div class="mx-auto max-w-7xl px-6 pb-10 pt-48 sm:pt-60 lg:px-8 lg:pt-32">
        <div
          class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center"
        >
          <!-- Spotlight text -->
          <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1
              class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Global leader in pattern recognition.
            </h1>
            <p
              class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none"
            >
              At RAF, our goal is to provide advanced and reliable software that
              streamlines workflows, improves accuracy, and helps our clients
              make better-informed decisions based on visual data.
            </p>
            <div class="mt-10 flex items-center gap-x-6">
              <NuxtLink
                to="/solutions"
                class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >View solutions</NuxtLink
              >
              <NuxtLink
                :to="{ path: '/about', hash: '#contactSection' }"
                class="text-sm font-semibold leading-6 text-gray-900"
                >Contact us <span aria-hidden="true">→</span></NuxtLink
              >
            </div>
          </div>

          <!-- Spotlight images -->
          <div
            class="mt-14 ml-28 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-7 lg:pl-0"
          >
            <div
              class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
            >
              <div class="relative">
                <img
                  src="~/assets/ArgosyPostFeature.webp"
                  alt=""
                  class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
              <div class="relative">
                <img
                  src="~/assets/ParcelVisionFeature.webp"
                  alt=""
                  class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
            </div>
            <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <div class="relative">
                <img
                  src="~/assets/SmartMatchFeature.webp"
                  alt=""
                  class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
              <div class="relative">
                <img
                  src="~/assets/SmartScriptFeature.webp"
                  alt=""
                  class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- News posts -->
  <div class="">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto my-12 max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          News and Events
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          The latest in our company offerings and events.
        </p>
      </div>
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <ArticleCard
          v-for="post in posts"
          :key="post.title"
          :title="post.title"
          :date="post.date"
          :image="post.image"
          :author="post.author"
          :category="post.category"
          :description="post.description"
        />
      </div>
    </div>
  </div>
</template>
