import './styles/index.scss';
import Vue from 'vue';
import VueRouter from "vue-router";
import routes from "./router/router.js";

import ComponentTemps from './compomemts.js';

import store from "./store/vuex";

// import Until from "./until/until";
// import axios from "axios";

// Until.frontInit(3.75);

Vue.use(VueRouter);



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