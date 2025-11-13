// src/components/About.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiSmile, FiActivity, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function About() {
    const { t } = useTranslation();

    const features = [
        {
            icon: <FiSmile size={36} className="text-blue-800" />,
            titleKey: 'feature_smile_title',
            descKey: 'feature_smile_desc',
        },
        {
            icon: <FiActivity size={36} className="text-blue-800" />,
            titleKey: 'feature_tech_title',
            descKey: 'feature_tech_desc',
        },
        {
            icon: <FiHeart size={36} className="text-blue-800" />,
            titleKey: 'feature_care_title',
            descKey: 'feature_care_desc',
        },
    ];

    return (
        <motion.section
            id="about"
            role="region"
            aria-labelledby="about-title"
            className="py-16 bg-gray-50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 id="about-title" className="text-2xl sm:text-3xl font-bold text-blue-800">
                    {t('about_title')}
                </h2>
                <p className="mt-4 text-gray-700 text-base sm:text-lg">
                    {t('about_text')}
                </p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item) => (
                        <article
                            key={item.titleKey}
                            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow"
                        >
                            <div className="mb-4" aria-hidden="true">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">
                                {t(item.titleKey)}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base">
                                {t(item.descKey)}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
