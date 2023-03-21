<template>
  <div class="palette-colors-wrapper">
    <div
    v-for="color in colorPalette"
    :key="color.id"
    :id="color.id"
    class="circle"
    :style="{'backgroundColor': `var(${color.backgroundGradient ? null : color.name})`,
    'background': `var(${color.backgroundGradient ? color.name : null})`,
    'border': `${color.isBorderColor ? 'px solid var(--main-white)' : null}`}"
    @click="copyHandler(color.id)"
    @mouseleave="tooltipText = 'Copy color'">
      <p class="tooltiptext">{{ tooltipText }}</p>
    </div>
  </div>
  <!-- <copy-import name="ButtonRaised" route="@/components/generic/buttons/Raised"/> -->
</template>

<script setup>
// import CopyImport from './components/CopyImport.vue'

/* Vue */
import { ref } from 'vue'

/* Text Tooltip */
const tooltipText = ref('Copy color')

const copyHandler = iconName => {
	navigator.clipboard.writeText(iconName)
  tooltipText.value = 'Copied!'
}

const colorPalette = [
	{
		id: '--main-white',
		name: '--main-white',
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
	// {
	// 	id: '--main-header-background-gradient',
	// 	name: '--main-header-background-gradient',
  //   backgroundGradient: true,
  //   isBorderColor: true
	// },
  {
		id: '--text-color-black',
		name: '--text-color-black',
    isBorderColor: true
	},
	{
		id: '--main-background-color',
		name: '--main-background-color',
    isBorderColor: true
	}
]

/*************************************************
*                                                *
*             Design System Detail               *
*                                                *
*************************************************/
</script>

<style lang="scss" scoped>
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

    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }

  :hover .tooltiptext {
      cursor: pointer;
      visibility: visible;

      animation: tooltip 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards;
      animation-delay: 0.2s;
  }

  ::after .tooltiptext {
    visibility: visible;
  }

}

.tooltiptext {
    background-color: var(--main-background-color);
    font-size: 14px;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 8px;

    position: absolute;
    visibility: visible;
    opacity: 0;
}

@keyframes tooltip {
    0% {
        transform: translateY(-20px);
        scale: 0;
        opacity: 0;
    }
    100% {
        transform: translateY(-34px);
        scale: 1;
        opacity: 1;
    }
}
</style>
