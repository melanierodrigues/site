<template>
  <div id="teste" class="main" v-dragscroll v-on:dragscrollstart="true" v-on:dragscrollmove="doSomething($event)" v-on:click="teste()">
    <about-me />
    <about-me />
    <about-me />
    <about-me />
  </div>
</template>
  
<script setup>
import AboutMe from '../../components/mainScroll/AboutMe.vue';

/* Vue */
import { ref } from 'vue'

/* i18n */
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()

// v-on:dragscrollstart="true"
// 		v-on:dragscrollend="false"
// v-on:dragscrollmove="doSomething($event)"

const translate = ref(0)

const teste = () => {
  if (translate.value === 0 || translate.value < 1500) translate.value += 200
  if (translate.value > 1000) translate.value = 0
  // console.log('translate.value', translate.value)
  // document.getElementById('teste').style.transform = `translateX(-${translate.value}px)`
}

const doSomething = ($event) => {
  // console.log('$event', $event)
    // $event.detail.deltaX = 0
    // $event.detail.bubbles = true
    // $event.detail.cancelBubble = true
    // $event.detail.timeStamp
    const teste = document.getElementById('teste').getBoundingClientRect()
    if (($event.detail.deltaX > 0)) {
      console.log('direita')
      console.log('translate.value', translate.value)
      console.log('document.getElementById', document.getElementById('teste').style.transform)
      // document.getElementById('teste').style.transform = "translate(" + 150 + "px, " + 0 + "px)"
      document.getElementById('teste').style.transform = `translateX(-${translate.value}px)`
    }

    if (($event.detail.deltaX < 0)) {
      // if (($event.detail.deltaX < 0)) {
      console.log('esquerda')
      console.log('document.getElementById', document.getElementById('teste').style.transform)
      document.getElementById('teste').style.transform = `translateX(${translate.value}px)`
    }

    // document.getElementById('teste').addEventListener('dragover', () => {

    // if ($event.detail.deltaX > 1) {
    //   // document.getElementById('teste').style.transform = "translate(" + 150 + "px, " + 0 + "px)"
    //   document.getElementById('teste').style.transform = "translateX(150px)"
    // }

    // if ($event.detail.deltaX > 1) {
    //   document.getElementById('teste').style.transform = "translateX(-150px)"
    // }

    // })
}
/*************************************************
*                                                *
*                  Hello World                   *
*                                                *
*************************************************/
</script>

<style lang="scss" scoped>
.main {
  min-width: min-content;
  height: calc(100vh - 110px);

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 42px;
  // overflow-x: scroll;

  padding-right: 500px;

  transition: all 0.8s ease-in-out;

  background-color: red;

  // scroll-behavior: smooth;

  .grab-bing {
    cursor : -webkit-grabbing;
    cursor : -moz-grabbing;
    cursor : -o-grabbing;
    cursor : grabbing;
  }

  // position: absolute;
  // right: 0;
  // bottom: 0;
}
</style>
  