<script setup>
import { ref } from 'vue'
const showNav = ref(false);

function closeNavBar() {
  showNav.value = !showNav.value;
}

const showdesknavbar = ref(false);

const showdeskNavbar = () => {
  showdesknavbar.value = true;
};

const hidedeskNavbar = () => {
  showdesknavbar.value = false;
};

import { onMounted } from 'vue';
import { userAuthStore } from "@/stores/user.js"
const userStorage = userAuthStore();

const user = ref({});

onMounted(async () => {
  await userStorage.checkAuth();
  user.value = userStorage.user;
});

</script>
<template>
  <section>
    <div class="bg-transparent hidden md:flex justify-between items-center p-3 mx-10 ">
      <div class="flex items-center gap-5">
        <button class=" uppercase font-semibold custom-font-play-fair text-2xl">
          <RouterLink to="/">Sweet Like <span class="text-brown-sugar">HONEY</span></RouterLink>
        </button>
      </div>
      <div class="flex space-x-10 items-center">
        <span class="me-1">{{ user.username }} {{ user.password }}</span>
        <RouterLink :to="{ name: 'homepage' }" class="text-black" aria-current="page">Home</RouterLink>
        <RouterLink :to="{ name: 'about' }" class="text-black" aria-current="page">About</RouterLink>
        <RouterLink :to="{ name: 'galleries' }" class="text-black" aria-current="page">Gallery</RouterLink>
        <div class="relative" @mouseover="showdeskNavbar" @mouseleave="hidedeskNavbar">
          <button class="text-xl sm:text-2xl">
            <i class="bi bi-list"></i>
          </button>
          <transition name="fade">
            <ul v-if="showdesknavbar"
              class="absolute left-1/2 transform -translate-x-1/2 bg-white rounded shadow-lg mt-2 w-32 h-auto text-center"
              @mouseover="showdeskNavbar" @mouseleave="hidedeskNavbar">
              <li class="p-2 hover:bg-gray-100 hover:text-black text-white bg-brown-sugar">
                <RouterLink :to="{ name: 'login' }" aria-current="page">Login
                </RouterLink>
              </li>
              <li class="p-2 hover:bg-gray-100">
                <RouterLink :to="{ name: 'services' }" class="text-black" aria-current="page">Services</RouterLink>
              </li>
              <li class="p-2 hover:bg-gray-100">
                <RouterLink :to="{ name: 'reviews' }" class="text-black" aria-current="page">Reviews</RouterLink>
              </li>
              <li class="p-2 hover:bg-gray-100">
                <RouterLink :to="{ name: 'booking' }" class="text-black" aria-current="page">Booking</RouterLink>
              </li>
              <li class="p-2 hover:bg-gray-100">
                <RouterLink :to="{ name: 'portfolio' }" class="text-black" aria-current="page">Portfolio</RouterLink>
              </li>
              <li class="p-2 hover:bg-gray-100">
                <RouterLink :to="{ name: 'contact' }" class="text-black" aria-current="page">Contact</RouterLink>
              </li>
              <li class="p-2 hover:bg-gray-100">
                <RouterLink :to="{ name: 'faq' }" class="text-black" aria-current="page">FAQ</RouterLink>
              </li>
            </ul>
          </transition>
        </div>
      </div>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
