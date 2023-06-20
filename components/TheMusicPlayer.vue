<script setup>
// const prop = defineProps({
//   audio: new Audio(),
// });

const audio = new Audio("pamungkas-deeper.mp3");

// console.log(audio)
const isMuted = ref(audio.muted);
</script>

<template>
  <!-- The Button to play moved to the open invitaion button -->
  <button
    @click="audio.play()"
    class="fixed bottom-10 right-28 w-10 h-10 bg-white rounded-full z-20"
  >
    <Icon name="mdi-light:play" size="1.5em" />
  </button>
  <div
    class="fixed bottom-10 right-8 w-12 h-12 bg-white rounded-full z-20"
    :class="isMuted ? '' : 'animate-ping'"
  />
  <button
    @click="(audio.muted = !audio.muted), (isMuted = audio.muted)"
    class="fixed bottom-9 right-7 w-14 h-14 bg-white rounded-full z-20 border-4 border-cream"
  >
    <Icon :name="isMuted ? 'mdi-light:music-off' : 'mdi-light:music'" size="2.5em" />
  </button>
</template>
