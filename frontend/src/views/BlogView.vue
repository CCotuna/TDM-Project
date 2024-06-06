<script setup>
import { userAuthStore } from "@/stores/user";
const userStore = userAuthStore();

import BlogForm from "@/components/blog/BlogForm.vue";
import BlogGrid from "@/components/blog/BlogGrid.vue";
</script>
<template>

    <div class="w-full flex flex-col sm:flex mt-5">
        <div class="flex justify-center items-center align-middle min-w-96">
            <BlogForm />
        </div>
        <BlogGrid />
    </div>
</template>
<style scoped></style>