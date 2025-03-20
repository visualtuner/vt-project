import { defineStore } from 'pinia'

export const useNavDrawerStore = defineStore('navdrawer', {
	state: () => ({
		isOpen: false,
		historyStack: [],
		swiperInstance: null, // Swiper 인스턴스 저장
	}),
	actions: {
		setSwiperInstance(swiper) {
			this.swiperInstance = swiper
		},
		open() {
			if (this.isOpen) return

			this.isOpen = true
			this.historyStack.push('navdrawer')

			const updatedState = { ...history.state, navDrawerOpen: true }
			history.pushState(updatedState, '', location.href)

			if (this.swiperInstance) {
				this.swiperInstance.slideTo(0) // 첫 번째 슬라이드로 이동
			}
		},
		close() {
			if (!this.isOpen) return

			this.historyStack.pop()
			this.isOpen = false

			if (history.state?.navDrawerOpen) {
				history.back()
			}

			if (this.swiperInstance) {
				this.swiperInstance.slideTo(1) // 두 번째 슬라이드로 이동 (닫기)
			}
		},
		handleBackNavigation() {
			if (this.historyStack.length > 0) {
				this.historyStack.pop()
				this.isOpen = this.historyStack.length > 0
			}
		},
	},
})
