<script setup>
import HomePageCard from '../components/HomePageCard.vue';
import HeroSectionHomePage from '../components/HeroSectionHomePage.vue';
import heroSectionHomePageData from '../data/heroSectionHomePageData.json';

import { ref } from 'vue';
const heroSectionData = ref(heroSectionHomePageData);

</script>
<template>
  <div class="flex items-start justify-center flex-col">
    <HeroSectionHomePage />
  </div>

</template>
<style scoped>
</style>
