<template>
  <main>
    <section
      v-motion
      :initial="{ y: 30, opacity: 0 }"
      :enter="{ y: 0, opacity: 1, transition: { duration: 1200 } }"
      :delay="400"
      class="mt-32 opacity-0"
    >
      <!-- Solution 0 -->
      <div id="ArgosyPostSolution" class="pt-24 sm:pt-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          >
            <div>
              <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
                <h1
                  class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  Argosy Post
                </h1>
                <div class="max-w-xl">
                  <div class="mt-8">
                    <SolutionBulletpoint
                      class="mt-5"
                      message="Resolves a wide range print sizes, fonts, and print resolutions that cause problems for standard readers."
                    />
                  </div>
                </div>
              </div>

              <div class="mt-10">
                <a
                  href="https://storage.googleapis.com/bpmillerwebsitestorage/ArgosyPostDatasheet9-23.pdf"
                  target="_blank"
                  class="text-base font-semibold leading-7 text-green-600"
                  >Learn more about Argosy Post
                  <span aria-hidden="true">&rarr;</span></a
                >
              </div>
            </div>

            <div class="order-first lg:order-last lg:pr-4 flex justify-center">
              <div
                class="relative overflow-hidden rounded-3xl bg-gray-900 w-[12rem] h-72"
              >
                <img
                  class="absolute inset-0 h-full w-full object-contain"
                  src="~/assets/ArgosyPostFeature2.png"
                  alt="SmartMatchSolution"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Solution 1 -->
      <div id="ParcelVisionSolution" class="pt-24 sm:pt-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          >
            <div>
              <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
                <h1
                  class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  Parcel Vision
                </h1>
                <div class="max-w-xl">
                  <div class="mt-8">
                    <SolutionBulletpoint
                      class="mt-5"
                      message="Enables OCR for different parcel shapes/sizes."
                    />
                    <SolutionBulletpoint
                      message="Omni-directional recognition."
                    />
                    <SolutionBulletpoint
                      message="Automatically identifies critical points of data to be extracted."
                    />
                  </div>
                </div>
              </div>

              <div class="mt-10">
                <a
                  href="https://storage.googleapis.com/bpmillerwebsitestorage/ParcelVisionDatasheet9-23.pdf"
                  target="_blank"
                  class="text-base font-semibold leading-7 text-green-600"
                  >Learn more about Parcel Vision
                  <span aria-hidden="true">&rarr;</span></a
                >
              </div>
            </div>

            <div class="order-first lg:order-last lg:pr-4 flex justify-center">
              <div
                class="relative overflow-hidden rounded-3xl bg-gray-900 w-[12rem] h-72"
              >
                <img
                  class="absolute inset-0 h-full w-full object-contain"
                  src="~/assets/ParcelVisionFeature2.png"
                  alt="SmartMatchSolution"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Solution 0 -->
      <div id="ArgosyMobileSolution" class="pt-24 sm:pt-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          >
            <div>
              <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
                <h1
                  class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  Argosy Mobile
                </h1>
                <div class="max-w-xl">
                  <div class="mt-8">
                    <SolutionBulletpoint
                      class="mt-5"
                      message="Advanced data extraction and address verification mobile application which improves parcel induction time, reduces manual handling and undeliverable-as-addressed (UAA) cost."
                    />
                  </div>
                </div>
              </div>

              <div class="mt-10">
                <a
                  href="https://storage.googleapis.com/bpmillerwebsitestorage/ArgosyMobileDatasheet9-23.pdf"
                  target="_blank"
                  class="text-base font-semibold leading-7 text-green-600"
                  >Learn more about Argosy Mobile
                  <span aria-hidden="true">&rarr;</span></a
                >
              </div>
            </div>

            <div class="order-first lg:order-last lg:pr-4 flex justify-center">
              <div
                class="relative overflow-hidden rounded-3xl bg-gray-900 w-[12rem] h-72"
              >
                <img
                  class="absolute inset-0 h-full w-full object-contain"
                  src="~/assets/ArgosyMobileFeature2.png"
                  alt="SmartMatchSolution"
                />
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
                  Smart Match
                </h1>
                <div class="max-w-xl">
                  <div class="mt-8">
                    <SolutionBulletpoint
                      class="mt-5"
                      message="Uses innovative AI techniques and algorithms exceeding established norms. Easily adaptable to various handwriting style for various countries."
                    />
                  </div>
                </div>
              </div>

              <div class="mt-10">
                <a
                  href="https://storage.googleapis.com/bpmillerwebsitestorage/SmartMatchDatasheet10-17.pdf"
                  target="_blank"
                  class="text-base font-semibold leading-7 text-green-600"
                  >Learn more about Smart Match
                  <span aria-hidden="true">&rarr;</span></a
                >
              </div>
            </div>

            <div class="order-first lg:order-last lg:pr-4 flex justify-center">
              <div
                class="relative overflow-hidden rounded-3xl bg-gray-900 w-[12rem] h-72"
              >
                <img
                  class="absolute inset-0 h-full w-full object-contain"
                  src="~/assets/SmartMatchFeature2.png"
                  alt="SmartMatchSolution"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Solution 0 -->
      <div id="SmartScriptSolution" class="pt-24 sm:pt-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          >
            <div>
              <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
                <h1
                  class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  Smart Script
                </h1>
                <div class="max-w-xl">
                  <div class="mt-8">
                    <SolutionBulletpoint
                      class="mt-5"
                      message="Recognize and reduce character noise."
                    />
                    <SolutionBulletpoint
                      message="Cross-reference - fuzzy logic string searches."
                    />
                  </div>
                </div>
              </div>

              <div class="mt-10">
                <a
                  href="https://storage.googleapis.com/bpmillerwebsitestorage/SmartScriptDatasheet9-23.pdf"
                  target="_blank"
                  class="text-base font-semibold leading-7 text-green-600"
                  >Learn more about Smart Script
                  <span aria-hidden="true">&rarr;</span></a
                >
              </div>
            </div>

            <div class="order-first lg:order-last lg:pr-4 flex justify-center">
              <div
                class="relative overflow-hidden rounded-3xl bg-gray-900 w-[12rem] h-72"
              >
                <img
                  class="absolute inset-0 h-full w-full object-contain"
                  src="~/assets/SmartScriptFeature2.png"
                  alt="SmartMatchSolution"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Solution 0 -->
      <div id="SigVerifySolution" class="pt-24 sm:pt-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          >
            <div>
              <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
                <h1
                  class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  Sig Verify
                </h1>
                <div class="max-w-xl">
                  <div class="mt-8">
                    <SolutionBulletpoint
                      class="mt-5"
                      message="Signature matching to automate validation step for voting by mail."
                    />
                    <SolutionBulletpoint
                      message="Utilizes latest artificial intelligence technology optimized for signature matching."
                    />
                    <SolutionBulletpoint
                      message="Trainable to accommodate natural signature variance at different customers to ensure optimal performance."
                    />
                  </div>
                </div>
              </div>

              <div class="mt-10">
                <a
                  href="https://raf.com/whitepapers"
                  target="_blank"
                  class="text-base font-semibold leading-7 text-green-600"
                  >Learn more about Sig Verify
                  <span aria-hidden="true">&rarr;</span></a
                >
              </div>
            </div>

            <div class="order-first lg:order-last lg:pr-4 flex justify-center">
              <div
                class="relative overflow-hidden rounded-3xl bg-gray-900 w-[12rem] h-72"
              >
                <img
                  class="absolute inset-0 h-full w-full object-contain"
                  src="~/assets/SigVerifyFeature2.png"
                  alt="SmartMatchSolution"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
