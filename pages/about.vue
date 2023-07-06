<script setup lang="ts">
import { LinkIcon } from "@heroicons/vue/24/outline";
import { BuildingOffice2Icon, PhoneIcon } from "@heroicons/vue/24/outline";

const timeline = [
  {
    name: "Founded company",
    description:
      "With unmatched expertise from NASA JPL and a relentless drive for excellence, Dave Ross and Jim Fruchterman seek to create cutting-edge solutions in the ever-evolving world of computer vision.",
    date: "December 1989",
    dateTime: "2021-08",
  },
  {
    name: "Argosy Post 1.0",
    description:
      "Our flagship software is a game-changer in the world of postal management. Over 20 years later it continues to streamline operations and transform the way businesses handle their mailing processes.",
    date: "March 1999",
    dateTime: "2021-12",
  },
  {
    name: "Acquired by Matthews",
    description:
      "This exciting new partnership brings together our innovative solutions with their extensive resources and expertise, propelling us to new heights of success and unlocking unparalleled opportunities for our customers.",
    date: "January 2017",
    dateTime: "2022-02",
  },
  {
    name: "Argosy Mobile",
    description:
      "Set to revolutionize the mobile world as we expand Argosy's capabilities to a new platform. Argosy Mobile opens up boundless possibilities for users to seamlessly access and utilize our innovative solution wherever and whenever they need it.",
    date: "Summer 2023",
    dateTime: "2022-12",
  },
];

const people = [
  {
    name: "Dave Reeves",
    role: "Cheif Executive Officer",
    image: "DaveAbout.jpg",
    linkedinUrl: "https://www.linkedin.com/in/dave-reeves-2a854",
    description1:
      "Dave is a proven corporate executive with over 20 years of experience in the technology industry. He has a remarkable track record, having served as an executive or advisor in transactions totaling over $500 million, showcasing his exceptional leadership skills in successfully growing and leading technology businesses.",
    description2:
      "Prior to being appointed CEO, Dave joined RAF as the Chief Financial Officer in November 2004. He previously served as the CFO of Mindplay LLC (now part of Bally Gaming) and as CFO for Wavetrace where he successfully negotiated a strategic partnering transaction between Wavetrace and Harris Corporation.",
    description3:
      "Dave possesses a diverse skill set encompassing leadership, financial management, accounting, and administration. His expertise includes capital raising, system implementation, and financial reporting, showcasing a well-rounded background that contributes to his ability to excel in various areas of business management.",
  },
  {
    name: "William Brandt",
    role: "Vice President of Business Development",
    image: "BillAbout.jpg",
    linkedinUrl: "",
    description1:
      "Accountable for cultivating key business relationships and maintaining strategic alliances with RAF's partners in both the commercial and government sectors, Bill ensures the success and growth of the organization.",
    description2:
      "He empowers partners with technology solutions that distinguish their products and services from the competition, driving innovation and excellence in their offerings.",
    description3:
      "Bill was previously a 10-year veteran at the United States Postal Service - initially recruited to a two-year multi-functional engineering and management development program, he held numerous positions in the field and at headquarters in operations, finance and marketing.",
  },
  {
    name: "George Harbachuk",
    role: "Vice President of Marketing",
    image: "GeorgeAbout.jpg",
    linkedinUrl: "https://www.linkedin.com/in/george-harbachuk-1ab9964",
    description1:
      "With a remarkable 34-year track record in technology development and systems integration, coupled with a broad domestic and international business background in hardware and software system management solutions, George brings unparalleled expertise and experience to every project we undertake.",
    description2:
      "Prior to joining RAF Technology, he held several Senior Management positions in Business Relations and Professional Services at Bally Gaming and Harris Corporation where George was responsible for all aspects of product lifecycle including strategy, pricing, promotion, product performance tracking, evaluation and service.",
    description3: "",
  },
  {
    name: "Christopher Traina",
    role: "Director of Engineering",
    image: "ChrisAbout.jpg",
    linkedinUrl: "https://www.linkedin.com/in/chris-traina-08070324",
    description1:
      "With a rich history spanning two decades, Chris has honed expertise in designing and implementing pattern recognition systems. He previously managed the Technical Services department and was responsible for overseeing RAF’s technical support, professional services, and training activities.",
    description2:
      "Chris also directed RAF’s Project Management team, including implementing and improving software development and release processes.",
    description3: "",
  },
];
</script>

