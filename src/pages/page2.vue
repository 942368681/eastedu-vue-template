<template>
    <h1 @click="back">page2</h1>
</template>

<script>

import { mapState, mapGetters, mapMutations, mapActions  } from "vuex";

export default {
    name: 'page-2',
    computed: {
        ...mapState({
            title: state => state.page2_module.title
        }),
        ...mapGetters({})
    },
    methods: {
        ...mapActions({}),
        ...mapMutations({}),
        back () {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
    h1 {
        color: yellow;
    }
</style>