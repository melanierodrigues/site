<template>
  <header>
      <!-- <router-link to="/">Go to Home</router-link> -->
      <!-- <div @click="designSystemRoute">design-system</div> -->
      <img alt="Vue logo" src="./assets/images/m.png" @click="designSystemRoute" width="50" height="50" >
  </header>
  <router-view />
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const designSystemRoute = () => {
  router.push({ name: 'design-system' })
}
</script>

<style scoped>
</style>
