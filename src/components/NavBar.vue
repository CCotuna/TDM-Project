<script setup>
</script>

<template>
    <nav class="bg-white border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <RouterLink :to="{name: 'homepage'}" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-emerald-800 text-shadow-drop-center">SWEET LIKE HONEY</span>
      </RouterLink>
      <button data-collapse-toggle="navbar-dropdown" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown" aria-expanded="false">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
          <li>
            <RouterLink :to="{name : 'homepage'}"
              class="block py-2 px-3 text-white bg-emerald-800 rounded md:bg-transparent md:text-emerald-800 md:p-0 md:dark:text-emerald-800 dark:bg-emerald-800 md:dark:bg-transparent"
              aria-current="page">HOME</RouterLink>
          </li>
          <li>
            <RouterLink :to="{name: 'about'}"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-800 md:p-0 md:dark:hover:text-emerald-800 md:dark:hover:bg-transparent"
              aria-current="page">ABOUT</RouterLink>
          </li>
          <li>
            <RouterLink :to="{name: 'portfolio'}"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-text-emerald-800 md:p-0 md:dark:hover:text-emerald-800 md:dark:hover:bg-transparent"
              aria-current="page">PORTFOLIO</RouterLink>
          </li>
          <li>
            <RouterLink :to="{name: 'services'}"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-800 md:p-0 md:dark:hover:text-emerald-800 md:dark:hover:bg-transparent"
              aria-current="page">SERVICES</RouterLink>
          </li>
          <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 px-3 md:dark:hover:text-emerald-800 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-text-emerald-800 md:p-0 md:w-auto">
              COMMUNITY<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-emerald-800 dark:divide-emerald-800">
              <ul class="py-2 text-sm text-white dark:text-white" aria-labelledby="dropdownLargeButton">
                <li>
                  <RouterLink :to="{name: 'community and events'}"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-white md:dark:hover:text-emerald-800">COMMUNITY
                    AND EVENTS</RouterLink>
                </li>
                <li>
                  <RouterLink :to="{name: 'blog'}"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-white md:dark:hover:text-emerald-800">BLOG /
                    NEWS</RouterLink>
                </li>
                <li>
                  <RouterLink :to="{name: 'testimonials'}"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-white md:dark:hover:text-emerald-800">TESTIMONIALS</RouterLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <RouterLink :to="{name: 'sitemap'}"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-800 md:p-0 md:dark:hover:text-emerald-800 md:dark:hover:bg-transparent">SITEMAP</RouterLink>
          </li>
          <li>
            <RouterLink :to="{name: 'contact'}"
              class="rounded-md bg-emerald-800 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-emerald-800 hover:border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">CONTACT</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>


</template>

<style scoped></style>