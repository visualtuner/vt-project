<template>
	<div class="content">
		<h1>This is a modals page</h1>

		<div class="btns">
			<ButtonItem class="btn-shape-round btn-primary" @click="openModal('modal1')">
				<span class="btn-txt">기본 모달</span>
				<span class="material-symbols-outlined btn-icon size-24">step_out</span>
			</ButtonItem>

			<ButtonItem class="btn-shape-round btn-primary" @click="openModal('modal2')">
				<span class="btn-txt">연속 모달 호출</span>
				<span class="material-symbols-outlined btn-icon size-24">step_out</span>
			</ButtonItem>

			<ButtonItem class="btn-shape-round btn-primary" @click="openModal('modal3')">
				<span class="btn-txt">헤더가 없는 모달</span>
				<span class="material-symbols-outlined btn-icon size-24">step_out</span>
			</ButtonItem>

			<ButtonItem class="btn-shape-round btn-primary" @click="openModal('modal4')">
				<span class="btn-txt">최대 높이 모달 #1</span>
				<span class="material-symbols-outlined btn-icon size-24">step_out</span>
			</ButtonItem>

			<ButtonItem class="btn-shape-round btn-primary" @click="openModal('modal5')">
				<span class="btn-txt">최대 높이 모달 #2</span>
				<span class="material-symbols-outlined btn-icon size-24">step_out</span>
			</ButtonItem>

			<ButtonItem class="btn-shape-round btn-primary" @click="openModal('modal6')">
				<span class="btn-txt">투명 모달</span>
				<span class="material-symbols-outlined btn-icon size-24">step_out</span>
			</ButtonItem>

			<ButtonItem class="btn-shape-round btn-primary" @click="openModal('modal7')">
				<span class="btn-txt">흰색 배경 모달</span>
				<span class="material-symbols-outlined btn-icon size-24">step_out</span>
			</ButtonItem>
		</div>

		<ModalItem id="modal1">
			<template #header>
				<h2>기본 모달 형식</h2>
			</template>
			<div>기본 모달 형식은 타이틀/본문/액션 버튼이 들어 갑니다.</div>
			<template #footer>
				<ButtonItem class="btn-shape-round" @click="closeModal">
					<span class="btn-txt txt-w500">닫기</span>
				</ButtonItem>
			</template>
		</ModalItem>

		<ModalItem id="modal2">
			<template #header>
				<h2>연속 모달 호출</h2>
			</template>
			<div>액션 버튼에 모달 닫고, 바로 원하는 모달을 호출하면 연속으로 열리게 됩니다.</div>
			<template #footer>
				<ButtonItem class="btn-shape-round" @click="closeModal">
					<span class="btn-txt txt-w500">닫기</span>
				</ButtonItem>

				<ButtonItem class="btn-shape-round" @click="closeAndOpenModal('modal1')">
					<span class="btn-txt txt-w500">다음 모달</span>
				</ButtonItem>
			</template>
		</ModalItem>

		<ModalItem id="modal3">
			<div>모달 헤더가 없는 모달은 모달 바디에 패딩탑이 들어 갑니다.</div>
			<template #footer>
				<ButtonItem class="btn-shape-round" @click="closeModal">
					<span class="btn-txt txt-w500">닫기</span>
				</ButtonItem>
			</template>
		</ModalItem>

		<ModalItem id="modal4">
			<template #header>
				<h2>모달의 최대 높이 #1</h2>
			</template>
			<div>
				<p v-for="n in 100" :key="n">{{ n }}번 째 줄</p>
			</div>
			<template #footer>
				<ButtonItem class="btn-shape-round" @click="closeModal">
					<span class="btn-txt txt-w500">닫기</span>
				</ButtonItem>
			</template>
		</ModalItem>

		<ModalItem id="modal5">
			<div>
				<p v-for="n in 100" :key="n">{{ n }}번 째 줄</p>
			</div>
			<template #footer>
				<ButtonItem class="btn-shape-round" @click="closeModal">
					<span class="btn-txt txt-w500">닫기</span>
				</ButtonItem>
			</template>
		</ModalItem>

		<ModalItem id="modal6" backdrop-color="transparent" :backdrop-blur="true">
			<template #header>
				<h2>투명 배경 모달</h2>
			</template>
			<div>
				투명한 모달입니다. 배경이 투명색입니다. 이미지나 로띠 애니메이션으로 임펙트 있는
				모달을 꾸며 보세요! 다양한 용도로 사용가능합니다.
			</div>
			<template #footer>
				<ButtonItem class="btn-shape-round" @click="closeModal">
					<span class="btn-txt txt-w500">닫기</span>
				</ButtonItem>
			</template>
		</ModalItem>

		<ModalItem id="modal7" backdrop-color="white">
			<template #header>
				<h2>흰색 배경 모달</h2>
			</template>
			<div>
				흰색 배경 모달입니다. 배경이 흰색입니다. 어떤 용도로 쓰일지 모르지만 옵션으로 추가해
				두었습니다.
			</div>
			<template #footer>
				<ButtonItem class="btn-shape-round" @click="closeModal">
					<span class="btn-txt txt-w500">닫기</span>
				</ButtonItem>
			</template>
		</ModalItem>
	</div>
</template>
<script>
	import { inject } from 'vue'

	export default {
		name: 'ModalsContent',
		setup() {
			const modalStore = inject('$modalStore')

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

			return {
				openModal,
				closeModal,
				closeAndOpenModal,
			}
		},
	}
</script>

<style scoped>
	.btns {
		width: 100%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 8px;
		margin-top: 20px;
		padding: 20px 0;
	}

	.btns .btn-item {
		width: 100%;
	}
</style>