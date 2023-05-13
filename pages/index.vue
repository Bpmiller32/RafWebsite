<script setup>
const posts = [
  {
    title: "Argosy Post 5.0 Official Release",
    date: "April 28, 2023",
    image: "ArgosyPostArticle.webp",
    category: "Solutions",
    author: {
      name: "Bob Randall",
      role: "Program Manager",
      image: "BobProfile.webp",
    },
    description:
      "Introducing the Next Generation of OCR Technology:\n\n\nRAF is thrilled to announce the release of the newest version of our flagship OCR software. Packed with cutting-edge features and advancements, Argosy Post 5.0 is ready to revolutionize the way you process letters, flats, and parcels.\n\nNew featues include:\n\n✉️ USPS CASS Cycle-O Directories\nSmart Match in this release is CASS certified for USPS Cycle O.\n\n🖥️Simplified Argosy Main Installer\nInstallation type can be 'US Outgoing', 'International/Incoming', or both. Directory or recognition components are installed based on the choice.\n\n📊Additional Statistics\nMore statistics captured and added, stat file columns are reimagined for better readability\n\n🔍Improved Recognition\nImproved OCR algorithms that enhance the accuracy and speed of the software\n\n🖋️RAF Handwriting\nRAF Smart Script now available for US addresses.",
    hover: "#6b7280",
  },
  {
    title: "Promat 2023",
    date: "Mar 6, 2023",
    image: "PromatLogo.webp",
    category: "Marketing",
    author: {
      name: "George Harbachuk",
      role: "VP of Marketing",
      image: "GeorgeProfile.webp",
    },
    description:
      "As one of the leading expos for material handling, logistics, and supply chain solutions, ProMat 2023 presents an excellent opportunity for us to showcase our latest innovations and technologies to a wide range of industry professionals. Our team is excited to connect with other experts and leaders in the field and to explore new collaborations and partnerships that can help us continue to drive innovation and growth in the industry.\n\nCome visit us a booth S4307!",
    hover: "#6b7280",
  },
  {
    title: "Update on Cycle O",
    date: "February 2, 2023",
    image: "UspsArticle.webp",
    category: "News",
    author: {
      name: "Billy Miller",
      role: "Techservices Manager",
      image: "BillyProfile.webp",
    },
    description:
      "The USPS recently held an update meeting on the CASS Cycle O processing cycle, which is set to begin on July 1st, 2023.\n\nCycle O will implement changes to the processing cycle that will enable the USPS to better validate and standardize addresses, resulting in improved accuracy and efficiency in mail delivery. The update will also provide more granular reporting, allowing mailers to better understand their mailing results and improve their address quality over time.\n\nHere is an updated calendar of events for Cycle O from the discussion:\n\n➡️ May 2023: Cycle N Data and Fullfillment Ends\n➡️ July 31st, 2023: Expiration of CASS Cycle N\n➡️ August 1st, 2023: Implementation of CASS Cycle O\n➡️ November 7th, 2023: NCOA Reporting Changes\n\nWe will keep you informed of any future updates we recieve from USPS and as always - please email us at support@raf.com if you have any questions.",
    hover: "#6b7280",
  },
];
</script>

<template>
  <!-- Spotlight text and images -->
  <div class="relative">
    <!-- Video background -->
    <video
      muted
      autoplay
      loop
      playsinline
      :src="useAsset('IndexBackground.mp4')"
      class="mt-40 opacity-50 w-screen h-screen max-h-[50rem] object-cover"
    ></video>

    <!-- Video overlay for better text readability -->
    <div
      class="absolute w-screen h-screen max-h-[50rem] bg-black inset-0 opacity-50"
    ></div>

    <!-- Spotlight text and images -->
    <div class="absolute mx-auto top-0 inset-x-0 max-w-7xl">
      <div
        class="mx-auto max-w-2xl lg:mx-0 flex flex-wrap lg:justify-between lg:max-w-none lg:items-center"
      >
        <!-- Spotlight text -->
        <div
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 1200 } }"
          :delay="0"
          class="px-8 opacity-0 w-full max-w-xl mt-20 lg:shrink-0 xl:max-w-2xl"
        >
          <h1
            class="text-4xl font-bold tracking-tight text-zinc-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-6xl"
          >
            Global leader in pattern recognition.
          </h1>
          <p
            class="relative mt-6 text-lg leading-8 text-zinc-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:max-w-md lg:max-w-none"
          >
            At RAF, our goal is to provide advanced and reliable software that
            streamlines workflows, improves accuracy, and helps our clients make
            better-informed decisions based on visual data.
          </p>
          <div class="mt-10 flex items-center gap-x-6">
            <NuxtLink
              to="/solutions"
              class="duration-500 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-zinc-100 shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >View solutions</NuxtLink
            >
            <NuxtLink
              :to="{ path: '/about', hash: '#contactSection' }"
              class="text-sm font-semibold leading-6 text-zinc-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              >Contact us <span aria-hidden="true">→</span></NuxtLink
            >
          </div>
        </div>

        <!-- Spotlight images -->
        <div
          class="hidden mt-14 min-[1038px]:flex justify-end gap-8 sm:justify-start sm:pl-20 lg:mt-7 lg:pl-0"
        >
          <div class="mr-auto w-44 flex-none sm:mr-0 sm:pt-52 lg:pt-36">
            <SpotlightCard
              :delay="200"
              image="ArgosyPostFeature.webp"
              link="#ArgosyPostSolution"
            />
            <SpotlightCard
              :delay="600"
              image="ParcelVisionFeature.webp"
              link="#ParcelVisionSolution"
            />
          </div>
          <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
            <SpotlightCard
              :delay="800"
              image="SmartMatchFeature.webp"
              link="#SmartMatchSolution"
            />
            <SpotlightCard
              :delay="400"
              image="SmartScriptFeature.webp"
              link="#SmartScriptSolution"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Workaround for Spotlight images positioning on mobile, look into Vue teleport -->
  <div class="min-[1038px]:hidden flex justify-center">
    <div
      class="mt-14 min-[360px]:flex justify-end gap-2 min-[370px]:gap-8 sm:justify-start sm:pl-20 lg:mt-7 lg:pl-0"
    >
      <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
        <SpotlightCard
          :delay="0"
          image="ArgosyPostFeature.webp"
          link="#ArgosyPostSolution"
        />
        <SpotlightCard
          :delay="0"
          image="ParcelVisionFeature2.webp"
          link="#ParcelVisionSolution"
        />
      </div>
      <div class="w-44 flex-1 space-y-8 pt-8 min-[360px]:pt-32 sm:pt-0">
        <SpotlightCard
          :delay="0"
          image="SmartMatchFeature.webp"
          link="#SmartMatchSolution"
        />
        <SpotlightCard
          :delay="0"
          image="SmartScriptFeature.webp"
          link="#SmartScriptSolution"
        />
      </div>
    </div>
  </div>

  <!-- News posts -->
  <div
    v-motion
    :initial="{ y: 30, opacity: 0 }"
    :enter="{ y: 0, opacity: 1, transition: { duration: 1200 } }"
    :delay="0"
    class="mx-auto max-w-7xl px-6 lg:px-8"
  >
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
        :hover="post.hover"
      />
    </div>
  </div>
</template>
