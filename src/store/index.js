import Vue from 'vue';
import Vuex from 'vuex';
import page1_module from './modules/page1_module';
import page2_module from './modules/page1_module';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        page1_module,
        page2_module,
    }
});

export default store;