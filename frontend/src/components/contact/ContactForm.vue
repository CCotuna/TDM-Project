<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const phone = ref('');
const eventType = ref('');
const eventDate = ref('');
const eventLocation = ref('');
const message = ref('');

import { useContactStore } from '@/stores/contact';
const contactStore = useContactStore();

import { userAuthStore } from '@/stores/user';
const userStore = userAuthStore();

function submitContactForm() {
    console.log(userStore.user.userId, "user id curent")
    contactStore.sendContactForm(name.value, email.value, phone.value, eventType.value, eventDate.value, eventLocation.value, message.value, userStore.user.userId);
    name.value = '';
    email.value = '';
    phone.value = '';
    eventType.value = '';
    eventDate.value = '';
    eventLocation.value = '';
    message.value = '';
}

</script>

<template>
    <div class="w-full max-w-md">
        <form @submit.prevent="submitContactForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4 grid grid-cols-2 gap-4">
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Name
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" type="text" placeholder="Enter your name" required v-model="name">
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email" placeholder="Enter your email" required v-model="email">
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                        Phone
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone" type="tel" placeholder="Enter your phone number" required v-model="phone">
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="event">
                        Event Type
                    </label>
                    <select
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="event" required v-model="eventType">
                        <option value="" disabled selected>Select an event type</option>
                        <option value="family">Family photoshoot</option>
                        <option value="wedding">Wedding</option>
                        <option value="product">Product photography</option>
                    </select>
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="date">
                        Event Date
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="date" type="date" required v-model="eventDate">
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="location">
                        Event Location
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location" type="text" placeholder="Enter the event location" required
                        v-model="eventLocation">
                </div>
                <div class="col-span-2">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                        Message
                    </label>
                    <textarea
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message" placeholder="Enter your message" required v-model="message"></textarea>
                </div>
            </div>

            <div class="flex items-center justify-between">
                <button type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Call us: +254 712 345 678
                </a>
            </div>
        </form>

        <p class="text-center text-gray-500 text-xs">
            &copy;2024 SweetLikeHoney. All rights reserved.
        </p>
    </div>
</template>
<style scoped></style>
