import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationPL from '../translations/pl.json';

export const defaultNS = 'translationPL';
export const resources = {
  pl: {
    translationPL,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'pl',
  ns: ['translationPL'],
  defaultNS,
  resources,
});

export default i18n;
