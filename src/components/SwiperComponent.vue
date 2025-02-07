// SwiperComponent.vue
<template>
	<swiper-container class="test-swiper" :slides-per-view="1" speed="300" :space-between="spaceBetween"
		:centered-slides="true" :pagination="{
			hideOnClick: true
		}" :breakpoints="{
			768: {
				slidesPerView: 2,
			},
		}" @swiperprogress="onProgress" @swiperslidechange="onSlideChange">
		<!-- <swiper-slide class="card" v-for="n in 6" :key="n">Slide {{ n }}</swiper-slide> -->
		<swiper-slide class="card">Slide 1</swiper-slide>
		<swiper-slide class="card">Slide 2</swiper-slide>
		<swiper-slide class="card">Slide 3</swiper-slide>
		<swiper-slide class="card">Slide 4</swiper-slide>
		<swiper-slide class="card">Slide 5</swiper-slide>
	</swiper-container>
</template>

<script>
	import { register } from 'swiper/element/bundle';
	import { defineComponent } from 'vue';

	register();

	export default defineComponent({
		setup() {
			const spaceBetween = 12;

			const onProgress = (e) => {
				const [swiper, progress] = e.detail;
				console.log(progress);
			};

			const onSlideChange = (e) => {
				console.log('slide changed');
			};

			return {
				spaceBetween,
				onProgress,
				onSlideChange,
			};
		},
	});
</script>

<style scoped>
	swiper-container {
		width: auto;
		overflow: hidden;
		margin-left: -20px;
		margin-right: -20px;
	}

	swiper-container::part(container) {
		padding: 24px;
		box-sizing: border-box;
		overflow: visible
	}

	swiper-container::part(pagination) {
		bottom: 0;
	}

	swiper-container::part(bullet) {
		width: 4px;
		height: 4px;
	}

	swiper-container::part(bullet-active) {
		width: 4px;
		height: 4px;
	}

	.card {
		height: 200px;
		background: #fff;
		border-radius: 12px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}
</style>
