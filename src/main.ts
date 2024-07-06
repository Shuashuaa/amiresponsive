import './assets/main.css'
import './assets/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Hotjar from '@hotjar/browser';

const siteId = 5049874;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
