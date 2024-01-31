<script setup>
defineProps({
  image: Object
})

import { ref, watch } from 'vue'

const flippedImage = ref(null);

watch(() => flippedImage.value, (newValue, oldValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
    console.log('Imaginea a fot inversata: ', newValue);
  } else {
    document.body.style.overflow = 'auto';
    console.log('Ai esuat: ', newValue);
  }
})


const handleImageClick = (image) => {
  if(!flippedImage.value || flippedImage.value.src !== image.src) {
    flippedImage.value = image;
  } else {
    flippedImage.value = null;
  }
}

</script>
<template>
 <div class="w-full  p-2">
    <img :src="image.src" alt="gallery" class="w-full h-full rounded-lg object-cover object-center cursor-pointer hover:scale-105 transition-transform" @click="handleImageClick(image)" />
  </div></template>

<style scoped>
@media (max-width: 767px) {
  .md:w-13 {
    width: 100%;
  }
}
</style>
