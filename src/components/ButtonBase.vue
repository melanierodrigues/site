<template>
    <!--| | BUTTON BASE | |-->
    <button
    class="button-base"
    :class="buttonClass"
    :disabled="disabled"
    @click.stop="emit('clicked')">
        <!-- Button text -->
        <div v-if="text" class="text">{{text}}</div>
    </button>
</template>
  
<script setup>  
/* Vue */
import { computed } from 'vue'

/* Emmitters */
const emit = defineEmits(['clicked'])

/** Props received:
@text { String }
@fullColor { Boolean } - button with background-color orange
@disabled { Boolean }
*/
const props = defineProps({
    text: String,
    fullColor: Boolean,
    withBorder: Boolean,
    disabled: Boolean
})

const buttonClass = computed(() => {
	return [
		{
            'with-background-color': props.fullColor,
            'with-border': props.withBorder
		}
	]
})
</script>

<style lang="scss" scoped>
.button-base {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px 40px;
    gap: 8px;

    font-family: 'Jost';
    color: var(--main-orange);
    background-color: transparent;
    border: none;

    cursor: pointer;

    &:hover {
        text-decoration-line: underline;
    }

    &.with-background-color { 
        color: var(--text-color-black);
        background-color: var(--main-orange);

        &:hover {
            background-color: var(--main-orange-transparent);
        }
    }

    &.with-border {
        border: 1px solid var(--main-orange);

        &:hover {
            border: 1px solid var(--main-orange-transparent);
        }
    }

    &:disabled {
        cursor: default;
        pointer-events: none;

        .text {
            color: var(--text-color-black);
        }
    }
}
</style>
  