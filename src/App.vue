<script setup>
    import * as VueRouter from 'vue-router';
    import HelloWorld from './components/HelloWorld.vue'
    import GlobalNav from './components/GlobalNav.vue'
    import VTButton from './components/VTButton.vue'

    
</script>

<template>
    <!-- <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <HelloWorld msg="You did it!" />

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header> -->

    <!-- <RouterView /> -->
    <RouterView v-slot="{ Component, route }">
        <transition name="slide-fade">
            <component :is="Component" :key="route.path" />
        </transition>
    </RouterView>

    <GlobalNav />
</template>

<style scoped>
    .slide-fade-enter-active {
        transition: all 0.4s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.4s ease-in;
    }

    .slide-fade-enter-from {
        transform: translateX(100%) translateZ(0);
        opacity: 1;
    }
    .slide-fade-leave-to {
        transform: translateX(-50%) translateZ(0);
        opacity: 1;
    }
</style>
