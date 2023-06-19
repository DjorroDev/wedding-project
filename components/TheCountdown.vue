<script setup>
const targetDate = new Date(2023, 6, 8);

const currentTime = ref(new Date());

// console.log(targetDate);

const days = computed(() => Math.floor((targetDate - currentTime.value) / (1000 * 60 * 60 * 24)));
const hours = computed(() =>
  Math.floor(((targetDate - currentTime.value) / (1000 * 60 * 60)) % 24)
);
const minutes = computed(() => Math.floor(((targetDate - currentTime.value) / (1000 * 60)) % 24));
const seconds = computed(() => Math.floor(((targetDate - currentTime.value) / 1000) % 60));

onMounted(() => {
  // Update current time every second
  setInterval(() => {
    currentTime.value = new Date();
  }, 1000);
});
</script>

<template>
  <ul
    class="flex justify-center h-auto my-10 flex-wrap font-thin font-heading items-center gap-8 text-3xl"
  >
    <li class="bg-cream p-3 rounded-lg">
      <span class="block">{{ days }}</span>
      HARI
    </li>
    <li class="bg-cream p-3 rounded-lg">
      <span class="block">{{ hours }}</span>
      JAM
    </li>
    <li class="bg-cream p-3 rounded-lg">
      <span class="block">{{ minutes }}</span>
      MENIT
    </li>
    <li class="bg-cream p-3 rounded-lg">
      <span class="block">{{ seconds }}</span>
      DETIK
    </li>
  </ul>
</template>
