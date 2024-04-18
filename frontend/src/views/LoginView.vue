<script setup>
import axios from 'axios';
import { ref } from 'vue'

const username = ref('');
const password = ref('');

import { v4 as uuidv4 } from 'uuid'

async function submitForm() {
    try {
        await axios.post("http://localhost:3000/auth/login", {
            id: uuidv4(),
            username: username.value,
            password: password.value,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.reload();
    } catch (error) {
        console.error("Error submitting form:", error);
    }

    console.log("username", username, "password", password)
    username.value = '';
    password.value = '';
}

import { onMounted } from 'vue'

let loginStatus = ref(false);

onMounted(async () => {
    loginStatus.value = await axios.get("http://localhost:3000/auth/login")
})

async function logoutAction() {
    try {
        loginStatus.value = await axios.post("http://localhost:3000/auth/logout")
        window.location.reload();
    } catch (error) {
        console.error("Error logging out:", error);
    }
}

</script>

<template>
    <!-- {{ loginStatus }} -->
    <div v-if="loginStatus.data == false" class=" flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
            <!-- <span class="custom-font  text-5xl  whitespace-nowrap text-black hover:text-mainGreen ">Sweet
                Like Honey</span> -->
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your
                account</h2>
            {{ username }}
            {{ password }}
        </div>


        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="submitForm" class="space-y-6">
                <div>
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                    <div class="mt-2">
                        <input id="username" type="text" v-model="username"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-800 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div class="text-sm">
                            <a href="#" class="font-semibold text-emerald-600 hover:text-emerald-500">Forgot
                                password?</a>
                        </div>
                    </div>
                    <div class="mt-2">
                        <input id="password" type="text" v-model="password"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-emerald-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-800">Sign
                        in</button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                {{ ' ' }}
                <a href="#" class="font-semibold leading-6 text-emerald-600 hover:text-emerald-500">Start a 14 day free
                    trial</a>
            </p>
        </div>
    </div>
    <div v-else>
        Random Text

        <button @click="logoutAction"> Logout Boya</button>
    </div>
</template>