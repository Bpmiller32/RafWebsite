<script setup>
import { LinkIcon } from "@heroicons/vue/24/outline";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/vue/24/outline";

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
    name: "Aquired by Matthews",
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

const stats = [
  {
    label: "Mail pieces processed per hour",
    value: "44 million",
  },
  {
    label: "Using our solutions internationally",
    value: "20 countries",
  },
  { label: "Letters, flats, and parcels categorized", value: "1.98 trillion" },
];

const people = [
  {
    name: "Dave Reeves",
    role: "Cheif Executive Officer",
    imageUrl:
      "https://storage.googleapis.com/bpmillerwebsitestorage/dave_reeves.jpg",
    bio: "A proven corporate executive with over 20 years experience in the technology industry. Dave has been an executive or adviser in transactions totaling in excess of $500 million and has a successful track record of leading technology businesses. Prior to being appointed CEO, Dave joined RAF as the Chief Financial Officer in November 2004. Previously Dave served as the CFO of Mindplay LLC, the leading provider of table management systems for the gaming industy. Mindplay was acquired in 2004 by Bally Gaming. Dave joined Mindplay from Wavtrace Inc., a broadband telecommunications equipment manufacturer, where he was the CFO and successfully negotiated a strategic partnering transaction, investment from and sale to Harris Corporation. He has a broad base of leadership, financial, accounting and administrative experience including capital raising, system implementation and financial reporting. Dave holds a B.A. in quantitative economics from Stanford University.",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/dave-reeves-2a854",
  },
  {
    name: "William Brandt",
    role: "Vice President of Buisiness Development",
    imageUrl:
      "https://storage.googleapis.com/bpmillerwebsitestorage/bill_brandt.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "George Harbachuk",
    role: "Vice President of Marketing",
    imageUrl:
      "https://storage.googleapis.com/bpmillerwebsitestorage/george_harbachuk.jpg",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/george-harbachuk-1ab9964",
  },
  {
    name: "Christopher Traina",
    role: "Director of Engineering",
    imageUrl: "https://storage.googleapis.com/bpmillerwebsitestorage/chris.jpg",
    twitterUrl: "#",
    linkedinUrl: "https://www.linkedin.com/in/chris-traina-08070324",
  },
  // More people...
];
</script>

