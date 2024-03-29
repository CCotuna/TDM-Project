<template>
    <!-- <div>
        <img v-if="!isModalVisible" src="@/assets/pic1.jpg" alt="Photo" @click="showModal"
            class="w-96 h-96 cursor-pointer mt-20">
        <LoginModal v-if="isModalVisible" @modal-closed="handleModalClose" />
    </div> -->
    <button @click="callAPIWelcome" type="button"
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Call
        API Welcome</button>

    <div>
        <p>API RESPONSE:</p>
        <h3>
            <li v-for="(task, index) in welcomeJSON" :key="index">
                {{ task.name }} - {{ task.favorite }}
            </li>
        </h3>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const welcomeJSON = ref([])
import axios from 'axios'

function callAPIWelcome() {
    axios({
        method: 'GET',
        url: 'http://localhost:3000',

    })
        .then((response) => {
            console.log("RESPONSE", response.data)
            welcomeJSON.value = response.data.map(task => ({
                name: task.name,
                favorite: task.favorite
            }))
            localStorage.setItem('lists', JSON.stringify(response.data))

        })
}

// import { ref } from 'vue';
// import LoginModal from '@/components/LoginModal.vue';

// const isModalVisible = ref(false);

// function showModal() {
//     console.log('showModal')
//     isModalVisible.value = true;
// }

// function handleModalClose() {
//     isModalVisible.value = false;
// }

// import { computed, watch } from 'vue';
// import { useAuthStore } from '@/stores/auth';

// const authStore = useAuthStore();

// const isAuthenticated = computed(() => authStore.isAuthenticated);

// // Watch for changes in isAuthenticated and close the modal if the user is authenticated
// watch(isAuthenticated, (value) => {
//     if (value) {
//         isModalVisible.value = false;
//     }
// });
</script>