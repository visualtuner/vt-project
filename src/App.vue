<script setup>
    import { ref, watch } from 'vue';
    import * as VueRouter from 'vue-router';
    import GlobalNav from './components/GlobalNav.vue';
    import { useRoute, useRouter } from 'vue-router';
    
</script>

<template>
    <RouterView v-slot="{ Component, route }">
        <transition :name="route.meta.runtimeTransition">
            <keep-alive>
                <component :is="Component || null" :key="route.path" />
            </keep-alive>
        </transition>
    </RouterView>

    <GlobalNav/>
</template>

<style>
    .slide-fade-enter-active { animation: slide-fade-in 0.3s; z-index: 1; }
    .slide-fade-leave-active { animation: slide-fade-out 0.3s; }

    .slide-fade-reverse-enter-active { animation: slide-fade-out 0.3s reverse; }
    .slide-fade-reverse-leave-active { animation: slide-fade-in 0.3s reverse; z-index: 1; }

    @keyframes slide-fade-in {
        0% { transform: translateX(100%) translateZ(0); }
        100% { transform: translateX(0) translateZ(0); }
    }

    @keyframes slide-fade-out {
        0% { transform: translateX(0) translateZ(0); }
        100% { transform: translateX(-50%) translateZ(0);  }
    }


    .slide-up-enter-active { animation: slide-up-in 0.3s; z-index: 1; }
    .slide-up-leave-active { animation: slide-up-out 0.3s; }

    .slide-up-reverse-enter-active { animation: slide-up-out 0.3s reverse; }
    .slide-up-reverse-leave-active { animation: slide-up-in 0.3s reverse; z-index: 1; }

    @keyframes slide-up-in {
        0% { transform: translateY(100%) translateZ(0); }
        100% { transform: translateY(0) translateZ(0); }
    }

    @keyframes slide-up-out {
        0% { transform: translateY(0) translateZ(0); }
        100% { transform: translateY(0) translateZ(0); }
    }
</style>
