<script setup>
import { useGalleryStore } from '@/stores/gallery';
const galleryStore = useGalleryStore();

import { ref } from 'vue';

const title = ref('');
const description = ref('');
const url = ref('');

import { userAuthStore } from '@/stores/user';
const userStore = userAuthStore();

const addGalleryItem = () => {
    galleryStore.addImage({ title: title.value, description: description.value, url: url.value, userId: userStore.user.id });
    title.value = '';
    description.value = '';
    url.value = '';
};
</script>

<template>
    <div class="max-w-md mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Add Gallery Item</h1>
        <form @submit.prevent="addGalleryItem">
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">Title</label>
                <input v-model="title" type="text" class="w-full p-2 border rounded" required />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">Description</label>
                <textarea v-model="description" class="w-full p-2 border rounded" required></textarea>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">Image URL</label>
                <input v-model="url" type="url" class="w-full p-2 border rounded" required />
            </div>
            <button type="submit" class="bg-black text-white py-2 px-4 rounded hover:bg-blue-600">Add Item</button>
        </form>
    </div>
</template>