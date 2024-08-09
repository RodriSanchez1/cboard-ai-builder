import { supportedLocales, defaultLocale } from './intl.constants';
const result = supportedLocales
  .map((locale) => (locale === defaultLocale ? '' : `-l ${locale}`))
  .join(' ');
console.log(result);
