<template>
    <div class="design-system-components">
      <!-- Left Column -->
      <div
      v-for="text in props.left"
      class="component"
      :key="text.id"
      :selected="componentStuff.id === component.id"
      @click="emit('leftColumnClicked', $event)">{{ text.text }}</div>
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
  </style>
  