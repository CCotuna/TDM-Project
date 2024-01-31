<script setup>
defineProps({
    src: String,
});
</script>
<template>

    <div class="py-2 lg:py-0">
        <img :src="src" alt="Gallery Image"
          class="object-cover w-full h-64 lg:h-full lg:w-3/4 mx-auto rounded-lg shadow-custom fade-in-fwd" />
      </div>
</template>
<style scoped></style>