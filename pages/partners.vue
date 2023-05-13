<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const partners = [
  {
    name: "BlueCrest",
    imageUrl: "BlueCrest.webp",
    description:
      "BlueCrest Technologies provides systems, software, and service solutions that help engineer the flow of communication for high volume mailers. Their patented technology helps ensure the accuracy and integrity of your mail data before it gets to the Post Office – all while getting you superior OCR read rates so that you meet your tough SLA requirements.\n\nBlueCrest uses only the best OCR technology that is available today and delivers unparalleled read rates. This is accomplished by their exclusive implementation of RAF’s software which allows customers to read as much automation mail as possible.\n\nBlueCrest offers RAF Argosy Post Platinum on the Olympus II ST & MT, Exemplar, and VariSort Mixed Mail Sorter.",
    websiteName: "bluecrestinc.com",
    websiteUrl: "https://www.bluecrestinc.com",
    linkedInUrl: "https://www.linkedin.com/company/bluecrest/",
  },

  {
    name: "National Presort Inc.",
    imageUrl: "NpiLogo.webp",
    description:
      "National Presort Inc. has been at the forefront of developing technology in the mail sorting industry for twenty years. From 1977 through to the present day, National Presort has maintained its reputation for unique technological innovation with a series of key breakthroughs.\n\nNational Presort offers Argosy Post on its Omega, NP8000, NP4000, NP2000, and NP1000 mail sorting systems.",
    websiteName: "NPISorters.com",
    websiteUrl: "http://www.npisorters.com/",
    linkedInUrl: "https://www.linkedin.com/company/npi_2",
  },

  {
    name: "Engineering Innovation Inc.",
    imageUrl: "EiiLogo.webp",
    description:
      "Engineering Innovation, Inc. provides cost effective solutions for mailers wanting to take advantage of expanded flats discounts. With a modular approach that can grow with your business, Engineering Innovation provides solutions from enhanced manual workstations through fully automated OCR/Barcode/Sorting equipment for flats, letters and small parcels.",
    websiteName: "EII-Online.com",
    websiteUrl: "https://www.eii-online.com/",
    linkedInUrl: "https://www.linkedin.com/company/engineering-innovation",
  },

  {
    name: "Solution Net Systems Inc.",
    imageUrl: "SnsiLogo.webp",
    description:
      "Solution Net Systems, Inc. services E-commerce, Pharma, Retail, Postal, Transportation, and Manufacturing enterprises with automated logistics solutions. We offer innovative solutions providing design, engineering, integration, installation, program management, and technical support.\n\nOur industry leading team has extensive global experience in developing solutions of all sizes. We can deliver an island of automation handling a single task or act as the prime contractor delivering a fully automated facility. As veteran integrators we do not align ourselves with a specific conveyor or technology supplier. Instead we find the best solution to meet the specific project needs.",
    websiteName: "SolutionNetSystems.com",
    websiteUrl: "https://solutionnetsystems.com/",
    linkedInUrl: "https://www.linkedin.com/company/solution-net-systems-llc",
  },

  {
    name: "DataLogic",
    imageUrl: "DatalogicLogo.webp",
    description:
      "Datalogic is a world-class producer of bar code readers, mobile computers, sensors for detection and safety, vision systems and laser marking systems.",
    websiteName: "Datalogic.com",
    websiteUrl: "https://www.datalogic.com/",
    linkedInUrl: "https://www.linkedin.com/company/datalogic",
  },

  {
    name: "Numina Group",
    imageUrl: "NuminaGroupLogo.webp",
    description:
      "Numina Group is a top tier designer and integrator of warehouse automation. We integrate cutting edge warehouse automation technologies with RDS™, our top tier Warehouse Control and Execution System (WCS-WES). The Numina Group partners with clients to define, design, and implement material handling and order fulfillment automation focused on the right processes and technologies to optimize distribution operations.\n\nNumina Group provides clients with a consultative design approach that uncovers and defines better processes, operational improvements, and identifies technologies that reduce labor costs, and improve storage and space utilization.",
    websiteName: "NuminaGroup.com",
    websiteUrl: "https://numinagroup.com",
    linkedInUrl: "https://www.linkedin.com/company/the-numina-group",
  },

  {
    name: "Honeywell",
    imageUrl: "HoneywellLogo.webp",
    description:
      "Honeywell International Inc. (NYSE: HON) is a Fortune 100 company that invents and manufactures solutions to address some of the world’s toughest challenges. Honeywell Scanning & Mobility offers the best value in products uniquely tailored for customers in markets such as retail, transportation, distribution, warehousing, and manufacturing. Working with companies like RAF Technology, Honeywell has developed alliances with industry leaders in software, technology, and services that offer customers innovative solutions that can address their most demanding business needs.",
    websiteName: "Honeywell.com",
    websiteUrl: "https://www.honeywell.com/us/en",
    linkedInUrl: "https://www.linkedin.com/company/honeywell",
  },

  {
    name: "Zebra Technologies",
    imageUrl: "ZebraLogo.webp",
    description:
      "Zebra’s extensive portfolio of solutions give real-time visibility into everything from products and physical assets to people, providing very precise operational data not only about where things are, but what condition they are in. This allows business leaders to use data to make better, more informed decisions, respond in real-time and ultimately, help businesses understand how they work, and how they could work better.",
    websiteName: "Zebra.com",
    websiteUrl: "https://www.zebra.com/us/en.html",
    linkedInUrl: "https://www.linkedin.com/company/zebra-technologies",
  },

  {
    name: "Parascript",
    imageUrl: "ParascriptLogo.webp",
    description:
      "Parascript is a leading provider of automated data capture software. Currently recognizing more than 68 million documents daily, Parascript’s Total Recognition technology converts paper-based information on mail, parcels, forms and checks into computer-useable data. It’s the only complete technology that recognizes all character types – cursive, handprint and machine print – on all forms.",
    websiteName: "Parascript.com",
    websiteUrl: "https://www.parascript.com",
    linkedInUrl: "https://www.linkedin.com/company/parascript",
  },

  {
    name: "Global Data Consortium",
    imageUrl: "GdcLogo.webp",
    description:
      "Global Data Consortium (GDC) has teamed up with RAF Technology to bring together the most current, comprehensive, and accurate data from around the world with cutting-edge data treatment and fuzzy data matching technology all hosted through easy and effective web solutions or native software. GDC facilitates data, technology, and web solutions, helping customers access new markets and strengthen position in existing markets.",
    websiteName: "GlobalDataConsortium.com",
    websiteUrl: "https://www.globaldataconsortium.com",
    linkedInUrl: "https://www.linkedin.com/company/global-data-consortium",
  },
];
</script>

