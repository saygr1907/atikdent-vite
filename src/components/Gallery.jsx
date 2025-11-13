// src/components/Gallery.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Img1 from '../assets/gallery/1.jpg';
import Img2 from '../assets/gallery/2.jpg';
import Img3 from '../assets/gallery/3.jpg';

export default function Gallery() {
    const { t } = useTranslation();
    const images = [Img1, Img2, Img3];
    const [loaded, setLoaded] = useState(images.map(() => false));

    const handleLoad = (idx) => {
        setLoaded((prev) => {
            const copy = [...prev];
            copy[idx] = true;
            return copy;
        });
    };

    return (
        <motion.section
            id="gallery"
            role="region"
            aria-labelledby="gallery-title"
            className="py-16 bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 id="gallery-title" className="text-2xl sm:text-3xl font-bold text-blue-800">
                    {t('gallery_title')}
                </h2>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((src, idx) => (
                        <figure key={idx} className="relative overflow-hidden rounded-lg">
                            {!loaded[idx] && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
                            <img
                                loading="lazy"
                                src={src}
                                alt={t('gallery_item_alt', { n: idx + 1 })}
                                className={`w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover object-center transition-transform hover:scale-105 ${
                                    loaded[idx] ? 'opacity-100' : 'opacity-0'
                                }`}
                                onLoad={() => handleLoad(idx)}
                            />
                        </figure>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
