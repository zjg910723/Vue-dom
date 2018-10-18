<template>
    <div class="blend">
        <blockquote class="red">“Item2”</blockquote>
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
