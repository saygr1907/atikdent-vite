// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha
} from 'react-google-recaptcha-v3';
import { useTranslation } from 'react-i18next';

function ContactForm() {
    const { t } = useTranslation();
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        if (form.website.value) return; // honeypot

        const token = await executeRecaptcha('contact_form');
        const data = new FormData(form);
        data.append('g-recaptcha-response', token);

        const res = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
            setSubmitted(true);
        } else {
            alert(t('contact_submit_error'));
        }
    };

    if (submitted) {
        return <p className="text-green-600">{t('contact_submit_success')}</p>;
    }

    return (
        <form
            action="https://formspree.io/f/mpwrqdjr"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4 mt-10"
            aria-label={t('contact_form_aria')}
        >
            <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" />

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    {t('contact_label_name')}
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    aria-required="true"
                    className="w-full border rounded p-2"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {t('contact_label_email')}
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    aria-required="true"
                    className="w-full border rounded p-2"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    {t('contact_label_message')}
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    aria-required="true"
                    className="w-full border rounded p-2"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                {t('contact_button_submit')}
            </button>
        </form>
    );
}

export default function Contact() {
    const { t } = useTranslation();

    return (
        <GoogleReCaptchaProvider reCaptchaKey="6LduMHMrAAAAAAGCfpR4KHb2TPBs_UW6jkL39a9r">
            <motion.section
                id="contact"
                role="region"
                aria-labelledby="contact-title"
                className="py-16 bg-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 id="contact-title" className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">
                            {t('contact_heading')}
                        </h2>
                        <p className="text-gray-600 mb-6">{t('contact_subheading')}</p>
                        <div className="space-y-4 text-gray-700">
                            {/* E-posta */}
                            <div className="flex items-start space-x-3">
                                {/* …icon */}
                                <div>
                                    <h3 className="font-semibold">{t('contact_email_label')}</h3>
                                    <a href="mailto:info@atikdent.com" className="text-blue-800 hover:underline">
                                        info@atikdent.com
                                    </a>
                                </div>
                            </div>
                            {/* Telefon */}
                            <div className="flex items-start space-x-3">
                                {/* …icon */}
                                <div>
                                    <h3 className="font-semibold">{t('contact_phone_label')}</h3>
                                    <a href="tel:+905366257264" className="text-blue-800 hover:underline">
                                        +90 (536) 625 72 64
                                    </a>
                                </div>
                            </div>
                            {/* Adres */}
                            <div className="flex items-start space-x-3">
                                {/* …icon */}
                                <div>
                                    <h3 className="font-semibold">{t('contact_address_label')}</h3>
                                    <address className="not-italic">
                                        {t('contact_address_lines')}
                                    </address>
                                </div>
                            </div>
                        </div>
                        {/* Harita */}
                        <div className="mt-8 rounded-lg overflow-hidden shadow">
                            <iframe
                                title="Atikdent Harita"
                                width="100%"
                                height="280"
                                className="border-0"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12599.024594457716!2d32.48866352418039!3d37.86599579307581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085db7cfc3335%3A0x9d7033a0a2e9ea96!2zQVTEsEtERU5UIEHEn8SxeiB2ZSBEacWfIFNhxJ9sxLHEn8SxIFBvbGlrbGluacSfaQ!5e0!3m2!1str!2str!4v1751314079955!5m2!1str!2str"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">
                            {t('contact_form_heading')}
                        </h2>
                        <ContactForm />
                    </div>
                </div>
            </motion.section>
        </GoogleReCaptchaProvider>
    );
}
