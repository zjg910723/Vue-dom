<template>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="container">
            <h3>酒店列表</h3>
            <van-collapse v-model="activeNames" accordion>
                <van-collapse-item :title="item.hotelName" :name="key" value="缺货" icon="shop-collect" v-for="(item, key) in hotelList" :key="key">
                    <ul>
                        <li class="table-title">
                            <span class="house">房间</span>
                            <span class="device_id">设备号</span> 
                            <span class="out-stock">缺货格子</span>
                        </li>
                        <li v-for="(val,key) in item.data" :key="key">
                            <span class="house">{{val.roomCode ? val.roomCode : val.roomNo}}</span>
                            <span class="device_id">{{val.devId}}</span> 
                            <span class="out-stock">
                                <em v-for="(i, d) in val.cellIds" :key="d">{{i}}</em>
                            </span>
                        </li>
                    </ul>
                    <p v-if="item.countDataList.length">缺货商品明细</p>
                    <ul>
                        <li class="table-title">
                            <span class="item_pic">商品图片</span>
                            <span class="item_name">商品名称</span> 
                            <span class="item_num">缺货数量</span>
                        </li>
                        <li v-for="(val, index) in item.countDataList" :key="index">
                            <span class="item_pic">
                                <img :src="val.itemPic" alt="">
                            </span>
                            <span class="item_name">{{val.itemName}} </span> 
                            <span class="item_num">*{{val.count}}个</span>
                        </li>
                    </ul>
                </van-collapse-item>
            </van-collapse>
        </div>
    </van-pull-refresh>
    
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios';
    import qs from 'qs';
    import { Collapse, CollapseItem } from 'vant';
    import { PullRefresh } from 'vant';
    import { Toast } from 'vant';
    import 'vant/lib/Collapse/style';

    Vue.use(PullRefresh);
    Vue.use(Toast);
    Vue.use(Collapse).use(CollapseItem);
    export default {
        data () {
            return {
                isLoading: false,
                activeNames: null,
                userName: "",
                hotelList: []
            }
        },
        methods: {
            onRefresh() {
                setTimeout(() => {
                    this.getHotelList(1);
                    this.isLoading = false;
                }, 500);
            },
            getHotelList(index) {
                axios.get(`/VendingSystem/sms/smsMessage/smsContent?${qs.stringify({
                    userName: this.userName
                })}`).then(res => {
                    // console.log(res.data);
                    this.hotelList = res.data.result.map(item => {
                        return item;
                    });
                    // console.log(this.hotelList);
                    if(index) {
                        Toast('刷新成功');
                    }
                })
            }
        },
        created() {
            if(window.location.search) {
                this.userName = qs.parse(window.location.search.slice(1)).name;
                this.getHotelList();
            }
        },
    };
</script>
