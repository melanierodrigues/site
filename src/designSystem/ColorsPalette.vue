<template>
  <h1 class="title">Colors</h1>
  <div class="palette-colors-wrapper">
    <div
    v-for="color in colorPalette"
    :key="color.id"
    class="circle"
    :style="{'backgroundColor': `var(${color.backgroundGradient ? null : color.name})`,
    'background': `var(${color.backgroundGradient ? color.name : null})`,
    'border': `${color.isBorderColor ? '1px solid var(--vt-c-divider-dark-1)' : null}`}"
    ></div>
  </div>
  <copy-import name="ButtonRaised" route="@/components/generic/buttons/Raised"/>
</template>

<script setup>
import CopyImport from './components/CopyImport.vue'

const colorPalette = [
	{
		id: '--main-white',
		name: '--main-white',
    isBorderColor: true,
    borderColor: '--main-background-color'
	},
	{
		id: '--main-orange',
		name: '--main-orange'
	},
	{
		id: '--secondary-orange',
		name: '--secondary-orange'
	},
	{
		id: '--main-header-background-gradient',
		name: '--main-header-background-gradient',
    backgroundGradient: true
	},
	{
		id: '--main-background-color',
		name: '--main-background-color'
	}
]

/*************************************************
*                                                *
*             Design System Detail               *
*                                                *
*************************************************/
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  font-weight: 800;
  color: var(--secondary-orange);

  margin-bottom: 16px;
}
.palette-colors-wrapper {
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  row-gap: 16px;
  .circle {
    width: 50px;
    height: 50px;

    border-radius: 50%;
  }
}
</style>
