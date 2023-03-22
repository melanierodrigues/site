<template>
  <header class="header">
      <!-- <router-link to="/">Go to Home</router-link> -->
      <!-- <div @click="designSystemRoute">design-system</div> -->
      <!-- <img alt="Vue logo" src="./assets/images/m.png" @click="designSystemRoute" width="50" height="50" > -->
      <h2 class="logo" @click="designSystemRoute">M</h2>
  </header>
  <div class="main">
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const designSystemRoute = () => {
  router.push({ name: 'design-system' })
}
</script>

<style lang="scss">
@import 'src/style/main.scss';

.header {
  width: 100%;
  height: 80px;
  // background: var(--main-header-background-gradient); // trocar background depois por este
  background-color: var(--main-background-color);

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 80px;

  .logo {
    color: var(--main-orange);
    font-size: 37px;
    font-family: 'Climate Crisis';
  }
}

.main {
  width: 100%;
  height: 90vh;
  background-color: var(--main-background-color);
}
</style>
