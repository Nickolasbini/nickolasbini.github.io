<template>
    <div id="splash-page pointer-events-none">
      <SplashPageComponent />
    </div>
    <div ref="pageContent" id="pageContent" class="min-h-screen flex flex-col text-center p-6 pb-0 md:pb-6">
      <section id="home" class="w-full md:w-2/4 mx-auto mt-40" style="font-family: var(--main-font)!important">
        <div class="text-left mr-0 md:mr-auto">
          <p class="text-green-sea text-1xl my-3 font-normal">{{ translate('hi, my name is', 'ucfirst') }}</p>
          <h2 class="text-lazuli text-6xl">Nickolas Alvaro Bini.</h2>
          <h1 class="text-5xl md:text-6xl my-3">
            {{ translate('i create websites and apps.', 'ucfirst') }}
          </h1>
          <p class="text-1xl w-full md:w-3/5 font-normal">
            {{ translate('i am a full stack developer with experience in various technologies and passionate about creating efficient and scalable solutions. My focus is to combine performance with the best user experience.', 'ucfirst') }}
          </p>
        </div>
      </section>

      <AboutComponent />

      <ExperienceComponent />

      <ContactComponent />

      <FloatingContactOptionsComponent />
    </div>
</template>

<script setup>
  import SplashPageComponent from '@/components/sections/SplashPageComponent.vue';
  import AboutComponent from '@/components/sections/AboutComponent.vue';
  import ContactComponent from '@/components/sections/ContactComponent.vue';
  import ExperienceComponent from '@/components/sections/ExperienceComponent.vue';
  import FloatingContactOptionsComponent from '@/components/sections/FloatingContactOptionsComponent.vue';
  import { translate } from '@/composables/translate';
  import { onMounted, ref } from 'vue';

  const pageContent = ref(null);
  onMounted(() => {
    showPageContent();
  })

  async function showPageContent(){
    document.body.style.overflowY = 'hidden';
    await new Promise(resolve => setTimeout(resolve, 2400));
    pageContent.value.classList.add('show-content');
    document.body.style.overflowY = 'scroll';
  }

</script>
<style scoped>
  #pageContent{
    opacity: 0;
  }

  .show-content{
    transition: 1s ease;
    opacity: 1!important;
  }
</style>