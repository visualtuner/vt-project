<script>
  import GlobalNav from '@/components/GlobalNav.vue'
  import GlobalModals from '@/components/GlobalModals.vue'
  export default {
    components: {
      GlobalNav,
      GlobalModals,
    },
  }
</script>

<template>
  <div id="layer-main">
    <RouterView v-slot="{ Component, route }">
      <transition :name="route.meta.runtimeTransition">
        <keep-alive>
          <component :is="Component || null" :key="route.path" />
        </keep-alive>
      </transition>
    </RouterView>

    <GlobalNav />
  </div>
  <div id="layer-sub"></div>

  <div id="layer-modal">
    <GlobalModals />
  </div>
</template>

<style>
  .slide-fade-enter-active {
    animation: slide-fade-in 0.2s;
    --transition-z-index: 1;
  }

  .slide-fade-leave-active {
    animation: slide-fade-out 0.2s;
  }

  .slide-fade-reverse-enter-active {
    animation: slide-fade-out 0.2s reverse;
  }

  .slide-fade-reverse-leave-active {
    animation: slide-fade-in 0.2s reverse;
    --transition-z-index: 1;
  }

  @keyframes slide-fade-in {
    0% {
      transform: translateX(100%) translateZ(0);
    }

    100% {
      transform: translateX(0) translateZ(0);
    }
  }

  @keyframes slide-fade-out {
    0% {
      transform: translateX(0) translateZ(0);
    }

    100% {
      transform: translateX(-50%) translateZ(0);
    }
  }

  .slide-up-enter-active {
    animation: slide-up-in 0.2s;
    --transition-z-index: 1;
  }

  .slide-up-leave-active {
    animation: slide-up-out 0.2s;
  }

  .slide-up-reverse-enter-active {
    animation: slide-up-out 0.2s reverse;
  }

  .slide-up-reverse-leave-active {
    animation: slide-up-in 0.2s reverse;
    --transition-z-index: 1;
  }

  @keyframes slide-up-in {
    0% {
      transform: translateY(100%) translateZ(0);
    }

    100% {
      transform: translateY(0) translateZ(0);
    }
  }

  @keyframes slide-up-out {
    0% {
      transform: translateY(0) translateZ(0);
      opacity: 1;
    }

    100% {
      transform: translateY(-20px) translateZ(0);
      opacity: 0;
    }
  }
</style>
