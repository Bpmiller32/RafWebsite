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
    title: "Volaris Acquires RAF Technology",
    date: "September 5, 2023",
    image: "VolarisLogo.webp",
    category: "News",
    author: {
      name: "Emily Gibson",
      role: "Director of Marketing",
      image: "EmilyProfile.webp",
    },
    description:
      'Toronto, ON – Today Volaris Group announced the acquisition of RAF Technology, a global leader in pattern recognition technology. RAF offers data capture and verification software products that enable postal, courier, and logistics companies to read, identify and track shipping items.\n\n"Enabling the efficient and accurate operation of post and parcel services is a key function of our modern economy and RAF’s technology offers their customers a mission-critical component their operations," said Alice Luo, Chief Strategy Officer at Volaris Group. "Joining Volaris Group provides a stable forever home for RAF’s technology, team and customers."\n\nOver its 25-year history RAF Technology has built a multi-layered and module-oriented set of AI-driven software components, hardware interfaces, and databases that enable advanced optical character recognition products. RAF’s software detects and extracts machine print and handwritten data from mail and parcels. RAF serves both US and global customers that rely on this expertise to deliver mail sorting, parcel logistics, warehouse inventory tracking, and signature verification.\n\n"Joining Volaris positions RAF well for our next chapter. The Volaris investment approach provides our customers and team with stability.We are excited to access Volaris best practices and global community of software leaders as we work to grow," said David Reeves, General Manager of RAF.\n\nRAF will continue to operate independently under the leadership of David Reeves.\n\nAbout Volaris Group\n\nVolaris acquires, strengthens, and grows vertical market technology companies. As an Operating Group of Constellation Software Inc., Volaris is all about strengthening businesses within the markets they compete, enabling them to grow – whether that growth comes through organic measures such as new initiatives and product development, day-to-day business, or through complementary acquisitions. Learn more at www.volarisgroup.com.',
    hover: "#6b7280",
  },
  {
    title: "Parcel and Post Expo 2023",
    date: "October 17, 2023",
    image: "PostExpo2023.webp",
    category: "Marketing",
    author: {
      name: "Emily Gibson",
      role: "Director of Marketing",
      image: "EmilyProfile.webp",
    },
    description:
      "RAF Technology is attending and demonstrating our adaptive intelligence optical character recognition (OCR) software including Argosy Post and Argosy Mobile at this year's Parcel + Post Expo (www.postexpo.com) in Amsterdam Oct 24-26.\n\nWe are excited to be partnering with Alstef Group and BlueCrest to showcase our highly-accurate international address scanning and verification capabilities on both high-speed transports and hand-held mobile devices. For others in the post and parcel community, please look for us at the event and we'd love to meet with you!",
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
      src="~/assets/IndexBackground.mp4"
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
          <!-- <h1
            class="text-4xl font-bold tracking-tight text-zinc-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-6xl"
          >
            Experience efficiency with the highest performing OCR.
          </h1> -->
          <p
            class="relative mt-6 text-2xl leading-8 text-zinc-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:max-w-md lg:max-w-none"
          >
            Experience efficiency with the highest performing Optical Character
            Recognition (OCR) software.
          </p>
          <h1
            class="mt-6 text-4xl font-bold tracking-tight text-zinc-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-6xl"
          >
            Because performance matters.
          </h1>
          <p
            class="relative mt-6 text-2xl leading-8 text-zinc-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:max-w-md lg:max-w-none"
          >
            RAF is a trusted leader in pattern recognition with more than 30
            years in the post and parcel industry. Our innovative solutions are
            based on adaptive intelligence and machine learning.
          </p>
          <div class="mt-10 flex items-center gap-x-6">
            <NuxtLink
              to="/solutions"
              class="duration-500 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-zinc-100 shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              aria-label="Go to solutions"
              >View solutions</NuxtLink
            >
            <NuxtLink
              :to="{ path: '/about', hash: '#contactSection' }"
              class="text-sm font-semibold leading-6 text-zinc-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              aria-label="Go to contact section"
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
              image="ArgosyPostFeature2.png"
              link="#ArgosyPostSolution"
            />
            <SpotlightCard
              :delay="600"
              image="ParcelVisionFeature2.png"
              link="#ParcelVisionSolution"
            />
          </div>
          <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
            <SpotlightCard
              :delay="800"
              image="SmartMatchFeature2.png"
              link="#SmartMatchSolution"
            />
            <SpotlightCard
              :delay="400"
              image="SmartScriptFeature2.png"
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
          image="ParcelVisionFeature.webp"
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
