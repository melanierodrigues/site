<template>
  <skills-column :left="leftColumn"/>
</template>
  
<script setup>
import SkillsColumn from '../components/SkillsColumn.vue'
/* Vue */
// import { ref } from 'vue'

/* i18n */
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

/* Emmitters */
// const emit = defineEmits(['leftColumnClicked'])

const teste = () => {
  alert(`Isto é um teste`)
}
const leftColumn = [
	{
		id: 1,
    text: t('aboutMe.skills.programming'),
		route: '../designSystem/ColorsPalette.vue',
    haveCopyImport: false,
    clicked: teste
	}, {
		id: 2,
    text: t('aboutMe.skills.tools'),
		route: '../designSystem/SkillsColumnDS.vue',
    haveCopyImport: false,
    clicked: teste
	}, {
		id: 3,
    text: t('aboutMe.skills.design'),
		route: '../designSystem/ComponentA.vue',
    haveCopyImport: false,
    clicked: teste
	}, {
		id: 4,
    text: t('aboutMe.skills.methodologies'),
		route: '../designSystem/ComponentA.vue',
    haveCopyImport: false,
    clicked: teste
	}, {
		id: 5,
    text: t('aboutMe.skills.languages'),
		route: '../designSystem/ComponentA.vue',
    haveCopyImport: false,
    clicked: teste
	}
]

/*************************************************
*                                                *
*             Design System Detail               *
*                                                *
*************************************************/
</script>

<style lang="scss" scoped>
</style>
  