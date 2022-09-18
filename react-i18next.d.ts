import { resources, defaultNS } from './src/pages/_i18n';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources['pl'];
  }
}
