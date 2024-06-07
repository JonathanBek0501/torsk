import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    selectedLanguage: getDefaultLanguage()
  }),
  actions: {
    setSelectedLanguage(language) {
      this.selectedLanguage = language
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('selectedLanguage', language)
      }
    },
    getSelectedLanguage() {
      if (typeof localStorage !== 'undefined') {
        const storedLanguage = localStorage.getItem('selectedLanguage')
        if (storedLanguage) {
          this.setSelectedLanguage(storedLanguage)
        }
      }
    }
  }
})

function getDefaultLanguage() {
  if (process.client) {
    const storedLanguage = localStorage.getItem('selectedLanguage')
    return storedLanguage || 'en'
  } else {
    return 'en'
  }
}