<template>
  <main class="mt-48">
    <!-- Hero section -->
    <div class="relative isolate -z-10">
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
      <div
        class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        aria-hidden="true"
      >
        <div
          class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#58d6ac] to-[#2ace7c] opacity-30"
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
    </div>

    <!-- Content section -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Company overview
        </h2>
        <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
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
                Founded in 1989, aquired in 2017, RAF Technology is part of
                Matthews Automation Solutions (a Matthews International company,
                <span class="inline-flex"
                  ><a
                    class="text-blue-500 flex"
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
                national posts and parcel delivery companies in over 20
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
          <div class="lg:flex lg:flex-auto lg:justify-center">
            <dl class="w-64 space-y-8 xl:w-80">
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="flex flex-col-reverse gap-y-4"
              >
                <dt class="text-base leading-7 text-gray-600">
                  {{ stat.label }}
                </dt>
                <dd class="text-5xl font-semibold tracking-tight text-gray-900">
                  {{ stat.value }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <!-- Timeline section -->
    <div class="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
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
    </div>

    <!-- Image section -->
    <div class="mt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
      <img
        src="https://storage.googleapis.com/bpmillerwebsitestorage/CompanyGroupPhoto.webp"
        alt=""
        class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
      />
    </div>

    <!-- Team section -->
    <div class="mt-32">
      <div
        class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5"
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
        <div
          role="list"
          class="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3"
        >
          <AboutCard :person="people[0]">
            <p>
              Dave is a proven corporate executive with over 20 years of
              experience in the technology industry. He has a remarkable track
              record, having served as an executive or advisor in transactions
              totaling over $500 million, showcasing his exceptional leadership
              skills in successfully growing and leading technology businesses.
            </p>
            <p class="mt-4">
              Prior to being appointed CEO, Dave joined RAF as the Chief
              Financial Officer in November 2004. He previously served as the
              CFO of Mindplay LLC (now part of Bally Gaming) and as CFO for
              Wavetrace where he successfully negotiated a strategic partnering
              transaction between Wavetrace and Harris Corporation.
            </p>
            <p class="mt-4">
              Dave possesses a diverse skill set encompassing leadership,
              financial management, accounting, and administration. His
              expertise includes capital raising, system implementation, and
              financial reporting, showcasing a well-rounded background that
              contributes to his ability to excel in various areas of business
              management.
            </p></AboutCard
          >

          <AboutCard :person="people[1]">
            <p>
              Accountable for cultivating key business relationships and
              maintaining strategic alliances with RAF's partners in both the
              commercial and government sectors, Bill ensures the success and
              growth of the organization.
            </p>
            <p class="mt-4">
              He empowers partners with technology solutions that distinguish
              their products and services from the competition, driving
              innovation and excellence in their offerings.
            </p>
            <p class="mt-4">
              Bill was previously a 10-year veteran at the United States Postal
              Service - initially recruited to a two-year multi functional
              engineering and management development program, he held numerous
              positions in the field and at headquarters in operations, finance
              and marketing.
            </p>
          </AboutCard>

          <AboutCard :person="people[2]">
            <p>
              With a remarkable 34-year track record in technology development
              and systems integration, coupled with a broad domestic and
              international business background in hardware and software system
              management solutions, George brings unparalleled expertise and
              experience to every project we undertake.
            </p>
            <p class="mt-4">
              Prior to joining RAF Technology, he held several Senior Management
              positions in Business Relations and Professional Services at Bally
              Gaming and Harris Corporation where George was responsible for all
              aspects of product lifecycle including strategy, pricing,
              promotion, product performance tracking, evaluation and service.
            </p>
          </AboutCard>

          <AboutCard :person="people[3]">
            <p>
              With a rich history spanning two decades, Chris has honed
              expertise in designing and implementing pattern recognition
              systems. He previously managed the Technical Services department
              and was responsible for overseeing RAF’s technical support,
              professional services, and training activities.
            </p>
            <p class="mt-4">
              Chris also directed RAF’s Project Management team, including
              implementing and improving software development and release
              processes.
            </p>
          </AboutCard>
        </div>
      </div>
    </div>
  </main>

  <!-- Contact section -->
  <div id="contactSection" class="mt-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none"
      >
        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
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
                  <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a class="hover:text-gray-900" href="tel:+1 (555) 234-5678"
                    >+1 (425) 867-0700</a
                  >
                </dd>
              </div>
            </dl>
          </div>
          <div
            class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8"
          >
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
                      >sales@raf.com</a
                    >
                  </dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">Phone number</dt>
                  <dd>+1 (202) 246-7850</dd>
                </div>
              </dl>
            </div>
            <div class="rounded-2xl bg-gray-50 p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">
                Product and Service Information
              </h3>
              <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <div>
                  <dt class="sr-only">Email</dt>
                  <dd>
                    <a
                      class="font-semibold text-green-600"
                      href="mailto:press@example.com"
                      >info@raf.com</a
                    >
                  </dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">Phone number</dt>
                  <dd>+1 (425) 749-2520</dd>
                </div>
              </dl>
            </div>
            <div class="rounded-2xl bg-gray-50 p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">
                Technical Support
              </h3>
              <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <div>
                  <dt class="sr-only">Email</dt>
                  <dd>
                    <a
                      class="font-semibold text-green-600"
                      href="mailto:careers@example.com"
                      >support@raf.com</a
                    >
                  </dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">Phone number</dt>
                  <dd>+1 (425) 867-0700 ext. 2123286</dd>
                </div>
              </dl>
            </div>
            <div class="rounded-2xl bg-gray-50 p-10">
              <h3 class="text-base font-semibold leading-7 text-gray-900">
                Join our Team
              </h3>
              <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <div>
                  <dt class="sr-only">Email</dt>
                  <dd>
                    <a
                      class="font-semibold text-green-600"
                      href="mailto:hello@example.com"
                      >jobs@raf.com</a
                    >
                  </dd>
                </div>
                <div class="mt-1">
                  <dt class="sr-only">Phone number</dt>
                  <dd>+1 (425) 867-0700 ext. 2127342</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
