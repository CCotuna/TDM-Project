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

</template>
<style scoped>
</style>
