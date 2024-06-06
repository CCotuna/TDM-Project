<template>
    <section class="py-12">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl text-center font-bold text-gray-900 lg:text-left mb-8">Testimonials</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div v-if="posts && posts.length > 0" v-for="post in posts" :key="post.id"
                    class="bg-white border border-solid border-gray-300 rounded-2xl relative">
                    <div class="p-6">
                        <p class="font-bold text-lg text-black leading-8 h-auto">
                            {{ post.title }}
                        </p>
                        <p class="text-lg text-gray-500 leading-8 h-auto mb-6">
                            {{ post.description }}
                        </p>
                        <div class="flex items-center gap-1">
                            {{ post.text }}
                        </div>
                    </div>
                    <button @click="deletePost(post.id)" class="absolute top-2 right-2 text-red-500">
                        <i class="bi bi-x text-3xl"></i>
                    </button>
                </div>
                <div v-else>
                    No posts found.
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { usePostsStore } from '@/stores/blog';
const postsStore = usePostsStore();

import { onMounted } from 'vue';
onMounted(() => {
    postsStore.fetchPosts();
});

import { computed } from 'vue';
const posts = computed(() => postsStore.posts);

const deletePost = (postId) => {
    const post = posts.value.find(p => p.id === postId);
    if (post) {
        postsStore.deletePost(postId);
    } else {
        console.error(`Post with id ${postId} not found.`);
    }
}
</script>
