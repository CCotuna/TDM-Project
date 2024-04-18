<script setup>
import HeroSectionHomepageCP from '@/components/HeroSectionHomepageCP.vue';
import HomepageHeadingCP from '@/components/HomepageHeadingCP.vue';
import ServiceEditingSectionHomepageCP from '@/components/ServiceEditingSectionHomepageCP.vue';
import ServicesSectionHomepageCP from '@/components/ServicesSectionHomepageCP.vue';
import ThreePhotosComponentHomepageCP from '@/components/ThreePhotosComponentHomepageCP.vue';
import ReviewSectionHomepageCP from '@/components/ReviewSectionHomepageCP.vue';
import InteractiveCameraPhotoHomepageCP from '@/components/InteractiveCameraPhotoHomepageCP.vue';
// import TestComponent from '@/components/TestComponent.vue';
import Test2Component from '@/components/Test2Component.vue';

// import { beforeRouteEnter } from 'vue-router';

// beforeRouteEnter((to, from, next) => {
//   window.location.reload();
//   next();
// });
</script>

<template>
  <div class="parallax-container hero-section-container flex items-start justify-center flex-col">
    <HeroSectionHomepageCP />
  </div>
  <HomepageHeadingCP class="mt-10" />
  <!-- <TestComponent class="mt-10" /> -->
  <Test2Component class="mt-10" />

  <ServiceEditingSectionHomepageCP class="mt-20" />

  <div class="parallax-container services-section-container flex items-start justify-center flex-col mt-20">
    <ServicesSectionHomepageCP />
  </div>

  <ThreePhotosComponentHomepageCP class="-mt-40" />
  <ReviewSectionHomepageCP class="mt-10" />
  <InteractiveCameraPhotoHomepageCP class="mt-20" />

</template>
<style scoped>
.parallax-container {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 85vh;
}

.hero-section-container {
  background-image: url('@/assets/OIP6.svg');
}

.services-section-container {
  background-image: url('@/assets/OIP7.svg');
}
</style>
