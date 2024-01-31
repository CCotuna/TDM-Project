<script setup>
defineProps({
    data: {
        type: Object,   
        required: true
    }
})
</script>
<template>
   
<div class="grid grid-cols-1 justify-between">
    <div class="justify-between">
        <div :class="'bg-'+data.color+'-100 rounded-full w-16 h-16 flex justify-center items-center text-'+data.color+'-500 shadow-2xl'">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd" />
            </svg> </div>
        <h2 :class="'uppercase mt-6 text-'+data.color+'-500 font-medium mb-3'"> {{ data.title }} </h2>
        <p class="font-light text-sm text-gray-500 mb-3"> {{ data.description }} </p> 
    </div>
    
</div>
</template>
<style scoped></style>