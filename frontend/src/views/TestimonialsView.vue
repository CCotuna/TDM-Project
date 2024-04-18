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
            asd
        </section>
    </section>
</template>
<style scoped></style>