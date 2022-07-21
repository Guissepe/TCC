import * as Localization from 'expo-localization';
import i18n, { translations } from 'i18n-js';

i18n.translations = {
  en: { welcome: 'Hello',
        food: 'food' },
  ja: { welcome: 'こんにちは',
        food: 'flksajdflkasdf'},
  ptBR: { welcome: 'Olá',
        food: 'COMIDA'
  },
};

// Set the locale once at the beginning of your app.
// i18n.locale = Localization.locale;
i18n.locale = 'ptBR';

i18n.fallbacks = true;

export default translations;
