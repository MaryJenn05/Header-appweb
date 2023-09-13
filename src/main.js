
import { createApp } from 'vue'
import App from './App.vue'
import I18n from "@/i18n";

import Toolbar from 'primevue/toolbar';
import Button from "primevue/button";
import PrimeVue from "primevue/config";
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import Menubar from "primevue/menubar";
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue);
app.use(I18n);
app.component('pv-toolbar',Toolbar);
app.component('pv-button',Button);
app.component('pv-menubar',Menubar);
app.mount('#app')
