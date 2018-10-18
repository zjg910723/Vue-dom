<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column :label="item.label" v-for="(item,index) in propsArr" :key="index">
            <template slot-scope="scope">
                <span v-if="item.label !== '操作'">{{scope.row[item.name]}}</span>
                <div v-if="item.label == '操作'">
                    <el-button type="text" size="small" v-for="(value,key) in item.operlist" :key="key" @click="value.name == '删除' ? handleDelete() : handclick()">{{value.name}}</el-button>
                </div>
            </template>
        </el-table-column>
    </el-table>
    
</template>
    

<script>
    import Vue from "vue";
    import {Table, TableColumn, Button} from "element-ui";
    Vue.component(Table.name, Table);
    Vue.component(TableColumn.name, TableColumn);
    Vue.component(Button.name, Button);
    export default {
        props:["tableData","propsArr"],
        methods: {
            handleDelete() {
               console.log('删除')
            },
            handclick() {
               console.log('我是编辑')
            }
        }
    }
</script>
