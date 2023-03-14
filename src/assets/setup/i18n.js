import { createI18n } from 'vue-i18n'
import pt from '../../locales/pt.json'
import en from '../../locales/en.json'
import fr from '../../locales/fr.json'

const languages = {
    pt,
    en,
	fr
}

export default createI18n({
	legacy: false,
	locale: ['en', 'pt', 'fr'],
	fallbackLocale: 'en',
    defaultLocale: 'en',
	messages: languages,
	fallbackWarn: false,
	missingWarn: false
})
