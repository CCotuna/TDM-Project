<script setup>
import axios from 'axios';
import { ref } from 'vue'

const username = ref('');
const password = ref('');

import { v4 as uuidv4 } from 'uuid'

const showSuccessMessage = ref(false)
const showTryAgainMessage = ref(false);

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
        showSuccessMessage.value = true
        setTimeout(() => {
            showSuccessMessage.value = false
            window.location.reload();
        }, 1000)
    } catch (error) {
        if (error.response && error.response.status === 401) {
            showTryAgainMessage.value = true;
            setTimeout(() => {
                showTryAgainMessage.value = false;
            }, 3000);
        } else {
            console.error("Error submitting form:", error);
        }
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

let userAccount = ref({});
let informationDisplayed = ref(false);

async function displayAccountInformation() {
    const response = await axios.get("http://localhost:3000/auth/")
    userAccount.value = response.data;
    informationDisplayed.value = !informationDisplayed.value;
}

const editUsername = ref('');
const editPassword = ref('');

async function editAccount() {
    axios.put(
        "http://localhost:3000/auth/editUser",
        { editUsername, editPassword },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
}

</script>

<template>
    <!-- {{ loginStatus }} -->
    <div v-if="loginStatus.data == false" class=" flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
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
        <div v-if="showTryAgainMessage" class="bg-red-500 text-white py-2 px-4 rounded fixed bottom-5 right-5">
            Try Again - Incorrect username or password!
        </div>
        <div v-if="showSuccessMessage" class="bg-green-500 text-white py-2 px-4 rounded fixed bottom-5 right-5">
            Successfully logged In!
        </div>
    </div>
    <div v-else>

        <div class=" flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Account Information
                </h2>
                <button @click="displayAccountInformation">Display Account Information</button>
                <div v-if="informationDisplayed" class="flex space-x-10">
                    <!-- <span>{{ userAccount }}</span> -->
                    <span class="font-bold">Username: </span> {{ userAccount.username }}
                    <span class="font-bold">Password: </span> {{ userAccount.password }}
                </div>
            </div>

            <div class="sm:mx-auto mx-auto mt-16">
                <div class="flex items-center justify-between space-x-32">
                    <div class="max-w-96 mt-2 space-y-5">

                        <h2 class="text-2xl font-bold">Pay attention!</h2>
                        <p class=" text-lg text-gray-500">When editing your account information, please ensure that you
                            review all changes carefully before submitting. Making incorrect updates may lead to
                            unintended consequences. </p>
                        <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Take your time and
                            double-check your entries to ensure accuracy.</p>


                    </div>

                    <form @submit.prevent="editAccount" class="space-y-6 w-96">
                        <div>
                            <label for="username"
                                class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                            <div class="mt-2">
                                <input id="username" type="text" v-model="editUsername"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-800 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password"
                                    class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div class="mt-2">
                                <input id="password" type="text" v-model="editPassword"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div class="flex justify-between">
                            <button type="submit"
                                class="flex w-32 justify-center rounded-md bg-emerald-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-800">Edit
                                Account</button>
                            <button @click="logoutAction"
                                class="flex w-32 justify-center rounded-md bg-emerald-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-800">Logout</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    </div>
</template>