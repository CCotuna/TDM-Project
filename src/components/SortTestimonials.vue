<script setup>

defineEmits(['topReviews', 'topLikes'])

defineProps({
  sortSens: String,
  sortActive: Number,
  required: true
})
</script>

<template>
  <div>
    Sort By:
    <div>
      <button @click="$emit('topReviews')">Reviews
        <span v-if="sortActive === 1">
          <i v-if="sortSens === 'ASC'" class="bi bi-arrow-up-right"></i>
        <i v-else class="bi bi-arrow-down-left"></i></span>
    </button>
        
      <button @click="$emit('topLikes')">Likes
        <span v-if="sortActive === 2">
          <i v-if="sortSens === 'ASC'" class="bi bi-arrow-up-right"></i>
        <i v-else class="bi bi-arrow-down-left"></i></span>
    </button>
    </div>
  </div>
</template>