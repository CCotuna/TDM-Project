<script setup>
import { ref } from 'vue';

const title = ref('');
const message = ref('');
const rating = ref(null);

import { useReviewsStore } from '@/stores/reviews';
const ReviewsStore = useReviewsStore();

import { userAuthStore } from '@/stores/user';
const userStore = userAuthStore();

function submitReview() {
    const review = {
        title: title.value,
        message: message.value,
        rating: rating.value,
        userId: userStore.user.id,
    };
    ReviewsStore.addReview(review);
    title.value = '';
    message.value = '';
    rating.value = null;
}

</script>

<template>
    <div class="w-full max-w-md">
        <form @submit.prevent="submitReview" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <span class="block text
                -center text-gray-700 text-xl font-semibold mb-2">Let us know your thoughts</span>
            </div>
            <div class="mb-4 grid grid-cols-2 gap-4">
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                        Title
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title" type="text" placeholder="Enter your Title" required v-model="title">
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                        Message
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message" type="text" placeholder="Enter your message" required v-model="message">
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="rating">
                        Rating
                    </label>
                    <div class="flex items-center">
                        <input type="radio" id="star1" name="rating" value="1" v-model="rating" required
                            class="hidden" />
                        <label for="star1" class="cursor-pointer text-3xl text-gray-300 hover:text-gray-500">
                            <i :class="{ 'bi-star-fill text-yellow-500': rating >= 1, 'bi-star': rating < 1 }"
                                class="bi"></i>
                        </label>
                        <input type="radio" id="star2" name="rating" value="2" v-model="rating" class="hidden" />
                        <label for="star2" class="cursor-pointer text-3xl text-gray-300 hover:text-gray-500">
                            <i :class="{ 'bi-star-fill text-yellow-500': rating >= 2, 'bi-star': rating < 2 }"
                                class="bi"></i>
                        </label>
                        <input type="radio" id="star3" name="rating" value="3" v-model="rating" class="hidden" />
                        <label for="star3" class="cursor-pointer text-3xl text-gray-300 hover:text-gray-500">
                            <i :class="{ 'bi-star-fill text-yellow-500': rating >= 3, 'bi-star': rating < 3 }"
                                class="bi"></i>
                        </label>
                        <input type="radio" id="star4" name="rating" value="4" v-model="rating" class="hidden" />
                        <label for="star4" class="cursor-pointer text-3xl text-gray-300 hover:text-gray-500">
                            <i :class="{ 'bi-star-fill text-yellow-500': rating >= 4, 'bi-star': rating < 4 }"
                                class="bi"></i>
                        </label>
                        <input type="radio" id="star5" name="rating" value="5" v-model="rating" class="hidden" />
                        <label for="star5" class="cursor-pointer text-3xl text-gray-300 hover:text-gray-500">
                            <i :class="{ 'bi-star-fill text-yellow-500': rating >= 5, 'bi-star': rating < 5 }"
                                class="bi"></i>
                        </label>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-between">
                <button type="submit"
                    class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
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
