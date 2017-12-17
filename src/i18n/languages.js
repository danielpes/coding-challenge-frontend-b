import 'moment/locale/pt';
import 'moment/locale/fr';
import 'mdn-polyfills/Array.prototype.find';

const LANGUAGES = [
  {
    langId: 'en',
    name: 'English',
  }, {
    langId: 'fr',
    name: 'Français',
  }, {
    langId: 'pt',
    name: 'Português',
  },
];

export function langIdToName(id) {
  return LANGUAGES.find(lang => lang.langId === id).name;
}

export function getAvailableLanguages() {
  return LANGUAGES;
}
