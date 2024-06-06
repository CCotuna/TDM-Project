<template>
    <div class="chat-container">
        <h1>Real-time Chat</h1>
        <div class="messages" ref="messagesContainer">
            <div v-for="message in messages" :key="message.id" :class="{ 'message': true, 'sent': message.sent }">
                {{ message.sender }}: {{ message.text }}
            </div>
        </div>
        <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message" class="message-input" />
        <button @click="clearChat">Clear Chat</button>
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
        // Add your own message to the messages array
        messages.value.push({ id: messages.value.length, text: newMessage.value, sender: userStorage.user.username, sent: true });
        // Send the message to the WebSocket server
        ws.send(JSON.stringify({ text: newMessage.value, sender: userStorage.user.username }));
        // Clear the input field
        newMessage.value = '';
        // Scroll to the bottom of the messages container
        scrollToBottom();
    }
};

const onMessageReceived = (message) => {
    // Parse the incoming message JSON
    const parsedMessage = JSON.parse(message);
    // Add received messages to the messages array
    messages.value.push({ id: messages.value.length, text: parsedMessage.text, sender: parsedMessage.sender, sent: false });
    // Scroll to the bottom of the messages container
    scrollToBottom();
};

const clearChat = () => {
    messages.value = []; // Clear the messages array
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

<style scoped>
.chat-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.messages {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
}

.message {
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f1f1f1;
}

.sent {
    background-color: #aaffaa;
}

.message-input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

button {
    margin-top: 10px;
}
</style>