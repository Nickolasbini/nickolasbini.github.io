<template>
    <div class="flex justify-center">
        <div class="mt-10 w-full px-3 md:w-2/3 lg:w-2/4 text-secondary text-center">
            <img class="w-full md:w-1/3 lg:w-2/4 mx-auto" src="@/assets/not-found.svg">
            <h1 class="text-3xl">A página que você procura não foi encontrada!</h1>
            <p class="mt-5">Lamentamos o incoveninete mas a página que você buscou não existe em nosso sistema. Abaixo estão alguns links úteis:</p>
            <div class="mt-10 flex justify-center">
                <router-link v-for="item, index of links" :key="index" :to="item.to" class="mx-3 underline font-bold">
                    {{ item.name }}
                </router-link>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue';

    const links = ref([
        {name: 'Sobre', to: '/'},
        {name: 'Experiencia', to: '/experience'},
        {name: 'Trabalho', to: '/work'},
        {name: 'Contato', to: '/contact'},
    ])
</script>