<template>
    <section id="contact" class="w-full md:w-3/6 mx-auto mt-40 text-left">
        <p class="flex justify-left items-center pr-5 pb-8">
          <span class="text-green-sea text-2xl">03.</span> 
          <span class="text-lazuli ml-2 text-3xl">{{ translate('contact', 'ucfirst') }}</span>
          <span class="bg-lazuli overflow-hidden ml-3" style="width: 300px; height: 1px; opacity: 0.4"></span>
        </p>
        <p class="text-2xl font-normal">
            {{ translate(`while I'm not actively seeking new opportunities right now, my inbox is always open. If you have any questions or just want to reach out, feel free to drop me a message. I’ll do my best to respond!`, 'ucfirst') }}
        </p>
        <div class="text-center pt-10">
            <a href="https://wa.me/5541984320432" target="_blank">
                <Button
                    :label="translate('say hi', 'upper')"
                    :class="'animated-btn border border-green-sea p-5 rounded text-green-sea'"
                    :unstyled="true"
                />
            </a>
        </div>
    </section>
</template>
<script setup>
    import Button from 'primevue/button';
    import { translate } from '@/composables/translate';

</script>

<style scoped>
    
</style>