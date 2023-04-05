<template>
    <div class="project-container">
        <!-- Main Content -->
        <div class="content">
            <div class="images-projects" ref="testeM" @mousedown="mouseDownHandler">
                <div class="image"></div>
                <div class="image"></div>
                <div class="image"></div>
            </div>
            <div class="project-name">{{ props.project.name }}</div>
            <p class="paragraph">{{ props.project.description }}</p>
        </div>
        <!-- Side Info  -->
        <div v-if="props.pills" class="side-info">
            <pills
            v-for="(pill, index) in props.pills"
            :key="index"
            :firstText="pill.firstText"
            :description="pill.description"/>
        </div>
    </div>
</template>

<script setup>
import Pills from '@/components/PillsBase.vue'
// import ButtonBase from '../ButtonBase.vue'

import { ref, onMounted } from 'vue'

/** Props received:
@project { Object }
    - name { String }
    - description { String }
@pills { Array }
*/
const props = defineProps({
    project: Object,
    pills: Array
})

const testeM = ref(null)

let pos = { top: 0, left: 0, x: 0, y: 0 }

const mouseDownHandler = function(e) {
    testeM.value.scrollTop = 100
    testeM.value.scrollLeft = 150

    pos = {
        // The current scroll
        left: testeM.value.scrollLeft,
        top: testeM.value.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    }

    // document.addEventListener('mousemove', mouseMoveHandler)
    // document.addEventListener('mouseup', mouseUpHandler)

    console.log('ver', testeM.value)

    // Change the cursor and prevent user from selecting the text
    testeM.value.addEventListener('mousemove', mouseMoveHandler)
    testeM.value.addEventListener('mouseup', mouseUpHandler)
    // ele.style.cursor = 'grabbing'
    // ele.style.userSelect = 'none'
}

const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x
    const dy = e.clientY - pos.y

    // Scroll the element
    testeM.value.scrollTop = pos.top - dy
    testeM.value.scrollLeft = pos.left - dx
}

const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)

    testeM.value.style.cursor = 'grab'
    testeM.value.style.removeProperty('user-select')
}
</script>

<style lang="scss" scoped>
.project-container {
    max-width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: row;
    gap: 44px;

    .content {
        max-width: 610px;
        .images-projects {
            max-width: 610px;
            height: 264px;

            background-color: rgb(83, 83, 83);
            margin-bottom: 47px;

            display: flex;
            flex-direction: row;
            gap: 24px;

            // overflow-x: auto;
            // cursor: grab;
            overflow: auto;
            user-select: none;

            .image {
                min-width: 300px;
                height: 100%;
                background-color: red;
            }
        }

        .project-name {
            width: fit-content;

            margin-bottom: 16px;

            color: var(--main-white);
            font-family: 'Climate Crisis';
            font-weight: 400;
            font-size: 24px;
            line-height: 32px;
        }

        .paragraph {
            width: fit-content;

            font-family: 'Jost';
            font-weight: 400;
            font-size: 18px;
            line-height: 26px;
            color: var(--main-white);

            :deep(a) {
                text-decoration-line: underline;

                &:hover {
                    color: var(--main-orange);
                    cursor: pointer;
                }

                &:visited {
                    font-family: 'Jost';
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 26px;
                    color: var(--main-white);
                }
            }
        }
    }

    .side-info {
        display: flex;
        flex-direction: column;

        gap: 30px;
    }
}
</style>
  