<script setup>

import { onMounted } from 'vue';

onMounted(() => {
});

// Import the JSON animation file directly
import animationData from '../assets/animation2.json';

// Define Lottie animation options
const lottieOptions = {
  animationData: animationData,
  loop: true,
  autoplay: true,
};
</script>
<template>
    <div class="py-20 text-center">
        <h1 class="text-6xl font-bold mb-8 text-white">Welcome to Our <br> Photography World</h1>
        <p class="text-lg text-gray-200">Capturing Moments, Creating Memories, and Preserving Emotions with Every Click</p>
        <!-- <Vue3Lottie
    :animationData="lottieOptions.animationData"
    :loop="lottieOptions.loop"
    :autoplay="lottieOptions.autoplay"
    :width="200"
  /> -->
    </div>
</template>
<style scoped>
.bg-gradient-to-br {
    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}
</style>