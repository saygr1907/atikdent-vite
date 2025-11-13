// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const langs = [
        { code: 'tr', label: 'TR' },
        { code: 'en', label: 'EN' },
        { code: 'ar', label: 'AR' },
    ];

    return (
        <div className="flex space-x-2">
            {langs.map(({ code, label }) => (
                <button
                    key={code}
                    onClick={() => i18n.changeLanguage(code)}
                    className={`px-2 py-1 ${i18n.language === code ? 'font-bold underline' : ''}`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}
