<template>
    <activities-base :activities="activities"/>
</template>

<script setup>
// import ButtonBase from '../ButtonBase.vue'
import ActivitiesBase from '../../components/ActivitiesBase.vue'
import Photo from '@/assets/images/photo.jpg'

/* i18n */
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const activities = [
    {
        title: 'Relevant Experience',
        activity: [
            { label: 'Front end developer at Innovation Makers', beginDate: 'Jan 2022', endDate: 'teste' },
            { label: 'Front end developer at Innovation Makers', beginDate: 'Jan 2022', endDate: 'teste' }
        ],
    },
    {
        title: 'Relevant Experience',
        activity: [
            { label: 'Front end developer at Innovation Makers', beginDate: 'Jan 2022', endDate: 'teste' },
            { label: 'Front end developer at Innovation Makers', beginDate: 'Jan 2022', endDate: 'teste' },
            { label: 'Front end developer at Innovation Makers', beginDate: 'Jan 2022', endDate: 'teste' }
        ],
    },
    {
        title: 'Relevant Experience',
        activity: [
            { label: 'Front end developer at Innovation Makers', beginDate: 'Jan 2022', endDate: 'teste' },
            { label: 'Front end developer at Innovation Makers', beginDate: 'Jan 2022', endDate: 'teste' }
        ],
    }
]

</script>

<style lang="scss" scoped>
.project-base {
    display: flex;
    flex-direction: row;

    height: fit-content;

    .title {
        width: 90px;
        height: 498px;

        margin-right: 56px;

        color: var(--main-white);
        font-family: 'Climate Crisis';
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        font-weight: 400;
        font-size: 68px;
        line-height: 90px;
        text-align: right;
    }
}
</style>
  