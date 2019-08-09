<template>
    <div class="wrap">
        <h1 @click="turn">{{ title }}</h1>
    </div>
</template>

<script>

import { mapState, mapGetters, mapMutations, mapActions  } from "vuex";
import api from 'Api';

export default {
    name: 'page-1',
    computed: {
        ...mapState({
            title: state => state.page1_module.title
        }),
        ...mapGetters({})
    },
    mounted () {
        this.getData();
    },
    methods: {
        ...mapActions({}),
        ...mapMutations({}),
        turn () {
            this.$router.push({name:"page2"});
        },
        async getData () {
            const [info, list] = await Promise.all([
                api.getUserInfo(),
                api.getList()
            ]);
            console.log(info, list);
        }
    }
}
</script>

<style lang='scss' scoped>
    .wrap {
        h1 {
            color: #fff;
            transform: rotate(0deg);
        }
    }
</style>
