<script setup>
import TestimonialCard from '../components/TestimonialCard.vue';

import testimonialData from '../data/testimonialsData.json';
</script>
<template>
    <div class="flex flex-col px-24 py-10">
        <div class="flex flex-wrap -mx-3 mb-3">
            <TestimonialCard v-for="testimonial in testimonialData" :key="testimonial.title" :testimonial="testimonial" />
        </div>
    </div>
</template>
<style scoped></style>