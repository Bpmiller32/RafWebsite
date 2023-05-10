<script setup lang="ts">
const props = defineProps(["image", "link", "delay"]);

const { width } = useWindowSize();

const anmiationEnabled = ref();

onMounted(() => {
  if (width.value > 1038) {
    anmiationEnabled.value = true;
  } else {
    anmiationEnabled.value = false;
  }
});

watch(
  () => width.value,
  () => {
    if (width.value > 1038) {
      anmiationEnabled.value = true;
    } else {
      anmiationEnabled.value = false;
    }
  }
);

const imageRef = ref(null);
const styleRef = ref("");

useTimeoutFn(() => {
  styleRef.value = "transform 0.25s ease-out";
}, 2000);

const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(imageRef);

const imageTransform = computed(() => {
  const maxRotation = 6;

  const rotateX = (
    maxRotation / 2 -
    (elementY.value / elementHeight.value) * maxRotation
  ).toFixed(2);

  const rotateY = (
    maxRotation / 2 -
    (elementX.value / elementWidth.value) * maxRotation
  ).toFixed(2);

  if (isOutside.value) {
    return "";
  } else {
    return `perspective(${elementWidth.value}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
});

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
  <NuxtLink :to="{ path: '/solutions', hash: props.link }">
    <div
      v-if="anmiationEnabled === true"
      ref="imageRef"
      class="relative opacity-0"
      v-motion
      :initial="{ y: 50, opacity: 0 }"
      :enter="{ y: 0, opacity: 1, transition: { duration: 500 } }"
      :delay="props.delay"
      :style="{
        transform: imageTransform,
        transition: styleRef,
      }"
    >
      <img
        :src="useAsset(props.image)"
        alt=""
        class="mb-8 aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg hover:drop-shadow-[0_5px_15px_#000000]"
      />
      <div
        class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
      />
    </div>

    <div v-if="anmiationEnabled === false" class="relative opacity-100">
      <img
        :src="useAsset(props.image)"
        alt=""
        class="mb-8 aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
      />
      <div
        class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
      />
    </div>
  </NuxtLink>
</template>
