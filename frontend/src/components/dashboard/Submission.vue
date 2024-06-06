<template>
    <section class="py-12">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl text-center font-bold text-gray-900 lg:text-left mb-8">Submissions</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div v-if="submissions && submissions.length > 0" v-for="submission in submissions" :key="submission.id"
                    class="bg-white border border-solid border-gray-300 rounded-2xl relative">
                    <div class="p-6">
                        <p class="font-bold text-lg text-black leading-8 h-auto">
                            {{ submission.name }}
                        </p>
                        <p class="text-lg text-gray-500 leading-8 h-auto mb-6">
                            {{ submission.email }}
                        </p>
                        <p class="text-lg text-gray-500 leading-8 h-auto mb-6">
                            {{ submission.eventType }}
                        </p>
                        <p class="text-lg text-gray-500 leading-8 h-auto mb-6">
                            {{ submission.eventDate }}
                        </p>
                        <p class="text-lg text-gray-500 leading-8 h-auto mb-6">
                            {{ submission.message }}
                        </p>
                        <div class="flex items-center gap-1">
                            {{ submission.eventLocation }}
                        </div>
                    </div>
                    <button @click="deleteSubmission(submission.id)" class="absolute top-2 right-2 text-red-500">
                        <i class="bi bi-x text-3xl"></i>
                    </button>
                </div>
                <div v-else>
                    No submissions found.
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useContactStore } from '@/stores/contact';
const contactStore = useContactStore();

import { onMounted } from 'vue';
onMounted(() => {
    contactStore.fetchSubmissions();
});

import { computed } from 'vue';
const submissions = computed(() => contactStore.submissions);

const deleteSubmission = (submissionId) => {
    const submission = submissions.value.find(p => p.id === submissionId);
    if (submission) {
        contactStore.deleteSubmission(submissionId);
    } else {
        console.error(`Submission with id ${submissionId} not found.`);
    }
}


</script>
