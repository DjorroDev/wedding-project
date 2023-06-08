<script setup>
    let thumbsSwiper = ref(null);

    const galleries= [
        'https://a.storyblok.com/f/188427/4000x6000/e43a4047de/gallery0.jpg',
        'https://a.storyblok.com/f/188427/4000x6000/43ae166d7b/gallery1.jpg',
        'https://a.storyblok.com/f/188427/4000x6000/43848fb8f5/gallery2.jpg',
        'https://a.storyblok.com/f/188427/4000x6000/b37227411e/gallery3.jpg',
        'https://a.storyblok.com/f/188427/3376x5064/e91c23b510/gallery4.jpg',
        'https://a.storyblok.com/f/188427/4000x6000/cf85ee13bb/gallery5.jpg',
        'https://a.storyblok.com/f/188427/4000x6000/16af063ecf/gallery6.jpg',
        'https://a.storyblok.com/f/188427/3961x5941/4736f78301/gallery7.jpg',
        'https://a.storyblok.com/f/188427/4000x6000/be6088c958/gallery8.jpg',
        'https://a.storyblok.com/f/188427/4000x6000/e3b2436420/gallery9.jpg',
    ];

    const setThumbsSwiper = (swiper) => {
        // console.log(thumbsSwiper)
        thumbsSwiper.value = swiper;
    }
</script>

<template>
  <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="[SwiperAutoplay, SwiperFreeMode, SwiperNavigation, SwiperThumbs]"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: true,
      }"
      class="mySwiper2"
    >
        <SwiperSlide v-for="(gallery, i) in galleries" :key="i">
            <NuxtImg format="webp" :src="gallery" />
        </SwiperSlide>
        <!-- :loop="true" -->
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="[SwiperFreeMode, SwiperNavigation, SwiperThumbs]"
      class="mySwiper"
    >
        <SwiperSlide v-for="(gallery, i) in galleries" :key="i">
            <NuxtImg format="webp" :src="gallery" />
        </SwiperSlide>
    </swiper>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>