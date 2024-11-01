<template>
    <div ref="splashPage" class="h-screen bg-deep-sea flex justify-center items-center absolute top-0 left-0 right-0">
        <div class="image-container text-center w-40">
            <img width="60px" height="60px" class="rounded-full mr-5 reveal-image" :src="require('@/assets/icon.webp')">
        </div>
    </div>
</template>
<script setup>
    import { onMounted, ref } from 'vue';

    const splashPage = ref(null);
    onMounted(() => {
        countAndFade();
    })

    async function countAndFade(){
        await new Promise(resolve => setTimeout(resolve, 2200));
        splashPage.value.classList.add('do-fade');
        splashPage.value.classList.add('fade-out');
    }
</script>
<style>
    .image-container {
        overflow: hidden;
        display: inline-block;
    }

    .reveal-image {
        width: 100%;
        height: auto;
        animation: revealFromLeft 2s ease-out forwards;
        transform: translateX(-100%);
        opacity: 0;
    }

    @keyframes revealFromLeft {
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .do-fade {
        transition: opacity 1s ease;
    }

    .fade-out {
        display: none!important;
        opacity: 0;
    }
</style>