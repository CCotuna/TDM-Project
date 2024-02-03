<script setup>
import BulletPointsText from '../components/BulletPointsText.vue';
import PortfolioGallery from '../components/PortfolioGallery.vue';
import HeroSectionPortfolio from '../components/HeroSectionPortfolio.vue';

</script>
<template>
    <div class="bg-white">
    <div class="grid grid-cols-1 lg:grid-cols-2 relative isolate px-6 pt-10 pb-10">
        
        <BulletPointsText />
    
        <div class="flex items-center justify-center py-2 lg:py-0">
        <div class="text-center">
            <HeroSectionPortfolio />
            <PortfolioGallery />
        </div>
    </div>
    </div>
    </div>
    
</template>
<style scoped></style>