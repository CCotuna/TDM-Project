<script setup>
import Dashboard from "@/components/dashboard/Dashboard.vue";
import Users from "@/components/dashboard/Users.vue";
import Reviews from "@/components/dashboard/Reviews.vue";
import Blog from "@/components/dashboard/Blog.vue";
import Submission from "@/components/dashboard/Submission.vue";
import Gallery from "@/components/dashboard/Gallery.vue";

import { userAuthStore } from "@/stores/user";
const userStorage = userAuthStore();

import { ref } from 'vue';
const adminChoice = ref('dashboard');

function handleAdminChoice(choice) {
    adminChoice.value = choice;
}
</script>
<template>

    <div class="relative">
        <div class="py-3.5 px-8 ">
            <ul
                class="text-center flex lg:flex-row flex-col xl:gap-1 gap-2 lg:ml-auto lg:flex lg:bg-indigo-500 dark:bg-transparent items-center p-1 rounded-xl">
                <li>
                    <span @click="handleAdminChoice('dashboard')" class="cursor-pointer py-2 px-5 flex justify-center bg-black transition-all duration-500 ease-in-out text-md
                        text-white font-semibold rounded-lg">
                        Dashboard</span>
                </li>
                <li>
                    <span @click="handleAdminChoice('users')" class="cursor-pointer py-2 px-5 bg-transparent transition-all duration-500 ease-in-out text-md text-black
                        hover:bg-black hover:text-white font-semibold rounded-lg flex justify-center">
                        Users</span>
                </li>
                <li>
                    <span @click="handleAdminChoice('reviews')" class="cursor-pointer py-2 px-5 bg-transparent transition-all duration-500 ease-in-out text-md text-black
                        hover:bg-black hover:text-white font-semibold rounded-lg flex justify-center">
                        Reviews</span>
                </li>
                <li>
                    <span @click="handleAdminChoice('blog')" class="cursor-pointer py-2 px-5 bg-transparent transition-all duration-500 ease-in-out text-md text-black
                        hover:bg-black hover:text-white font-semibold rounded-lg flex justify-center">
                        Blog</span>
                </li>
                <li>
                    <span @click="handleAdminChoice('submissions')" class="cursor-pointer py-2 px-5 bg-transparent transition-all duration-500 ease-in-out text-md text-black
                        hover:bg-black hover:text-white font-semibold rounded-lg flex justify-center">
                        Submissions</span>
                </li>
                <li>
                    <span @click="handleAdminChoice('gallery')" class="cursor-pointer py-2 px-5 bg-transparent transition-all duration-500 ease-in-out text-md text-black
                        hover:bg-black hover:text-white font-semibold rounded-lg flex justify-center">
                        Gallery</span>
                </li>
            </ul>
            <div class="block max-lg:pl-6">
                <h6 class="text-sm sm:text-lg font-semibold text-black blackspace-nowrap ms-3 mb-1.5">
                    Welcome back,
                    <span class="text-black text-base sm:text-lg font-semibold">
                        {{ userStorage.user.username }}!</span>
                </h6>
                <p class="text-md font-medium text-black ms-3">Hehehehe</p>
            </div>
        </div>

        <div class=" p-4 ">
            <div class="rounded-2xl bg-white overflow-hidden p-8">
                <div class="border border-white-200 rounded-2xl">
                    <div v-if="adminChoice === 'dashboard'">
                        <Dashboard />
                    </div>
                    <div v-if="adminChoice === 'users'">
                        <Users />
                    </div>
                    <div v-if="adminChoice === 'reviews'">
                        <Reviews />
                    </div>
                    <div v-if="adminChoice === 'blog'">
                        <Blog />
                    </div>
                    <div v-if="adminChoice === 'submissions'">
                        <Submission />
                    </div>
                    <div v-if="adminChoice === 'gallery'">
                        <Gallery />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
