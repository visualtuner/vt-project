<script>
import ButtonItem from '../components/ButtonItem.vue';

export default {
    props: {
        title: {
            type: String,
            required: false,
        }
    },
    components: {
        ButtonItem
    }
}
</script>
<template>
    <header id="header">
        <ButtonItem class="btn-shape-round" @click="$router.back()">
            <span class="material-symbols-outlined size-28">arrow_back</span>
        </ButtonItem>
        <h1>{{ title }}</h1>
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
    z-index: 900;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.06);
}

#header h1 {
    font-size: 16px;
    font-weight: 700;
    padding: 0 4px;
    margin: 0;
}
</style>
