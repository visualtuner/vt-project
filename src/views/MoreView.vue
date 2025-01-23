<template>
	<div class="view root more">
		<Header :title="pageTitle" :isRoot="true" class="transform-header"></Header>
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
	import Header from '@/components/Header.vue'
	import LoaderItem from '@/components/LoaderItem.vue'
	import { defineAsyncComponent } from 'vue'
	const AsyncContent = defineAsyncComponent(() => import('@/components/MoreContent.vue'))

	export default {
		components: {
			Header,
			AsyncContent,
			LoaderItem,
		},
		data() {
			return {
				pageTitle: '더보기',
				scrollPosName: 'moreScrollPos',
			}
		},
		methods: {
			getScrollContainer() {
				return this.$el ? this.$el.querySelector('.content-container') : null
			},
		},
		beforeRouteLeave(to, from, next) {
			const container = this.getScrollContainer()
			if (container) {
				//TODO: pinia 상태값으로 변경
				window.sessionStorage.setItem(this.scrollPosName, container.scrollTop)
			}
			next()
		},
		beforeRouteEnter(to, from, next) {
			next((vm) => {
				vm.$nextTick(() => {
					const container = vm.getScrollContainer() // vm을 사용하여 호출
					if (container) {
						//TODO: pinia 상태값으로 변경
						let lastScrollPos =
							parseInt(window.sessionStorage.getItem(vm.scrollPosName), 10) || 0
						container.scrollTo(0, lastScrollPos)
					}
				})
			})
		},
	}
</script>
