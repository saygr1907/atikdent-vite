// src/components/BackToTop.jsx
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function BackToTop() {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.pageYOffset > 300);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!visible) return null;
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-20 right-4 bg-primary text-white p-3 rounded-full shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={t('backtotop_aria')}
        >
            <FaArrowUp />
        </button>
    );
}
