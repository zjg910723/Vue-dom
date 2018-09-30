import './styles/index.scss';
import Vue from 'vue';
import VueRouter from "vue-router";
import routes from "./router/router.js";

import ComponentTemps from './components/compomemts.js';
// import 'element-ui/lib/theme-chalk/index.css';

import store from "./store/vuex";

// import Until from "./until/until";
// import axios from "axios";

// Until.frontInit(3.75);

Vue.use(VueRouter);

// axios.defaults.baseURL = 'http://192.168.1.215:6200/by-app-web';



const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

new Vue({
    el: '#app',
    data: {
        view: 'App'
    },
    store,
    components: ComponentTemps,
    router
})