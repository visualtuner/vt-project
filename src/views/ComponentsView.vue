<template>
	<div class="view root">
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

		<!-- <Teleport to="#layer-sub">
            <RouterView v-slot="{ Component, route }">
                <transition :name="route.meta.runtimeTransition">
                    <keep-alive>
                        <component :is="Component || null" :key="route.path" />
                    </keep-alive>
                </transition>
            </RouterView>
        </Teleport> -->

		<!-- <Teleport :disabled="!isActivated" to="#layer-sub">
            <RouterView v-slot="{ Component, route }">
                <transition :name="route.meta.runtimeTransition" appear>
                    <keep-alive>
                        <component :is="Component || null" :key="route.path" />
                    </keep-alive>
                </transition>
            </RouterView>
        </Teleport> -->
	</div>
</template>

<script>
	import { ref, onActivated, onDeactivated, onMounted, watch } from 'vue'
	import Header from '@/components/Header.vue'
	import LoaderItem from '@/components/LoaderItem.vue'
	import { defineAsyncComponent } from 'vue'
	const AsyncContent = defineAsyncComponent(() => import('@/components/ComponentsContent.vue'))

	export default {
		/*setup() {
	        const isActivated = ref(false);
	        const computedTransition = ref('slide-up');

	        onActivated(() => {
	            isActivated.value = true;
	        });

	        onDeactivated(() => {
	            isActivated.value = false;
	        });

	        onMounted(() => {
	            isActivated.value = true;
	        });

	        return {
	            isActivated,
	            computedTransition,
	        };
	    },*/
		components: {
			Header,
			AsyncContent,
			LoaderItem,
		},
		data() {
			return {
				pageTitle: '컴포넌트',
				scrollPosName: 'componentsScrollPos',
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