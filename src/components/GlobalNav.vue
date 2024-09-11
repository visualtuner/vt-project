<script setup>

</script>
<template>
    <nav id="gnb">
        <RouterLink to="/">
            <p>메뉴명 #1</p>
        </RouterLink>
        <RouterLink to="/about">
            <p>메뉴명 #2</p>
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
        justify-content: flex-start;
        text-align: center;
        -webkit-tap-highlight-color: transparent;
    }

    #gnb a p {
        color: #555;
        font-size: 11px;
        font-weight: 500;
    }
</style>