<template>
  <main class="mt-48">
    <!-- Content section -->
    <section class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <!-- Company overview -->
        <h2
          v-motion
          :initial="{ y: 30, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { duration: 1200 } }"
          :delay="0"
          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl opacity-0"
        >
          Company overview
        </h2>

        <!-- Company overview description -->
        <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div
            v-motion
            :initial="{ y: 30, opacity: 0 }"
            :enter="{ y: 0, opacity: 1, transition: { duration: 1200 } }"
            :delay="0"
            class="lg:w-full lg:max-w-2xl lg:flex-auto opacity-0"
          >
            <p class="text-xl leading-8 text-gray-600">
              RAF Technology provides the most advanced optical character
              recognition products for extracting data from different fonts &
              print styles as well as intelligent character recognition for
              handwriting. Our software supports a wide variety of vision
              applications and is primarily deployed in fulfillment,
              transportation and distribution.
            </p>
            <div class="mt-10 max-w-xl text-base leading-7 text-gray-700">
              <p>
                Founded in 1989, acquired in 2017, RAF Technology is part of
                Matthews Automation Solutions (a Matthews International company,
                <span class="inline-flex"
                  ><a
                    class="text-green-500 flex"
                    href="https://www.matw.com/investors/stock-data/quote"
                  >
                    <p>NASDAQ: MATW</p>
                    <LinkIcon class="h-4" />
                  </a> </span
                >). We are the global leader in pattern recognition offering
                data capture and verification software products that enable
                postal, courier, and transportation companies to read, identify
                and track items without a barcode or RFID. Our software is used
                for the sortation and delivery of letters and parcels by
                national posts and parcel delivery companies in over 30
                countries.
              </p>
              <p class="mt-10">
                We are headquartered in Redmond, Washington and service numerous
                enterprises and businesses throughout the world including The
                United States Postal Service, UPS, FedEx, DHL, Australia Post,
                Croatia Post, Brazil Post, EasyPost Belgium, Oman Post,
                BlueCrest, NPI, EII, among many others.
              </p>
            </div>
          </div>

          <!-- Stats -->
          <div class="lg:flex lg:flex-auto lg:justify-center">
            <dl class="w-64 space-y-8 xl:w-80">
              <div
                v-motion
                :initial="{ y: 50, opacity: 0 }"
                :enter="{ y: 0, opacity: 1, transition: { duration: 1000 } }"
                :delay="200"
                class="flex flex-col-reverse gap-y-4 opacity-0"
              >
                <dt class="text-base leading-7 text-gray-600">
                  Mail pieces processed per hour
                </dt>
                <dd class="text-5xl font-semibold tracking-tight text-gray-900">
                  44 million
                </dd>
              </div>

              <div
                v-motion
                :initial="{ y: 50, opacity: 0 }"
                :enter="{ y: 0, opacity: 1, transition: { duration: 1000 } }"
                :delay="400"
                class="flex flex-col-reverse gap-y-4 opacity-0"
              >
                <dt class="text-base leading-7 text-gray-600">
                  Using our solutions internationally
                </dt>
                <dd class="text-5xl font-semibold tracking-tight text-gray-900">
                  30 countries
                </dd>
              </div>

              <div
                v-motion
                :initial="{ y: 50, opacity: 0 }"
                :enter="{ y: 0, opacity: 1, transition: { duration: 1000 } }"
                :delay="600"
                class="flex flex-col-reverse gap-y-4 opacity-0"
              >
                <dt class="text-base leading-7 text-gray-600">
                  Letters, flats, and parcels categorized
                </dt>
                <dd class="text-5xl font-semibold tracking-tight text-gray-900">
                  1.98 trillion
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <div
      v-motion
      :initial="{ y: 30, opacity: 0 }"
      :enter="{ y: 0, opacity: 1, transition: { duration: 1200 } }"
      :delay="0"
      class="opacity-0"
    >
      <!-- Timeline section -->
      <section class="mt-32 mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          <div v-for="item in timeline" :key="item.name">
            <time
              :datetime="item.dateTime"
              class="flex items-center text-sm font-semibold leading-6 text-green-600"
            >
              <svg
                viewBox="0 0 4 4"
                class="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx="2" cy="2" r="2" fill="currentColor" />
              </svg>
              {{ item.date }}
              <div
                class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              />
            </time>
            <p
              class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900"
            >
              {{ item.name }}
            </p>
            <p class="mt-1 text-base leading-7 text-gray-600">
              {{ item.description }}
            </p>
          </div>
        </div>
      </section>

      <!-- Image section -->
      <section class="mt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
          :src="useAsset('GroupPhoto.webp')"
          alt="RAF company group photo"
          class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
      </section>

      <!-- Team section -->
      <section
        class="mt-32 mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5"
      >
        <div class="max-w-2xl xl:col-span-2">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            About the team
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <div class="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
          <AboutSection v-for="person in people" :person="person" />
        </div>
      </section>

      <!-- Contact section -->
      <section id="contactSection" class="mt-32 mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none"
        >
          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <!-- Description section -->
            <div>
              <h2 class="text-3xl font-bold tracking-tight text-gray-900">
                Get in touch
              </h2>
              <p class="mt-4 leading-7 text-gray-600">
                Have questions or need further information? Contact us now to
                speak with our knowledgeable team and discover how our expertise
                can benefit you.
              </p>

              <dl class="mt-6 space-y-4 text-base leading-7 text-gray-600">
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Address</span>
                    <BuildingOffice2Icon
                      class="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    18211 NE 68th Street<br />
                    Suite E120<br />
                    Redmond, WA 98052<br />
                  </dd>
                </div>
                <div class="flex gap-x-4">
                  <dt class="flex-none">
                    <span class="sr-only">Telephone</span>
                    <PhoneIcon
                      class="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a class="hover:text-gray-900" href="tel:+1 (555) 234-5678"
                      >+1 (425) 867-0700</a
                    >
                  </dd>
                </div>
              </dl>
            </div>

            <!-- Contact cards -->
            <div
              class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8"
            >
              <ContactCard
                title="Sales Information"
                email="sales@raf.com"
                phone="+1 (202) 246-7850"
              />
              <ContactCard
                title="Product and Service Information"
                email="info@raf.com"
                phone="+1 (425) 749-2520"
              />
              <ContactCard
                title="Technical Support"
                email="support@raf.com"
                phone="+1 (425) 867-0700 ext. 2123286"
              />
              <ContactCard
                title="Join our Team"
                email="jobs@raf.com"
                phone="+1 (425) 867-0700 ext. 2127342"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
