<script setup>
const isShow = ref(true);

const route = useRoute();
const namaTamu = route.query.to ? route.query.to : "Tamu";

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
      class="w-full h-screen bg-center bg-cover fixed -z-50"
      style="
        background-image: url('https://a.storyblok.com/f/188427/4000x6000/3dda4448a9/gallery12.jpg/m/filters:format(webp)');
      "
    >
      <div
        class="relative flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12"
      >
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
          <h2 class="text-4xl -mt-20 lg:text-5xl font-bold font-heading text-[#f1d6ab]">
            The Wedding of
          </h2>
          <div
            class="flex flex-col first-letter:max-w-3xl my-10 mx-auto font-script text-5xl gap-4 text-[#f1d6ab]"
          >
            <p class="">Dafara Wiyogo Pangestu</p>
            <p class="font-heading text-4xl">&</p>
            <p class="">Michelle Simadirja</p>
          </div>
          <h3 class="text-3xl mt-5 font-script text-[#f1d6ab] font-bold">Sabtu, 08 Juli 2023</h3>
        </div>
        <!-- <p class="absolute bottom-36 font-heading text-cream font-bold text-2xl">scroll</p>
        <Icon
          class="absolute bottom-12 text-[#f1d6ab] animate-bounce"
          size="4em"
          name="material-symbols:arrow-downward-rounded"
        /> -->
      </div>
    </section>
    <div class="h-screen -z-50"></div>
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
    <section class="relative flex flex-col h-auto py-10 bg-light text-[#2b2b28]">
      <div
        class="absolute inset-0 bg-contain opacity-40"
        style="background-image: url('flower2.jpg')"
      ></div>
      <div v-motion-custom class="container mx-auto text-center">
        <h2 class="text-7xl mb-12 font-script font-medium">The Beloved</h2>
      </div>
      <div class="container mx-auto">
        <div v-motion-custom class="flex flex-col relative items-end my-10 mb-20">
          <div class="absolute right-14 py-4 pl-3 -top-16 w-64 h-80 bg-[#F9D6AC]">
            <h2 class="text-[#2b2b28] font-heading text-3xl font-bold">The Groom</h2>
          </div>
          <NuxtImg
            format="webp"
            class="w-64 h-auto z-10 px-2"
            src="https://a.storyblok.com/f/188427/3376x4220/23cc21e1d5/dsc00810.JPG"
          />
          <div class="flex flex-col items-end text-end px-2">
            <h2 class="text-4xl my-1 font-heading">Dafara Wiyogo Pangestu</h2>
            <p class="font-desc text-sm">
              Lahir di jakarta, 18 juli 1998 (24th). Anak pertama dari Papi Yugo Saptanto (Jhosy)
              dan Mami Lely Maruliana (Wiwiek)
            </p>
          </div>
        </div>
        <div v-motion-custom class="relative flex flex-col items-start my-10">
          <div class="absolute left-14 p-4 -top-16 z-0 w-64 h-80 bg-[#F9D6AC]">
            <h2 class="flex justify-end text-[#2b2b28] font-heading text-4xl font-bold">
              The Bride
            </h2>
          </div>
          <NuxtImg
            format="webp"
            class="w-64 z-10 h-auto px-2"
            src="https://a.storyblok.com/f/188427/3376x4220/e67c58c580/dsc00822.JPG"
          />
          <div class="flex flex-col items-start px-2 py-2">
            <h2 class="text-4xl my-1 font-heading">Michelle Simadirja</h2>
            <p class="font-desc text-sm">
              Lahir di Tangerang, 04 Maret 1998 (25th). Anak pertama dari Papi Dedi Simadirja (Ndet)
              dan Mami Ismini (Iis)
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Gallery -->
    <section class="flex flex-col px-8 h-auto bg-[#F9D6AC] py-10">
      <div class="container h-auto max-w-lg mx-auto text-center">
        <h2 class="text-7xl mb-10 font-script text-[#2b2b28]">Glimpse of Us</h2>
        <TheGallery />
      </div>
    </section>
    <!-- Countdown -->
    <section class="relative h-auto py-12 bg-light text-[#2b2b28]">
      <div
        class="absolute inset-0 bg-contain opacity-25"
        style="background-image: url('flower2.jpg')"
      ></div>
      <div
        v-motion-custom
        class="flex flex-col items-center justify-centercontainer mx-auto text-center"
      >
        <h2 class="text-6xl font-script">Countdown To our happy day</h2>
        <TheCountdown />
        <h3 v-motion-custom class="text-4xl mb-12 mt-2 font-script">Sabtu, 08 Juli 2023</h3>
        <!-- <h2 v-motion-custom class="text-6xl font-script">Acara</h2> -->
        <div
          class="grid grid-cols-2 grid-rows-1 w-full divide-x-2 divide-[#2b2b28] text-2xl font-heading"
        >
          <div v-motion-custom>
            <h3 class="font-script text-5xl">Akad</h3>
            <p>09.00 - selesai</p>
          </div>
          <!-- <div class="border-r-2 border-black h-full w-1">s</div> -->
          <div v-motion-custom>
            <h3 class="font-script text-5xl">Reception</h3>
            <p>14.00 - 17.30</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Alamat -->
    <section class="flex justify-center h-auto bg-[#F9D6AC] py-10 border-black">
      <div class="container max-w-4xl px-2 flex flex-col gap-7 mx-auto text-center">
        <h2 v-motion-custom class="text-6xl -mb-5 font-script text-[#2b2b28]">Alamat / Map</h2>
        <div>
          <p v-motion-custom class="font-desc mb-3">
            GRAHA SIENA 2 BLOK M17 NO.22, CITRA RAYA, CIAKAR, PANONGAN, KAB. TANGERANG
          </p>
          <p v-motion-custom class="font-heading text-2xl">Rumah mempelai wanita</p>
        </div>
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
    <TheLive />

    <!-- Konfirmasi kehadiran -->
    <section class="relative flex justify-center h-auto py-20 bg-light">
      <div
        class="absolute inset-0 bg-contain opacity-25"
        style="background-image: url('flower2.jpg')"
      ></div>
      <TheRSVP v-motion-custom :name="namaTamu" />
    </section>
    <!-- Make a wish -->
    <TheWish />
    <!-- Minta minta -->
    <section class="relative h-auto py-10 pb-32 bg-light">
      <div class="flex justify-center gap-10 flex-col items-center container mx-auto text-center">
        <h2 class="text-6xl -mb-6 font-script text-[#2b2b28] z-10">Share Love</h2>
        <p class="mb-10 font-desc z-10 px-2">
          Your prayers & blessings at our wedding is enough as a gift, but if you want to give more,
          we are happy to receive it and it will complement our happiness even more
        </p>
        <TheCardGift
          title="BCA"
          name="a.n Dafara Wiyogo Pangestu"
          image="/logo_bca.png"
          rek="6790232494"
        />
        <TheCardGift
          title="BCA"
          name="a.n Michelle Simadirja"
          image="/logo_bca.png"
          rek="7641759094"
        />
        <TheCardGift
          title="Dana"
          name="a.n Michelle Simadirja"
          image="/qr/danamicel.jpg"
          rek="082113718128"
          link="https://link.dana.id/qr/4s5gf8z"
        />
        <TheCardGift
          title="Dana"
          name="a.n Dafara Wiyogo Pangestu"
          image="/qr/danadafa.jpg"
          rek="08974144611"
          link="https://link.dana.id/qr/v4uo6ag"
        />
        <TheCardGift
          title="ShopeePay"
          name="Michelle Simadirja"
          image="/qr/shopeemicel.jpg"
          rek="082113718128"
          link="https://wsa.wallet.airpay.co.id/qr/00cab93b1216418eb555"
        />
        <TheCardGift
          title="ShopeePay"
          name="Dafara Wiyogo Pangestu"
          image="/qr/shopeedafa.jpg"
          rek="08974144611"
          link="https://wsa.wallet.airpay.co.id/qr/000b33c0d83ea7bdacac"
        />

        <!-- <div class="w-72 h-96 bg-cream rounded-lg">bca</div>
        <div class="w-72 h-96 bg-cream rounded-lg">bca</div>
        <div class="w-72 h-96 bg-cream rounded-lg">bca</div> -->
      </div>
      <div
        class="absolute inset-0 bg-contain opacity-30"
        style="background-image: url('/flower2.jpg')"
      ></div>
    </section>
    <footer class="px-4 py-10 bg-cream bg-opacity-90 text-[#2b2b28] font-desc">
      <h2 class="text-lg">Thank You</h2>
      <h2 class="mb-2 text-sm">For all from both sides of big Family</h2>
      <p class="border-t pt-2 border-black">
        Made with <Icon name="material-symbols:favorite" /> by Djorro
      </p>
      <p class="text-[8px]">bg & icon by freepik</p>
    </footer>
  </div>
</template>
