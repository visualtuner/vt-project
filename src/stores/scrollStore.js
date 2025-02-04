import { defineStore } from 'pinia'

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
