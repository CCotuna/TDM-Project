<script setup>
import { userAuthStore } from "../stores/user.js"
const userStore = userAuthStore;

import { ref } from 'vue';
import { onMounted } from 'vue';

const users = ref([])

console.log(userStore.user);

onMounted(() => {
    userStore.fetchUsers();
    users.value = userStore.users;
})

</script>
<template>
    <div class="text-center flex items-center justify-center mt-10">
        <div v-for="user in users" :key="user.id">
            <p>{{ user.username }}</p>
        </div>
    </div>
</template>
<style scoped></style>