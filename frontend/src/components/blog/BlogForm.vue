<script setup>
import { ref } from 'vue';

const title = ref('');
const subtitle = ref('');
const description = ref('');
const text = ref('');

import { usePostsStore } from '@/stores/blog';
const postsStore = usePostsStore();

import { userAuthStore } from '@/stores/user';
const userStore = userAuthStore();

function submitPost() {
    const postData = {
        title: title.value,
        subtitle: subtitle.value,
        description: description.value,
        text: text.value,
        userId: userStore.user.id,
    };
    postsStore.addPost(postData);
    title.value = '';
    subtitle.value = '';
    description.value = '';
    text.value = '';
}
</script>

<template>
    <div class="w-full max-w-md">
        <form @submit.prevent="submitPost" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                    Title
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title" type="text" placeholder="Enter the post title" required v-model="title" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="subtitle">
                    Subtitle
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="subtitle" type="text" placeholder="Enter the post subtitle" v-model="subtitle" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
                    Description
                </label>
                <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description" placeholder="Enter a short description" rows="4" v-model="description"></textarea>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="text">
                    Text
                </label>
                <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="text" placeholder="Enter the post content" rows="8" required v-model="text"></textarea>
            </div>
            <div class="flex items-center justify-between">
                <button type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Call us: +254 712 345 678
                </a>
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy;2024 SweetLikeHoney. All rights reserved.
        </p>
    </div>
</template>
