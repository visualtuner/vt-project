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
    header {
        line-height: 1.5;
        max-height: 100vh;
    }

    .logo {
        display: block;
        margin: 0 auto 2rem;
    }

    nav {
        width: 100%;
        font-size: 12px;
        text-align: center;
        margin-top: 2rem;
    }

    nav a.router-link-exact-active {
        color: var(--color-text);
    }

    nav a.router-link-exact-active:hover {
        background-color: transparent;
    }

    nav a {
        display: inline-block;
        padding: 0 1rem;
        border-left: 1px solid var(--color-border);
    }

    nav a:first-of-type {
        border: 0;
    }

    .slide-fade-enter-active {
        transition: all 0.4s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from {
        transform: translateX(100%) translateZ(0);
        opacity: 1;
    }
    .slide-fade-leave-to {
        transform: translateX(0) translateZ(0);
        opacity: 0;
    }

    @media (min-width: 1024px) {
        header {
            display: flex;
            place-items: center;
            padding-right: calc(var(--section-gap) / 2);
        }

        .logo {
            margin: 0 2rem 0 0;
        }

        header .wrapper {
            display: flex;
            place-items: flex-start;
            flex-wrap: wrap;
        }

        nav {
            text-align: left;
            margin-left: -1rem;
            font-size: 1rem;

            padding: 1rem 0;
            margin-top: 1rem;
        }
    }
</style>
