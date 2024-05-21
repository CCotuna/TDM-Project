<script setup>
import { ref } from 'vue'
const showNav = ref(false);

function closeNavBar() {
  showNav.value = !showNav.value;
}
</script>
<template>
  <section>
    <div class="bg-transparent hidden md:flex justify-between items-center p-3">
      <div class="flex items-center gap-5">
        <img src="../assets/logo_wout_bg.svg" alt="" class="h-12" />
        <button class=" uppercase font-semibold">
          <RouterLink to="/">acasa</RouterLink>
        </button>
        <button class=" uppercase font-semibold">
          <RouterLink to="/about">despre noi</RouterLink>
        </button>
        <button class=" uppercase font-semibold">
          <RouterLink to="/services">servicii</RouterLink>
        </button>
        <button class=" uppercase font-semibold">
          <RouterLink to="/projects">proiecte</RouterLink>
        </button>
      </div>
      <button class=" uppercase font-semibold">
        <RouterLink to="/contact">contact</RouterLink>
      </button>
    </div>
  </section>

  <section>
    <!-- navbar -->
    <div class="bg-transparent flex md:hidden justify-between items-center p-2">
      <button class=" text-2xl sm:text-3xl" @click="closeNavBar()">
        <i class="bi bi-list"></i>
      </button>
      <img src="../assets/logo_wout_bg.svg" alt="" class="h-8 sm:h-12" />
      <button class=" text-xl sm:text-3xl">
        <i class="bi bi-chat-fill"></i>
      </button>
    </div>

    <!-- navigation links -->
    <transition name="slide">
      <div v-if="showNav" class="bg-red-500 w-1/2 min-h-screen fixed top-0 left-0 flex flex-col items-center pt-10">
        <button @click="closeNavBar()" class=" text-2xl">
          <i class="bi bi-x-lg"></i>
        </button>
        <div class="flex flex-col pt-5">
          <button @click="closeNavBar()" class=" uppercase font-semibold">
            <RouterLink to="/">acasa</RouterLink>
          </button>
          <button @click="closeNavBar()" class=" uppercase font-semibold">
            <RouterLink to="/about">despre noi</RouterLink>
          </button>
          <button @click="closeNavBar()" class=" uppercase font-semibold">
            <RouterLink to="/services">servicii</RouterLink>
          </button>
          <button @click="closeNavBar()" class=" uppercase font-semibold">
            <RouterLink to="/projects">proiecte</RouterLink>
          </button>
          <button @click="closeNavBar()" class=" uppercase font-semibold">
            <RouterLink to="/contact">contact</RouterLink>
          </button>
        </div>
      </div>
    </transition>
  </section>
</template>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave {
  transform: translateX(0);
}
</style>
