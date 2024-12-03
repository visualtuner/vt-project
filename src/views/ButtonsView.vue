<template>
    <div>
        <VTButton size="xs" shape="circle" backgroundColor="#fff" labelColor="#28a745" borderColor="#28a745">
            <template #icon>
                <span class="material-symbols-outlined">check</span>
            </template>
            <span class="button-text">XSmall 사이즈</span>
        </VTButton>
        <VTButton tag="RouterLink" to="/about" size="s" shape="circle" backgroundColor="#fff" labelColor="#28a745" borderColor="#28a745">
            <template #icon>
                <span class="material-symbols-outlined">check</span>
            </template>
            <span class="button-text">Small 사이즈</span>
        </VTButton>
        <VTButton shape="circle" backgroundColor="#fff" labelColor="#28a745" borderColor="#28a745">
            <template #icon>
                <span class="material-symbols-outlined">check</span>
            </template>
            <span class="button-text">Medium 사이즈</span>
        </VTButton>
        <VTButton size="l" shape="circle" backgroundColor="#fff" labelColor="#28a745" borderColor="#28a745">
            <template #icon>
                <span class="material-symbols-outlined">check</span>
            </template>
            <span class="button-text">Large 사이즈</span>
        </VTButton>
        <VTButton size="xl" shape="circle" backgroundColor="#fff" labelColor="#28a745" borderColor="#28a745">
            <template #icon>
                <span class="material-symbols-outlined">check</span>
            </template>
            <span class="button-text">XLarge 사이즈</span>
        </VTButton>
    </div>

    <div>
        <VTButton tag="a" href="https://m.tstation.com" target="_blank" size="l" shape="circle" backgroundColor="#dc3545" labelColor="#ffffff" borderColor="#dc3545">
            <template #icon>
                <span class="material-symbols-outlined">add</span>
            </template>
            <template #extra>
                <span class="badge">99</span>
            </template>
        </VTButton>

    </div>
</template>

<script>
    import VTButton from '../components/VTButton.vue';

    export default {
        name: 'ButtonsView',
        components: {
            VTButton,
        },
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