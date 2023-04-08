<template>
    <div class="project-container">
        <!-- Main Content -->
        <div class="content">
            <div v-if="props.images" class="images-projects" ref="imagesRef" @mouseover="mouseDownHandler" @mouseleave="mouseLeaveHandler">
                <div v-for="(image, index) in props.images" :key="`images${index}`" class="photo-container">
                    <div id="mask" class="mask"></div>
                    <img class="photo" :src="image.photo" />
                </div>
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

import { ref } from 'vue'

/** Props received:
@project { Object }
    - name { String }
    - description { String }
@pills { Array }
@images { Array }
*/
const props = defineProps({
    project: Object,
    pills: Array,
    images: Array
})

const imagesRef = ref(null)

let pos = { top: 0, left: 0, x: 0, y: 0 }

const mouseDownHandler = function(e) {
    imagesRef.value.scrollTop = 100
    imagesRef.value.scrollLeft = 150

    pos = {
        // The current scroll
        left: imagesRef.value.scrollLeft,
        top: imagesRef.value.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    }

    // Change the cursor and prevent user from selecting the text
    imagesRef.value.addEventListener('mousemove', mouseMoveHandler)
    imagesRef.value.addEventListener('mouseup', mouseUpHandler)
    imagesRef.value.style.cursor = 'grabbing'
    imagesRef.value.style.userSelect = 'none'

    // Change the backgound of mask
    const everyMask = document.querySelectorAll("#mask")
    for (var i = 0; i < everyMask.length; i++) {
        everyMask[i].style.background = 'white'
    }
}

const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x
    const dy = e.clientY - pos.y

    // Scroll the element
    imagesRef.value.scrollTop = pos.top - dy
    imagesRef.value.scrollLeft = pos.left - dx
}

const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)

    imagesRef.value.style.cursor = 'grab'
    imagesRef.value.style.removeProperty('user-select')
}

const mouseLeaveHandler = () => {
    // Change the backgound of mask
    const everyMask = document.querySelectorAll("#mask")
    for (var i = 0; i < everyMask.length; i++) {
        everyMask[i].style.background = 'var(--main-orange)'
    }
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
            margin-bottom: 47px;

            display: flex;
            flex-direction: row;
            gap: 24px;

            // overflow-x: auto;
            // cursor: grab;
            overflow-y: hidden;
            overflow: auto;
            user-select: none;

            .image {
                min-width: 300px;
                height: 100%;
                background-color: red;
            }

            .photo-container {
                position: relative;
                .mask {
                    width: 310px;
                    height: 239.58px;

                    position: absolute;
                    background: var(--main-orange);

                    transition: all 0.8s ease-out 0.2s;
                }
                .photo {
                    width: 310px;
                    height: 239.58px;

                    filter: grayscale(100%) brightness(200%) contrast(70%);
                    mix-blend-mode: multiply;
                }
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

::-webkit-scrollbar {
    display: none;
}
</style>
  