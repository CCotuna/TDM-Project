<script setup>
import { Swipe, SwipeItem } from 'vant';
import OIP8 from '@/assets/image.jpg';
import OIP9 from '@/assets/image2.png';
import OIP7 from '@/assets/image3.png';
import OIP6 from '@/assets/pic1.jpg';

const images = [OIP8, OIP7, OIP9];
</script>

<template>
    <Swipe :autoplay="3000" lazy-render style="overflow: visible;">
        <SwipeItem v-for="(image, index) in images" :key="index" style="display: flex; justify-content: center;">
            <div class="flex flex-col items-center">
                <img :src="image" class="w-auto h-96" />
                <div class="flex flex-col items-center border-4 p-10 -mt-16 w-32">
                    <div>.</div>
                    <div>TRAVEL</div>
                    <div>MORE</div>
                </div>
            </div>
        </SwipeItem>
    </Swipe>
</template>

<style scoped></style>
