<template>
  <!-- Header -->
  <div class="header-design-system">
    <div @click="homeRoute">{{ t('routes.goToHome') }}</div>
    <h1 class="title" @click="homeRoute">Design System</h1>
  </div>

  <!-- Content -->
  <div class="design-system-wrapper">
    <div class="design-system-components">
      <!-- Components Name -->
      <div
      v-for="component in Components"
      class="component"
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

/* Data */
const router = useRouter()
const currentEntryId = ref('ColorsPalette')

/*************************************************
*                                                *
*                 Design System                  *
*                                                *
*************************************************/
const homeRoute = () => {
  router.push({ name: 'home' })
}

const paramsRoute = (route) => {
  router.push({
    name: 'design-system-id',
    params: {
      id: route,
      component: () => import('./ComponentB.vue')
    }
  })
}

const componentsWrapper = () => {
  paramsRoute(currentEntryId.value)
  return defineAsyncComponent(() => import('./' + currentEntryId.value + '.vue'))
}

const componentHandler = ($event) => {
  currentEntryId.value = $event.id
}

const Components = [
	{
		id: 'ColorsPalette',
		link: { path: '/designShowroom', hash: '#buttonsComponents' },
		text: 'Colors'
	},
	{
		id: 'ComponentB',
		link: { path: '/designShowroom', hash: '#cardsComponents' },
		text: 'Cards',
		children: []
	},	{
		id: 'ComponentA',
		link: { path: '/designShowroom', hash: '#buttonsComponents' },
		text: 'Buttons',
		children: []
	}
]
</script>

<style lang="scss" scoped>
.header-design-system {
  color: var(--main-white);
  background-color: var(--main-orange);

  // margin-bottom: 6px;
  padding: 32px;

    &:hover {
      cursor: pointer;
      color: var(--main-background-color);

      .title {
        color: var(--main-white);
      }
    }

    .title {
      font-size: 24px;
      font-weight: 800;
    }
}
.design-system-wrapper {
  width: 100%;
  height: 90vh;

  display: flex;

    .design-system-components {
      min-width: 150px;
      padding: 16px 32px;

      display: flex;
      flex-direction: column;
      gap: 16px;

      font-family: 'Climate Crisis';
      font-size: 18px;
      color: var(--main-white);
      background-color: var(--main-orange);

      overflow-y: scroll;

        .component {
          &:hover {
            cursor: pointer;
            color: var(--secondary-orange);
          }
        }
    }

    .design-system-component {
      width: 100%;
      padding: 24px;

      // background-color: var(--main-orange);
    }
}
</style>
