<template>
	<div class="nav-drawer-dim"></div>
	<swiper-container class="nav-drawer-swiper" :slides-per-view="1" speed="200" :centered-slides="true"
		:pagination="false" :initial-slide="1" @swiperprogress="onProgress" @swiperslidechange="onSlideChange"
		@swiperinit="onInit">
		<swiper-slide class="panel">
			<HeaderItem :title="pageTitle" class="transform-header">
				<template #right>
					<ButtonItem class="btn-shape-round" @click="closeDrawer">
						<span class="material-symbols-outlined btn-icon size-28">close</span>
					</ButtonItem>
				</template>
			</HeaderItem>
		</swiper-slide>
		<swiper-slide class="dummy"></swiper-slide>
	</swiper-container>
</template>

<script>
	import { register } from 'swiper/element/bundle';
	import { nextTick, defineComponent, computed, onMounted, onUnmounted } from 'vue';
	import { useNavDrawerStore } from '@/stores/navDrawerStore';
	import HeaderItem from '@/components/HeaderItem.vue';

	register();

	export default defineComponent({
		components: {
			HeaderItem,
		},
		data() {
			return {
				pageTitle: '메뉴',
			};
		},
		setup() {
			const navDrawerStore = useNavDrawerStore();
			const isOpen = computed(() => navDrawerStore.isOpen);


			const handlePopState = () => {
				navDrawerStore.close();
			};

			onMounted(() => {
				window.addEventListener('popstate', handlePopState);
			});

			onUnmounted(() => {
				window.removeEventListener('popstate', handlePopState);
			});

			const onInit = (e) => {
				const swiper = e.detail[0];
				navDrawerStore.setSwiperInstance(swiper);

				const dim = document.querySelector('.nav-drawer-dim');

				swiper.on('touchStart', () => {
					if (dim) dim.classList.add('dragging');
				});

				swiper.on('touchEnd', () => {
					if (dim) dim.classList.remove('dragging');
				});

				swiper.on('transitionEnd', () => {
					if (dim) dim.classList.remove('dragging');
				});
			};

			const onProgress = (e) => {
				const [swiper, progress] = e.detail;
				console.log(swiper, progress);

				const dim = document.querySelector('.nav-drawer-dim');
				console.log(dim);
				if (dim) {
					dim.style.opacity = (1 - progress).toFixed(2);
				}
			};

			const onSlideChange = (e) => {
				const [swiper] = e.detail;

				if (swiper.activeIndex === 0) {
					navDrawerStore.open();
				} else {
					navDrawerStore.close();
				}
			};

			return {
				isOpen,
				openDrawer: navDrawerStore.open,
				closeDrawer: navDrawerStore.close,
				onProgress,
				onSlideChange,
				onInit,
			};
		},
	});
</script>

<style scoped>
	.nav-drawer-swiper {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		position: fixed;
		top: 0;
		left: 0;
		overflow: hidden;
		scrollbar-width: none;
		pointer-events: none;
		z-index: 0;
	}

	.nav-drawer-dim {
		display: block;
		width: 100%;
		height: 100%;
		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: 0;
		padding: 0;
		background: rgba(0, 0, 0, 0.6);
		opacity: 0;
		transition: opacity 0.2s ease-out;
	}

	.nav-drawer-dim.dragging {
		transition: none;
	}

	.nav-drawer-swiper .panel {
		background: var(--color-background);
		pointer-events: all;
		overflow: hidden;
	}

	.nav-drawer-swiper .dummy {
		pointer-events: none;
	}

</style>
