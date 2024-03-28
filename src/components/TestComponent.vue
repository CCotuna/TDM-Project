<template>
    <img src="@/assets/OIP7.svg" alt="Show Overlay" @click="show = true" class="h-96 w-96 cursor-pointer" />
    <Overlay :show="show" @click="show = false">
        <div class="wrapper" @click.stop>
            <img src="@/assets/OIP9.svg" alt="" class="h-96 custom-width cursor-pointer" @click="show = false">
        </div>
    </Overlay>
</template>

<script setup>
import { ref } from 'vue';
import { Overlay } from 'vant';

const show = ref(false);
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>