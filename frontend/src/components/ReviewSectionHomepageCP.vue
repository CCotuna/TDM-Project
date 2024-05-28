<script setup></script>
<template>
    <section class="bg-image flex justify-center items-top h-screen mx-auto">
        <div class="text-center mt-16">
            <h1
                class="custom-font-cinzel-regular text-3xl lg:text-5xl font-bold tracking-tight text-white sm:text-6xl mx-10">
                BOOK YOUR <br> SESSION TODAY!
            </h1>
            <p class="custom-font-old-standard-regular mt-4 text-lg leading-8 text-white mx-32">
                Limited slots available. Let us capture the essence of your story.
            </p>
            <div class="mt-6 mb-6 flex items-center justify-center gap-x-6">
                <RouterLink :to="{ name: 'services' }"
                    class="rounded-md bg-emerald-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-white hover:text-emerald-800 hover:border focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-800">
                    Schedule Session</RouterLink>
            </div>
        </div>
    </section>

</template>
<style scoped>
.bg-image {
    background-image: url('@/assets/OIP9.svg');
    background-size: cover;
    background-position: center;
}
</style>