import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en.json';
import translationPL from './pl.json';

export const defaultNS = 'translationPL';
export const resources = {
  pl: {
    translationPL,
  },
  en: {
    translationEN,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'pl',
  ns: ['translationPL', 'translationEN'],
  defaultNS,
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
