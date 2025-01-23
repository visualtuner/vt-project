import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    activeModalId: null, // 현재 활성화된 모달 ID
    historyStack: [], // 히스토리 스택 관리
  }),
  actions: {
    openModal(id) {
      if (this.activeModalId === id) return

      this.activeModalId = id
      this.historyStack.push(id)

      const updatedState = { ...history.state, modalOpen: true, modalId: id }
      history.pushState(updatedState, '', location.href)

      console.log(`모달 ${id} 열림`)
    },
    closeModal() {
      if (!this.activeModalId) return

      const lastModalId = this.historyStack.pop()
      this.activeModalId = this.historyStack[this.historyStack.length - 1] || null

      if (history.state?.modalOpen && history.state?.modalId === lastModalId) {
        history.back()
      }

      console.log(`모달 ${lastModalId} 닫힘`)
    },
    handleBackNavigation() {
      if (this.historyStack.length > 0) {
        this.historyStack.pop() // 마지막 모달 제거
        this.activeModalId = this.historyStack[this.historyStack.length - 1] || null
        console.log('뒤로가기 처리: 활성 모달', this.activeModalId)
      }
    },
  },
})
