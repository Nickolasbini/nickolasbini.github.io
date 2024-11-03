<template>
    <div class="card absolute top-0 w-full">
        <Dialog v-model:visible="visibleLangDialog" :header="translate('choose language', 'ucfirst')" :style="{ width: '25rem' }" :position="position" :modal="true" :draggable="false">
            <div class="flex justify-center">
                <template v-for="(lang, index) of languages" :key="index">
                    <img 
                        class="cursor-pointer mx-5" 
                        v-tooltip.top="getLangName(lang)" 
                        type="text" 
                        placeholder="Top" 
                        width="40px" 
                        height="40px" 
                        :src="getFlagPath(lang)" 
                        v-if="lang != store.getters.getUserLang"
                        @click.prevent="changeLanguage(lang)"
                    >
                </template>
            </div>
        </Dialog>

        <Menubar id="menubar" :model="items" class="rounded-none" style="padding: 1.5rem;">
            <template #start>
                <img width="60px" height="60px" class="rounded-full cursor-pointer" :src="require('@/assets/icon.webp')" @click="scrollTo('home')">
            </template>
            <template #item="{ item }">
                <a v-ripple class="flex items-center mr-5 cursor-pointer hover:text-green-sea menu-item flex md:hidden" @click="scrollTo(item.ref)">
                    <span class="text-silver ml-2">{{ translate(item.label, 'ucfirst') }}</span>
                </a>
            </template>
            <template #end>
                <div class="flex items-center gap-2">
                    <div v-for="(item, index) of items" :key="index">
                        <a class="items-center mr-5 cursor-pointer hover:text-green-sea menu-item hidden md:flex" @click="scrollTo(item.ref)">
                            <span class="text-green-sea">{{ getIndex(index) }}.</span> 
                            <span class="text-silver ml-2">{{ translate(item.label, 'ucfirst') }}</span>
                        </a>
                    </div>
                    <div class="mx-5">
                        <img class="cursor-pointer" @click="openLangDialog()" width="40px" height="40px" :src="getFlagPath(store.getters.getUserLang)">
                    </div>
                    <Button
                        :label="translate('curriculum', 'upper')"
                        :class="'animated-btn border border-green-sea p-2 rounded text-green-sea hidden'"
                        :unstyled="true"
                        @click.prevent="downloadPDF()"
                    />
                </div>
            </template>
        </Menubar>
    </div>
</template>
<script setup>
    import { onMounted, onUnmounted, ref } from 'vue';
    import Menubar from 'primevue/menubar';
    import Button from 'primevue/button';
    import { translate } from '@/composables/translate';
    import store from '@/store';
    import Dialog from 'primevue/dialog';
    import { showToast } from '@/composables/toast';
    import { useToast } from 'primevue/usetoast';

    const toast = useToast();
    const breakpoint = 640;
    const items = ref([
        {
            label: 'about',
            ref: 'about'
        },
        {
            label: 'experiences',
            ref: 'experience'
        },
        {
            label: 'contact',
            ref: 'contact'
        }
    ]);

    const visibleLangDialog = ref(false);
    const selectedLanguage = ref(store.getters.getUserLang);
    const languages = ref([
        'en',
        'pt',
        'es'
    ])

    function openLangDialog() {
        visibleLangDialog.value = true;
    }
    
    function isScreenSmall() {
      return window.innerWidth < breakpoint;
    }

    onMounted(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }); 
        selectedLanguage.value = store.getters.getUserLang;
        window.addEventListener('resize', isScreenSmall);
    })

    onUnmounted(() => {
        window.removeEventListener('resize', isScreenSmall);
    })

    function getIndex(index = 0){
        return `0${index + 1}`;
    }

    function scrollTo(id = ''){
        const element = document.getElementById(id);
        const offset = 150;
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
            const pageHeight = document.documentElement.scrollHeight;
            const viewportHeight = window.innerHeight;
            if (pageHeight > viewportHeight) {
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
                if(isScreenSmall()){
                    setTimeout(() => {
                        if (window.scrollY !== Math.round(elementPosition)) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }, 300);
                }
            } 
        }
    }

    function getFlagPath(langCode = 'en') {
        if(!languages.value.includes(langCode))
            langCode = 'pt';
        return require(`@/assets/flags/${langCode}.svg`);
    }

    function getLangName(lang){
        let langName = translate('english', 'ucfirst');
        switch(lang){
            case 'en':
                langName= translate('english', 'ucfirst');    
            break;
            case 'pt':
                langName= translate('portuguese', 'ucfirst');    
            break;
            case 'es':
                langName= translate('spanish', 'ucfirst');    
            break;
        }
        return langName;
    }

    async function changeLanguage(lang = 'en'){
        if(!languages.value.includes(lang))
            lang = 'en';
        await store.dispatch('changeLanguage', {langIso: lang});
        showToast(toast, translate('language changed', 'ucfirst'));
        visibleLangDialog.value = false;
        selectedLanguage.value = lang;
    }

    function downloadPDF() {
        const pdfPath = '/curriculum.pdf';
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'curriculum.pdf';
        link.click();
    }
</script>
<style>
    #menubar{
        background-color: #0a192f!important;
        border: unset!important;
    }

    .p-menubar-item-content:hover{
        background: unset!important;
    }

    .menu-item:hover * {
        color: var(--green-sea) !important;
    }
</style>