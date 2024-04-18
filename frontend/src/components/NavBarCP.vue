<template>
  <nav class="fixed top-0 z-50 w-full bg-white">
    <div class="max-w-screen-xl items-baseline flex flex-wrap justify-between mx-auto p-4 ">

      <div class="flex items-baseline md:space-x-8">
        <RouterLink :to="{ name: 'homepage' }" class="flex items-baseline align-baseline">
          <span class="custom-font  text-5xl  whitespace-nowrap text-black hover:text-mainGreen ">Sweet
            Like Honey</span>
        </RouterLink>

        <RouterLink :to="{ name: 'homepage' }"
          class="block py-2 px-3 ms-10 text-black hover:text-mainGreen rounded md:p-0  bg-transparent custom-font-cinzel-regular"
          aria-current="page">
          HOME</RouterLink>

        <!-- <RouterLink :to="{ name: 'about' }"
          class="block py-2 px-3 text-black hover:text-mainGreen rounded md:border-0  md:p-0  bg-transparent custom-font-cinzel-regular"
          aria-current="page">ABOUT</RouterLink> -->

        <RouterLink :to="{ name: 'services' }"
          class="block py-2 px-3 text-black hover:text-mainGreen rounded  md:border-0  md:p-0 bg-transparent custom-font-cinzel-regular"
          aria-current="page">SERVICES</RouterLink>

        <RouterLink :to="{ name: 'galleries' }"
          class="block py-2 px-3 text-black hover:text-mainGreen rounded  md:border-0  md:p-0 bg-transparent custom-font-cinzel-regular"
          aria-current="page">GALLERIES</RouterLink>

        <RouterLink :to="{ name: 'testimonials' }"
          class="block py-2 px-3 text-black hover:text-mainGreen rounded md:border-0  md:p-0  bg-transparent custom-font-cinzel-regular"
          aria-current="page">TESTIMONIALS</RouterLink>
      </div>

      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul
          class="flex flex-col items-baseline font-medium p-4 md:p-0 mt-4 border bg-transparent border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <!-- Display login status -->
          <!-- <li>{{ loginStatus }}</li> -->
          <li>
            <RouterLink :to="{ name: 'login' }"
              class="block py-2 px-3 text-black hover:text-mainGreen rounded md:border-0  md:p-0  bg-transparent custom-font-cinzel-regular"
              aria-current="page">Login</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'portfolio' }"
              class="block py-2 px-3 text-black hover:text-mainGreen rounded md:border-0  md:p-0  bg-transparent custom-font-cinzel-regular"
              aria-current="page">PORTFOLIO</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'contact' }"
              class="block py-2 px-3 rounded border-2 bg-emerald-800 text-white hover:border-emerald-600 hover:bg-white hover:text-mainGreen custom-font-cinzel-regular"
              aria-current="page">
              CONTACT</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>


</template>

<script setup>

</script>
<style scoped></style>