<template>
  <!-- Logo cloud -->
  <div class="mt-32 sm:mt-48">
    <div class="mx-auto max-w-7xl px-6 mt-48 sm:mt-0 lg:px-8">
      <!-- Heading -->
      <h2
        v-motion
        :initial="{ y: 30, opacity: 0 }"
        :enter="{ y: 0, opacity: 1, transition: { duration: 1200 } }"
        :delay="0"
        class="text-center text-lg font-semibold leading-8 text-gray-900 opacity-0"
      >
        Trusted by the world’s most innovative teams
      </h2>

      <!-- Logos -->
      <TabGroup>
        <TabList
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 1200 } }"
          :delay="0"
          class="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 opacity-0"
        >
          <Tab
            v-for="partner in partners"
            class="z-10 text-sm font-semibold leading-6 text-gray-900"
          >
            <img
              class="col-span-2 w-full lg:col-span-1"
              :src="useAsset(partner.imageUrl)"
              :alt="partner.name"
              width="158"
              height="48"
            />
          </Tab>
        </TabList>
        <TabPanels
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 1200 } }"
          :delay="250"
          class="flex justify-center mt-10 pt-10 opacity-0 border-t"
        >
          <TabPanel v-for="partner in partners" :key="partner.name">
            <PartnerCard
              :name="partner.name"
              :image-url="partner.imageUrl"
              :website-name="partner.websiteName"
              :website-url="partner.websiteUrl"
              :linked-in-url="partner.linkedInUrl"
              :description="partner.description"
            ></PartnerCard>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>
