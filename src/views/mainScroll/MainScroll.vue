<template>
  <div id="teste" class="main" v-dragscroll v-on:dragscrollstart="true" v-on:dragscrollmove="doSomething($event)">
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
const doSomething = ($event) => {
  console.log('$event', $event)
    // $event.detail.deltaX = 0
    // $event.detail.bubbles = true
    // $event.detail.cancelBubble = true
    // $event.detail.timeStamp
    if ($event.detail.deltaX > 0) {
      translate.value += 50
      // document.getElementById('teste').style.transform = "translate(" + 150 + "px, " + 0 + "px)"
      document.getElementById('teste').style.transform = `translateX(-${translate.value}px)`
    }

    if ($event.detail.deltaX < 0) {
      translate.value -= 50
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
  width: 100vw;
  height: calc(100vh - 110px);

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 42px;
  overflow-x: scroll;

  transition: all 0.8s ease-in-out;

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
  