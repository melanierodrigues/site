<template>
  <div @click="homeRoute">{{ t('routes.goToHome') }}</div>
  <div>
    Design System
  </div>
</template>

<script setup>
/* Router */
import { useRouter } from 'vue-router'

/* i18n */
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const currentRoute = useRouter()

const homeRoute = () => {
  currentRoute.push({ name: 'home' })
}

/*************************************************
*                                                *
*                 Design System                  *
*                                                *
*************************************************/
</script>

<style lang="scss" scoped>
</style>
