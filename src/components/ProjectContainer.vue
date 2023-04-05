<template>
    <div class="project-container">
        <!-- Main Content -->
        <div class="content">
            <div class="images-projects"></div>
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
            width: 100%;
            height: 264px;

            background-color: red;
            margin-bottom: 47px;
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
  