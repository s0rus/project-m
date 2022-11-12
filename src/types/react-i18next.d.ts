import { resources } from '../translations/i18n';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof resources.pl.translation;
    };
  }
}