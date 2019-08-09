import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './router';
import store from './store';
import './common/style/main.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'hash'
});

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');

if (module.hot) {
    module.hot.accept();
}

