<template>
	<div class="view">
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
	import { useScrollStore } from '@/stores/scrollStore'
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
		methods: {
			getScrollContainer() {
				return this.$el ? this.$el.querySelector('.content-container') : null;
			},
		},
		beforeRouteLeave(to, from, next) {
			const container = this.getScrollContainer();
			if (container) {
				this.scrollStore.saveScrollPosition(this.scrollPosName, container.scrollTop);
			}
			next();
		},
		beforeRouteEnter(to, from, next) {
			next((vm) => {
				vm.$nextTick(() => {
					const container = vm.getScrollContainer();
					if (container) {
						let lastScrollPos = vm.scrollStore.getScrollPosition(vm.scrollPosName);
						container.scrollTo(0, lastScrollPos);
					}
				});
			});
		},
	};
</script>
