<template>
    <div class="project-container">
        <!-- Main Content -->
        <div class="content">
            <div v-if="props.images" class="images-projects" ref="containerScroll" @mouseover="mouseDownHandler" @mousemove="mouseMoveHandler" @mouseup="mouseUpHandler">
                <div v-for="(image, index) in props.images" :key="`image-${index}`" class="photo-container">
                    <div class="mask"></div>
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

const containerScroll = ref(null)

let pos = { top: 0, left: 0, x: 0, y: 0 }

const mouseDownHandler = function(e) {
    containerScroll.value.scrollTop = 100
    containerScroll.value.scrollLeft = 150

    pos = {
        // The current scroll
        left: containerScroll.value.scrollLeft,
        top: containerScroll.value.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    }

    // Change the cursor and prevent user from selecting the text
    containerScroll.value.style.cursor = 'grabbing'
    containerScroll.value.style.userSelect = 'none'
}

const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x
    const dy = e.clientY - pos.y

    // Scroll the element
    containerScroll.value.scrollTop = pos.top - dy
    containerScroll.value.scrollLeft = pos.left - dx
}

const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler)
    document.removeEventListener('mouseup', mouseUpHandler)

    containerScroll.value.style.cursor = 'grab'
    containerScroll.value.style.removeProperty('user-select')
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

            overflow: hidden;
            user-select: none;

            .image {
                min-width: 353px;
                height: 100%;
                background-color: var(--main-orange);
                mix-blend-mode: multiply;
            }

            .photo-container {
                position: relative;
                .mask {
                    width: 310px;
                    height: 239.58px;

                    position: absolute;
                    background: var(--main-orange);
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
</style>
  