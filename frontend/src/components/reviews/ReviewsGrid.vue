<script setup>
import { useReviewsStore } from '@/stores/reviews';
const reviewsStore = useReviewsStore();

import { onMounted } from 'vue';
onMounted(() => {
    reviewsStore.fetchReviews();
});

import { computed } from 'vue';
const reviews = computed(() => reviewsStore.reviews);

const deleteReview = (reviewId) => {
    reviewsStore.deleteReview(reviewId);
}

import { ref } from 'vue';
const inEditMode = ref(false);

const currentReviewId = ref(null);
const newTitle = ref('');
const newMessage = ref('');
const newRating = ref(null);

function enterEditMode(reviewId) {
    inEditMode.value = !inEditMode.value;
    currentReviewId.value = reviewId;
}

const editReview = (reviewId) => {
    reviewsStore.editReview(reviewId, newTitle.value, newMessage.value, newRating.value);
    inEditMode.value = !inEditMode.value;
    newTitle.value = '';
    newMessage.value = '';
    newRating.value = null;
}


</script>
<template>
    <section class="py-12">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl text-center font-bold text-gray-900 lg:text-left mb-8">Reviews</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div v-if="reviews && reviews.length > 0" v-for="review in reviews" :key="review.id"
                    class="bg-white border border-solid border-gray-300 rounded-2xl relative">
                    <div class="p-6">
                        <p class="font-bold text-lg text-black leading-8 h-auto">
                            {{ review.title }}
                        </p>
                        <p class="text-lg text-gray-500 leading-8 mb-4 truncate hover:whitespace-normal">{{
                            review.message }}</p>


                        <div class="flex items-center gap-1">
                            <template v-for="i in 5">
                                <i v-if="i <= review.rating" class="bi bi-star-fill text-2xl text-yellow-400"></i>
                                <i v-else class="bi bi-star text-2xl text-gray-300"></i>
                            </template>
                        </div>
                    </div>
                    <button @click="deleteReview(review.id)" class="absolute top-2 right-2 text-red-500">
                        <i class="bi bi-x text-3xl"></i>
                    </button>
                    <button @click="enterEditMode(review.id)" class="absolute right-2 bottom-2 text-red-500">
                        <i class="bi bi-pen text-2xl"></i>
                    </button>
                </div>
                <div v-else>
                    No reviews found.
                </div>
            </div>
        </div>
        <div v-if="inEditMode" class="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
            <div class="bg-white p-8 rounded-md">
                <form @submit.prevent="editReview(currentReviewId)">
                    <input v-model="newTitle" type="text" placeholder="New Title"
                        class="block w-full mb-4 px-4 py-2 border rounded-md">
                    <input v-model="newMessage" type="text" placeholder="New Message"
                        class="block w-full mb-4 px-4 py-2 border rounded-md">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="rating">
                        Rating
                    </label>
                    <div class="flex items-center">
                        <input type="radio" id="star11" name="rating" value="1" v-model="newRating" required
                            class="hidden" />
                        <label for="star11" class="cursor-pointer text-3xl text-gray-300 hover:text-gray-500">
                            <i :class="{ 'bi-star-fill text-yellow-500': newRating >= 1, 'bi-star': newRating < 1 }"
                                class="bi"></i>
                        </label>
                        <input type="radio" id="star22" name="rating" value="2" v-model="newRating" class="hidden" />
                        <label for="star22" class="cursor-pointer text-3xl text-gray-300 hover:text-gray-500">
                            <i :class="{ 'bi-star-fill text-yellow-500': newRating >= 2, 'bi-star': newRating < 2 }"
                                class="bi"></i>
                        </label>
                        <input type="radio" id="star33" name="rating" value="3" v-model="newRating" class="hidden" />
                        <label for="star33" class="cursor-pointer text-3xl text-gray-300 hover:text-gray-500">
                            <i :class="{ 'bi-star-fill text-yellow-500': newRating >= 3, 'bi-star': newRating < 3 }"
                                class="bi"></i>
                        </label>
                        <input type="radio" id="star44" name="rating" value="4" v-model="newRating" class="hidden" />
                        <label for="star44" class="cursor-pointer text-3xl text-gray-300 hover:text-gray-500">
                            <i :class="{ 'bi-star-fill text-yellow-500': newRating >= 4, 'bi-star': newRating < 4 }"
                                class="bi"></i>
                        </label>
                        <input type="radio" id="star55" name="rating" value="5" v-model="newRating" class="hidden" />
                        <label for="star55" class="cursor-pointer text-3xl text-gray-300 hover:text-gray-500">
                            <i :class="{ 'bi-star-fill text-yellow-500': newRating >= 5, 'bi-star': newRating < 5 }"
                                class="bi"></i>
                        </label>
                    </div>
                    <div class="flex justify-end">
                        <button @click="inEditMode = false"
                            class="bg-gray-400 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md mr-2">Cancel</button>
                        <button type="submit"
                            class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </section>


</template>
<style scoped></style>