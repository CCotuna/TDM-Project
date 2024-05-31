<script setup>
import LoginForm from '@/components/login/LoginForm.vue';

import RegisterForm from "@/components/login/RegisterForm.vue";

import { userAuthStore } from '@/stores/user';
const userStore = userAuthStore();

function retrieveUser() {
    userStore.fetchUsers();
    console.log("Fetching user");
}
</script>
<template>
    <div class="text-center flex items-center justify-center mt-10">
        Login
        <LoginForm />
    </div>


    <div @click="retrieveUser" class=" cursor-pointer">Fetch User</div>
    <div class="text-center flex items-center justify-center mt-10">
        Register
        <RegisterForm />
    </div>
</template>
<style scoped></style>