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
	import HeaderItem from '@/components/HeaderItem.vue'
	import LoaderItem from '@/components/LoaderItem.vue'
	import { defineAsyncComponent } from 'vue'
	import { useScrollStore, recordScrollPosition, restoreScrollPosition } from '@/stores/scrollStore';
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
			HeaderItem,
			AsyncContent,
			LoaderItem,
		},
		data() {
			return {
				pageTitle: '컴포넌트',
				scrollPosName: 'componentsScrollPos',
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
