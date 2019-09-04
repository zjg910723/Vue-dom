<template>
    <div id="allmap"></div>        

</template>

<script>
    import Vue from 'vue';
    import axios from 'axios';
    import qs from 'qs';
    import { Toast } from 'vant';

    Vue.use(Toast);
    export default {
        data () {
            return {
               point:{},
               map: null,
               markers: [],
               city: ""
            }
        },
        methods: {
            mapReady() {
                var _this = this;

                this.$nextTick(function () {
                   // 创建Map实例
                    var map = new BMap.Map("allmap", {enableMapClick:false});

                    this.map = map;
                   
                    setTimeout(() => {
                        map.centerAndZoom(new BMap.Point(_this.point.lng, _this.point.lat), 18);
                        // console.log(_this.markers);
                        _this.markers.forEach((item,index) => {
                            _this.addMarker(new BMap.Point(item.longitude, item.latitude),index,item);
                        })
                    }, 500);
                    
                })
            },
            getLngList(lng,lat) {
                var _this = this;
                axios.get(`/VendingSystem/public/map/nearbyLuoqu?longitude=${lng}&latitude=${lat}&distance=100000`)
                .then(res => {
                    if(res.data.code == 200) {
                        _this.markers = res.data.result.map(item => item);
                        this.mapReady();
                    }
                })
            },
            addMarker(point, index, item) {
                var _this = this;
                var myIcon = new BMap.Icon("https://1.nofetel.com/vend/images//20190826/05e015bff2694f4f8d4a131f94a0dcf2.png",  
                new BMap.Size(23, 30), {  
                    imageSize: new BMap.Size(23, 30),
                    offset: new BMap.Size(10, 30),  
                });  

                var marker = new BMap.Marker(point, { icon: myIcon });  
                var label = new BMap.Label(item.hotelName, { offset: new BMap.Size(25, 15) });
                marker.setLabel(label);

                label.setStyle({
                    color: "#FFFFFF",
                    fontSize: "12px",
                    backgroundColor: "#000000",
                    padding: "0 3px",
                    opacity: 0.7,
                    border: "0",
                    borderRadius: "2px"
                });

                var opts = {
                    width: 100,     // 信息窗口宽度
                    height: 50,     // 信息窗口高度
                    padding: "10px"
                };

                var showInfo = "<strong style='font-size: 13px;'>" + item.hotelName + "</strong>"+"<p>详细地址：" + item.address+"</p>";
                var infoWindow = new BMap.InfoWindow(showInfo, opts);  // 创建信息窗口对象
                marker.addEventListener("click", function (e) {
                    marker.openInfoWindow(infoWindow, point); //开启信息窗口
                    _this.map.centerAndZoom(point, 18);
                    // console.log(point)
                    // location.href="http://api.map.baidu.com/direction?origin="+_this.point.lat+","+_this.point.lng+"&destination="+point.lat+","+point.lng+"&mode=driving&region="+_this.city+"&output=html";
                });
                marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                this.map.addOverlay(marker); 
                if(index == 0) {
                    _this.map.centerAndZoom(point, 18);
                    marker.openInfoWindow(infoWindow, point);
                } 
                return marker;
            }
        },
        mounted() {
            var _this = this;
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function(r){
                
                _this.point = r.point;
                _this.city = r.address.city.split("省")[0];
                _this.getLngList(_this.point.lng, _this.point.lat);
            });

        },
    };
</script>
