<script setup>
import ContactForm from "@/components/contact/ContactForm.vue";

import { useContactStore } from "@/stores/contact";
const contactStore = useContactStore();

const submissions = contactStore.submissions;
</script>
<template>
    <div class="flex justify-center">
        <div class="text-center flex flex-col items-center justify-center mt-10">
            Contact
            <ContactForm />
        </div>
    </div>
    <div>
        <ul>
            <li v-for="submission in submissions" :key="submission.id">{{ submission.name }}
                {{ submission.email }}
                {{ submission.phone }}
                {{ submission.eventType }}
                {{ submission.eventDate }}
                {{ submission.eventLocation }}
                {{ submission.message }}
                // id:
                {{ submission.currentUserId }}
            </li>
        </ul>
    </div>
</template>
<style scoped></style>