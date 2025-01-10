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
            scrollPosition: 0,
            pageTitle: '홈',
            contentLoaded: false,
        };
    },
    methods: {
        getScrollContainer() {
            return this.$el.querySelector('.view') || this.$el;
        },
    },
    beforeRouteLeave(to, from, next) {
        const container = this.getScrollContainer();
        if (container) {
            //TODO: pinia 상태값으로 변경
            window.localStorage.setItem("homeScrollPos", container.scrollTop);
        }
        next();
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.$nextTick(() => {
                const container = this.getScrollContainer();
                //TODO: pinia 상태값으로 변경
                let lastScrollPos = window.localStorage.getItem("homeScrollPos");

                if (container) {
                    container.scrollTo(0, lastScrollPos);
                }
            });
        });
    },

};
</script>
