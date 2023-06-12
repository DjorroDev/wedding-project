<script setup>

// const name = reactive('')
// const isHadir = reactive(null)
// const tamu = reactive(0)

const rsvp = reactive({
  name: '',
  isHadir: null,
  tamu: 0,
})

const submitHandler = () => {
    if(!rsvp.isHadir) {
        rsvp.tamu = 0;
        console.log(rsvp)
    } else {
        console.log(rsvp)
    }
}

</script>

<template>
     <div class="container max-w-4xl px-8 text-center text-[#f1d6ab] bg-[#2b2b28] mx-4 rounded-2xl h-5/6 my-auto font-desc">
      <h2 class="text-5xl my-10 font-script">Konfirmasi Kehadiran</h2>
      <legend class="text-start mb-3">Nama</legend>
      <input
        v-model="rsvp.name"
        type="text" 
        placeholder="Nama Lengkap"
        class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
        <div class="flex flex-col mt-4">
          <div class="flex items-center mb-4">
            <input id="option-2" v-model="rsvp.isHadir" :value="true" type="radio" name="kehadiran"  class="h-4 w-4 border-gray-300 focus:ring-2 ">
            <label for="option-2" class="text-sm font-medium ml-2 block">
              Iya, Saya akan datang
            </label>
          </div>
          <div class="flex items-center mb-4">
            <input id="option-1" v-model="rsvp.isHadir" :value="false" type="radio" name="kehadiran" class="h-4 w-4 border-gray-300 focus:ring-2 ">
            <label for="option-1" class="text-sm font-medium ml-2 block">
              Maaf, Sepertinya tidak bisa
            </label>
        </div>
        <div v-if="rsvp.isHadir">
            <legend class="text-start mt-8 mb-3">Jumlah orang</legend>
            <input
                type="number"
                placeholder=""
                class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                v-model="rsvp.tamu"
            />
        </div>
        <button @click="submitHandler" class="px-1 py-3 my-10 bg-[#f1d6ab] w-32 text-[#2b2b28] rounded font-heading font-bold text-xl hover:bg-[#d7be96] active:bg-[#c4ad88]">
            Submit
        </button>
        </div>
    </div>
</template>