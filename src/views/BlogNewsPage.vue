<script setup>
import BlogGallery from '../components/BlogGallery.vue';

import { ref } from 'vue';

import blogImagesData from '../data/blogImagesData.json';

</script>
<template>
     <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <BlogGallery v-for="image in blogImagesData" :key="image.src" :image="image" />
  </div>
</template>
<style scoped></style>