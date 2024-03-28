<script setup>
import { Swipe, SwipeItem } from 'vant';
import OIP8 from '@/assets/OIP9.svg';
import OIP9 from '@/assets/pic1.jpg';
import OIP7 from '@/assets/OIP6.svg';
import OIP6 from '@/assets/pic1.jpg';

const images = [OIP8, OIP9, OIP7, OIP6];
</script>

<template>
    <Swipe :autoplay="3000" lazy-render style="overflow: visible;">
        <SwipeItem v-for="(image, index) in images" :key="index" style="display: flex; justify-content: center;">
            <img :src="image" class="w-auto h-96" />
        </SwipeItem>
    </Swipe>
</template>

<style scoped></style>
