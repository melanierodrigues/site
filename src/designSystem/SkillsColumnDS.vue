<template>
  <!-- *********************************************
  *                                                *
  *	                Skills Column	                 *
  *                                                *
  ********************************************** -->
  <skills-column :columnData="columnData"/>
</template>
  
<script setup>
import SkillsColumn from '../components/SkillsColumn.vue'

/* i18n */
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const columnData = [
	{
		id: 1,
    textLeft: t('aboutMe.skills.programming'),
    textRight: t('aboutMe.skills.programmingTextRight')
	}, {
		id: 2,
    textLeft: t('aboutMe.skills.tools'),
    textRight: t('aboutMe.skills.toolsTextRight')
	}, {
		id: 3,
    textLeft: t('aboutMe.skills.design'),
    textRight: t('aboutMe.skills.designTextRight')
	}, {
		id: 4,
    textLeft: t('aboutMe.skills.methodologies'),
    textRight: t('aboutMe.skills.methodologiesTextRight')
	}, {
		id: 5,
    text: t('aboutMe.skills.languages'),
    textRight: t('aboutMe.skills.languagesTextRight')
	}
]
</script>

<style lang="scss" scoped>
</style>
  