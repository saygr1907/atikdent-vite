// src/components/Services.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiTool, FiShield, FiSmile } from 'react-icons/fi';

export default function Services() {
    const { t } = useTranslation();

    const services = [
        {
            icon: <FiTool size={36} className="text-blue-800" />,
            titleKey: 'service_implant_title',
            descKey:  'service_implant_desc',
        },
        {
            icon: <FiSmile size={36} className="text-blue-800" />,
            titleKey: 'service_whitening_title',
            descKey:  'service_whitening_desc',
        },
        {
            icon: <FiSmile size={36} className="text-blue-800" />,
            titleKey: 'service_zirconium_title',
            descKey:  'service_zirconium_desc',
        },
        {
            icon: <FiSmile size={36} className="text-blue-800" />,
            titleKey: 'service_veneer_title',
            descKey:  'service_veneer_desc',
        },
        {
            icon: <FiTool size={36} className="text-blue-800" />,
            titleKey: 'service_ortho_title',
            descKey:  'service_ortho_desc',
        },
        {
            icon: <FiSmile size={36} className="text-blue-800" />,
            titleKey: 'service_clearalign_title',
            descKey:  'service_clearalign_desc',
        },
        {
            icon: <FiShield size={36} className="text-blue-800" />,
            titleKey: 'service_pedo_title',
            descKey:  'service_pedo_desc',
        },
        {
            icon: <FiTool size={36} className="text-blue-800" />,
            titleKey: 'service_root_title',
            descKey:  'service_root_desc',
        },
        {
            icon: <FiShield size={36} className="text-blue-800" />,
            titleKey: 'service_scaling_title',
            descKey:  'service_scaling_desc',
        },
        {
            icon: <FiShield size={36} className="text-blue-800" />,
            titleKey: 'service_perio_title',
            descKey:  'service_perio_desc',
        },
        {
            icon: <FiSmile size={36} className="text-blue-800" />,
            titleKey: 'service_smiledesign_title',
            descKey:  'service_smiledesign_desc',
        },
        {
            icon: <FiTool size={36} className="text-blue-800" />,
            titleKey: 'service_prosthesis_title',
            descKey:  'service_prosthesis_desc',
        },
        {
            icon: <FiTool size={36} className="text-blue-800" />,
            titleKey: 'service_surgery_title',
            descKey:  'service_surgery_desc',
        },
    ];

    return (
        <motion.section
            id="services"
            role="region"
            aria-labelledby="services-title"
            className="py-16 bg-gray-50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 id="services-title" className="text-2xl sm:text-3xl font-bold text-blue-800">
                    {t('services_title')}
                </h2>
                <p className="mt-4 text-gray-600 text-base sm:text-lg">
                    {t('services_sub')}
                </p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((svc) => (
                        <article
                            key={svc.titleKey}
                            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow"
                            aria-label={t(svc.titleKey)}
                        >
                            <div className="mb-4" aria-hidden="true">{svc.icon}</div>
                            <h3 className="text-xl font-semibold text-blue-800 mb-2">
                                {t(svc.titleKey)}
                            </h3>
                            <p className="text-gray-600 text-sm sm:text-base">
                                {t(svc.descKey)}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
