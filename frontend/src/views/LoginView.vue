<script setup>
import { ref, computed } from 'vue';
import LoginForm from '@/components/login/LoginForm.vue';
import RegisterForm from "@/components/login/RegisterForm.vue";
import { userAuthStore } from '@/stores/user';

const userStore = userAuthStore();
const users = computed(() => userStore.usersArray);

// function retrieveUsers() {
//     userStore.fetchUsers();
//     console.log("Users", userStore.usersArray);
// }

import { useRouter } from 'vue-router';
const router = useRouter();

function handleLogin(payload) {
    userStore.login(payload.username, payload.password);
    router.push({ name: 'homepage' });
}


</script>

<template>
    <div class="flex justify-between">
        <div class="text-center flex flex-col items-center justify-center mt-10">
            Login
            <LoginForm @login="handleLogin" />
        </div>
        <div class="text-center flex flex-col items-center justify-center mt-10">
            Don t have an account?
            Register
            <RegisterForm />
        </div>
    </div>

    <!-- <div @click="retrieveUsers" class="cursor-pointer">Fetch User</div> -->

    <!-- <div>
        <ul>
            <li v-for="user in users" :key="user.id">{{ user.username }}</li>
        </ul>
    </div> -->
</template>
<style scoped></style>
