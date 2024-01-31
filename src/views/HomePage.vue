<script setup>
import HomePageCard from '../components/HomePageCard.vue';
import HeroSectionHomePage from '../components/HeroSectionHomePage.vue';

import heroSectionHomePageData from '../data/heroSectionHomePageData.json';

import { ref } from 'vue';
const heroSectionData = ref(heroSectionHomePageData);

</script>
<template>
    <HeroSectionHomePage />
    <!-- <div class="py-4">
        <h1 class="text-4xl font-medium text-gray-700 text-center mt-6"> Full-Funnel Social Analytics </h1>
    </div>
    <div class="flex justify-between">
        <HomePageCard v-for="data in heroSectionData" :key="data.title" :data="data" />
    </div> -->
</template>
<style scoped></style>