<template>
    <div class="chat-container max-w-xl mx-auto p-4 border rounded shadow">
        <h1 class="text-xl font-bold mb-4">Real-time Chat</h1>
        <div class="messages flex-1 overflow-y-auto p-4 border-b mb-4" ref="messagesContainer">
            <div v-for="message in messages" :key="message.id"
                :class="['message p-2 mb-2 rounded', message.sent ? 'bg-green-200' : 'bg-gray-200']">
                {{ message.sender }}: {{ message.text }}
            </div>
        </div>
        <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message"
            class="message-input w-full p-2 border rounded mb-2" />
        <button @click="clearChat" class="bg-black text-white py-2 px-4 rounded hover:bg-red-600">Clear
            Chat</button>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { connectWebSocket } from '@/ws.js';

import { userAuthStore } from '@/stores/user';
const userStorage = userAuthStore();

const messages = ref([]);
const newMessage = ref('');
let ws;

const scrollToBottom = () => {
    nextTick(() => {
        const messagesContainer = messagesContainerRef.value;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    });
};

const sendMessage = () => {
    if (newMessage.value.trim() !== '') {
        if (userStorage.isAuthenticated) {
            messages.value.push({ id: messages.value.length, text: newMessage.value, sender: userStorage.user.username, sent: true });
            ws.send(JSON.stringify({ text: newMessage.value, sender: userStorage.user.username }));
        } else {
            messages.value.push({ id: messages.value.length, text: newMessage.value, sender: 'Anonymous', sent: true });
            ws.send(JSON.stringify({ text: newMessage.value, sender: 'Anonymous' }));
        }
        newMessage.value = '';
        scrollToBottom();
    }
};

const onMessageReceived = (message) => {
    const parsedMessage = JSON.parse(message);
    messages.value.push({ id: messages.value.length, text: parsedMessage.text, sender: parsedMessage.sender, sent: false });
    scrollToBottom();
};

const clearChat = () => {
    messages.value = [];
};

const messagesContainerRef = ref(null);

onMounted(() => {
    ws = connectWebSocket(onMessageReceived);
    scrollToBottom();
});

onUnmounted(() => {
    if (ws) {
        ws.close();
    }
});
</script>
