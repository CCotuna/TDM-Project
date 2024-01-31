<script setup>
import HeroSectionServices from '../components/HeroSectionServices.vue';
import ServiceCard from '../components/ServiceCard.vue';

import services from '../data/servicesData.json';

import { ref } from 'vue';
const servicesData = ref(services);
</script>
<template>

        <HeroSectionServices />
        <div class="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 py-5 px-5">
            <ServiceCard v-for="service in servicesData" :key="service.title" :service="service" />
        </div>
    
</template>
<style scoped></style>