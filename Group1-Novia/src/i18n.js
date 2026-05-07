import { createI18n } from 'vue-i18n'
import en from './locales/en'
import km from './locales/km'

const savedLocale = localStorage.getItem('app-locale') || 'en'

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: { en, km },
})

export default i18n
