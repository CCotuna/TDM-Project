<script setup>
defineProps({
    service: Object
})
</script>
<template>
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-custom-card">
            <div class="flex items-center justify-center">
                <i :class="'bi bi'+ service.icon + ' text-3xl rotate-center'"></i>
            </div>
            <a href="Booking.html" class="block text-center mt-4">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 fade-in-fwd">
                    {{ service.title }}
                </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
                {{ service.description }}
            </p>
            <div class="flex items-center justify-center mt-4">
                <RouterLink :to="{name: service.href }"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-800 rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-800 dark:hover:bg-red-800 dark:focus:ring-red-800">
                    {{ service.button }}</RouterLink>
            </div>
        </div>

</template>
<style scoped></style>