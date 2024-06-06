<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const emit = defineEmits(['login']);

const submitLoginForm = () => {
    emit('login', { username: username.value, password: password.value });
    username.value = '';
    password.value = '';
}
</script>

<template>
    <div class="w-full max-w-xs">
        <form @submit.prevent="submitLoginForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <span class="block text-center text-gray-700 text-xl font-bold mb-2">Sign In</span>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username2">
                    Username
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username2" type="text" placeholder="username" required v-model="username">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password2">
                    Password
                </label>
                <input
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password2" type="password" placeholder="***********" required v-model="password">
                <p class="text-red-500 text-xs italic">Please enter a password.</p>
            </div>
            <div class="flex items-center justify-between">
                <button type="submit"
                    class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Sign In
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-black-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy;2024 SweetLikeHoney. All rights reserved.
        </p>
    </div>
</template>
<style scoped></style>
