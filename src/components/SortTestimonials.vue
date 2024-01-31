<script setup>

defineEmits(['topReviews', 'topLikes'])

defineProps({
  sortSens: String,
  sortActive: Number,
  required: true
})
</script>

<template>
  <div class="flex flex-col justify-center items-center space-x-4">
    <span class="text-xl">Sort By</span>
    <div class="space-x-4">
      <button @click="$emit('topReviews')" class="bg-emerald-800 text-white px-4 py-2 rounded-md cursor-pointer transition-colors duration-300">Reviews
        <span v-if="sortActive === 1">
          <i v-if="sortSens === 'ASC'" class="bi bi-arrow-up-right"></i>
        <i v-else class="bi bi-arrow-down-left"></i></span>
    </button>
        
      <button @click="$emit('topLikes')" class="bg-emerald-800 text-white px-4 py-2 rounded-md cursor-pointer transition-colors duration-300">Likes
        <span v-if="sortActive === 2">
          <i v-if="sortSens === 'ASC'" class="bi bi-arrow-up-right"></i>
        <i v-else class="bi bi-arrow-down-left"></i></span>
    </button>
    </div>
  </div>
</template>