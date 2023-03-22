<template>
    <!--| | PILLS BASE | |-->
    <div class="pills-container">
        <div id="teste" class="first-pills">{{ props.firstText }}</div>
        <div v-if="secondText" class="second-pills">{{ props.secondText }}</div>
    </div>
    <!-- <div style="color: var(--main-orange); margin: 50px 0;">Ver: {{ ver }}</div> -->
    <!-- <p id="result" style="color: var(--main-orange); margin: 50px;">{{ result }}</p> -->
    <!-- <button @touchend="requestDeviceOrientation">Request Orientation</button> -->
</template>
  
<script setup>  
/* Vue */
// import { computed } from 'vue'

// import { ref } from 'vue';

/* Emmitters */
// const emit = defineEmits(['clicked'])  

/** Props received:
@firstText { String }
@secondText { String }
*/
const props = defineProps({
    firstText: String,
    secondText: String
})

// const ver = ref()

// onMounted(() => {
//     if (window.DeviceOrientationEvent) {
//   window.addEventListener('deviceorientation', deviceOrientationHandler, false);
//   document.getElementById('doeSupported').innerText = 'Supported!';
// }
// })
// var sensorHub = $.connection.sensorHub;
//         $.connection.hub.start();

// function testDeviceOrientation() {
//   if (typeof DeviceOrientationEvent !== 'function') {
//     return setResult('DeviceOrientationEvent not detected')
//   }

//   if (typeof DeviceOrientationEvent.requestPermission !== 'function') {
//     return setResult('DeviceOrientationEvent.requestPermission not detected')
//   }

//   DeviceOrientationEvent.requestPermission().then(function(result) {
//     window.addEventListener('deviceorientation', function(e) {
//             const x = e.beta
//             const y = e.gamma
//             const z = e.alpha

//             setResult('resultado: ' + x + y + z);
//         })
//     return setResult(result);
//   });
// }

// function setResult(result) {
// //   document.getElementById('result').innertext = 'RESULT: ' + result;
// console.log('result', result)
//   ver.value = result
// }

// function requestDeviceOrientation () {
//   if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
//   DeviceOrientationEvent.requestPermission()
//   .then(permissionState => {
//     if (permissionState === 'granted') {
//         window.addEventListener('deviceorientation', (e) => {
//             const x = e.beta
//                 ver.value = x
//         });
//     } else {
//         alert('Nooooo')
//         ver.value = '=S'
//     }
//   })
//   .catch(console.error)
//   } else {
//     window.addEventListener('deviceorientation', (e) => {
//             const x = e.beta
//                 ver.value = x
//         });
//   // handle regular non iOS 13+ devices
//   console.log ('not iOS')
//   ver.value = 'not iOS'
//   }
// }
</script>

<style lang="scss" scoped>
.pills-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
    .first-pills {
        width: fit-content;
        padding: 4px 10px;

        background: var(--main-orange);
        border-radius: 48px;

        color: var(--main-white);
        font-weight: 400;
        font-size: 18px;
        font-style: normal;
        line-height: 26px;
    }

    .second-pills {
        width: fit-content;
        padding: 4px 10px;

        background: var(--main-orange);
        border-radius: 48px;

        color: var(--main-white);
        font-weight: 400;
        font-size: 18px;
        font-style: normal;
        line-height: 26px;
    }
}
</style>
  