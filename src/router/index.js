import { createRouter, createWebHistory } from 'vue-router';
import HomePageView from '@/views/HomePageView.vue';
import NotFound from '@/views/NotFoundView.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { gatherTranslationsFile } from '@/composables/translate';
import ipHandler from '@/composables/ipHandler';

const routes = [
    {
        path: "/",
        name: "public",
        component: DefaultLayout,
        redirect: "/",
        children: [
            {
                path: '/',
                name: 'Home',
                component: HomePageView
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, next) => {
    ipHandler.detectIp();
    gatherTranslationsFile();
    next;
});

export default router;
