<template>
	<div class="content">
		<h1>This is an home page</h1>
		<SwiperComponent />
		<p v-for="n in 100" :key="n">{{ n }}번 째 줄</p>
	</div>
</template>
<script>
	import SwiperComponent from './SwiperComponent.vue';

	export default {
		name: "HomeContent",
		components: {
			SwiperComponent
		},
	};
</script>
