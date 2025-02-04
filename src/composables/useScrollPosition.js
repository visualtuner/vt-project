import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { onMounted, onBeforeUnmount, ref, nextTick } from 'vue'
import { useScrollStore } from '@/stores/scrollStore'

export function useScrollPosition(scrollPosName) {
	if (!scrollPosName) {
		throw new Error('scrollPosName is required in useScrollPosition')
	}

	const scrollStore = useScrollStore()
	const scrollContainer = ref(null)

	const getScrollContainer = () => document.querySelector('.content-container')

	// 페이지가 처음 로드될 때 스크롤 복원
	onMounted(() => {
		console.log('로드될 때')
		nextTick(() => {
			const container = getScrollContainer()
			if (container) {
				scrollContainer.value = container
				const lastScrollPos = scrollStore.getScrollPosition(scrollPosName)
				console.log(`초기 스크롤 복원: ${lastScrollPos}`)
				container.scrollTo(0, lastScrollPos)
			}
		})
	})

	onBeforeUnmount(() => {
		console.log('언마운트될때')
	})

	// 라우트 업데이트 시 스크롤 복원
	onBeforeRouteUpdate(() => {
		console.log('들어갈때')
		nextTick(() => {
			const container = getScrollContainer()
			if (container) {
				const lastScrollPos = scrollStore.getScrollPosition(scrollPosName)
				container.scrollTo(0, lastScrollPos)
			}
		})
	})

	// 페이지를 떠날 때 스크롤 저장
	onBeforeRouteLeave(() => {
		console.log('떠날때')
		const container = getScrollContainer()
		if (container) {
			scrollStore.saveScrollPosition(scrollPosName, container.scrollTop)
		}
	})

	return { scrollContainer }
}
