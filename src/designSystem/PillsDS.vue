<template>
  <!-- *********************************************
  *                                                *
  *  	                  Pills  	                   *
  *                                                *
  ********************************************** -->
<pills firstText="2022"/>
<pills firstText="2022" secondText="2023"/>
<pills firstText="2022" description="This is a description"/>
<copy-import name="Pills" route="@/components/PillsBase.vue"/>
</template>

<script setup>
import Pills from '../components/PillsBase.vue'
import CopyImport from './components/CopyImport.vue'
/* Router */
// import { useRouter } from 'vue-router'

/* i18n */
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()
</script>

<style lang="scss" scoped>
</style>
