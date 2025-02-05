<template>
	<div class="view root">
		<HeaderItem :title="pageTitle" :isRoot="true" class="transform-header"></HeaderItem>
		<div class="content-container">
			<Suspense>
				<template #default>
					<AsyncContent />
				</template>
				<template #fallback>
					<LoaderItem />
				</template>
			</Suspense>
		</div>
	</div>
</template>

<script>
	import HeaderItem from '@/components/HeaderItem.vue'
	import LoaderItem from '@/components/LoaderItem.vue'
	import { defineAsyncComponent } from 'vue'
	import { useScrollStore, saveScrollPositionBeforeLeave, restoreScrollPositionOnEnter } from '@/stores/scrollStore';
	const AsyncContent = defineAsyncComponent(() => import('@/components/HomeContent.vue'))

	export default {
		components: {
			HeaderItem,
			AsyncContent,
			LoaderItem,
		},
		data() {
			return {
				pageTitle: '홈',
				scrollPosName: 'homeScrollPos',
			}
		},
		setup() {
			const scrollStore = useScrollStore();
			return { scrollStore };
		},
		beforeRouteLeave(to, from, next) {
			saveScrollPositionBeforeLeave(this);
			next();
		},
		beforeRouteEnter(to, from, next) {
			restoreScrollPositionOnEnter(to, from, next);
		},
	}
</script>
