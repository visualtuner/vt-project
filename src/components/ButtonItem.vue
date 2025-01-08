<template>
    <button type="button" class="btn-item">
        <slot></slot>
    </button>
</template>

<script>

</script>

<style>
.btn-item {
    --size: 44px;
    appearance: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    min-width: var(--size);
    height: var(--size);
    cursor: pointer;
    gap: 8px;
    padding: 0;
    position: relative;
    outline: none;
    border: none;
    background: transparent;
}

.btn-item:has(.btn-txt) { padding: 0 calc(var(--size) / 2); }

.btn-item .btn-icon {
    display: inline-flex;
    align-items: center;
}

.btn-item .btn-txt {
    display: inline-block;
}

.btn-size-s { --size: 32px; }
.btn-size-m { --size: 44px; }
.btn-size-l { --size: 56px; }

.btn-shape-fillet { border-radius: round(up, calc(var(--size) / 8)); }
.btn-shape-round { border-radius: 100px; }

.btn-color-primary {}

.btn-effect-ripple {
    overflow: hidden;
    
}

.btn-effect-ripple:before {
    content: '';
    pointer-events: none;
    position: absolute;
    width: 110%;
    height: auto;
    aspect-ratio: 1;
    border-radius: 100px;
    background: rgba(0,0,0,0.1);
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 0;
}

.btn-effect-ripple:hover:before {
    transition: transform 0.3s ease-out, opacity 0.6s linear;
}

.btn-effect-ripple:active:before {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(0);
    opacity: 1;
    transition: transform 0s, opacity 0s;
}

</style>