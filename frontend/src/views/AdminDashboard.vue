<script setup>
import { userAuthStore } from "@/stores/user.js"
const userStorage = userAuthStore();

function fetchUsers() {
    userStorage.fetchUsers();
}

import { computed } from 'vue';
const users = computed(() => userStorage.usersArray);
</script>
<template>
    <div>
        <div @click="fetchUsers" class="cursor-pointer">Fetch User</div>
        <div>
            <ul>
                <li v-for="user in users" :key="user.id">{{ user.username }} {{ user.password }} {{ user.id }}</li>
            </ul>
        </div>
    </div>
</template>
<style scoped></style>
