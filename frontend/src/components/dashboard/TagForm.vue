<template>
    <div class="w-full max-w-md">
        <form @submit.prevent="createTag" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="tagName">
                    Tag Name
                </label>
                <input v-model="tagName"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="tagName" type="text" placeholder="Enter tag name" required />
            </div>
            <div class="flex items-center justify-between">
                <button type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Create Tag
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Back to Dashboard
                </a>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const tagName = ref('');

import { useTagStore } from '@/stores/tags';
const tagsStore = useTagStore();

function createTag() {
    tagsStore.addTag({ name: tagName.value });
    tagName.value = '';
}
</script>