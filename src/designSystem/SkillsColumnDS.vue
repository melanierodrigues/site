<template>
  <div>SkillsColumn</div>
  <skills-column :left="teste"/>
</template>
  
<script setup>
import SkillsColumn from '../components/SkillsColumn.vue'
/* Vue */
  import { ref } from 'vue'

/* Emmitters */
// const emit = defineEmits(['leftColumnClicked'])

const teste = ref([
  { id: 'teste', text: 'teste2' }
])

/*************************************************
*                                                *
*             Design System Detail               *
*                                                *
*************************************************/
</script>

<style lang="scss" scoped>
</style>
  