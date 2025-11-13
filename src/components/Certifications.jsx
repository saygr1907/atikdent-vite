import React from 'react';
import { motion } from 'framer-motion';

// Sertifika rozetlerini assets içinde sertificates klasörüne koyun
import IsoLogo from '../assets/certificates/iso9001.png';
import HygieneLogo from '../assets/certificates/hygiene.png';
import OdasiLogo from '../assets/certificates/odasi.png';

const certs = [
    { src: IsoLogo, alt: 'ISO 9001 Sertifikası' },
    { src: HygieneLogo, alt: 'Hijyen Sertifikası' },
    { src: OdasiLogo, alt: 'Diş Hekimleri Odası Üyeliği' },
];

export default function Certifications() {
    return (
        <motion.section
            id="certifications"
            role="region"
            aria-labelledby="certifications-title"
            className="py-16 bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 id="certifications-title" className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">
                    Sertifikalarımız
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center justify-center">
                    {certs.map((c, i) => (
                        <div key={i} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                            <img
                                loading="lazy"
                                src={c.src}
                                alt={c.alt}
                                className="mx-auto h-16 object-contain"
                            />
                            <p className="mt-2 text-gray-700 text-sm">{c.alt}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
