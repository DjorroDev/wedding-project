<script setup>

const targetDate = new Date(2023, 8, 31)

const currentTime = ref(new Date())

// console.log(targetDate - currentTime.value)

const days = computed(() => Math.floor((targetDate - currentTime.value) / (1000 * 60 * 60 * 24)))
const hours = computed(() => Math.floor((targetDate - currentTime.value) / (1000 * 60 * 60) % 24))
const minutes = computed(() => Math.floor((targetDate - currentTime.value) / (1000 * 60) % 24))
const seconds = computed(() => Math.floor((targetDate - currentTime.value) / 1000 % 60))

onMounted(() => {
    // Update current time every second
    setInterval(() => {
        currentTime.value = new Date()
    }, 1000)
})

</script>


<template>
     <ul class=" flex justify-center h-96 flex-wrap font-thin font-heading items-center gap-8 text-3xl">
        <li>
          <span class="block">{{days}}</span>
          HARI
        </li>
        <li>
          <span class="block">{{hours}}</span>
          JAM
        </li>
        <li>
          <span class="block">{{minutes}}</span>
          MENIT
        </li>
        <li>
          <span class="block">{{seconds}}</span>
          DETIK
        </li>
      </ul>
</template>