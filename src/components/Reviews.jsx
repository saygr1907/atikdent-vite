// src/components/Reviews.jsx
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Reviews() {
    const { t } = useTranslation();

    useEffect(() => {
        if (
            !document.querySelector(
                'script[src="https://static.elfsight.com/platform/platform.js"]'
            )
        ) {
            const script = document.createElement('script');
            script.src = 'https://static.elfsight.com/platform/platform.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <motion.section
            id="reviews"
            role="region"
            aria-labelledby="reviews-title"
            className="py-16 bg-gray-50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2
                    id="reviews-title"
                    className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6"
                >
                    {t('reviews_title')}
                </h2>
                <div
                    className="elfsight-app-29dc0ea1-4487-4a09-a3ae-1389150f7ea4"
                    data-elfsight-app-lazy
                    aria-label={t('reviews_widget_label')}
                    role="group"
                />
            </div>
        </motion.section>
    );
}
