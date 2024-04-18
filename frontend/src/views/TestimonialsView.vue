<script setup>
import { ref } from 'vue'
let testimonials = ref([])

import { onMounted } from 'vue'
import axios from 'axios'

let loginStatus = ref(false);

onMounted(async () => {
    const response = await axios.get("http://localhost:3000/testimonials",)
    testimonials.value = response.data

    loginStatus.value = await axios.get("http://localhost:3000/auth/login")
})

const reviewTitle = ref('')
const reviewDescription = ref('')
const reviewRating = ref('')

async function addReview() {
    await axios.post("http://localhost:3000/testimonials", {
        title: reviewTitle.value,
        description: reviewDescription.value,
        rating: reviewRating.value,
    },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    window.location.reload();
    reviewTitle.value = ''
    reviewDescription.value = ''
    reviewRating.value = ''

}

async function deleteTestimonial(testimonialId) {
    await axios.delete("http://localhost:3000/testimonials", {
        headers: {
            "Content-Type": "application/json",
        },
        data: { testimonialId },
    });
    window.location.reload();
}


</script>
<template>
    <section class="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0 flex">
        <section v-if="testimonials.length > 0" class="p-5 me-5 md:p-0 grid xl:grid-cols-3 gap-10 items-start ">
            <div v-for="testimonial in testimonials" :key="testimonial.id"
                class="block w-auto p-6 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-emerald-800 dark:border-emerald-700 dark:hover:bg-emerald-700">
                <div class="flex justify-between items-start">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{
                        testimonial.title }}</h5>
                    <button @click="deleteTestimonial(testimonial.id)" class="cursor-pointer"><span
                            class="text-gray-400 text-md">&#10006;</span></button>
                </div>
                <p class="font-normal text-gray-700 dark:text-gray-400 break-words">{{ testimonial.description }}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400">{{ testimonial.rating }}</p>
            </div>
        </section>
        <section v-else
            class="p-5 ms-40 me-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-start">
            <div class="text-2xl font-bold text-emerald-900">No testimonials yet !</div>
        </section>

        <section>
            <form v-if="loginStatus.data == true" @submit.prevent="addReview" class="space-y-6 w-96 border p-5">
                <div>
                    <label for="title" class="block text-sm font-medium leading-6 text-gray-900">Title</label>
                    <div class="mt-2">
                        <input id="title" type="text" v-model="reviewTitle"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-800 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="description"
                            class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                    </div>
                    <div class="mt-2">
                        <textarea id="description" type="text-area" v-model="reviewDescription"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"></textarea>
                    </div>
                </div>

                <div>
                    <label for="rating" class="block text-sm font-medium leading-6 text-gray-900">Rating</label>
                    <div class="mt-2">
                        <input id="rating" type="number" v-model="reviewRating"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-800 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div class="flex justify-center">
                    <button type="submit"
                        class="flex w-32 justify-center rounded-md bg-emerald-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-800">Add
                        Review</button>
                </div>
            </form>
            <div v-else>
                <RouterLink :to="{ name: 'login' }" class="text-2xl font-bold text-emerald-900">Log in to add a review !
                </RouterLink>
            </div>
        </section>
    </section>
</template>
<style scoped></style>