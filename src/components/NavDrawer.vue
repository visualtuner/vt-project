<template>
	<swiper-container class="nav-drawer-swiper" :slides-per-view="1" speed="300" :centered-slides="true"
		:pagination="false" @swiperprogress="onProgress" @swiperslidechange="onSlideChange">
		<swiper-slide class="panel">
			<HeaderItem :title="pageTitle" class="transform-header">
				<template #right>
					<ButtonItem class="btn-shape-round" @click="$router.back()">
						<span class="material-symbols-outlined btn-icon size-28">close</span>
					</ButtonItem>
				</template>
			</HeaderItem>
		</swiper-slide>
		<swiper-slide class="dummy">Slide 2</swiper-slide>
	</swiper-container>
</template>

<script>
	import { register } from 'swiper/element/bundle';
	import { defineComponent } from 'vue';
	import HeaderItem from '@/components/HeaderItem.vue';

	register();

	export default defineComponent({
		components: {
			HeaderItem,
		},
		setup() {

			const onProgress = (e) => {
				const [swiper, progress] = e.detail;
				console.log(swiper, progress);
			};

			const onSlideChange = (e) => {
				console.log('slide changed');
			};

			return {
				onProgress,
				onSlideChange,
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

	.nav-drawer-swiper .panel {
		background: var(--color-background);
		pointer-events: all;
	}

	.nav-drawer-swiper .dummy {
		pointer-events: none;
	}

</style>
