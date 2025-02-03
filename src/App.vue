<script>
  import GlobalNav from '@/components/GlobalNav.vue'
  import { useModal } from "@/composables/useModal";

  export default {
    components: {
      GlobalNav,
    },
    setup() {
      return useModal(); // 사용법 간결하게
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

  <ModalItem id="modal7" data-backdrop-color="white">
    <template #header>
      <h2>흰색 배경 모달</h2>
    </template>
    <div>
      흰색 배경 모달입니다. 배경이 흰색입니다. 어떤 용도로 쓰일지 모르지만 옵션으로 추가해
      두었습니다.
    </div>
    <template #footer>
      <ButtonItem class="btn-shape-round" @click="closeModal">
        <span class="btn-txt txt-w500">닫기</span>
      </ButtonItem>
    </template>
  </ModalItem>
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
