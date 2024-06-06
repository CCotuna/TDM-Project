<script setup>
import { ref, computed } from 'vue';
import LoginForm from '@/components/login/LoginForm.vue';
import RegisterForm from "@/components/login/RegisterForm.vue";
import { userAuthStore } from '@/stores/user';

const userStore = userAuthStore();
const users = computed(() => userStore.usersArray);


import { useRouter } from 'vue-router';
const router = useRouter();

function handleLogin(payload) {
    userStore.login(payload.username, payload.password);
    router.push({ name: 'homepage' });
}
</script>
<template>
    <div class="flex justify-center space-x-10">
        <div class="text-center flex flex-col items-center justify-center mt-10">
            <p>Already have an account?</p>
            <p>Log in</p>
            <LoginForm @login="handleLogin" />
        </div>
        <div v-if="!userStore.user.id" class="text-center flex flex-col items-center justify-center mt-10">
            <p>Don't have an account?</p>
            <p>Register</p>
            <RegisterForm />
        </div>
    </div>
</template>
<style scoped></style>
