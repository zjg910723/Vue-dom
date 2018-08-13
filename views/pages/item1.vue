<template>
    <div class="blend">
        <blockquote class="red">{{count}}</blockquote>
        <button @click="click">我是item1</button>
    </div>
</template>

<script>
   
    export default {
        
        data () {
            return {

            }
        },
        methods: {
            click(){
                this.$store.commit('increment');
                console.log(this.$store.state.count);
            }
        },
        computed: {
            count () {
                return this.$store.state.count
            }
        },
        beforeCreate: function() {

            console.log('调用了beforeCreate',this.$route)
        },  
        created: function() {
            console.log('调用了created')
        },
        beforeMount: function() {
            console.log('调用了beforeMount')
        },
        mounted: function() {
            console.log('调用了mounted')
        }
    };
</script>
