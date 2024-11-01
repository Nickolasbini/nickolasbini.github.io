<template>
    <section id="experience" class="w-full md:w-3/6 mx-auto mt-40 text-left">
        <p class="flex justify-left items-center pr-5 pb-8">
          <span class="text-green-sea text-2xl">02.</span> 
          <span class="text-lazuli ml-2 text-3xl">{{ translate('experience', 'ucfirst') }}</span>
          <span class="bg-lazuli overflow-hidden ml-3" style="width: 300px; height: 1px; opacity: 0.4"></span>
        </p>
        <div class="flex flex-wrap md:flex-nowrap font-normal">
          <div class="w-full md:w-1/3 mr-4">
            <ul class="w-full md:w-56 listbox-style mb-10 md:mb-0">
                <li 
                    v-for="(experience, index) of experiences" 
                    :key="index" 
                    :class="['cursor-pointer py-3 pl-3 border-l-2', getSelectedStyle(experience.code)]"
                    @click="setVal(experience.code)"
                >
                    {{ translate(experience.name, 'ucfirst') }}
                </li>
            </ul>
          </div>
          <div class="w-full md:w-2/3 pt-5t">
            <template v-if="expData != null">
                <div class="flex flex-col ml-5">
                    <p class="font-bold">
                        <span class=" text-lazuli">{{ translate(expData.position, 'ucfirst') }}</span>
                        <span class="text-green-sea ml-1">@<span class="ml-1">{{ translate(expData.name, 'ucfirst') }}</span></span>
                    </p>
                    <small class="my-3">
                        <span>{{ translate(expData.fromMonth, 'ucfirst') }} / {{ translate(expData.fromYear, 'ucfirst') }} - </span>
                        <span v-if="expData.toMonth != null">{{ translate(expData.toMonth, 'ucfirst') }} / {{ translate(expData.toYear, 'ucfirst') }}</span>
                        <span v-else>{{ translate('current job') }}</span>
                    </small>
                    <p v-for="(activity, index) of expData.activities" :key="index" class="flex font-normal my-3">
                        <i class="pi pi-play text-green-sea mt-2 my-3 mr-2" style="font-size: 0.5em;"></i>{{ translate(activity, 'ucfirst') }}
                    </p>
                </div>
            </template>
          </div>
        </div>
    </section>
</template>
<script setup>
    import { onMounted, ref } from "vue";
    import { translate } from "@/composables/translate";

    const selectedExperience = ref(1);
    const experiences = ref([
        { name: 'Dealerspace', code: 1 },
        { name: 'GlobalWeb', code: 2 },
        { name: 'CRCPR', code: 3 },
        { name: 'Pinhão Tecnologia', code: 4 }
    ])

    const experiencesDetails = ref({
        1: {name: 'Dealerspace', position: 'full stack developer', fromMonth: 'october', fromYear: 2024, toMonth: null, toYear: null, activities: [
            "i am currently involved in the maintenance and enhancement of an existing system that is a leading CRM solution for automotive dealerships in the national market. My work centers on ensuring that the system remains competitive and valuable for clients across the industry.",
            "in this role, I primarily work with Laravel and Vue.js, which allows me to efficiently implement both back-end and front-end improvements. I am responsible for ongoing optimizations, future upgrades, and refining existing functionalities to align with the latest industry standards and user expectations.",
            "my focus also includes developing new features that support the evolving needs of dealerships, ensuring that our CRM platform continuously adapts to market demands and provides clients with reliable and user-friendly tools for customer relationship management."
        ]},
        2: {name: 'GlobalWeb', position: 'software development analyst', fromMonth: 'june', fromYear: 2022, toMonth: 'october', toYear: 2024, activities: [
            "i worked as an outsourced service provider for a state-owned banking system in Brasília known as BRB. My role involved regular collaboration within the team to ensure the delivery of high-quality, reliable solutions for the banking sector.",
            "in this position, I participated in meetings with the Product Owner, following an agile methodology that included reviews and planning sessions. My responsibilities encompassed requirements analysis, sprint creation, and ongoing development of new features and general system maintenance.",
            "the development was primarily done in PHP, where I focused on both enhancing the system with new functionalities and ensuring the stability of existing features to support BRB's financial services effectively."
        ]},
        3: {name: 'Conselho Regional de Contabilidade do Parána', position: 'developer', fromMonth: 'february', fromYear: 2022, toMonth: 'may', toYear: 2022, activities: [
            "development of new features and maintenance of existing systems using PHP and the Laravel framework, alongside the creation of specific-purpose REST APIs.",
            "as this systems I developed were for a state agency, I developed secure and robust APIs to ensure safe and efficient data exchange, prioritizing reliability and compliance with data standards."
        ]},
        4: {name: 'Pinhão Tecnologia', position: 'junior developer', fromMonth: 'june', fromYear: 2020, toMonth: 'february', toYear: 2022, activities: [
            "junior Developer with Full Stack skills, focused on building and maintaining dynamic and efficient applications.",
            "i have solid experience with technologies like PHP, JavaScript, and jQuery, along with expertise in front-end frameworks such as HTML and CSS to create interactive and responsive interfaces.",
            "with proficiency in version control and database tools like Git and phpMyAdmin, as well as JSON for data exchange, I am dedicated to creating well-structured and easily maintainable solutions."
        ]},
    })

    const expData = ref(null);
    function setVal(id = 1){
        if(experiencesDetails.value[id] == undefined)
            return false;
        selectedExperience.value = id;
        expData.value = experiencesDetails.value[id];
    }

    function getSelectedStyle(id){
        return selectedExperience.value == id ? 'selected-from-list' : ''
    }

    onMounted(() => {
        setVal();
    })

</script>

<style scoped>
    .listbox-style li:hover{
        opacity: 0.8;
        transition: 0.2s;
        color: var(--green-sea);
    }
    .selected-from-list{
        color: var(--green-sea);
        border-color: var(--bg-green-sea)!important;
        border-left: 2px solid;
        background-color: var(--dark-sea);
    }
</style>