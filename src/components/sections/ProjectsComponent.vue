<template>
    <section id="projects" class="w-full md:w-3/6 mx-auto mt-40 text-left">
        <p class="flex justify-left items-center pr-5 pb-8">
          <span class="text-green-sea text-2xl">03.</span>
          <span class="text-lazuli ml-2 text-3xl">{{ translate('my projects', 'ucfirst') }}</span>
          <span class="bg-lazuli overflow-hidden ml-3" style="width: 300px; height: 1px; opacity: 0.4"></span>
        </p>

        <div class="flex flex-col gap-10">
            <div
                v-for="(project, index) of projects"
                :key="index"
                class="project-card rounded p-6 border border-opacity-20 border-lazuli"
            >
                <div class="flex justify-between items-start flex-wrap gap-3 mb-4">
                    <div>
                        <p class="text-green-sea text-xs mb-1 font-normal tracking-widest uppercase">{{ translate('featured project', 'ucfirst') }}</p>
                        <h3 class="text-lazuli text-xl font-bold">{{ translate(project.title, 'ucfirst') }}</h3>
                    </div>
                    <div class="flex gap-4 items-center">
                        <a
                            v-if="project.github"
                            :href="project.github"
                            target="_blank"
                            class="icon-link"
                            :title="translate('view on github', 'ucfirst')"
                        >
                            <i class="pi pi-github"></i>
                        </a>
                        <a
                            v-if="project.video"
                            :href="project.video"
                            target="_blank"
                            class="icon-link"
                            :title="translate('watch on youtube', 'ucfirst')"
                        >
                            <i class="pi pi-youtube"></i>
                        </a>
                    </div>
                </div>

                <p class="font-normal text-sm leading-relaxed mb-5">
                    {{ translate(project.description, 'ucfirst') }}
                </p>

                <ul class="flex flex-wrap gap-3">
                    <li
                        v-for="(tag, tIndex) of project.stack"
                        :key="tIndex"
                        class="tag-pill text-xs font-normal"
                    >
                        {{ tag }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from 'vue';
    import { translate } from '@/composables/translate';

    const projects = ref([
        {
            title: 'whatsapp bot with ai',
            description: 'multi-session WhatsApp automation built with Node.js, Baileys and OpenRouter LLM integration. Features interactive menus, conversation flow control, a "typing..." human-like effect and zero monthly cost - no Twilio, no Zenvia. Designed as a ready-to-deploy solution for local businesses.',
            stack: ['Node.js', 'Baileys', 'OpenRouter', 'REST API'],
            github: 'https://github.com/Nickolasbini/bot_whatsapp_with_baileys_2026_',
            video: 'https://youtu.be/JkvbnQg2OWE'
        },
        {
            title: 'real-time currency monitor',
            description: 'desktop application that tracks live exchange rates, renders dynamic real-time charts and fires automated alerts via Telegram bot when currency fluctuations are detected. Built following an MVC architecture with clean separation between data fetching, charting and notification layers.',
            stack: ['Python', 'PyQt6', 'Matplotlib', 'Telegram API', 'REST API'],
            video: 'https://youtu.be/QTKYXON472k'
        },
        {
            title: 'website from scratch - full tutorial',
            description: 'end-to-end tutorial series on building a professional website from zero: semantic HTML, Tailwind CSS, mobile-first layout, SEO fundamentals (title tags, meta descriptions, Open Graph, URL structure) and PageSpeed performance audit. The most-watched series on the Código Prático channel.',
            stack: ['HTML', 'Tailwind CSS', 'SEO', 'PageSpeed Insights'],
            github: 'https://github.com/Nickolasbini/seo_sample_2026',
            video: 'https://youtu.be/kIImolG-C1M'
        }
    ])
</script>

<style scoped>
    .project-card {
        background-color: var(--dark-sea);
        transition: transform 0.2s ease, border-color 0.2s ease;
    }
    .project-card:hover {
        transform: translateY(-3px);
        border-color: var(--green-sea) !important;
    }
    .icon-link {
        font-size: 1.3rem;
        opacity: 0.7;
        transition: color 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
        display: inline-block;
    }
    .icon-link:hover {
        color: var(--green-sea);
        opacity: 1;
        transform: translateY(-2px);
    }
    .tag-pill {
        color: var(--green-sea);
        border: 1px solid var(--green-sea);
        border-radius: 999px;
        padding: 2px 10px;
        opacity: 0.85;
    }
</style>