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
              {{ translate(`hello! My name is Nickolas Alvaro Bini and I am passionate about developing digital experiences that live on the internet. My interest in web development began a few years ago, when I started working with APIs and exploring the power of PHP and JavaScript. This journey taught me a lot about building dynamic and interactive applications.`, 'ucfirst') }}
            </p>
            <p class="my-3 font-normal">
              {{ translate(`i have a degree in Information Systems and I am pleased to have worked in agencies, startups and large corporations, where I was able to collaborate on a variety of projects, each challenging in its own way. Currently, my main focus is building accessible products and inclusive digital experiences that positively impact users. I work with a diverse set of stacks, which allows me to adapt solutions to different contexts and needs.`, 'ucfirst') }}
            </p>
            <p class="my-3 font-normal">{{ translate(`here are some of the technologies I've been working on lately:`, 'ucfirst') }}</p>
            <ul class="grid grid-cols-2">
              <li v-for="(skill, index) of skills" :key="index" class="flex items-center font-normal">
                <i class="pi pi-play mr-2 text-green-sea" style="font-size: 0.5em;"></i>{{ skill }}
              </li>
            </ul>
          </div>
          <div class="w-full md:w-1/3 pt-5 grow-effect">
            <div class="filter absolute bg-green-sea z-10" style="height: 200px; width: 200px;"></div>
            <div class="detail absolute border border-green-sea rounded" style="height: 200px; width: 200px;"></div>
            <img 
              width="200px" 
              height="200px" 
              style="height: 200px; width: 200px;" 
              :src="require('@/assets/myself.jpeg')" 
              class="rounded"
            >
          </div>
        </div>
    </section>
</template>
<script setup>
    import { ref } from 'vue';
    import { translate } from '@/composables/translate';
    
    const skills = ref([
        'Php', 'Laravel', 'Java', 'Node.js', 'Vue.js', 'Tailwind CSS', 'Flutter'
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