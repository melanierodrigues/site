<template>
    <!--| | SKILLS COLUMN | |-->
    <div class="skills-column-wrapper">
        <!-- Left Column -->
        <div class="skills-left-column-wrapper">
            <div
            v-for="text in props.columnData"
            class="left-column"
            :class="{ 'text-selected-color': selected === text.id }"
            :key="text.id"
            @click="[selectedTextRight = text.textRight, selected = text.id]">
            {{ text.textLeft }}
            </div>
        </div>
        <!-- Divider -->
        <div class="divider" />
        <!-- Right Column -->
        <div class="skills-right-column-wrapper">
            <div class="right-column">{{ selectedTextRight }}</div>
        </div>
    </div>
</template>
  
<script setup>  
/* Vue */
import { ref, onMounted } from 'vue'

/** Props received:
@columnData { Array } - each item is an Object
  - id { String }
  - textLeft { String }
  - textRight { String }
*/
const props = defineProps({
    columnData: Array
})

/* Selectors Data */
const selected = ref() 
const selectedTextRight = ref('')

onMounted(() => {
    selected.value = props.columnData[0].id
    selectedTextRight.value = props.columnData[0].textRight
})
</script>

<style lang="scss" scoped>
.skills-column-wrapper {
    display: flex;
    flex-direction: row;
    gap: 32px;

    animation: fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000);

    .divider {
        flex-grow: 0;
        border: 1px solid var(--main-white);
    }
    .skills-left-column-wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
        .left-column {
            color: var(--main-white);
            opacity: 0.2;
            font-size: 18px;
            font-weight: 400;
            line-height: 26px;
            text-transform: capitalize;

            &:hover {
                cursor: pointer;
                animation: fade-hover 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) forwards;
            }
        }

        .text-selected-color {
            opacity: 1;
        }
    }

    .skills-right-column-wrapper {
        display: flex;
        flex-direction: column;
        gap: 3px;
        .right-column {
            color: var(--main-white);
            font-size: 18px;
            font-weight: 400;
            line-height: 26px;
            text-transform: capitalize;
        }
    }

    @keyframes fade-in-fwd {
        0% {
            transform: translateZ(-80px);
            opacity: 0;
        }
        100% {
            transform: translateZ(0);
            opacity: 1;
        }
    }

    @keyframes fade-hover {
        0% {
            opacity: 0.2;
        }
        100% {
            opacity: 0.4;
        }
    }
}
</style>
  