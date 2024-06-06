<template>
    <div>
        <div>
            <ul>
                <li v-for="user in users" :key="user.id"
                    class="mx-5 flex justify-between items-center align-top space-y-2 border-gray-200">
                    <span v-if="user.username != 'Admin'" class="text-black font-semibold">Username: {{ user.username
                        }}</span>
                    <span v-if="user.username != 'Admin'" class="text-black font-semibold">Password: {{ user.password
                        }}</span>
                    <div v-if="user.username != 'Admin'" class=" action-buttons">
                        <button @click="enterEditMode(user)"
                            class="bg-black hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-2">Edit</button>
                        <button @click="deleteUser(user)"
                            class="bg-black hover:bg-red-700 text-white font-bold py-1 px-4 rounded">Delete</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div v-if="isEditing" class="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
        <div class="bg-white p-8 rounded-md">
            <form @submit.prevent="editUser(currentUser)">
                <input v-model="newUsername" type="text" placeholder="New Username"
                    class="block w-full mb-4 px-4 py-2 border rounded-md">
                <input v-model="newPassword" type="text" placeholder="New Password"
                    class="block w-full mb-4 px-4 py-2 border rounded-md">
                <div class="flex justify-end">
                    <button @click="isEditing = false"
                        class="bg-gray-400 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md mr-2">Cancel</button>
                    <button type="submit"
                        class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { userAuthStore } from "@/stores/user.js"
const userStorage = userAuthStore();

function fetchUsers() {
    userStorage.fetchUsers();
}

import { onMounted } from 'vue';
onMounted(() => {
    fetchUsers();
});

import { ref } from 'vue';
const isEditing = ref(false);

const newUsername = ref('');
const newPassword = ref('');

let currentUser = null;

function enterEditMode(user) {
    currentUser = user;
    isEditing.value = !isEditing.value;
}

function editUser(user) {
    userStorage.editUser(user.id, newUsername.value, newPassword.value);
    isEditing.value = false;
}

function deleteUser(user) {
    userStorage.deleteUser(user);
}

import { computed } from 'vue';
const users = computed(() => userStorage.usersArray);
</script>