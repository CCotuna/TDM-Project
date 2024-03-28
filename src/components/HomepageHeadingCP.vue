<script setup></script>
<template>
    <section class="bg-transparent custom-font-cinzel-regular bg-mainBeige py-10">
        <div class="hidden lg:block text-center">
            <h1 class="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Every Snapshot Tells a Story
            </h1>
            <p class="mt-4 text-lg leading-8 text-gray-600">
                Capturing the Essence of Moments, One Click at a Time
            </p>
            <div class="mt-6 flex items-center justify-center gap-x-6">
                <RouterLink :to="{ name: 'services' }"
                    class="rounded-md bg-emerald-800 px-3.5 py-2.5 text-sm font-semibold text-white  shadow-md hover:bg-white hover:text-emerald-800 hover:border focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-800 ">
                    Explore
                </RouterLink>
            </div>
        </div>
    </section>
</template>
<style scoped></style>