import './style.css';
import 'aos/dist/aos.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { NavBar, Swipe, SwipeItem, Button, Form, Field, Tab, Tabs, Icon, Popup, List, Progress, Step, Steps, CellGroup, Uploader, Dialog, Toast, Overlay, DropdownMenu, DropdownItem, NoticeBar, Pagination } from 'vant';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from '@/App.vue';
import router from './router';
import QrcodeVue from 'vue-qrcode';
import i18n from './services/i18n';
import AOS from 'aos';
import fontAwesome from '@/plugin/font-awesome';


const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.component('QrcodeVue', QrcodeVue);

app.use(pinia);
app.use(router);
app.use(fontAwesome);
app.use(NavBar);
app.use(Toast);
app.use(Overlay);
app.use(Swipe);
app.use(SwipeItem);
app.use(Button);
app.use(Form);
app.use(Field);
app.use(Tab);
app.use(Tabs);
app.use(Icon);
app.use(Popup);
app.use(List);
app.use(Progress);
app.use(Step);
app.use(Steps);
app.use(CellGroup);
app.use(Uploader);
app.use(Dialog);
app.use(DropdownMenu);
app.use(DropdownItem);
app.use(NoticeBar);
app.use(Pagination);
app.use(i18n)
app.mount('#app');

AOS.init();