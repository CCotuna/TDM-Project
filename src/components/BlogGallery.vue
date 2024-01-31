<script setup>
defineProps({
  image: Object
})
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
