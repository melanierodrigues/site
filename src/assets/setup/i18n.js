import { createI18n } from 'vue-i18n'
import pt from '../../locales/pt.json'
import en from '../../locales/en.json'

const languages = {
    pt,
    en
}

export default createI18n({
	legacy: false,
	locale: ['en', 'pt'],
	fallbackLocale: 'en',
    defaultLocale: 'en',
	messages: languages,
	fallbackWarn: false,
	missingWarn: false
})
