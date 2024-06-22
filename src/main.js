import './css/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import VueKinesis from "vue-kinesis";

loadFonts()

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = '404';
  }
  next();
});

createApp(App)
  .use(router)
  .use(vuetify) //mdi
  .use(createPinia())
  .use(VueKinesis)
  .mount('#app')
