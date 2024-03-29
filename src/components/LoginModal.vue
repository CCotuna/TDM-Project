<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" v-if="isVisible">
        <div class="bg-white p-8 rounded-lg">

            <input v-model="username" placeholder="Username" class="w-full mb-4 p-2 rounded-md">
            <input v-model="password" placeholder="Password" type="password" class="w-full mb-4 p-2 rounded-md">
            <button @click="login" class="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
            <button @click="close"><span class=" m-4 cursor-pointer text-4xl"
                    @click="$emit('modal-closed')">&times;</span></button>
        </div>
    </div>
    <div v-if="isAuthenticated">
        <button v-if="isAuthenticated" @click="logout" class="bg-red-500 text-white px-4 py-2 rounded-md"><span
                @click="$emit('modal-closed')">Logout</span></button>
        THe user is authenticated and can see the content
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const isVisible = ref(true);
const username = ref('');
const password = ref('');
const isAuthenticated = ref(false);

function login() {
    if (authStore.login(username.value, password.value)) {
        // Login successful, close modal
        console.log("Login successful")
        isAuthenticated.value = true;
        isVisible.value = false;
        username.value = ''; // Clear username input
        password.value = ''; // Clear password input
    } else {
        // Login failed, handle error
        isAuthenticated.value = false;
        console.log("Login failed");
    }
}

defineEmits(['modal-closed']);

function close() {
    isVisible.value = false;
}

function logout() {
    console.log("logout succesfully")
    isAuthenticated.value = false;
    authStore.logout();
}
</script>