<template>
    <div class="view">
        <Header :title="pageTitle"></Header>
        <Suspense>
            <template #default>
                <AsyncContent />
            </template>
            <template #fallback>
                <LoaderItem />
            </template>
        </Suspense>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import LoaderItem from "../components/LoaderItem.vue";
import { defineAsyncComponent } from 'vue'
//const AsyncContent = () => import("@/components/HomeContent.vue");
const AsyncContent = defineAsyncComponent(() =>
    import('@/components/HomeContent.vue')
)

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
