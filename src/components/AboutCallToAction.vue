<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
    <div class="flex items-center justify-center py-2 lg:py-0">
        <div class="text-center">
          <p class="mt-4 text-lg leading-8 text-white">Hello, I'm</p>
          <h1 class="text-3xl lg:text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Paula Cordos
          </h1>
          <p class="mt-4 text-lg leading-8 text-white">
            Discover the heart behind Sweet Like Honey Photography. Our
            journey is woven with passion, creativity, and a commitment to
            immortalizing your cherished moments.
          </p>
          <div class="mt-6 flex items-center justify-center gap-x-6">
            <a href="#"
              class="rounded-md bg-white border border-emerald-800 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-emerald-800 hover:text-white hover:border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">DOWNLOAD
              CV</a>
            <RouterLink :to="{name: 'contact'}"
              class="rounded-md bg-emerald-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-emerald-800 hover:border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800">GET
              IN TOUCH</RouterLink>
          </div>
        </div>
      </div>

</template>
<style scoped></style>