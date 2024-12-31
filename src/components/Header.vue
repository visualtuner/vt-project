<script setup>
    import VTButton from '../components/VTButton.vue';

</script>
<template>
    <header id="header">
        <VTButton shape="circle" backgroundColor="transparent" labelColor="#181818" borderColor="transparent">
            <template #icon>
                <span class="material-symbols-outlined size-32">arrow_back</span>
            </template>
        </VTButton>
        <h1>타이틀</h1>
    </header>
</template>

<style>
    #header {
        width: 100%;
        height: 56px;
        padding: 6px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: fixed;
        top: 0;
        left: 0;
        margin: 0;
        z-index: 1000;
        box-shadow: 0 0 0 1px rgba(0,0,0,0.06);
    }

    #header h1 {
        font-size: 16px;
        font-weight: 500;
        padding: 0;
        margin: 0;
    }
</style>
