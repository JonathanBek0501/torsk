import enLocale from './locales/en.json'
import svLocale from './locales/sv.json'
import { useLanguageStore } from './store/lang'


export default defineI18nConfig(() => {
  const languageStore = useLanguageStore()

  let selectedLanguage = languageStore.selectedLanguage || 'en'
  
  return {
    legacy: false,
    lazy: true,
    langDir: 'locales',
    locale: selectedLanguage,
    messages: {
      en: enLocale,
      sv: svLocale
    }
  }
})