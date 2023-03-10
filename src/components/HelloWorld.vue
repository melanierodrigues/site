<template>
  <div>
    {{ t('salutation.hello') }}
  </div>
  <span @click="setLocale('pt')">PT</span>
  <span> | </span>
  <span @click="setLocale('en')">EN</span>

</template>

<script setup>
/* i18n */
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
/*************************************************
*                                                *
*                  Hello World                   *
*                                                *
*************************************************/

const setLocale = locales => {
  locale.value = locales
}
</script>

<style lang="scss" scoped>
</style>
