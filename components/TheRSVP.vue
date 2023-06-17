<script setup>
import { addDoc, collection } from "firebase/firestore";

const props = defineProps(["name"]);

const { $firestore } = useNuxtApp();

const isLoading = ref(false);
const isOpen = ref(false);

const error = ref("");

const rsvp = reactive({
  name: props.name,
  isHadir: null,
  jumlahTamu: 1,
});

const submitHandler = async () => {
  error.value = "";
  isLoading.value = true;

  // required validating
  if (rsvp.name == "" || rsvp.isHadir == null) {
    error.value = "Semua data wajib diisi";
    isLoading.value = false;

    return;
  }

  // Tamu validating
  if (!rsvp.isHadir) {
    rsvp.jumlahTamu = 0;
  } else if (!rsvp.jumlahTamu >= 1) {
    // console.log("p");
    error.value = "Jumlah tamu tidak bisa 0 atau kurang dari 1";
    isLoading.value = false;

    return;
  }

  await addDoc(collection($firestore, "rsvp"), rsvp).then((res) => {
    isLoading.value = false;
    isOpen.value = true;
    console.log(res);
  });
};
</script>

<template>
  <div
    class="container max-w-4xl px-8 py-10 text-center text-[#2b2b28] bg-[#f1d6ab] mx-4 rounded-2xl h-5/6 my-auto font-desc"
  >
    <h2 class="text-5xl mb-10 font-script">Konfirmasi Kehadiran</h2>
    <p v-if="error" class="p-2 text-start text-red-500 mb-3 bg-red-50 max-w-fit font-bold">
      {{ error }}
    </p>
    <legend class="text-start mb-3">Nama</legend>
    <input
      v-model="rsvp.name"
      type="text"
      placeholder="Nama Lengkap"
      class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
    />

    <div class="flex flex-col mt-4">
      <div class="flex items-center mb-4">
        <input
          id="option-2"
          v-model="rsvp.isHadir"
          :value="true"
          type="radio"
          name="kehadiran"
          class="h-4 w-4 border-gray-300 focus:ring-2"
        />
        <label for="option-2" class="text-sm font-medium ml-2 block"> Iya, Saya akan datang </label>
      </div>

      <div class="flex items-center mb-4">
        <input
          id="option-1"
          v-model="rsvp.isHadir"
          :value="false"
          type="radio"
          name="kehadiran"
          class="h-4 w-4 border-gray-300 focus:ring-2"
        />
        <label for="option-1" class="text-sm font-medium ml-2 block">
          Maaf, Sepertinya tidak bisa
        </label>
      </div>

      <div v-if="rsvp.isHadir">
        <legend class="text-start mt-8 mb-1">Jumlah orang</legend>
        <input
          type="number"
          placeholder=""
          class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          v-model="rsvp.jumlahTamu"
        />
      </div>

      <button
        @click="submitHandler"
        class="px-1 py-3 my-10 bg-[#2b2b28] w-32 text-[#f1d6ab] rounded font-heading font-bold text-xl hover:bg-[#d7be96] active:bg-[#c4ad88]"
      >
        Submit
      </button>

      <div
        v-if="isLoading"
        class="w-8 h-8 border-4 rounded-full border-[#171716] border-r-[#f1d6ab] animate-spin"
      ></div>
    </div>

    <!-- Dialog Modal -->
    <HeadlessTransitionRoot appear :show="isOpen" as="template">
      <HeadlessDialog as="div" @close="isOpen = false" class="relative z-10">
        <HeadlessTransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <HeadlessTransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <HeadlessDialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#fffaf3] text-[#2b2b28] p-6 text-left align-middle shadow-xl transition-all"
              >
                <HeadlessDialogTitle as="h3" class="text-xl leading-6 font-heading font-bold">
                  Berhasil
                </HeadlessDialogTitle>
                <div class="mt-2">
                  <p class="font-desc">Data Konfirmasi kehadiran sudah terkirim terima kasih.</p>
                </div>

                <div class="mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-[#f1d6ab] px-4 py-2 text-sm font-mediu active:bg-[#e9c893] focus:outline-none"
                    @click="isOpen = false"
                  >
                    Tutup
                  </button>
                </div>
              </HeadlessDialogPanel>
            </HeadlessTransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </div>
</template>
