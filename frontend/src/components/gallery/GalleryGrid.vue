<template>
    <div class="mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Gallery</h1>
        <div v-if="gallery.length === 0" class="text-gray-500">No items in the gallery.</div>
        <div v-else class="grid grid-cols-3">
            <div v-for="item in gallery" :key="item.title" class="mb-4 p-4 border rounded">
                <h2 class="text-xl font-bold">{{ item.title }}</h2>
                <p>{{ item.description }}</p>
                <img :src="item.url" alt="" class="mt-2" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useGalleryStore } from '@/stores/gallery';
const galleryStore = useGalleryStore();


import { onMounted } from 'vue';
onMounted(() => {
    galleryStore.fetchGallery();
});

import { computed } from 'vue';
const gallery = computed(() => galleryStore.gallery);
</script>