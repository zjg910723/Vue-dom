<template>
    <div>
        <ul>
            <li><router-link :to="{ path: '/user/item1' }">home</router-link></li>
            <li><router-link :to="{ path: '/user/item2' }">foo</router-link></li>
        </ul>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data () {
            return {

            }
        },
        created() {
            // this.getDeviceConf();
        },
        methods: {
            // async getDeviceConf() {
            //     var data = await axios.get(`/deviceConfig/getDeviceConfig.do`,{ params: {
            //         token: "e4ea7af6df9a4d4cae243826d556c402",
            //         deviceId: 190015129
            //     }});
            //     data = data.data;
            //        debugger;

            //     if(data.code === 10000000){
            //     }
            // }
        }
    };
</script>
