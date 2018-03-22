import './styles/index.scss'
import Vue from 'vue';
import VueRouter from "vue-router"
import routes from "./router/router.js";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import ComponentTemps from './components/compomemts.js'

import store from "./store/vuex";


Vue.use(VueRouter);
Vue.use(ElementUI);


const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

new Vue({
    el: '#app',
    data: {
        templateValue: 'App'
    },
    store,
    components: ComponentTemps,
    router
})