<template>
    <div class="little-apresentation">
        <div>
            <div class="title">{{ t('littleApresentation.title') }}</div>
            <div class="subtitle">{{ t('littleApresentation.subtitle') }}</div>
        </div>
        <div class="divider" />
        <p class="paragraph" v-html="t('littleApresentation.paragraph', { link: 'https://www.inm.pt/', target: '_blank' })" />
        <div class="buttons-wrapper">
            <button-base :text="t('littleApresentation.resumeButton')" @clicked="download()"/>
            <button-base :text="t('littleApresentation.contactMeButton')" @clicked="clickedButton"/>
        </div>
    </div>
</template>

<script setup>
import ButtonBase from '../../components/ButtonBase.vue'

/* i18n */
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const clickedButton = () => {
  alert('This is a Button')
}

const download = async () => {
    await fetch("https://www.africau.edu/images/default/sample.pdf", {
    method: 'GET'
}).then(resp => resp.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = "name"; // the filename you want
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    })
}

// function download(url, filename) {
// fetch(url).then(function(t) {
//     return t.blob().then((b)=>{
//         var a = document.createElement("a");
//         a.href = URL.createObjectURL(b);
//         a.setAttribute("download", filename);
//         a.click();
//     }
//     );
// });
// }

// function download() {
//     var a = document.createElement("a")
//     a.style = "display: none"
//     a.href = "data:application/pdf;base64,<?= $file_content ?>"
//     a.download = "https://www.melanierodrigues.com/assets/M%C3%A9lanie%20Rodrigues_CV%20_2021.pdf"
//     document.body.appendChild(a)
//     a.click()
//     document.body.removeChild(a)
// }

// function download() {
//     const linkSource = `data:application/pdf;base64,${'https://www.melanierodrigues.com/assets/M%C3%A9lanie%20Rodrigues_CV%20_2021.pdf'}`;
//     const downloadLink = document.createElement("a");
//     const fileName = "vct_illustration.pdf";

//     downloadLink.href = linkSource;
//     downloadLink.download = fileName;
//     downloadLink.click();
// }
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
    }
}
</style>
  