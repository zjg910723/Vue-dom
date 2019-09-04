import './styles/index.scss'
import Vue from 'vue';
import axios from "axios";

// axios.defaults.baseURL = "https://test.msn.nofetel.com/";
axios.defaults.baseURL = "https://test.nofetel.com/";

import ComponentTemps from './components/compomemts.js';
import Util from "./util/util";


Util.frontInit(37.5);

//全局捕获错误
window.addEventListener('error', (data) => {
    console.log(data.message);
    console.log(`错误位于： ${data.lineno}行`);
}, false);



new Vue({
    el: '#app',
    data: {
        templateValue: 'App'
    },
    components: ComponentTemps,
})