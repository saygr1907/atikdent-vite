// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import tr from './locales/tr/translation.json';
import ar from './locales/ar/translation.json';  // ← yeni

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            tr: { translation: tr },
            ar: { translation: ar },   // ← ekledik
        },
        lng: 'tr',
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
    });

export default i18n;
