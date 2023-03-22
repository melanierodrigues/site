<template>
  <!-- <div>
    {{ t('salutation.hello') }}
  </div>
  <span @click="setLocale('en')">EN</span>
  <span> | </span>
  <span @click="setLocale('pt')">PT</span>
  <span> | </span>	
  <span @click="setLocale('fr')">FR</span> -->

  <main-scroll />

</template>

<script setup>
import MainScroll from './mainScroll/MainScroll.vue';
/* i18n */
// import { useI18n } from 'vue-i18n'
// const { t, locale } = useI18n()
/*************************************************
*                                                *
*                  Hello World                   *
*                                                *
*************************************************/

// const setLocale = locales => {
//   locale.value = locales
// }
</script>

<style lang="scss" scoped>
</style>
