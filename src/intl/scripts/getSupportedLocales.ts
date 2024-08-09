import {
  supportedLocales,
  mapSupportedLocalesToCrowdinLanguageCodes,
} from '../intl.constants';

const result = supportedLocales
  .map((locale) => {
    if (!(locale in mapSupportedLocalesToCrowdinLanguageCodes)) {
      throw new Error(
        `The locale "${locale}" is not supported by Crowdin. Please add it to the "mapSupportedLocalesToCrowdinLanguageCodes" object in "src/intl/intl.constants.ts".`,
      );
    }

    const crowdinLanguageCode =
      mapSupportedLocalesToCrowdinLanguageCodes[locale];
    return `-l ${crowdinLanguageCode}`;
  })
  .join(' ');
console.log(result);
