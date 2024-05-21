<script setup>
import { RouterView } from 'vue-router'
import NavBarCP from './components/NavBarCP.vue';
import FooterCP from './components/FooterCP.vue';
</script>

<template>
  <div class="w-full h-full bg-cyan-700">
    <NavBarCP />
    <RouterView />
    <FooterCP />
  </div>

</template>

<style scoped></style>