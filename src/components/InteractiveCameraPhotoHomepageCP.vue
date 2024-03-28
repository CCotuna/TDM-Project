<script setup>
import { ref } from 'vue';

const quotes = ref([
    "Quote 1",
    "Quote 2",
    "Quote 3",
    "Quote 6",
    "Quote 5",
    "Quote 4",
    "Quote 8",
]);

const randomQuote = ref("");

const showRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.value.length);
    randomQuote.value = quotes.value[randomIndex];
};
</script>
<template>
    <div>

        <!-- <img src="@/assets/pic1.jpg" alt="Camera Photo" @click="showRandomQuote"> -->
        <button @click="showRandomQuote">Show Random Quote</button>
        <p v-if="randomQuote">{{ randomQuote }}</p>

    </div>
</template>
<style scoped></style>