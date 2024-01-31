<script setup>
import TestimonialCard from '../components/TestimonialCard.vue';
import SortTestimonials from '../components/SortTestimonials.vue';

import testimonialData from '../data/testimonialsData.json';

import { ref } from 'vue';

const sortSens = ref("ASC");
const sortActive = ref(1);

const sortedTestimonials = ref(testimonialData);

const sortTopReviews = () => {
   if(sortSens.value === "ASC"){
    sortedTestimonials.value.sort((a,b) => a.reviews - b.reviews);
    sortSens.value = "DESC";
   } else {
    sortedTestimonials.value.sort((a,b) => b.reviews - a.reviews);
    sortSens.value = "ASC";
   }
   sortActive.value = 1;
}

const sortTopLikes = () => {
   if(sortSens.value === "ASC"){
    sortedTestimonials.value.sort((a,b) => a.likes - b.likes);
    sortSens.value = "DESC";
   } else {
    sortedTestimonials.value.sort((a,b) => b.likes - a.likes);
    sortSens.value = "ASC";
   }
   sortActive.value = 2;
}

import { onMounted } from 'vue'
onMounted(() => {
  sortTopReviews();
})

</script>
<template>

    <SortTestimonials :sortSens="sortSens" :sortActive="sortActive" @topReviews="sortTopReviews" @topLikes="sortTopLikes"/>
    <div class="flex flex-col px-24 py-10">
        <div class="flex flex-wrap -mx-3 mb-3">
            <TestimonialCard v-for="testimonial in testimonialData" :key="testimonial.title" :testimonial="testimonial" />
        </div>
    </div>
</template>
<style scoped></style>