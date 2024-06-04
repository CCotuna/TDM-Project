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
  if (userStorage.isAuthenticated) {
    user.value = userStorage.user;
  }
});

import { useRouter } from 'vue-router';
const router = useRouter();

function handleLogout() {
  userStorage.logout();
  hidedeskNavbar();
  router.push({ name: 'homepage' });
}

const showMessage = ref(false);
const message = ref('');

</script>
<template>
  <!-- <div>
    <div v-if="userStorage.isAuthenticated" class="bg-green-500 text-white text-center py-2">
      <p>Authentication successful</p>
    </div>
    <div v-else class="bg-red-500 text-white text-center py-2">
      <p>Authentication failed</p>
    </div>
  </div> -->
  <!-- <div v-if="showMessage" class="text-white text-center py-2"
    :class="message === 'Authentication successful' ? 'bg-green-500' : 'bg-red-500'">
    <p>{{ message === 'Authentication successful' ? 'Authentication successful' : 'Authentication failed' }}</p>
  </div> -->
  <section>
    <div class="bg-transparent hidden md:flex justify-between items-center p-3 mx-10 ">
      <div class="flex items-center gap-5">
        <button class=" uppercase font-semibold custom-font-play-fair text-2xl">
          <RouterLink :to="{ name: 'homepage' }">Sweet Like <span class="text-brown-sugar">HONEY</span></RouterLink>
          <RouterLink :to="{ name: 'chat' }"><i class="bi bi-chat"></i></RouterLink>
        </button>
      </div>
      <div class="flex space-x-10 items-center">
        <div><i class="bi bi-circle-fill text-md"
            :class="{ 'text-red-500': !userStorage.isAuthenticated, 'text-emerald-500': userStorage.isAuthenticated }"></i>
        </div>
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
                <RouterLink :to="{ name: 'services' }" @click="hidedeskNavbar" class="text-black" aria-current="page">
                  Services</RouterLink>
              </li>
              <li class="p-2 hover:bg-gray-100">
                <RouterLink :to="{ name: 'reviews' }" @click="hidedeskNavbar" class="text-black" aria-current="page">
                  Reviews</RouterLink>
              </li>
              <li class="p-2 hover:bg-gray-100">
                <RouterLink :to="{ name: 'booking' }" @click="hidedeskNavbar" class="text-black" aria-current="page">
                  Booking</RouterLink>
              </li>
              <li class="p-2 hover:bg-gray-100">
                <RouterLink :to="{ name: 'portfolio' }" @click="hidedeskNavbar" class="text-black" aria-current="page">
                  Portfolio</RouterLink>
              </li>
              <li class="p-2 hover:bg-gray-100">
                <RouterLink :to="{ name: 'contact' }" @click="hidedeskNavbar" class="text-black" aria-current="page">
                  Contact</RouterLink>
              </li>
              <li class="p-2 hover:bg-gray-100">
                <RouterLink :to="{ name: 'faq' }" @click="hidedeskNavbar" class="text-black" aria-current="page">FAQ
                </RouterLink>
              </li>
              <li class="p-2 hover:bg-gray-100">
                <RouterLink v-if="userStorage.isAuthenticated" :to="{ name: 'dashboard' }" @click="hidedeskNavbar"
                  class="text-black" aria-current="page">
                  Dashboard
                </RouterLink>
              </li>
              <li class="p-2 hover:bg-gray-100">
                <button v-if="userStorage.isAuthenticated" @click="handleLogout" class="text-black">Logout</button>
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
