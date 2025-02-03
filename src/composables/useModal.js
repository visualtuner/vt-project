import { inject } from 'vue'

export function useModal() {
  const modalStore = inject('$modalStore')

  if (!modalStore) {
    console.error('ModalStore가 제공되지 않았습니다.')
    return {}
  }

  const openModal = (id) => {
    modalStore.openModal(id)
  }

  const closeModal = () => {
    modalStore.closeModal()
  }

  const closeAndOpenModal = (nextModalId) => {
    closeModal()
    setTimeout(() => {
      openModal(nextModalId)
    }, 100)
  }

  return { openModal, closeModal, closeAndOpenModal }
}
