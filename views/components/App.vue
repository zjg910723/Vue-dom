<template>
    <div class="container">
        <router-view class="view"></router-view>
        <ElementTable :tableData="tableData" :propsArr="propsArr" />
    </div>
</template>

<script>
    import axios from "axios";
    import ElementTable from "../pages/elementTable";
    export default {
        data () {
            return {
                tableData: [{//表格显示的数据
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                propsArr: [//表格要显示的列
                    {name: "date", label:"日期"}, 
                    {name: "name", label:"名字"},
                    {name: "address", label:"地址"},
                    {name: "", label:"操作",operlist:[//有多少种操作
                        {name:"删除"},{name: "编辑"}
                    ]}
                ]
            }
        },
        components: {
            ElementTable
        },
        methods: {
            async getList() {
                var data = await axios.get("/api/by-app-web/user/login.do?loginName=wangb&password=123456&sourceFlag=1&loginPackage=web&flag=3");
            }
        },
        created() {
            this.getList();
        },
    };
</script>
