<template>
    <div class="skills-column-wrapper">
        <!-- Left Column -->
        <div class="skills-left-column-wrapper">
            <div
            v-for="text in props.left"
            class="left-column"
            :key="text.id"
            @click="emit('leftColumnClicked', $event)">
            {{ text.text }}
            </div>
        </div>

        <!-- Divider -->
        <div class="divider" />

        <!-- Right Column -->
        <div class="skills-right-column-wrapper">
            <div
            v-for="text in props.left"
            class="right-column"
            :key="text.id"
            @click="emit('leftColumnClicked', $event)">
            {{ text.text }}
            </div>
        </div>
    </div>
</template>
  
<script setup>  
/* Vue */
//   import { ref } from 'vue'

/* Emmitters */
const emit = defineEmits(['leftColumnClicked'])

/** Props received:
@LeftColumn { Array } - each item is an Object
  - id { String }
  - text { String }
*/
const props = defineProps({
    left: Array
})

/*************************************************
 *                                                *
 *             Design System Detail               *
 *                                                *
 *************************************************/
</script>

<style lang="scss" scoped>
.skills-column-wrapper {
    display: flex;
    flex-direction: row;
    gap: 50px;

    .divider {
        border: 1px solid var(--main-white);
    }
    .skills-left-column-wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
        .left-column {
            color: var(--main-white);
            font-size: 18px;
            font-weight: 400;
            line-height: 26px;
            text-transform: capitalize;
        }
    }

    .skills-right-column-wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
        .right-column {
            color: var(--main-white);
            font-size: 18px;
            font-weight: 400;
            line-height: 26px;
            text-transform: capitalize;
        }
    }
}
</style>
  