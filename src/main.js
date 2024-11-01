import { createApp } from 'vue'
import App from './App.vue'
import '@/App.css' 
import router from './router';
import './assets/tailwind.css';
import PrimeVue from "primevue/config";
import 'primeicons/primeicons.css'
import Aura from '@primevue/themes/aura';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.directive('tooltip', Tooltip);
app.use(ToastService);
app.use(router);
app.mount('#app');