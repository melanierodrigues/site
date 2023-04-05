<template>
    <div class="little-apresentation">
        <div>
            <div class="title">{{ t('littleApresentation.title') }}</div>
            <div class="subtitle">{{ t('littleApresentation.subtitle') }}</div>
        </div>
        <div class="divider" />
        <p class="paragraph" v-html="t('littleApresentation.paragraph', { link: 'https://www.inm.pt/', target: '_blank' })" />
        <div class="buttons-wrapper">
            <a class="resume" href="https://www.melanierodrigues.com/assets/M%C3%A9lanie%20Rodrigues_CV%20_2021.pdf">{{ t('littleApresentation.resumeButton') }}</a>
            <button-base :text="t('littleApresentation.contactMeButton')" @clicked="clickedButton"/>
        </div>
    </div>
</template>

<script setup>
import ButtonBase from '../../components/ButtonBase.vue'

/* i18n */
import { useI18n } from 'vue-i18n'
const { t } = useI18n()


// TO DO
const clickedButton = () => {
  alert('This is a Button')
}
</script>

<style lang="scss" scoped>
.little-apresentation {
    width: max-content;
    .title {
        font-family: 'Climate Crisis';
        font-weight: 400;
        font-size: 124px;
        color: var(--main-white);
        text-transform: capitalize;
    }

    .subtitle {
        font-family: 'Climate Crisis';
        font-weight: 400;
        font-size: 36px;
        color: var(--main-white);
        text-transform: capitalize;
    }

    .divider {
        max-width: 504px;
        margin: 38px 0;
        border: 1px solid var(--main-white);

        flex-grow: 0;
    }

    .paragraph {
        max-width: 504px;

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

    .buttons-wrapper {
        display: flex;
        flex-direction: row;
        gap: 40px;

        margin-top: 54px;

        :deep(.button-base) {
            padding: 0;
            text-transform: uppercase;

            font-weight: 400;
            font-size: 16px;
        }

        .resume {
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 23px;
            text-transform: uppercase;
            color: var(--main-orange);

            text-decoration-line: none;

            &:hover {
                text-decoration-line: underline;
            }

            &:visited {
                font-size: 16px;
                color: var(--main-orange);
            }
        }
    }
}
</style>
  