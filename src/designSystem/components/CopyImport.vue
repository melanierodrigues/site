<template>
    <!-- <div v-if="showComponent === 'true'" class="copy-import-wrapper"> -->
    <div class="copy-import-wrapper">
        <div class="icon-wrapper">
            <div class="icon">
                <!-- <icon-copy :id="name" @click="copyText"/> -->
                <img :id="name" class="icon" :src="iconCopy" @click="copyText"/>
                <p class="tooltiptext">{{ tooltipText }}</p>
            </div>
        </div>
        <div :id="name + 'Span'" class="text-wrapper">
            <span class="color-variant1">import </span>
            <span class="color-variant2">{{ name }}</span>
            <span class="color-variant1"> from </span>
            <span class="color-variant2">'{{ route }}'</span>
        </div>
    </div>
</template>

<script setup>
import iconCopy from '../../assets/icons/copy-icon.svg?inline'

/* Vue */
import { ref, watch } from 'vue'

/** Props received:
@name { String } - name import
@route { String} - route import
*/
const props = defineProps({
    name: String,
	route: String
})

/* Text Tooltip */
const tooltipText = ref('Copy code')

/* Logic for copy the text when clicked on icon */
const copyText = () => {
    let textSpan = ''
    const getDiv = document.getElementById(props.name + 'Span')
    for (const span of getDiv.querySelectorAll('span')) {
        textSpan += span.innerHTML
    }

    const copyText = document.createElement('input')
    copyText.value = textSpan
    document.body.appendChild(copyText)
    copyText.select()
    document.execCommand('copy')
    document.body.removeChild(copyText)

    tooltipText.value = 'Copied!'
}

/* When the icon is clicked after leave the icon the text tooltip change for 'Copy code' */
watch(() => tooltipText.value === 'Copied!', () => {
    document.getElementById(props.name).addEventListener('mouseover', function () {
        setTimeout(() => { tooltipText.value = 'Copy code' }, 50)
    }, false)
})

/* Show component if VUE_APP_SHOW_DESIGN_SHOWROOM_DEV_NOTES === 'true' */
// const showComponent = computed(() => {
//     const devNotes = process.env.VUE_APP_SHOW_DESIGN_SHOWROOM_DEV_NOTES
//     return devNotes
// })
</script>

<style lang="scss" scoped>
.copy-import-wrapper {
    width: 850px;
    padding: 8px 8px 24px 24px;
    margin: 16px 0 24px 0;

    border-radius: 4px;
    background-color: var(--secondary-orange-2);

    .text-wrapper {
        .color-variant1 {
            font-weight: 600;
            color: var(--main-orange);
        }

        .color-variant2 {
            color: var(--main-background-color);
        }
    }

    .icon-wrapper {
        display: flex;
        justify-content: flex-end;
        position: relative;

        .icon {
            width: 24px;
            display: flex;
            justify-content: flex-end;

            fill: var(--main-orange);

            .tooltiptext {
                background-color: var(--main-background-color);
                font-size: 14px;
                color: #fff;
                text-align: center;
                border-radius: 4px;
                padding: 8px;

                position: absolute;
                visibility: visible;
                opacity: 0;
            }

            &:hover .tooltiptext {
                visibility: visible;

                animation: tooltip 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards;
                animation-delay: 0.2s;
            }
        }
    }

    @keyframes tooltip {
        0% {
            transform: translateY(-20px);
            opacity: 0;
        }
        100% {
            transform: translateY(-42px);
            opacity: 1;
        }
    }
}
</style>
