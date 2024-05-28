<script setup>
import TypingTextAnimationCP from '@/components/TypingTextAnimationCP.vue';
</script>
<template>
    <section class="bg-transparent custom-font-cinzel-regular">
        <div class="py-8 px-4 mx-auto lg:mx-32 max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div class="flex flex-col justify-center">
                <h1 class="mb-4 text-5xl font-bold tracking-tight leading-none text-gray-900">
                    Welcome to Our <br>
                    <TypingTextAnimationCP />
                </h1>
                <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl ">Capturing Moments,
                    Creating Memories, and Preserving Emotions with Every Click</p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                    <RouterLink :to="{ name: 'services' }"
                        class="inline-flex justify-center items-center space-x-2 py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-emerald-800 shadow-md  ">
                        <span>Let's Shoot</span>
                        <i class="bi bi-camera2 text-2xl text-white"></i>
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped></style>