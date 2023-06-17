<script setup>
const isShow = ref(true);

const route = useRoute();
const namaTamu = route.query.kpd ? route.query.kpd : "Tamu";

const config = useRuntimeConfig();

// Access baseURL universally
const baseURL = config.app.baseURL;
console.log(baseURL);

// Showing the invitation
onMounted(() => {
  isShow.value = true;
});

useHead({
  title: "The Wedding of Dafara & Michelle",
  htmlAttrs: {
    lang: "id",
  },
  meta: [
    { name: "description", content: "You are invited to join our wedding" },
    {
      hid: "og:image:secure_url",
      property: "og:image:secure_url",
      content: `https://a.storyblok.com/f/188427/4000x6000/16af063ecf/gallery6.jpg/m/filters:format(webp)`,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: "You are invited to join our wedding",
    },
    {
      property: "og:title",
      hid: "og:title",
      content: "The Wedding of Dafara & Michelle",
    },
    {
      hid: "og:image",
      property: "og:image",
      content: `https://a.storyblok.com/f/188427/4000x6000/16af063ecf/gallery6.jpg/m/filters:format(webp)`,
    },
    {
      hid: "og:image:width",
      property: "og:image:width",
      content: `300`,
    },
    {
      hid: "og:image:height",
      property: "og:image:height",
      content: `300`,
    },
  ],
});
</script>

<template>
  <TheOpenInvitation :tamu="namaTamu" :isShow="isShow" @change="isShow = false" />
  <!-- <TheNavbar/> -->
  <div v-if="!isShow">
    <!-- <TheMusicPlayer /> -->
    <section>
      <section
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
        class="w-full h-screen bg-center bg-cover -z-50 fixed"
        style="
          background-image: url('https://a.storyblok.com/f/188427/4000x6000/3dda4448a9/gallery12.jpg/m/filters:format(webp)');
        "
      >
        <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
          <div
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 30,
                mass: 1,
                delay: 200,
              },
            }"
            class="container px-4 mx-auto max-w-4xl text-center relative"
          >
            <h2 class="text-2xl -mt-20 lg:text-5xl font-bold font-heading text-[#f1d6ab]">
              The Wedding of
            </h2>
            <div
              class="flex flex-col first-letter:max-w-3xl my-10 mx-auto font-script text-7xl text-[#f1d6ab]"
            >
              <p class="mr-24">Dafara</p>
              <p class="font-heading text-3xl">&</p>
              <p class="ml-24">Michele</p>
            </div>
          </div>
        </div>
      </section>
    </section>
    <div class="h-screen"></div>
    <!-- Light -->
    <!-- <section class="flex justify-center h-auto bg-[#f1d6ab]">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl my-10 font-serif font-bold text-[#2b2b28]">Lorem, ipsum</h2>
      </div>
    </section> -->
    <!-- drakk -->
    <!-- <section class="flex justify-center h-auto bg-[#ffff] text-[#f1d6ab]">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl my-10 font-serif font-bold ">Lorem, ipsum</h2>
      </div>
    </section> -->
    <!-- Mempelai -->
    <section class="flex flex-col h-auto py-10 bg-[#fffcfc] px-2 text-[#2b2b28]">
      <div v-motion-custom class="container mx-auto text-center">
        <h2 class="text-7xl mb-10 font-script font-medium">The Beloved</h2>
      </div>
      <div class="container mx-auto">
        <div v-motion-custom class="flex flex-col relative items-end my-10 mb-20">
          <div class="absolute right-14 -top-12 -z-8 w-64 h-80 bg-[#f1d6ab]">
            <h2 class="text-[#2b2b28] font-heading mt-2 ml-3 text-3xl font-bold">The Bride</h2>
          </div>
          <img class="w-64 h-auto z-10" src="/DSC08625.jpg" />
          <!-- <NuxtImg
            subject to be change with thiss
            class="w-64 h-80 object-top object-cover z-10"
            src="https://a.storyblok.com/f/188427/3376x6000/8bccd53840/dafara.JPG"
          /> -->
          <h2 class="text-5xl my-1 font-heading">Bang Dap</h2>
          <p class="w-2/3 text-end font-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor doloribus natus
            voluptatum!
          </p>
        </div>
        <div v-motion-custom class="relative flex flex-col items-start my-10">
          <div class="absolute left-14 -top-12 z-0 w-64 h-80 bg-[#f1d6ab]">
            <h2 class="flex justify-end text-[#2b2b28] font-heading mt-2 mr-3 text-3xl font-bold">
              The Groom
            </h2>
          </div>
          <img class="w-64 z-10 h-auto" src="/DSC08506.jpg" />
          <h2 class="text-5xl my-1 font-heading">Ci Micel</h2>
          <p class="w-2/3 font-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor doloribus natus
            voluptatum!
          </p>
        </div>
      </div>
    </section>
    <!-- Gallery -->
    <section class="flex flex-col px-8 h-auto bg-[#f1d6ab] py-10">
      <div class="container h-auto max-w-lg mx-auto text-center">
        <h2 class="text-7xl mb-10 font-script text-[#2b2b28]">Glimpse of Us</h2>
        <TheGallery />
      </div>
    </section>
    <!-- Countdown -->
    <section class="flex justify-center h-auto bg-[#ffff] text-[#2b2b28]">
      <div v-motion-custom class="container mx-auto text-center">
        <h2 class="text-6xl my-10 font-script">Countdown Acara</h2>
        <TheCountdown />
        <h2 v-motion-custom class="text-6xl my-10 font-script">Timeline</h2>
      </div>
    </section>
    <!-- Alamat -->
    <section class="flex justify-center h-auto bg-[#f1d6ab] border-b-2 py-10 border-black">
      <div class="container max-w-4xl px-2 flex flex-col gap-7 mx-auto text-center">
        <h2 v-motion-custom class="text-6xl mb-10 font-script text-[#2b2b28]">Alamat / Map</h2>
        <p v-motion-custom class="font-desc">
          GRAHA SIENA 2 BLOK M17 NO.22, CITRA RAYA, CIAKAR, PANONGAN, KAB. TANGERANG
        </p>
        <iframe
          v-motion-custom
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d701.0866206010246!2d106.52876074601097!3d-6.270985983280533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTYnMTUuNSJTIDEwNsKwMzEnNDQuMSJF!5e0!3m2!1sen!2sid!4v1686399621811!5m2!1sen!2sid"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen="false"
          loading="eager"
          referrerpolicy="no-referrer-when-downgrade"
          class="w-auto"
        >
        </iframe>
      </div>
    </section>
    <!-- To do Add Livestream -->
    <section class="flex justify-center h-auto font-desc bg-[#ffff] text-[#f1d6ab]">
      <div class="container mx-auto text-center">
        <h2 class="text-6xl my-10 font-serif font-script">Watch Livestream</h2>
        <div>The Bride POV</div>
        <div>The Groom POV</div>
      </div>
    </section>
    <!-- Konfirmasi kehadiran -->
    <section class="flex justify-center h-auto py-20 bg-white">
      <TheRSVP v-motion-custom :name="namaTamu" />
    </section>
    <!-- Make a wish -->
    <TheWish />
    <!-- Minta minta -->
    <section class="flex justify-center h-auto bg-[#f1d6ab]">
      <div class="container mx-auto text-center">
        <h2 class="text-6xl my-10 font-script text-[#2b2b28]">Share Love</h2>
      </div>
    </section>
  </div>
</template>
