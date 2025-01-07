<template>
  <div class="view about">
    <Header :title="pageTitle"></Header>
    <h1>This is an about page</h1>
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
            pageTitle: '인풋'
        };
    }
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
