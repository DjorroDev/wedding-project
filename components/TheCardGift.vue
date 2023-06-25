<script setup>
defineProps({
  title: String,
  name: String,
  rek: String,
  image: String,
});

const handleCopy = (rek) => {
  navigator.clipboard.writeText(rek);
};
</script>

<template>
  <div v-motion-custom class="w-72 h-auto p-5 bg-cream font-bold rounded-lg font-heading z-10">
    <h3>{{ title }}</h3>
    <img class="w-40 mx-auto my-6" :src="image" alt="qr" />
    <div class="">No. rek</div>
    <p class="text-xl">{{ rek }}</p>
    <p>{{ name }}</p>
    <div class="flex flex-col justify-center items-center">
      <button
        Class="inline-flex items-center gap-1 mt-2 justify-center rounded-md border font-heading font-bold border-transparent bg-light shadow px-3 py-2 text-sm font-mediu active:bg-[#e9c893] focus:outline-none"
        @click="handleCopy(rek)"
      >
        Copy <Icon size="1.3em" name="material-symbols:content-copy-outline-rounded" />
      </button>
      <a
        class="inline-flex mt-2 gap-1 justify-center rounded-md border font-heading font-bold border-transparent bg-light shadow px-4 py-2 text-sm font-mediu active:bg-[#e9c893] focus:outline-none"
        href="https://wa.me/6285156451617"
        target="_blank"
        >Konfirmasi WA <Icon size="1.3em" name="material-symbols:perm-phone-msg-outline-rounded" />
      </a>
    </div>
  </div>
</template>
