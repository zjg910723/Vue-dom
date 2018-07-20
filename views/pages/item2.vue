<template>
    <div class="blend">
        <blockquote class="red">“Item2aaa”</blockquote>
        <blockquote class="yellow">“Fashionable figures break away from the populist peloton”</blockquote>
        <blockquote class="green">“Compreaaahensive characters for culturally correct creations”</blockquote>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        computed: {
            count () {
                return this.$store.state.count
            }
        },
        created() {
            console.log(this.count);
        },
    };
</script>
