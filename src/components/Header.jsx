// src/components/Header.jsx
import { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import LogoImage from '../assets/logo.png';

const LANGUAGES = [
    { code: 'tr', label: 'TR', country: 'TR' },
    { code: 'en', label: 'EN', country: 'GB' },
    { code: 'ar', label: 'AR', country: 'SA' },
];

export default function Header() {
    const { t, i18n } = useTranslation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    // Ayrı ayrı ref’ler
    const mobileLangRef = useRef();
    const desktopLangRef = useRef();

    const toggleMenu = () => setIsMenuOpen(o => !o);
    const changeLanguage = code => {
        i18n.changeLanguage(code);
        setLangOpen(false);
    };

    // Click-outside kapanışı
    useEffect(() => {
        const onClick = e => {
            if (!langOpen) return;
            if (
                (mobileLangRef.current  && mobileLangRef.current.contains(e.target)) ||
                (desktopLangRef.current && desktopLangRef.current.contains(e.target))
            ) {
                return;
            }
            setLangOpen(false);
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [langOpen]);

    const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

    const links = [
        { key: 'nav_about',   to: '#about'   },
        { key: 'nav_doctors', to: '#doctors' },
        { key: 'nav_services',to: '#services'},
        { key: 'nav_gallery', to: '#gallery' },
        { key: 'nav_reviews', to: '#reviews' },
        { key: 'nav_contact', to: '#contact' },
    ];

    const HEADER_HEIGHT = 76; // px cinsinden

    const scrollTo = (e, sel) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const el = document.querySelector(sel);
        if (el) {
            const top = el.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-lg" role="banner">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between" role="navigation" aria-label="Main menu">

                {/* Mobile Language Dropdown */}
                <div className="md:hidden relative" ref={mobileLangRef}>
                    <button
                        onClick={() => setLangOpen(o => !o)}
                        className="flex items-center space-x-1 text-lg"
                        aria-label="Dili değiştir"
                    >
                        <ReactCountryFlag
                            countryCode={currentLang.country}
                            svg
                            style={{ width: '1.5em', height: '1.5em' }}
                            aria-label={currentLang.label}
                        />
                        <FiChevronDown />
                    </button>
                    {langOpen && (
                        <ul className="absolute left-0 mt-2 w-28 bg-white border rounded shadow-lg">
                            {LANGUAGES.map(l => (
                                <li key={l.code}>
                                    <button
                                        onClick={() => changeLanguage(l.code)}
                                        className="w-full text-left px-2 py-1 hover:bg-gray-100 flex items-center space-x-2"
                                    >
                                        <ReactCountryFlag
                                            countryCode={l.country}
                                            svg
                                            style={{ width: '1.25em', height: '1.25em' }}
                                            aria-label={l.label}
                                        />
                                        <span className="text-sm">{l.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Logo */}
                <a href="/" aria-label={t('nav_about')} className="flex items-center space-x-2">
                    <img loading="lazy" src={LogoImage} alt="Atikdent logosu" className="h-10 w-auto" />
                    <span className="text-2xl font-extrabold text-primary">Atikdent</span>
                </a>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center space-x-6">
                    {links.map(link => (
                        <li key={link.key}>
                            <a
                                href={link.to}
                                onClick={e => scrollTo(e, link.to)}
                                className="text-gray-700 hover:text-primary transition-colors font-medium"
                            >
                                {t(link.key)}
                            </a>
                        </li>
                    ))}

                    {/* Desktop Language Dropdown */}
                    <li className="relative" ref={desktopLangRef}>
                        <button
                            onClick={() => setLangOpen(o => !o)}
                            className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors"
                            aria-label="Dili değiştir"
                        >
                            <ReactCountryFlag
                                countryCode={currentLang.country}
                                svg
                                style={{ width: '1.5em', height: '1.5em' }}
                                aria-label={currentLang.label}
                            />
                            <span className="text-sm">{currentLang.label}</span>
                            <FiChevronDown />
                        </button>
                        {langOpen && (
                            <ul className="absolute top-full right-0 mt-2 w-28 bg-white border rounded shadow-lg">
                                {LANGUAGES.map(l => (
                                    <li key={l.code}>
                                        <button
                                            onClick={() => changeLanguage(l.code)}
                                            className="w-full text-left px-2 py-1 hover:bg-gray-100 flex items-center space-x-2"
                                        >
                                            <ReactCountryFlag
                                                countryCode={l.country}
                                                svg
                                                style={{ width: '1.25em', height: '1.25em' }}
                                                aria-label={l.label}
                                            />
                                            <span className="text-sm">{l.label}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    {/* Randevu Al */}
                    <li>
                        <a
                            href="#contact"
                            onClick={e => scrollTo(e, '#contact')}
                            className="ml-4 bg-primary text-white px-5 py-2 rounded-full hover:bg-blue-900 transition"
                        >
                            {t('cta_appointment')}
                        </a>
                    </li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
                    aria-expanded={isMenuOpen}
                    className="md:hidden p-2 text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-inner">
                    <ul className="flex flex-col space-y-2 px-6 pb-4">
                        {links.map(link => (
                            <li key={link.key}>
                                <a
                                    href={link.to}
                                    onClick={e => scrollTo(e, link.to)}
                                    className="block text-gray-700 hover:text-primary py-2 font-medium"
                                >
                                    {t(link.key)}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#contact"
                                onClick={e => scrollTo(e, '#contact')}
                                className="block text-center bg-primary text-white px-4 py-2 rounded-full hover:bg-blue-900 transition"
                            >
                                {t('cta_appointment')}
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
