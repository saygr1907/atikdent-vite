// src/components/Hero.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import BackgroundMedia from '../assets/hero-bg.jpg';
import { sendAppointmentEvent } from '../utils/analytics';

export default function Hero() {
    const { t } = useTranslation();

    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            role="region"
            aria-labelledby="hero-title"
            className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden"
        >
            {/* Arka Plan */}
            <div className="absolute inset-0 z-0">
                <img
                    loading="lazy"
                    src={BackgroundMedia}
                    alt={t('hero_title')}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary opacity-50" />
            </div>

            {/* İçerik */}
            <div className="relative z-10 px-4">
                <h1
                    id="hero-title"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg"
                >
                    {t('hero_title')}
                </h1>
                <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow">
                    {t('hero_text')}
                </p>
                <a
                    href="#contact"
                    onClick={(e) => {
                        scrollToContact(e);
                        sendAppointmentEvent();
                    }}
                    aria-label={t('cta_appointment')}
                    className="mt-6 inline-block bg-white text-primary font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                    {t('cta_appointment')}
                </a>
            </div>
        </section>
    );
}
