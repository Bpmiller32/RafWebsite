<script setup lang="ts">
import { ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";

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
  <main
    v-motion
    :initial="{ y: 30, opacity: 0 }"
    :enter="{ y: 0, opacity: 1, transition: { duration: 1200 } }"
    :delay="0"
    class="opacity-0"
  >
    <!-- Featured solution -->
    <div
      id="ParcelVisionSolution"
      class="mt-32 pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32"
    >
      <div class="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
        <div
          class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch"
        >
          <div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div
              class="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto"
            >
              <img
                class="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover lg:object-top shadow-2xl"
                src="~/assets/ParcelVisionFeature2.webp"
                alt=""
              />
            </div>
          </div>
          <div
            class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24"
          >
            <figure class="relative isolate pt-6 sm:pt-12">
              <blockquote
                class="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9"
              >
                <p>
                  Advanced neural network algorithms decoding all actionable
                  data - regardless of form style or country.
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
    </div>

    <!-- Solution 0 -->
    <div id="ParcelVisionSolution" class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h1
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Parcel Vision
        </h1>
        <div
          class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2"
        >
          <div>
            <p>
              A solution that converts the intensive array of information that
              appears on parcels into actionable data. We use a simple and
              methodical process using the industry’s most advanced neural
              network algorithms that decodes each piece of information to allow
              automation to both read and leverage this for the operator. This
              revolutionary process and product is called Parcel Vision. Parcel
              Vision is the product customers have been searching for to address
              all their parcel automation requirements.
            </p>
            <p class="mt-8">
              Designed specifically to provide the highest assignment rates with
              the lowest possible errors and delivers address recognition and
              validation for all machine printed and handwritten information
              regardless of shipping label form style or country.
            </p>
          </div>
          <div>
            <p class="text-xl font-bold tracking-tight text-gray-900">
              Features include
            </p>
            <ul role="list" class="mt-8 prose">
              <li class="flex items-start">
                <ChevronDoubleRightIcon
                  class="h-5 w-5 mr-1 mt-1 flex-none shrink-0"
                ></ChevronDoubleRightIcon>
                <p>Omni font character set with adaptive Intelligence</p>
              </li>
              <li class="flex items-start">
                <ChevronDoubleRightIcon
                  class="h-5 w-5 mr-1 mt-1 flex-none shrink-0"
                ></ChevronDoubleRightIcon>
                <p>
                  Industry’s leading machine print and handwriting recognition
                </p>
              </li>
              <li class="flex items-start">
                <ChevronDoubleRightIcon
                  class="h-5 w-5 mr-1 mt-1 flex-none shrink-0"
                ></ChevronDoubleRightIcon>
                <p>
                  Omni directional label orientation detection and automatic
                  correction
                </p>
              </li>
              <li class="flex items-start">
                <ChevronDoubleRightIcon
                  class="h-5 w-5 mr-1 mt-1 flex-none shrink-0"
                ></ChevronDoubleRightIcon>
                <p>
                  Supports grayscale TIFFs, JPGs, and BMPs and can be injected
                  without binarization
                </p>
              </li>
              <li class="flex items-start">
                <ChevronDoubleRightIcon
                  class="h-5 w-5 mr-1 mt-1 flex-none shrink-0"
                ></ChevronDoubleRightIcon>
                <p>Omni font character set with adaptive Intelligence</p>
              </li>
              <li class="flex items-start">
                <ChevronDoubleRightIcon
                  class="h-5 w-5 mr-1 mt-1 flex-none shrink-0"
                ></ChevronDoubleRightIcon>
                <p>Multi-image recognition for each parcel</p>
              </li>
              <li class="flex items-start">
                <ChevronDoubleRightIcon
                  class="h-5 w-5 mr-1 mt-1 flex-none shrink-0"
                ></ChevronDoubleRightIcon>
                <p>Supports image scaling to improve recognition performance</p>
              </li>
              <li class="flex items-start">
                <ChevronDoubleRightIcon
                  class="h-5 w-5 mr-1 mt-1 flex-none shrink-0"
                ></ChevronDoubleRightIcon>
                <p>
                  Provides customizable default configurations for unique
                  customer labels
                </p>
              </li>
              <li class="flex items-start">
                <ChevronDoubleRightIcon
                  class="h-5 w-5 mr-1 mt-1 flex-none shrink-0"
                ></ChevronDoubleRightIcon>
                <p>
                  The Graphical User Interface (GUI) is localized to other
                  languages using a text resource file
                </p>
              </li>
              <li class="flex items-start">
                <ChevronDoubleRightIcon
                  class="h-5 w-5 mr-1 mt-1 flex-none shrink-0"
                ></ChevronDoubleRightIcon>
                <p>
                  Operates on Windows 7 & 10 OS and supports both 32 & 64 bit
                  processors
                </p>
              </li>
              <li class="flex items-start">
                <ChevronDoubleRightIcon
                  class="h-5 w-5 mr-1 mt-1 flex-none shrink-0"
                ></ChevronDoubleRightIcon>
                <p>
                  CEN 15448 compliant & customizable to operate in any country
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-10 flex">
          <a
            href="https://ewr1.vultrobjects.com/raf-website/parcel%20vision%20product%20sheet.pdf"
            class="text-base font-semibold leading-7 text-green-600"
            >Learn more about Parcel Vision
            <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </div>
    </div>

    <!-- Solution 1 -->
    <div id="SmartScriptSolution" class="pt-24 sm:pt-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div class="lg:pr-4">
            <div
              class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10"
            >
              <img
                class="absolute inset-0 h-full w-full object-cover"
                :src="useAsset('SmartScriptSolution.webp')"
                alt=""
              />
            </div>
          </div>
          <div>
            <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1
                class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                SmartScript
              </h1>
              <div class="max-w-xl">
                <p class="mt-6">
                  RAF’s advancements in neural network research and development
                  is a game changer! Conventional ICR engines often require
                  tailor-made algorithms and adjustments to utilize automatic
                  text recognition for different languages; accounting for
                  people’s different handwriting styles, text slant; as well as
                  dealing with technical imaging issues, e.g. camera position,
                  camera angle, uneven illumination etc.
                </p>
                <p class="mt-8">
                  RAF’s SmartScript neural networks utilize a multi-layered
                  learning approach whereby each neuron (node) in each layer
                  contains information passed from other nodes seamlessly
                  connected which provides a high degree of accuracy in both
                  spotting text regions and deciphering characters
                  simultaneously.
                </p>
                <p class="mt-8">
                  As a result, no product on the market today can match
                  SmartScript’s extraordinarily high read rate performance with
                  the lowest error rates and do so in timeframes never seen
                  before. SmartScript also sets a new benchmark in performance
                  by detecting names and building unit numbers so both full
                  address reading as well as move updates can also take place.
                </p>
              </div>
            </div>
            <div class="mt-10 flex">
              <a
                href="https://storage.googleapis.com/bpmillerwebsitestorage/SmartScriptProductSheet.pdf"
                class="text-base font-semibold leading-7 text-green-600"
                >Learn more about SmartScript
                <span aria-hidden="true">&rarr;</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Solution 2 -->
    <div id="SmartMatchSolution" class="pt-24 sm:pt-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div>
            <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1
                class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                SmartMatch
              </h1>
              <div class="max-w-xl">
                <p class="mt-6">
                  Smart Match was developed to enhance the overall read rate of
                  RAF’s MLOCR and incorporates precision tuned algorithms which
                  optimize our engine to recognize and reduce the level of
                  character noise or poor image quality that can be generated
                  from various printing techniques.
                </p>
                <p class="mt-8">
                  Introduced at the national postal forum in 2007, Smart Match
                  offers the next generation of fully integrated address
                  database directories that meet the latest United States Postal
                  Service® Coding Accuracy Support System (CASS) and Multi-line
                  Accuracy Support System (MASS) for Cycle ‘N’ and soon ‘O’
                  requirements, which includes support for DPV, LACSLink and
                  SuiteLink. Optimized to maximize the Adaptive Intelligence
                  built into Argosy Post MLOCR software, Smart Match provides
                  the highest level of address verification and data cleansing
                  performance for all your domestic and international postal
                  address needs.
                </p>
              </div>
            </div>

            <div class="mt-10">
              <a
                href="https://storage.googleapis.com/bpmillerwebsitestorage/SmartMatchProductSheet.pdf"
                class="text-base font-semibold leading-7 text-green-600"
                >Learn more about SmartMatch
                <span aria-hidden="true">&rarr;</span></a
              >
            </div>
          </div>

          <div class="order-first lg:order-last lg:pr-4">
            <div
              class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10"
            >
              <img
                class="absolute inset-0 h-full w-full object-cover"
                :src="useAsset('SmartMatchSolution.webp')"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Solution 3 -->
    <div id="ArgosyPostSolution" class="pt-24 sm:pt-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div class="lg:pr-4">
            <div
              class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10"
            >
              <img
                class="absolute inset-0 h-full w-full object-cover"
                :src="useAsset('ArgosyPostArticle2.webp')"
                alt=""
              />
            </div>
          </div>
          <div>
            <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1
                class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                Argosy Post
              </h1>
              <div class="max-w-xl">
                <p class="mt-6">
                  Our patented Adaptive Technology Multi Line Optical Character
                  Recognition (MLOCR) software simply reads more mail than any
                  other MLOCR because we respond dynamically to a wider range of
                  address locations, print sizes, fonts, and print resolutions
                  that normally cause problems for other readers.
                </p>
                <p class="mt-8">
                  Argosy Post Platinum employs multiple reading algorithms to
                  maximize finalization rates. In essence, our adaptive
                  intelligence process offers our customers a single recognition
                  engine platform with the virtual processing power that is
                  superior to even multiple OCR readers. The result of which is
                  enhanced read rates and minimized errors. All this processing
                  is occurring while using the computing power and efficiency of
                  a single host computer.
                </p>
                <p class="mt-8">
                  So whether you are trying to process shiny/glossy mail, flats,
                  mail with poor contrast, color, or difficult fonts, Argosy
                  Post Platinum will provide the highest possible read rate for
                  your mail operation.
                </p>
              </div>
            </div>

            <div class="mt-10 flex">
              <a
                href="https://storage.googleapis.com/bpmillerwebsitestorage/ArgosyPostProductSheet.pdf"
                class="text-base font-semibold leading-7 text-green-600"
                >Learn more about Argosy Post
                <span aria-hidden="true">&rarr;</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Solution 4 -->
    <div id="CenSolution" class="pt-24 sm:pt-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div>
            <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1
                class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                CEN Compliant Solutions
              </h1>
              <div class="max-w-xl">
                <p class="mt-6">
                  To meet the growing demand for leading edge solutions
                  BlueCrest and RAF Technology have jointly developed an
                  advanced product portfolio that enables innovative postal
                  operators to both enhance their core letter mail business as
                  well as capture a greater share of the booming parcel market.
                  BlueCrest recently deployed its new Vantage sorters to
                  modernize the postal networks for both Correios Brazil and
                  Croatia Post. These organizations chose BlueCrest and RAF
                  Technology as they needed the best turnkey solution offering
                  highly efficient, fast hardware with the most advanced
                  software. The rapid deployment resulted in enhanced network
                  capacity and efficiency on the ground in short order.
                </p>
                <p class="mt-8">
                  These solutions included such critical attributes as full
                  address machine print OCR, full address handwriting ICR, full
                  name recognition on machine and handwriting addresses to
                  provide mover’s functionality, mail facing, complete directory
                  redesign to create more precise match rates, mail type
                  recognition for special handling requirements, and address
                  learning systems for continuous directory improvement, among
                  others. BlueCrest also deployed its VariSort transport which
                  is specifically designed to allow operators to expand their
                  operation and offer new competitive products to their
                  customers in the high growth e-commerce flats and small parcel
                  delivery business.
                </p>
                <p class="mt-8">
                  These advanced products were deployed with an open
                  architecture design using a central control, CEN compliant,
                  software system which ensures the customers can modify and
                  enhance these at their own discretion now and in to the
                  future. These centralized solutions also offer a scalable
                  network platform for generating new revenue sources for postal
                  operators in last mile delivery and cross border services.
                </p>
              </div>
            </div>
          </div>

          <div class="order-first lg:order-last lg:pr-4">
            <div
              class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10"
            >
              <img
                class="absolute inset-0 h-full w-full object-cover"
                :src="useAsset('CenSolution.webp')"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
