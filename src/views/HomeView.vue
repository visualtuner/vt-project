<template>
    <div class="view">
        <Header :title="pageTitle"></Header>
        <AsyncContent />
        <!-- <HomeContent /> -->
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import LoaderItem from "../components/LoaderItem.vue";
// import HomeContent from "@/components/HomeContent.vue";
// const AsyncContent = () => import("@/components/HomeContent.vue");
const AsyncContent = () =>
  import("@/components/HomeContent.vue")
    .then((module) => {
      console.log("HomeContent loaded successfully", module);
      return module;
    })
    .catch((error) => {
      console.error("Error loading HomeContent", error);
    });

export default {
    components: {
        Header,
        AsyncContent,
        LoaderItem,
        // HomeContent
    },
    data() {
        return {
            pageTitle: '홈'
        };
    },
    mounted() {
        // Suspense 관련 문제를 디버깅하려면 DOM 상태를 확인
        console.log('HomeView mounted');
    },
    unmounted() {
        console.log("HomeView unmounted");
    },
};
</script>
