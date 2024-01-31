<script setup>
import ContactCard from '../components/ContactCard.vue';
import ContactFormular from '../components/ContactFormular.vue';
</script>
<template>
    <div class="flex justify-center items-center min-h-screen bg-white">
        <div class="container mx-auto my-4 px-4 lg:px-20">
            <ContactFormular />
            <ContactCard />
        </div>
    </div>
</template>
<style scoped></style>