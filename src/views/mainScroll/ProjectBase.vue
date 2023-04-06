<template>
    <div class="project-base">
        <div class="title">
            {{ t('projectBase.title') }}
        </div>
        <project :project="baiDirectoProject.params" :pills="baiDirectoProject.pills" :images="baiDirectoProject.images"/>
    </div>
</template>

<script setup>
// import ButtonBase from '../ButtonBase.vue'
import Project from '../../components/ProjectContainer.vue'
import Photo from '@/assets/images/photo.jpg'

/* i18n */
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const baiDirectoProject = {
    params: {
        name: t('project1.name'),
        description: t('project1.description')
    },
    pills: [
        { firstText: t('project1.pills.roleLabel'), description: t('project1.pills.roleDescription') },
        { firstText: t('project1.pills.companyLabel'), description: t('project1.pills.companyDescription') },
        { firstText: t('project1.pills.technologiesLabel'), description: t('project1.pills.technologiesDescription') }
    ],
    images: [
        { photo: Photo },
        { photo: Photo },
        { photo: Photo }
    ]
}

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
  