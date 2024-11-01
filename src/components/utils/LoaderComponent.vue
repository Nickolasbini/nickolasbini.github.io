<template>
    <ProgressSpinner 
        :style="getStyle()"
        strokeWidth="8" 
        fill="transparent" 
        animationDuration=".9s"
        aria-label="Custom ProgressSpinner"
        :class="`fill-stroke ${props.class}`"
    />
</template>
<script setup>
    import ProgressSpinner from 'primevue/progressspinner';
    import { defineProps } from 'vue';

    const props = defineProps({
        class: {
            type: String,
            required: false,
            default: 'fill-stroke'
        }
    });

    function getStyle(){
        return {
            'width': '50px',
            'height': '50px',
            '--p-progressspinner-color-1': 'var(--green-sea)',
            '--p-progressspinner-color-2': 'var(--lazuli)',
            '--p-progressspinner-color-3': 'var(--silver)',
            '--p-progressspinner-color-4': 'var(--dark-sea)',
        }
    }
</script>