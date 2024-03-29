<template>
    <div>
        <img src="@/assets/pic1.jpg" alt="Photo" @click="showModal" class="w-96 h-96 cursor-pointer mt-20">
        <LoginModal v-if="isModalVisible" @modal-closed="handleModalClose" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginModal from '@/components/LoginModal.vue';

const isModalVisible = ref(false);

function showModal() {
    console.log('showModal')
    isModalVisible.value = true;
}

function handleModalClose() {
    isModalVisible.value = false;
}
</script>