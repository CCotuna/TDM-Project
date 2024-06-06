<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import FooterCP from './components/FooterCP.vue';
</script>

<template>
  <div class="min-h-screen w-full flex flex-col bg-black">
    <div class="my-10 mx-5 sm:mx-20 rounded-xl bg-white shadow-md shadow-white">
      <NavBar />
      <RouterView />
      <FooterCP />
    </div>
  </div>

</template>

<style scoped>
.bg-deep-teal2 {
  background: url('@/assets/asfalt-dark.png');
  background-size: cover;
}
</style>