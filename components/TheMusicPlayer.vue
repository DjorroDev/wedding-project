<script setup>
const audio = new Audio('pamungkas-deeper.mp3')
// console.log(audio)
const isMuted = ref(audio.muted)
</script>

<template>
    <button @click="audio.play()" class="fixed bottom-7 right-16 w-10 h-10 bg-white rounded-full z-20">
        <Icon name="mdi-light:play" size="1.5em" />
    </button>
    <div
        class="fixed bottom-8 right-5 w-8 h-8 bg-white rounded-full z-20"
        :class="isMuted ? '': 'animate-ping'"
        />
    <button @click="audio.muted = !audio.muted, isMuted = audio.muted" class="fixed bottom-7 right-4 w-10 h-10 bg-white rounded-full z-20">
        <Icon :name="isMuted ? 'mdi-light:music-off' : 'mdi-light:music'" size="1.5em" />
    </button>
</template>