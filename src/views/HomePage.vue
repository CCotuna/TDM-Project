<script setup>
import HomePageCard from '../components/HomePageCard.vue';
import HeroSectionHomePage from '../components/HeroSectionHomePage.vue';

import heroSectionHomePageData from '../data/heroSectionHomePageData.json';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

import { ref, onMounted } from 'vue';
const heroSectionData = ref(heroSectionHomePageData);

onMounted(() => {
    // Prevent scrolling when the content fits within the viewport height
    document.body.style.overflowY = 'hidden';
});

</script>
<template>
<div class="background-image">
    <div class="flex flex-col min-h-screen">
        <header class="flex-1">
            <NavBar />

        </header>
        <Footer />

    </div>
</div>

    <!-- <HeroSectionHomePage /> -->
    <!-- <div class="py-4">
        <h1 class="text-4xl font-medium text-gray-700 text-center mt-6"> Full-Funnel Social Analytics </h1>
    </div>
    <div class="flex justify-between">
        <HomePageCard v-for="data in heroSectionData" :key="data.title" :data="data" />
    </div> -->
</template>
<style scoped>
.background-image {
    background-image: url("../assets/backgroundImage.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh; /* Set height according to your requirement */
}
</style>