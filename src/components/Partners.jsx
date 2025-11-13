import React from 'react';
import { motion } from 'framer-motion';

// Partner logo’larını assets/partners klasörüne koyun
import Sirona from '../assets/partners/sirona.png';
import ThreeM from '../assets/partners/3m.png';
import Straumann from '../assets/partners/straumann.png';

const partners = [
    { src: Sirona, alt: 'Sirona' },
    { src: ThreeM, alt: '3M' },
    { src: Straumann, alt: 'Straumann' },
];

export default function Partners() {
    return (
        <motion.section
            id="partners"
            role="region"
            aria-labelledby="partners-title"
            className="py-16 bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 id="partners-title" className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">
                    İş Ortaklarımız
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center justify-items-center">
                    {partners.map((p, i) => (
                        <div key={i} className="p-4 bg-gray-50 rounded-lg">
                            <img
                                loading="lazy"
                                src={p.src}
                                alt={p.alt}
                                className="h-12 object-contain mx-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
