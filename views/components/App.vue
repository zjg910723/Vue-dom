<template>
    <div class="blend">
        <blockquote class="red">“Attack design doldrums with stylistic souplesse”</blockquote>
        <blockquote class="yellow">“Fashionable figures break away from the populist peloton”</blockquote>
        <blockquote class="green">“Comprehensive characters for culturally correct creations”</blockquote>
        <ul>
            <li><router-link :to="{ path: '/user/item1' }">home</router-link></li>
            <li><router-link :to="{ path: '/user/item2' }">foo</router-link></li>
        </ul>
        <el-button>asdasd</el-button>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        }
    };
</script>
