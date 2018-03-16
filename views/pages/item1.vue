<template>
    <div class="blend">
        <blockquote class="red">{{count}}</blockquote>
        <blockquote class="yellow" @click="click()">“Fashionable figures break away from the populist peloton”</blockquote>
        <blockquote class="green">“Comprehensive characters for culturally correct creations”</blockquote>
        
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
                this.$store.getters.doneTodosCount;
            }
        },
        computed: {
            count () {
                return this.$store.state.count
            },
            doneTodosCount () {
                return this.$store.getters.doneTodosCount
            }
        },
    };
</script>
