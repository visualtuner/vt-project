<template>
	<transition name="modal">
		<div
			v-if="isActive"
			class="modal-backdrop"
			:class="{
				'backdrop-transparent': backdropColor === 'transparent',
				'backdrop-light': backdropColor === 'white',
				'backdrop-blur': backdropBlur,
			}"
			@click="close"
		>
			<div class="modal-panel" @click.stop>
				<div class="modal-header" v-if="$slots.header">
					<slot name="header"></slot>
				</div>

				<div class="modal-body" @scroll="scrollHandle">
					<slot></slot>
				</div>

				<div class="modal-footer" v-if="$slots.footer">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import { computed, onMounted, onUnmounted, inject } from 'vue'

	export default {
		name: 'ModalItem',
		props: {
			id: { type: String, required: true },
			backdropColor: { type: String, default: '' },
			backdropBlur: { type: Boolean, default: false },
		},
		setup(props) {
			const modalStore = inject('$modalStore')

			if (!modalStore) {
				console.error('ModalStore가 제공되지 않았습니다.')
				return {}
			}

			const isActive = computed(() => modalStore.activeModalId === props.id)

			const close = () => {
				modalStore.closeModal()
			}

			const handlePopState = () => {
				modalStore.handleBackNavigation()
			}

			onMounted(() => {
				window.addEventListener('popstate', handlePopState)
			})

			onUnmounted(() => {
				window.removeEventListener('popstate', handlePopState)
			})

			return {
				isActive,
				close,
			}
		},
	}
</script>

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 20px;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: var(--layer-z-index-modal);
	}

	.modal-backdrop.backdrop-transparent {
		background: transparent;
	}

	.modal-backdrop.backdrop-light {
		background: rgba(255, 255, 255, 0.6);
	}

	.modal-backdrop.backdrop-blur {
		-webkit-backdrop-filter: blur(16px);
		backdrop-filter: blur(16px);
	}

	.modal-panel {
		background: var(--color-background);
		width: 100%;
		height: auto;
		max-height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 16px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		position: relative;
		transition: all 0.2s;
	}

	.modal-backdrop.backdrop-transparent .modal-panel {
		background: transparent;
		box-shadow: none;
	}

	.modal-header {
		flex: none;
		width: 100%;
		height: auto;
		position: relative;
		padding: 24px 24px 20px;
	}

	.modal-header:has(.no-pd) {
		padding: 0;
	}

	.modal-header h2 {
		font-size: 18px;
		font-weight: 700;
	}

	.modal-body {
		flex: 1 1 auto;
		width: 100%;
		height: auto;
		min-height: 0;
		position: relative;
		overflow: overlay;
		padding: 0 24px 24px;
		mask-image: linear-gradient(
			rgba(255, 255, 255, 1) calc(100% - 24px),
			rgba(255, 255, 255, 0) 100%
		);
	}

	.modal-panel:not(:has(.modal-header)) .modal-body {
		padding-top: 24px;
	}

	.modal-body:has(.no-pd),
	.modal-panel:not(:has(.modal-header)) .modal-body:has(.no-pd) {
		padding: 0;
		mask-image: none;
	}

	.modal-footer {
		flex: none;
		width: 100%;
		height: auto;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 0 24px 12px;
	}

	.modal-footer:has(.no-pd) {
		padding: 0;
	}

	.modal-footer .btn-item {
		flex: 1 0 0;
		min-width: 0;
	}

	.close-button {
		position: absolute;
		top: 8px;
		right: 8px;
	}

	.modal-enter-active,
	.modal-leave-active {
		transition: all 0.2s;
	}

	.modal-enter-from,
	.modal-leave-to {
		opacity: 0;
	}

	:is(.modal-enter-from, .modal-leave-to) .modal-panel {
		transform: translateY(40px) translateZ(0);
	}
</style>