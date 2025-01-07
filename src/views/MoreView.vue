<template>
  <div class="view more">
    <Header :title="pageTitle"></Header>
    <h1>This is a more page</h1>
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
            pageTitle: '더보기'
        };
    }
};
</script>

<style>
@media (min-width: 1024px) {
  .more {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
