<script setup>
import { useMotion } from "@vueuse/motion";

const audio = new Audio("pamungkas-deeper.mp3");
const isMuted = ref(audio.muted);

// console.log(audio);

const props = defineProps({
  isShow: Boolean,
  tamu: String,
});

const emit = defineEmits(["change", "changeInvite"]);

const handle = () => {
  audio.play();
  motionInstance.leave(() => {
    emit("change");
  });
};

const target = ref();

const motionInstance = useMotion(target, {
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 30,
      mass: 1,
      delay: 200,
    },
  },
  leave: {
    opacity: 0,
    y: -100,
    transition: {
      type: "spring",
      stiffness: 30,
      mass: 1,
      delay: 200,
    },
  },
});
</script>

<template>
  <section
    v-if="props.isShow"
    ref="target"
    class="w-full h-screen bg-center bg-cover bg-[url('https://a.storyblok.com/f/188427/3381x5063/000ad73110/gallery15.jpg/m/filters:format(webp)')] z-50"
  >
    <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
      <div class="container px-4 mx-auto max-w-4xl text-center relative">
        <h2 class="text-3xl sm:text-5xl font-bold font-heading text-[#f1d6ab]">The Wedding Of</h2>
        <div
          class="flex flex-col first-letter:max-w-3xl my-10 mx-auto font-script text-7xl text-[#f1d6ab]"
        >
          <p class="mr-24">Dafara</p>
          <p class="font-heading text-3xl">&</p>
          <p class="ml-24">Michelle</p>
        </div>
        <div class="text-[#f1d6ab] font-desc">
          <p class="text-xl">Dear Mr./ Mrs./ Ms.</p>
          <div class="text-4xl my-2">{{ tamu }}</div>
          <p class="mt-4">You are cordially invited to our wedding.</p>
        </div>
        <button
          type="button"
          class="inline-flex mt-10 justify-center rounded-md border font-heading font-bold border-transparent bg-[#f1d6ab] px-4 py-2 text-sm font-mediu active:bg-[#e9c893] focus:outline-none"
          @click="handle"
          emit
        >
          Open invitation
        </button>
      </div>
    </div>
  </section>
  <!-- <TheMusicPlayer :audio="audio" v-if="!props.isShow" /> -->

  <!-- Music Handler -->
  <div v-if="!props.isShow">
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
  </div>
</template>
