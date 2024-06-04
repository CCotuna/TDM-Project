<script setup>
import HeroSection from '@/components/homepage/HeroSection.vue';

import LoginForm from '@/components/login/LoginForm.vue';

import { userAuthStore } from '@/stores/user';

const userStore = userAuthStore();

import { useRouter } from 'vue-router';
const router = useRouter();

function handleLogin(payload) {
  userStore.login(payload.username, payload.password);
  router.push({ name: 'homepage' });
}
</script>
<template>
  <div>
    <HeroSection />
    <LoginForm @login="handleLogin" />
    <!-- <img src="@/assets/gallery.svg" alt="" class="w-2/3 h-auto mx-auto"> -->
  </div>
</template>
<style scoped></style>