<template>
    <div class="content">
        <h1>This is a buttons page</h1>

        <div class="btns">
            <ButtonItem class="btn-size-xs btn-shape-fillet btn-primary">
                <span class="material-symbols-outlined btn-icon size-20">arrow_back</span>
                <span class="btn-txt">버튼 라벨</span>
            </ButtonItem>

            <ButtonItem class="btn-size-xs btn-shape-fillet btn-primary-ol">
                <span class="btn-txt">버튼 라벨</span>
                <span class="material-symbols-outlined btn-icon size-20">arrow_forward</span>
            </ButtonItem>

            <ButtonItem class="btn-size-xs btn-shape-fillet">
                <span class="material-symbols-outlined btn-icon size-20">close</span>
            </ButtonItem>
        </div>

        <div class="btns">
            <ButtonItem class="btn-size-s btn-shape-fillet btn-primary">
                <span class="material-symbols-outlined btn-icon size-20">arrow_back</span>
                <span class="btn-txt">버튼 라벨</span>
            </ButtonItem>

            <ButtonItem class="btn-size-s btn-shape-fillet btn-primary-ol">
                <span class="btn-txt">버튼 라벨</span>
                <span class="material-symbols-outlined btn-icon size-20">arrow_forward</span>
            </ButtonItem>

            <ButtonItem class="btn-size-s btn-shape-fillet">
                <span class="material-symbols-outlined btn-icon size-20">close</span>
            </ButtonItem>
        </div>

        <div class="btns">
            <ButtonItem class="btn-shape-fillet btn-primary">
                <span class="material-symbols-outlined btn-icon size-24">arrow_back</span>
                <span class="btn-txt">버튼 라벨</span>
            </ButtonItem>

            <ButtonItem class="btn-shape-fillet btn-primary-ol">
                <span class="btn-txt">버튼 라벨</span>
                <span class="material-symbols-outlined btn-icon size-24">arrow_forward</span>
            </ButtonItem>

            <ButtonItem class="btn-shape-fillet">
                <span class="material-symbols-outlined btn-icon size-24">close</span>
            </ButtonItem>
        </div>

        <div class="btns">
            <ButtonItem class="btn-size-l btn-shape-fillet btn-primary">
                <span class="material-symbols-outlined btn-icon size-28">arrow_back</span>
                <span class="btn-txt">버튼 라벨</span>
            </ButtonItem>

            <ButtonItem class="btn-size-l btn-shape-fillet btn-primary-ol">
                <span class="btn-txt">버튼 라벨</span>
                <span class="material-symbols-outlined btn-icon size-28">arrow_forward</span>
            </ButtonItem>

            <ButtonItem class="btn-size-l btn-shape-fillet">
                <span class="material-symbols-outlined btn-icon size-28">close</span>
            </ButtonItem>
        </div>

        <div class="btns">
            <ButtonItem class="btn-size-xl btn-shape-fillet btn-primary">
                <span class="material-symbols-outlined btn-icon size-32">arrow_back</span>
                <span class="btn-txt">버튼 라벨</span>
            </ButtonItem>

            <ButtonItem class="btn-size-xl btn-shape-fillet btn-primary-ol">
                <span class="btn-txt">버튼 라벨</span>
                <span class="material-symbols-outlined btn-icon size-32">arrow_forward</span>
            </ButtonItem>

            <ButtonItem class="btn-size-xl btn-shape-fillet">
                <span class="material-symbols-outlined btn-icon size-32">close</span>
            </ButtonItem>
        </div>

        <div class="btns">
            <ButtonItem class="btn-shape-round btn-primary">
                <span class="material-symbols-outlined btn-icon size-24">arrow_back</span>
                <span class="btn-txt">버튼 라벨</span>
            </ButtonItem>

            <ButtonItem class="btn-shape-round btn-primary-ol">
                <span class="material-symbols-outlined btn-icon size-24">arrow_back</span>
                <span class="btn-txt">버튼 라벨</span>
            </ButtonItem>

            <ButtonItem class="btn-shape-round">
                <span class="material-symbols-outlined btn-icon size-24">close</span>
            </ButtonItem>
        </div>

        <div class="btns">
            <ButtonItem class="btn-shape-round btn-primary" disabled>
                <span class="material-symbols-outlined btn-icon size-24">arrow_back</span>
                <span class="btn-txt">버튼 라벨</span>
            </ButtonItem>

            <ButtonItem class="btn-shape-round btn-primary-ol" disabled>
                <span class="material-symbols-outlined btn-icon size-24">arrow_back</span>
                <span class="btn-txt">버튼 라벨</span>
            </ButtonItem>

            <ButtonItem class="btn-shape-round" disabled>
                <span class="material-symbols-outlined btn-icon size-24">close</span>
            </ButtonItem>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ButtonsContent",
    };
</script>

<style scoped>
    .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 16px;
        line-height: 16px;
        border-radius: 8px;
        padding: 0 4px;
        background: #000;
        font-size: 10px;
        position: absolute;
        right: 4px;
        top: 4px;
    }

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
</style>