// src/components/Footer.jsx
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    const links = [
        { name: t('footer_home'), to: 'top' },
        { name: t('footer_about'), to: '#about' },
        { name: t('footer_doctors'), to: '#doctors' },
        { name: t('footer_services'), to: '#services' },
        { name: t('footer_gallery'), to: '#gallery' },
        { name: t('footer_reviews'), to: '#reviews' },
        { name: t('footer_contact'), to: '#contact' },
    ];

    const scrollTo = (e, selector) => {
        e.preventDefault();
        if (selector === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const el = document.querySelector(selector);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer role="contentinfo" className="bg-gray-100 pt-10 pb-20">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo & Copy */}
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-blue-800">Atikdent</h3>
                    <p className="mt-4 text-gray-600 text-sm">
                        © {new Date().getFullYear()} Atikdent Diş Kliniği. {t('footer_rights')}
                    </p>
                </div>

                {/* Quick Links */}
                <div aria-label={t('footer_quick_links_title')}>
                    <h4 className="text-xl font-semibold text-blue-800 mb-4">{t('footer_quick_links')}</h4>
                    <ul className="space-y-2">
                        {links.map(link => (
                            <li key={link.to}>
                                <a
                                    href={link.to === 'top' ? '#' : link.to}
                                    onClick={e => scrollTo(e, link.to)}
                                    className="text-gray-700 hover:text-blue-800 transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Instagram */}
                <div className="text-center md:text-right">
                    <h4 className="text-xl font-semibold text-blue-800 mb-4">{t('footer_follow_us')}</h4>
                    <a
                        href="https://www.instagram.com/atikdent.adsp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t('footer_instagram')}
                        className="text-gray-700 hover:text-blue-800 transition-colors text-2xl"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
}
