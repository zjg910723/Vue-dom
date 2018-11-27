import './styles/index.scss'
import Vue from 'vue';
import VueRouter from "vue-router"
import routes from "./router/router.js";

import ComponentTemps from './components/compomemts.js';
import Util from "./util/util";


Util.frontInit(37.5);
Vue.use(VueRouter);
// Vue.use(ElementUI);

//全局捕获错误
window.addEventListener('error', (data) => {
    console.log(data.message);
    console.log(`错误位于： ${data.lineno}行`);
}, false);


const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

new Vue({
    el: '#app',
    data: {
        templateValue: 'App'
    },
    components: ComponentTemps,
    router
})