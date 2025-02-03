<template>
  <ModalItem id="modal7" data-backdrop-color="white">
    <template #header>
      <h2>흰색 배경 모달</h2>
    </template>
    <div>
      흰색 배경 모달입니다. 배경이 흰색입니다. 어떤 용도로 쓰일지 모르지만 옵션으로 추가해
      두었습니다.
    </div>
    <template #footer>
      <ButtonItem class="btn-shape-round" @click="$modal.closeModal">
        <span class="btn-txt txt-w500">닫기</span>
      </ButtonItem>
    </template>
  </ModalItem>

  <ModalItem id="modal8" data-backdrop-blur="true">
    <template #header>
      <h2>기본 블러 모달</h2>
    </template>
    <div>
      기본 블러 모달입니다. 배경이 블러됩니다. 어떤 용도로 쓰일지 모르지만 옵션으로 추가해
      두었습니다.
    </div>
    <template #footer>
      <ButtonItem class="btn-shape-round" @click="$modal.closeModal">
        <span class="btn-txt txt-w500">닫기</span>
      </ButtonItem>
    </template>
  </ModalItem>
</template>

<script>
  export default {
    name: "GlobalModals",
  };
</script>
