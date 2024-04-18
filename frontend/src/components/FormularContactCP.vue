<script setup>
import { ref } from 'vue'


const firstname = ref('')
const lastname = ref('')
const typeOfShooting = ref('')
const subject = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

const showSuccessMessage = ref(false)

async function submitForm() {
    await axios.post("http://localhost:3000/contact", {
        id: uuidv4(),
        firstname: firstname.value,
        lastname: lastname.value,
        typeOfShooting: typeOfShooting.value,
        subject: subject.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
    },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    firstname.value = ''
    lastname.value = ''
    typeOfShooting.value = ''
    subject.value = ''
    email.value = ''
    phone.value = ''
    message.value = ''

    showSuccessMessage.value = true
    setTimeout(() => {
        showSuccessMessage.value = false
    }, 3000)
}

</script>
<template>

    <div class="p-8 rounded-2xl shadow-xl flex items-center justify-center">
        <div class="mr-8">
            <img src="@/assets/OIP10.svg" alt="Your Image" class="w-full lg:w-2/3 h-auto rounded-lg">
        </div>

        <form @submit.prevent="submitForm" class="w-2/3 -ms-32">
            <div class="flex">
                <h1 class="custom-font-cinzel-regular text-4xl md:text-5xl lg:text-6xl text-emerald-800">
                    Book a Date</h1>
            </div>
            <div class="custom-font-old-standard-regular grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                    class="w-full bg-gray-100 text-emerald-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="First Name*" v-model="firstname" />
                <input
                    class="w-full bg-gray-100 text-emerald-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Last Name*" v-model="lastname" />
                <input
                    class="w-full bg-gray-100 text-emerald-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Type of shooting*" v-model="typeOfShooting" />
                <input
                    class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Subject*" v-model="subject" />
                <input
                    class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email" placeholder="Email*" v-model="email" />
                <input
                    class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number" placeholder="Phone*" v-model="phone" />
            </div>
            <div class="my-4">
                <textarea placeholder="Message*"
                    class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    v-model="message"></textarea>
            </div>
            <div class="my-2 w-full md:w-1/2 lg:w-2/4">
                <button type="submit" class="uppercase text-sm font-bold tracking-wide bg-emerald-900 text-gray-100 p-3 rounded-lg w-full 
                  focus:outline-none focus:shadow-outline">
                    Send Message
                </button>
            </div>
            <div v-if="showSuccessMessage" class="bg-green-500 text-white py-2 px-4 rounded fixed bottom-5 right-5">
                Request sent successfully!
            </div>
        </form>
    </div>
</template>
<style scoped></style>