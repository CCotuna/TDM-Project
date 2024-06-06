<script setup>
import ReviewForm from '@/components/reviews/ReviewForm.vue';
import ReviewsGrid from '@/components/reviews/ReviewsGrid.vue';
</script>
<template>
    <div class="w-full flex flex-col sm:flex mt-5">
        <div class="flex justify-center items-center align-middle min-w-96">
            <ReviewForm />
        </div>
        <ReviewsGrid />
    </div>
</template>
<style scoped></style>