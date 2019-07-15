import './styles/index.scss'
import Vue from 'vue';
// import VueRouter from "vue-router"
// import routes from "./router/router.js";

import ComponentTemps from './components/compomemts.js';
import Util from "./util/util";
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import axios from 'axios';


Util.frontInit(37.5);
// Vue.use(VueRouter);
// Vue.use(Antd);
// Vue.use(ElementUI);
// axios.defaults.baseURL = 'http://huanglei02.natapp1.cc';
// axios.defaults.baseURL = 'https://test.nofetel.com';
axios.defaults.baseURL = 'https://test.msn.nofetel.com';
console.log(axios.defaults)
    //全局捕获错误
window.addEventListener('error', (data) => {
    console.log(data.message);
    console.log(`错误位于： ${data.lineno}行`);
}, false);


// const router = new VueRouter({
//     routes // （缩写）相当于 routes: routes
// })

new Vue({
    el: '#app',
    data: {
        templateValue: 'App'
    },
    components: ComponentTemps,
    // router
})