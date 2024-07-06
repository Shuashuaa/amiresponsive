import './assets/main.css'
import './assets/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueHotjar from 'vue-hotjar';

const app = createApp(App)
app.use(VueHotjar, {
    id: '5049874', // Replace with your Hotjar tracking ID  
    isProduction: true,
    snippetVersion: 6
});
app.use(createPinia())
app.use(router)

app.mount('#app')
