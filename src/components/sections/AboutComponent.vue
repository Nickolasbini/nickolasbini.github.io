<template>
    <section id="about" class="w-full md:w-3/6 mx-auto mt-40 text-left">
        <p class="flex justify-left items-center pr-5 pb-8">
          <span class="text-green-sea text-2xl">01.</span> 
          <span class="text-lazuli ml-2 text-3xl">{{ translate('about', 'ucfirst') }}</span>
          <span class="bg-lazuli overflow-hidden ml-3" style="width: 300px; height: 1px; opacity: 0.4"></span>
        </p>
        <div class="flex flex-wrap md:flex-nowrap">
          <div class="w-full md:w-2/3 mr-4">
            <p class="my-3 font-normal">
              {{ translate(`hello! My name is Nickolas Alvaro Bini and I am a Full-Stack Developer passionate about building robust, fast and tailor-made digital solutions using clean code - no low-code, no generic platforms. My journey started with PHP and JavaScript, quickly expanding into modern back-end and front-end ecosystems.`, 'ucfirst') }}
            </p>
            <p class="my-3 font-normal">
              {{ translate(`i am the founder of Cervo Digital, a web development agency focused on high-performance websites, e-commerce and business process automation. I also run the YouTube channel Código Prático, where I share straight-to-the-point tutorials on system architecture, bots and real-world applications for a Brazilian developer audience.`, 'ucfirst') }}
            </p>
            <p class="my-3 font-normal">{{ translate(`here are some of the technologies I've been working on lately:`, 'ucfirst') }}</p>
            <ul class="grid grid-cols-2">
              <li v-for="(skill, index) of skills" :key="index" class="flex items-center font-normal">
                <i class="pi pi-play mr-2 text-green-sea" style="font-size: 0.5em;"></i>{{ skill }}
              </li>
            </ul>
          </div>
          <div class="hidden md:block w-full md:w-1/3 pt-5 grow-effect">
            <div class="hidden md:block filter absolute bg-green-sea z-10" style="height: 200px; width: 300px;"></div>
            <div class="hidden md:block detail absolute border border-green-sea rounded" style="height: 200px; width: 300px;"></div>
            <img 
              width="200px" 
              height="200px" 
              style="height: 200px; width: 300px;" 
              :src="require('@/assets/myself.jpeg')" 
              class="rounded"
            >
          </div>
          <div class="md:hidden w-full pt-5">
            <img 
              width="200px" 
              height="200px" 
              :src="require('@/assets/myself.jpeg')" 
              class="rounded w-full"
            >
          </div>
        </div>
    </section>
</template>
<script setup>
    import { ref } from 'vue';
    import { translate } from '@/composables/translate';
    
    const skills = ref([
        'Node.js', 'PHP / Laravel', 'Vue.js', 'Python', 'Tailwind CSS', 'JavaScript (ES6+)', 'MySQL', 'REST APIs'
    ])
</script>
<style scoped>
    .grow-effect{
    height: 240px!important;
  }
  .grow-effect .detail{
    border-color: var(--green-sea)!important;
    border: 2px solid;
    margin-top: 15px;
    margin-left: 15px;
    z-index: 1;
  }
  .grow-effect .filter{
    opacity: 0.4 !important;
  }
  .grow-effect img{
    position: absolute!important;
    z-index: 2!important;
  }
  .grow-effect:hover img{
    transition: 0.4s ease!important;
    transform: translate(-2px, -2px); 
  }
  .grow-effect:hover .detail{
    transition: 0.4s ease!important;
    transform: translate(2px, 2px);
  }
  .grow-effect:hover .filter{
    opacity: 0!important;
    transition: 0.4s ease!important;
  }
</style>