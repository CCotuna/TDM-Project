<template>
    <div>
        <div v-if="!isLoggedIn">
            <input v-model="username" placeholder="Username">
            <input v-model="password" placeholder="Password" type="password">
            <button @click="login">Login</button>
        </div>
        <div v-else>
            <p>Welcome, {{ currentUser.username }}!</p>
            <button @click="logout">Logout</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const username = ref('');
const password = ref('');

function login() {
    if (authStore.login(username.value, password.value)) {

        username.value = '';
        password.value = '';
    } else {
        console.log("Login failed");
    }
}
function logout() {
    authStore.logout();
}

const isLoggedIn = computed(() => !!authStore.currentUser);
const currentUser = computed(() => authStore.currentUser);
</script>