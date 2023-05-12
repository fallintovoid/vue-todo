import { createApp } from 'vue';
import { store } from '@/stores';
import setupDirectives from '@/directives';
import App from './App.vue';
import './styles/main.scss';

const app = createApp(App);

setupDirectives(app);

app.use(store).mount('#app');
