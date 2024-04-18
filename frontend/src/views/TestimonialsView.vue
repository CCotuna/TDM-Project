<script setup>
import { ref } from 'vue'
let testimonials = ref([])

import { onMounted } from 'vue'
import axios from 'axios'
onMounted(async () => {
    const response = await axios.get("http://localhost:3000/testimonials",)
    testimonials.value = response.data
})

</script>
<template>
    <section class="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
        <section class="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-start ">
            {{ testimonials }}
            <div v-for="testimonial in testimonials" :key="testimonial.id"
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ testimonial.title }}
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">{{ testimonial.description }}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">{{ testimonial.rating }}</p>
            </div>

        </section>
    </section>
</template>
<style scoped></style>