<template>
    <div class="activities">
        <div class="title">
            {{ t('activities.title') }}
        </div>
        <div class="content-scroll">
            <div v-for="(activity, index) in props.activities" :key="index" class="content">
                <div class="content-title">{{ activity.title }}</div>
                <div class="content-activity">
                    <div v-for="(param, index) in activity.activity" :key="index" class="items-container">
                        <div class="content-label">{{ param.label }}</div>
                        <pills :firstText="param.beginDate" :secondText="param.endDate"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Pills from '@/components/PillsBase.vue'

/* i18n */
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

/** Props received:
@activities { Array } - received objects
    - title - { String }
    - activity { Array }
        - label
        - beginDate
        - endDate
*/
const props = defineProps({
    activities: Array
})
/*************************************************
 *                                                *
 *                  Column Data                   *
 *                                                *
 *************************************************/
</script>

<style lang="scss" scoped>
.activities {
    display: flex;
    flex-direction: row;
    gap: 56px;

    height: fit-content;
    .title {
        width: 90px;
        height: 498px;
        color: var(--main-white);
        font-family: 'Climate Crisis';
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        font-weight: 400;
        font-size: 68px;
        line-height: 90px;
        text-align: right;
    }

    .content-scroll {
        display: flex;
        flex-direction: column;
        gap: 80px;

        .content {
            display: flex;
            flex-direction: row;
            gap: 80px;

            padding-bottom: 80px;
            border-bottom: 1px solid var(--main-white);

            .content-title {
                color: var(--main-white);
                font-family: 'Climate Crisis';
                font-weight: 400;
                font-size: 24px;
                line-height: 32px;
            }

            .content-activity {
                display: flex;
                flex-direction: column;
                gap: 30px;
                .items-container {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    .content-label {
                        color: var(--main-white);
                        font-family: 'Jost';
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 26px;
                    }
                }
            }
        }
    }
}
</style>
  