import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en.json';
import translationPL from './pl.json';

export type Language = 'en' | 'pl';
export enum LanguageEnum {
  EN = 'en',
  PL = 'pl',
}

export const resources = {
  pl: {
    translation: translationPL,
  },
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: 'pl',
  resources,

  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;