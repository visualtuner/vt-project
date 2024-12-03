<template>
    <component :is="tag" v-bind="$attrs" :class="[
        'btn',
        sizeClass,
        shapeClass,
        { 'with-icon': hasIcon, 'with-text': hasText, 'with-extra': hasExtra }
    ]" :style="buttonStyle">
        <slot name="icon" v-if="hasIcon"></slot>

        <slot></slot>

        <slot name="extra" v-if="hasExtra"></slot>
    </component>
</template>

<script>
    import { defineComponent, computed } from 'vue';

    export default defineComponent({
        name: 'VTButton',
        props: {
            tag: {
                type: String,
                default: 'button',
                validator: (value) => ['button', 'a', 'label', 'div'].includes(value),
            },
            size: {
                type: String,
                default: 'm',
                validator: (value) => ['xs', 's', 'm', 'l', 'xl'].includes(value),
            },
            shape: {
                type: String,
                default: 'rounded',
                validator: (value) => ['square', 'rounded', 'circle'].includes(value),
            },
            backgroundColor: {
                type: String,
                default: '#007bff',
            },
            labelColor: {
                type: String,
                default: '#ffffff',
            },
            borderColor: {
                type: String,
                default: '#007bff',
            },
        },
        setup(props, { slots }) {
            const sizeMap = {
                xs: '20px',
                s: '32px',
                m: '44px',
                l: '56px',
                xl: '68px',
            };

            const sizeClass = computed(() => `btn-size-${props.size}`);
            const shapeClass = computed(() => `btn-shape-${props.shape}`);

            const buttonStyle = computed(() => {
                return {
                    backgroundColor: props.backgroundColor,
                    color: props.labelColor,
                    borderColor: props.borderColor,
                    minWidth: sizeMap[props.size],
                    height: sizeMap[props.size],
                    borderStyle: 'solid',
                    borderWidth: '1px',
                };
            });

            const hasIcon = computed(() => !!slots.icon);
            const hasText = computed(() => !!slots.default);
            const hasExtra = computed(() => !!slots.extra);

            return {
                sizeClass,
                shapeClass,
                buttonStyle,
                hasIcon,
                hasText,
                hasExtra,
            };
        },
    });
</script>

<style scoped>
    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 0;
        position: relative;
    }

    .btn:has(.button-text) {
        padding: 0 calc(var(--size) / 2);
    }

    .btn:active::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.07);
        border-radius: inherit;
        pointer-events: none;
    }

    /* Size Classes */
    .btn-size-xs {
        --size: 20px;
    }

    .btn-size-s {
        --size: 32px;
    }

    .btn-size-m {
        --size: 44px;
    }

    .btn-size-l {
        --size: 56px;
    }

    .btn-size-xl {
        --size: 68px;
    }

    /* Shape Classes */
    .btn-shape-square {
        border-radius: 0;
    }

    .btn-shape-rounded {
        border-radius: calc(var(--size) / 10);
    }

    .btn-shape-circle {
        border-radius: 100px;
    }

    .btn.with-icon.with-text {
        gap: 8px;
    }

    .button-icon {
        display: inline-flex;
        align-items: center;
    }

    .button-text {
        display: inline-block;
    }
</style>
