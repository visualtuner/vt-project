<script setup>
    import { Icon } from "vue3-google-icon"
</script>
<template>
    <nav id="gnb">
        <RouterLink to="/">
            <Icon type="home" size="32px" weight="300"/>
            <p>홈</p>
        </RouterLink>
        <RouterLink to="/about">
            <Icon type="money_bag" size="32px" weight="300"/>
            <p>인풋</p>
        </RouterLink>
        <RouterLink to="/">
            <Icon type="ar_stickers" size="32px" weight="300"/>
            <p>버튼</p>
        </RouterLink>
    </nav>
</template>

<style>
    #gnb {
        width: 100%;
        height: 56px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 0;
        left: 0;
        margin: 0;
        z-index: 1000;
        box-shadow: 0 0 0 1px rgba(0,0,0,0.06);
    }
    #gnb a {
        flex: 1 0 0;
        min-width: 0;
        width: auto;
        height: 56px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        -webkit-tap-highlight-color: transparent;
    }

    #gnb a p {
        color: #555;
        font-size: 11px;
        font-weight: 500;
        line-height: 16px;
    }
</style>