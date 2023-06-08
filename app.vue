<template>
  <!-- <TheNavbar/> -->
  <TheMusicPlayer/>
  <div class="w-full h-screen bg-center bg-cover" style="background-image: url('https://a.storyblok.com/f/188427/4000x6000/ee4a90cab7/gallery10.jpg/m/filters:format(webp)');">
    <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
      <div class="text-center">
        <div class="container px-4 mx-auto">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">Lorem ipsum dolor sit amet consectetur
              adipisicing elit.</h2>
            <p class="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sit cum iure qui, nostrum at sapiente
              ducimus.
            </p>
            <!-- <a class="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
              href="#">start your free trial</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Light -->
  <div class="flex justify-center h-auto bg-[#afcad0]">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl my-10 font-serif font-bold text-[#001c1c]">Lorem, ipsum</h2>
    <!-- <audio  controls autoplay="true" src="pamungkas-deeper.mp3" type="audio/mpeg" >p</audio> -->

    </div>
  </div>
  <!-- drakk -->
  <!-- <div class="flex justify-center h-auto bg-[#001c1c] text-[#afcad0]">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl my-10 font-serif font-bold ">Lorem, ipsum</h2>
    </div>
  </div> -->

  <!-- Mempelai -->
  <div class="flex flex-col h-auto py-10 bg-[#001c1c] px-2 text-[#afcad0]">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl my-10 font-serif font-bold">Mempelai</h2>
    </div>
    <div class="flex flex-col relative items-end my-10 mb-20">
      <div class="absolute right-14 -top-12 -z-8 w-64 h-80 bg-[#46645f]"></div>
      <img class="w-64 h-auto z-10" src="/DSC08625.jpg" />
      <h2 class="text-4xl my-1 font-serif">Bang Dap</h2>
      <p class="w-2/3 text-end">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor doloribus natus voluptatum!</p>
    </div>
    <div class="relative flex flex-col items-start my-10">
      <div class="absolute left-14 -top-12 z-0 w-64 h-80 bg-[#46645f]"></div>
      <img class="w-64 z-10 h-auto" src="/DSC08506.jpg" />
      <h2 class="text-4xl my-1 font-serif">Ci Micel</h2>
      <p class="w-2/3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor doloribus natus voluptatum!</p>
    </div>
  </div>


  <!-- Gallery -->
  <!-- Create Gallery with swiper js -->
  <div class="flex flex-col px-8 h-auto bg-[#afcad0] py-10">
    <div class="container h-auto max-w-lg mx-auto text-center">
      <h2 class="text-4xl mb-10 font-serif font-bold text-[#001c1c]">Gallery</h2>
      <TheGallery/>
    </div>
  </div>

  <!-- Countdown -->
  <div class="flex justify-center h-screen bg-[#001c1c] text-[#afcad0]">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl my-10 font-serif font-bold ">Countdown Acara</h2>
      <TheCountdown/>
    </div>
  </div>

  <div class="flex justify-center h-screen bg-[#afcad0] border-b-2 border-black">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl my-10 font-serif font-bold text-[#001c1c]">Alamat / Map</h2>
    </div>
  </div>


  <div class="flex justify-center h-screen bg-[#afcad0]">
    <div class="container px-8 mx-auto text-center">
      <h2 class="text-4xl my-10 font-serif font-bold text-[#001c1c]">Konfirmasi Kehadiran</h2>
      <input
        type="text" 
        placeholder="Nama Lengkap"
        class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
      />
        <div class="flex flex-col mt-4">
          <legend class="text-start mb-3">Konfirmasi Kehadiran</legend>
          <div class="flex items-center mb-4">
            <input id="country-option-2" type="radio" name="countries" value="Germany" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
            <label for="country-option-2" class="text-sm font-medium text-gray-900 ml-2 block">
              Iya, Saya akan datang
            </label>
          </div>
          <div class="flex items-center mb-4">
            <input id="country-option-1" type="radio" name="countries" value="USA" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
            <label for="country-option-1" class="text-sm font-medium text-gray-900 ml-2 block">
              Maaf, Sepertinya tidak bisa
            </label>
        </div>
        </div>
    </div>
  </div>


 
</template>