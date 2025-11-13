// src/components/StickyCTA.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function StickyCTA() {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hero = document.getElementById('hero');
        if (!hero) return;

        const obs = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting === false),
            { rootMargin: '0px', threshold: 0 }
        );

        obs.observe(hero);
        return () => obs.disconnect();
    }, []);

    const classes = `
    fixed bottom-4 inset-x-4 z-50 touch-manipulation
    transition-opacity transition-transform duration-500 ease-out
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
    ${isVisible ? 'animate-[bounce_2s_infinite]' : ''}
    bg-primary text-white py-3 rounded-full shadow-lg text-center font-semibold
    md:hidden
  `;

    return (
        <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={classes}
            aria-label={t('stickycta_aria')}
        >
            {t('stickycta_button')}
        </button>
    );
}
