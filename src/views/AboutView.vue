<template>
	<div class="view root about">
		<HeaderItem :title="pageTitle" :isRoot="true" class="transform-header">
			<template #right>
				<ButtonItem class="btn-shape-round">
					<span class="material-symbols-outlined btn-icon size-28">more_vert</span>
				</ButtonItem>
			</template>
		</HeaderItem>
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
	import { useScrollStore, recordScrollPosition, restoreScrollPosition } from '@/stores/scrollStore';
	const AsyncContent = defineAsyncComponent(() => import('@/components/AboutContent.vue'))

	export default {
		components: {
			HeaderItem,
			AsyncContent,
			LoaderItem,
		},
		data() {
			return {
				pageTitle: '어바웃',
				scrollPosName: 'aboutScrollPos',
			}
		},
		setup() {
			const scrollStore = useScrollStore();
			return { scrollStore };
		},
		beforeRouteLeave(to, from, next) {
			recordScrollPosition(this);
			next();
		},
		beforeRouteEnter(to, from, next) {
			restoreScrollPosition(to, from, next);
		},
	}
</script>
