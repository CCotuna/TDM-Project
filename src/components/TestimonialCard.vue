<script setup>
defineProps({
    testimonial: Object,
})
</script>
<template>
  
            <div class="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <div
                    class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-emerald-800">
                    <div></div>
                    <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 shadow-md">
                        {{ testimonial.title }}
                    </h5>
                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {{ testimonial.description }}
                    </p>
                    <div class="flex justify-between">
                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {{ testimonial.review }} <i class="bi bi-file-bar-graph-fill text-xl"></i> Reviews
                    </p>
                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {{ testimonial.likes }} <i class="bi bi-hand-thumbs-up text-xl"></i>
                    </p>
                    </div>
                </div>
            </div>

</template>
<style scoped></style>