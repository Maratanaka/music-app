import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import { IonicVue } from '@ionic/vue';


// Ionic alap CSS
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

// Saját stílus
import './theme/variables.css';

const app = createApp(App);
app.use(router);
const pinia = createPinia();
app.use(pinia);
app.use(IonicVue);

router.isReady().then(() => {
  app.mount('#app');
});
