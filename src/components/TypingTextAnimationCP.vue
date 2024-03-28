<template>
    <div class="container">
        <h1>
            <span ref="typedText" class="custom-font-old-standard-regular text-emerald-800 text-5xl">{{ typeValue
                }}</span>
            <span class="blinking-cursor text-4xl text-emerald-800">|</span>
            <span class="cursor text-emerald-800" :class="{ typing: typeStatus }">&nbsp;</span>
        </h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const typeValue = ref('');
const typeStatus = ref(false);
const displayTextArray = ref(["Photography World", "Creative Realm", "Visual Wonderland", "Snapshot Sanctuary", "Framed Fantasy"]);
let typingSpeed = 70;
let erasingSpeed = 70;
const newTextDelay = 2000;
let displayTextArrayIndex = 0;
let charIndex = 0;

const typeText = () => {
    if (charIndex < displayTextArray.value[displayTextArrayIndex].length) {
        if (!typeStatus.value) typeStatus.value = true;
        typeValue.value += displayTextArray.value[displayTextArrayIndex].charAt(charIndex);
        charIndex += 1;
        setTimeout(typeText, typingSpeed);
    } else {
        typeStatus.value = false;
        setTimeout(eraseText, newTextDelay);
    }
};

const eraseText = () => {
    if (charIndex > 0) {
        if (!typeStatus.value) typeStatus.value = true;
        typeValue.value = displayTextArray.value[displayTextArrayIndex].substring(0, charIndex - 1);
        charIndex -= 1;
        setTimeout(eraseText, erasingSpeed);
    } else {
        typeStatus.value = false;
        displayTextArrayIndex += 1;
        if (displayTextArrayIndex >= displayTextArray.value.length)
            displayTextArrayIndex = 0;
        setTimeout(typeText, typingSpeed + 1000);
    }
};

onMounted(() => {
    setTimeout(typeText, newTextDelay + 200);
});
</script>

<style scoped>
.blinking-cursor {
    animation: blink 1s step-end infinite;
}

@keyframes blink {

    from,
    to {
        color: transparent;
    }

    50% {
        color: #20451c;
    }
}
</style>