<template>
    <div class="content">
        <h1>This is a modals page</h1>

        <div class="btns">
            <ButtonItem class="btn-shape-round btn-primary" @click="openModal('modal1')">
                <span class="btn-txt">기본 모달</span>
                <span class="material-symbols-outlined btn-icon size-24">step_out</span>
            </ButtonItem>

            <ButtonItem class="btn-shape-round btn-primary" @click="openModal('modal2')">
                <span class="btn-txt">기본 모달</span>
                <span class="material-symbols-outlined btn-icon size-24">step_out</span>
            </ButtonItem>
        </div>

        <ModalItem id="modal1">
            <template #header>
                <h2>모달 1</h2>
            </template>
            <p>모달 1 내용이 여기에 들어가게 됩니다.</p>
            <template #footer>
                <ButtonItem class="btn-shape-round btn-size-s" @click="closeAndOpenModal('modal2')">
                    <span class="btn-txt">닫기</span>
                </ButtonItem>
            </template>
        </ModalItem>

        <ModalItem id="modal2">
            <template #header>
                <h2>모달 2</h2>
            </template>
            <p>모달 2 내용이 여기에 들어가게 됩니다.</p>
            <template #footer>
                <ButtonItem class="btn-shape-round btn-size-s" @click="closeModal">
                    <span class="btn-txt">닫기</span>
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
            const modalStore = inject('$modalStore');

            if (!modalStore) {
                console.error('ModalStore가 제공되지 않았습니다.');
                return {};
            }

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
                }, 200); // 애니메이션 완료 후 열기
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