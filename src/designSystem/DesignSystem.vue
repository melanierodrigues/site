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
      :selected="componentStuff.id === component.id"
      @click="componentHandler(component)">{{ component.text }}</div>
    </div>

    <!-- Components View -->
    <div class="design-system-component">
      <h1 class="title">{{ componentStuff.title }}</h1>
      <component :is="componentsWrapper()"/>
      <copy-import v-if="componentStuff.haveCopyImport" :name="componentStuff.id" :route="componentStuff.route"/>
    </div>
  </div>
</template>

<script setup>
import CopyImport from './components/CopyImport.vue'

/* Vue */
import { ref, defineAsyncComponent } from 'vue'

/* Router */
import { useRouter } from 'vue-router'

/* i18n */
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

/* Data */
const router = useRouter()

const componentStuff = ref({
  id: 'ColorsPalette',
  title: 'Colors',
  route: '../designSystem/ColorsPalette.vue',
  haveCopyImport: false
})

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
      id: route
    }
  })
}

const componentsWrapper = () => {
  paramsRoute(componentStuff.value.id)
  return defineAsyncComponent(() => import(componentStuff.value.route))
}

const componentHandler = ($event) => {
  componentStuff.value = {
    id: $event.id,
    title: $event.text,
    route: $event.route,
    haveCopyImport: $event.haveCopyImport
  }
}

const Components = [
	{
		id: 'ColorsPalette',
		route: '../designSystem/ColorsPalette.vue',
		text: 'Colors',
    haveCopyImport: false
	},
	{
		id: 'SkillsColumn',
		route: '../designSystem/SkillsColumnDS.vue',
		text: 'Skills Column',
    haveCopyImport: false
	},	{
		id: 'ComponentA',
		route: '../designSystem/ComponentA.vue',
		text: 'Buttons',
    haveCopyImport: false
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
  background-color: var(--design-system-background-dark);

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

      .title {
        font-size: 24px;
        font-weight: 800;
        text-transform: capitalize;
        color: var(--secondary-orange);
      
        margin-bottom: 16px;
      }

      // background-color: var(--main-orange);
    }
}
</style>
