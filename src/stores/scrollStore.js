import { defineStore } from 'pinia'

export function getScrollContainer(vm) {
	return vm.$el ? vm.$el.querySelector('.content-container') : null
}

export const useScrollStore = defineStore('scroll', {
	state: () => ({
		positions: {}, // 각 페이지별 스크롤 위치 저장
	}),
	actions: {
		saveScrollPosition(page, position) {
			this.positions[page] = position
		},
		getScrollPosition(page) {
			return this.positions[page] || 0
		},
	},
})

export function saveScrollPositionBeforeLeave(vm) {
	const container = getScrollContainer(vm)
	if (container) {
		vm.scrollStore.saveScrollPosition(vm.scrollPosName, container.scrollTop)
	}
}

export function restoreScrollPositionOnEnter(to, from, next) {
	next((vm) => {
		vm.$nextTick(() => {
			const container = getScrollContainer(vm)
			if (container) {
				let lastScrollPos = vm.scrollStore.getScrollPosition(vm.scrollPosName)
				container.scrollTo(0, lastScrollPos)
			}
		})
	})
}
