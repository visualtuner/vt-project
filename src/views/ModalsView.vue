<template>
	<div class="view">
		<HeaderItem :title="pageTitle" class="transform-header">
			<template #left>
				<ButtonItem class="btn-shape-round" @click="$router.back()">
					<span class="material-symbols-outlined btn-icon size-28">arrow_back</span>
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
	import HeaderItem from '@/components/HeaderItem.vue';
	import LoaderItem from "@/components/LoaderItem.vue";
	import { defineAsyncComponent } from 'vue'
	import { useScrollStore, recordScrollPosition, restoreScrollPosition } from '@/stores/scrollStore';
	const AsyncContent = defineAsyncComponent(() =>
		import('@/components/ModalsContent.vue')
	)

	export default {
		components: {
			HeaderItem,
			AsyncContent,
			LoaderItem,
		},
		data() {
			return {
				pageTitle: '모달들',
				scrollPosName: 'modalsScrollPos',
			};
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
	};
</script>
