import i18n from "i18next";
import Backend from 'i18next-xhr-backend';
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationsEN from './en/translation.json'
import translationsRU from './ru/translation.json'

const resources = {
  en: {
    translation: translationsEN
  },
  ru: {
    translation: translationsRU
  }
};


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: "ru", // default language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
