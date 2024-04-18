<script setup>
const props = defineProps({
    image: Object,
})
</script>
<template>
    <img :src="props.image.url" alt="photo" class="w-full h-96 object-cover rounded-lg shadow-lg">
</template>
<style scoped></style>