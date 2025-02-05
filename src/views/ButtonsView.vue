<template>
	<div class="view buttons">
		<HeaderItem :title="pageTitle" class="transform-header"></HeaderItem>
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
	import HeaderItem from '@/components/HeaderItem.vue';
	import LoaderItem from "@/components/LoaderItem.vue";
	import { defineAsyncComponent } from 'vue'
	import { useScrollStore, saveScrollPositionBeforeLeave, restoreScrollPositionOnEnter } from '@/stores/scrollStore';
	const AsyncContent = defineAsyncComponent(() =>
		import('@/components/ButtonsContent.vue')
	)

	export default {
		components: {
			HeaderItem,
			AsyncContent,
			LoaderItem,
		},
		data() {
			return {
				pageTitle: '버튼들',
				scrollPosName: 'buttonsScrollPos',
			};
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
	};
</script>
