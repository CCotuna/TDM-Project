<script setup>
import { RouterView } from 'vue-router'
import NavBarCP from './components/NavBarCP.vue';
import FooterCP from './components/FooterCP.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="flex-1">
      <div class="mb-20">
        <NavBarCP />
      </div>
      <div class="container justify-center items-center mx-auto">
        <RouterView />
      </div>
    </header>
    <FooterCP />
  </div>

</template>

<style scoped></style>