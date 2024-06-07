<script setup>
import GalleryGrid from '@/components/gallery/GalleryGrid.vue';

import { useGalleryStore } from '@/stores/gallery';
const galleryStore = useGalleryStore();

import { onMounted } from 'vue';
onMounted(() => {
    galleryStore.fetchGallery();
});


</script>
<template>
    <section class="flex flex-col items-center justify-center">
        <div class="pt-8 px-4 text-center lg:pt-16">
            <h1
                class="custom-font-roboto-condensed mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl fade-in-fwd">
                Gallery of SweetLikeHoney Photography
            </h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl fade-in-fwd">
                Find the best photos of our clients and their moments here in our gallery.
            </p>

        </div>
        <GalleryGrid />
    </section>
</template>
<style scoped></style>