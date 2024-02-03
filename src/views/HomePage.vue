<script setup>
import HomePageCard from '../components/HomePageCard.vue';
import HeroSectionHomePage from '../components/HeroSectionHomePage.vue';
import heroSectionHomePageData from '../data/heroSectionHomePageData.json';

import { Vue3Lottie } from 'vue3-lottie'

import { ref, onMounted } from 'vue';
const heroSectionData = ref(heroSectionHomePageData);

onMounted(() => {
});

// Import the JSON animation file directly
import animationData from '../assets/animation2.json';

// Define Lottie animation options
const lottieOptions = {
  animationData: animationData,
  loop: true,
  autoplay: true,
};

</script>
<template>
  <HeroSectionHomePage />
  <Vue3Lottie
    :animationData="lottieOptions.animationData"
    :loop="lottieOptions.loop"
    :autoplay="lottieOptions.autoplay"
    :width="200"
  />

  

<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="">
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="">
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="">
        </div>
    </div>
</div>

</template>
<style scoped>
</style>
