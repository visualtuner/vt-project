<template>
    <div class="view buttons">
        <Header :title="pageTitle"></Header>

        <h1>This is a buttons page</h1>

        <div class="">
            <ButtonItem class="btn-shape-round btn-effect-ripple">
                <span class="material-symbols-outlined size-28">arrow_back</span>
                <span class="btn-txt">버튼 라벨</span>
            </ButtonItem>

            <ButtonItem class="btn-shape-round btn-effect-ripple">
                <span class="material-symbols-outlined size-28">arrow_back</span>
            </ButtonItem>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import VTButton from '../components/VTButton.vue';
import ButtonItem from '../components/ButtonItem.vue';

export default {
    name: 'ButtonsView',
    components: {
        VTButton,
        Header,
        ButtonItem
    },
    data() {
        return {
            pageTitle: '버튼들'
        };
    }
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
</style>