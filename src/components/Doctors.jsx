// src/components/Doctors.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import DrAtike from '../assets/doctors/dr-atike.jpg';
import DrEmin from '../assets/doctors/dr-emin.jpg';
import DrSengul from '../assets/doctors/dr-sengul.jpg';

export default function Doctors() {
    const { t } = useTranslation();

    const doctors = [
        { img: DrAtike, name: 'Dt. Atike Atmaca'},
        { img: DrEmin,  name: 'Dt. M. Emin Atmaca'},
        { img: DrSengul,  name: 'Dt. Şengül Çaycı'},

    ];

    return (
        <motion.section
            id="doctors"
            role="region"
            aria-labelledby="doctors-title"
            className="py-16 bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 id="doctors-title" className="text-2xl sm:text-3xl font-bold text-blue-800">
                    {t('doctors_title')}
                </h2>
                <p className="mt-4 text-gray-600 text-base sm:text-lg">
                    {t('doctors_sub')}
                </p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {doctors.map(doc => (
                        <article
                            key={doc.name}
                            className="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition-shadow overflow-hidden"
                            aria-label={`${doc.name}, ${doc.title}`}
                        >
                            <div className="w-full aspect-square overflow-hidden">
                                <img
                                    loading="lazy"
                                    src={doc.img}
                                    alt={doc.name}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-blue-800">{doc.name}</h3>
                                <p className="text-blue-600 mb-2">{doc.title}</p>
                                <p className="text-gray-600 text-sm">{doc.bio}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
