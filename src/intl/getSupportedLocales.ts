import { supportedLocales } from './intl.constants';
const result = supportedLocales.map((locale) => `-l ${locale}`).join(' ');
console.log(result);
