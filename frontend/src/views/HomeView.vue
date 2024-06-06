<script setup>
import HeroSection from '@/components/homepage/HeroSection.vue';
import ServicesPreview from '@/components/homepage/ServicesPreview.vue';
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
    <ServicesPreview />

    <section class="flex align-top justify-center mx-24 mb-10">
      <div class="px-4 text-left  me-3" :class="{ 'text-center': userStore.user.id }">
        <h1
          class="custom-font-roboto-condensed mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl fade-in-fwd">
          Create an engaging experience <br> with SweetLikeHoney Photography
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl fade-in-fwd">
          Join us to elevate your moments with our photography services and create extraordinary memories.
        </p>
      </div>
      <LoginForm v-if="!userStore.user.id" @login="handleLogin" class="max-w-96" />
    </section>

  </div>
</template>
<style scoped></style>