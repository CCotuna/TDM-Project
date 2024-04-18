<script setup>
const props = defineProps({
    image: Object,
})

defineEmits(["deleteProduct"])

</script>
<template>
    <div class="flex flex-col">
        <img :src="props.image.url" alt="photo" class="w-full h-96 object-cover rounded-lg shadow-lg">
        <button @click="$emit('deleteProduct', image.id)" class="cursor-pointer"><span
                class="text-gray-400 text-md">&#10006;</span></button>
    </div>
</template>
<style scoped></style>