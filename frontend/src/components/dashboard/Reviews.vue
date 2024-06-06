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
                            review.message }}
                        </p>
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
                </div>
                <div v-else>
                    No reviews found.
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useReviewsStore } from '@/stores/reviews';
import { onMounted } from 'vue';

const reviewsStore = useReviewsStore();

onMounted(() => {
    reviewsStore.fetchReviews();
});

import { userAuthStore } from '@/stores/user';
const userStorage = userAuthStore();

import { computed } from 'vue';
const reviews = computed(() => reviewsStore.reviews);

const deleteReview = (reviewId) => {
    reviewsStore.deleteReview(reviewId);
}
</script>
