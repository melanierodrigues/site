<template>
  <div @click="homeRoute">{{ t('routes.goToHome') }}</div>

  <h1>Design System</h1>
  <div class="design-system-wrapper">
    <div class="design-system-components">
      <!-- Components Name -->
      <div
      v-for="component in Components"
      :key="component.id"
      :selected="currentEntryId === component.id"
      @click="componentHandler(component)">{{ component.text }}</div>
    </div>

    <!-- Components View -->
    <div class="design-system-component">
      <component :is="componentsWrapper()"/>
    </div>
  </div>
</template>

<script setup>
/* Vue */
import { ref, defineAsyncComponent } from 'vue'

/* Router */
import { useRouter } from 'vue-router'

/* i18n */
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const router = useRouter()

const homeRoute = () => {
  router.push({ name: 'home' })
}

// const paramsRoute = () => {
//   router.push({
//     name: 'design-system-id',
//     params: {
//       id: 'ComponentA',
//       component: () => import('./ComponentB.vue')
//     }
//   })
// }

const currentEntryId = ref('ComponentA')

const componentsWrapper = () => {
  return defineAsyncComponent(() => import('./' + currentEntryId.value + '.vue'))
}

/*************************************************
*                                                *
*                 Design System                  *
*                                                *
*************************************************/
const componentHandler = ($event) => {
  currentEntryId.value = $event.id
}

const Components = [
	{
		id: 'ComponentA',
		link: { path: '/designShowroom', hash: '#buttonsComponents' },
		text: 'Buttons',
		children: []
	},
	{
		id: 'ComponentB',
		link: { path: '/designShowroom', hash: '#cardsComponents' },
		text: 'Cards',
		children: []
	}
]
</script>

<style lang="scss" scoped>
.design-system-wrapper {
  width: 100%;
  height: 150px;
  background-color: red;

  display: flex;

    .design-system-components {
      padding: 24px;
      background-color: aqua;
    }

    .design-system-component {
      padding: 24px;
    }
}
</style>
