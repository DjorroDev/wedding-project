<script setup>
defineProps({
  data: Object,
});
</script>

<template>
  <div
    v-motion
    :initial="{
      opacity: 0,
    }"
    :enter="{
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 30,
        mass: 1,
        delay: 200,
      },
    }"
    class="flex overflow-hidden flex-col justify-between py-3 shadow-md px-3 gap-1 min-w-[280px] min-h-[200px] bg-white rounded-md text-[#2b2b28]"
  >
    <h3 class="font-heading text-3xl">{{ data.name }}</h3>
    <p class="font-desc text-sm text-start">{{ data.wish }}</p>
    <div class="h-3" />
    <div class="flex justify-between border-t-2 text-sm w-full pt-2 border-black">
      <p class="flex items-center">
        <Icon size="20" name="mdi-light:calendar" /> {{ data.date.toDate().toLocaleDateString() }}
      </p>
      <p class="flex items-center">
        <Icon size="20" name="mdi-light:clock" /> {{ data.date.toDate().toLocaleTimeString() }}
      </p>
    </div>
  </div>
</template>
