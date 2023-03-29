<template>
    <div class="about-me">
        <div class="title">
            {{ t('aboutMe.title') }}
        </div>
        <p class="text">{{ t('aboutMe.text') }}</p>
        <div class="content">
            <div class="photo-container">
                <div class="mask"></div>
                <img class="photo" :src="Photo" />
            </div>
            <div>
                <skills-column style="width: 100%;" :columnData="columnData"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import SkillsColumn from '../../components/SkillsColumn.vue'
import Photo from '../../assets/images/photo.jpg'

/* i18n */
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
/*************************************************
 *                                                *
 *                  Column Data                   *
 *                                                *
 *************************************************/
 const columnData = [
	{
		id: 1,
    textLeft: t('aboutMe.skills.programming'),
    textRight: t('aboutMe.skills.programmingTextRight')
	}, {
		id: 2,
    textLeft: t('aboutMe.skills.tools'),
    textRight: t('aboutMe.skills.toolsTextRight')
	}, {
		id: 3,
    textLeft: t('aboutMe.skills.design'),
    textRight: t('aboutMe.skills.designTextRight')
	}, {
		id: 4,
    textLeft: t('aboutMe.skills.methodologies'),
    textRight: t('aboutMe.skills.methodologiesTextRight')
	}, {
		id: 5,
    text: t('aboutMe.skills.languages'),
    textRight: t('aboutMe.skills.languagesTextRight')
	}
]
</script>

<style lang="scss" scoped>
.about-me {
    display: flex;
    flex-direction: row;
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

    .text {
        width: 480px;
        color: var(--main-white);
        margin-left: 56px;

        font-family: 'Jost';
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;

        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 24px;

        margin-left: 80px;
        .photo-container {
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
}
</style>
  