<template>
  <!-- *********************************************
  *                                                *
  * 	               Button Base 	                 *
  *                                                *
  ********************************************** -->
  <div class="button-wrapper">
    <!-- Button Base -->
    <div class="button-container">
      <div class="title">Base</div>
      <button-base text="This is a button" @clicked="clickedButton" />
    </div>
    <!-- fullColor -->
    <div class="button-container">
      <div class="title">fullColor</div>
      <button-base text="This is a button" @clicked="clickedButton" fullColor/>
    </div>
    <!-- withBorder -->
    <div class="button-container">
      <div class="title">withBorder</div>
      <button-base text="This is a button" @clicked="clickedButton" withBorder/>
    </div>
    <!-- disabled -->
    <div class="button-container">
      <div class="title">disabled</div>
      <button-base text="This is a button" @clicked="clickedButton" disabled/>
    </div>
  </div>
</template>

<script setup>
import ButtonBase from '../components/ButtonBase.vue'
/* Router */
// import { useRouter } from 'vue-router'

/* i18n */
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()

const clickedButton = () => {
  alert('This is a Button')
}
</script>

<style lang="scss" scoped>
.button-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 80px;
  row-gap: 16px;

  .button-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .title {
      color: var(--secondary-orange);
    }
  }
}
</style>
