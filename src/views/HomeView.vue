<template>
    <div class="view">
        <Header :title="pageTitle"></Header>
        <h1>This is an home page</h1>
    </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
    components: {
        Header
    },
    data() {
        return {
            pageTitle: '홈'
        };
    }
};
</script>
