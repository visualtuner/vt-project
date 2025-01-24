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
        </div>

        <ModalItem id="modal1">
            <template #header>
                <h2>기본 모달 형식</h2>
            </template>
            <div>기본 모달 형식은 타이틀/본문/액션 버튼이 들어갑니다.</div>
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
    </div>
</template>
<script>
    import { inject } from 'vue';

    export default {
        name: "ModalsContent",
        setup() {
            const modalStore = inject("$modalStore");

            const openModal = (id) => {
                modalStore.openModal(id);
            };

            const closeModal = () => {
                modalStore.closeModal();
            };

            const closeAndOpenModal = (nextModalId) => {
                closeModal();
                setTimeout(() => {
                    openModal(nextModalId);
                }, 200);
            };

            return {
                openModal,
                closeModal,
                closeAndOpenModal,
            };
        },
    };
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