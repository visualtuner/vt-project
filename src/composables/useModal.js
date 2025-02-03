import { useModalStore } from '@/stores/modal'

export function createModal() {
	const modalStore = useModalStore()

	return {
		openModal(id) {
			modalStore.openModal(id)
		},
		closeModal() {
			modalStore.closeModal()
		},
		closeAndOpenModal(nextModalId) {
			modalStore.closeModal()
			setTimeout(() => {
				modalStore.openModal(nextModalId)
			}, 100)
		},
	}
}
