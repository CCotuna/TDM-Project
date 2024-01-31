<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="flex-1"> 
        <div class="mb-16">
          <NavBar />
        </div>
        <RouterView />
      </header>
      <Footer />
      
  </div>
</template>

<style scoped>

</style>