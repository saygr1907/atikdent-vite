import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

// Hasta foto ve referans metinlerini assets altında testimonials klasörüne koyun
import User1 from '../assets/testimonials/user1.jpg';
import User2 from '../assets/testimonials/user2.jpg';
import User3 from '../assets/testimonials/user3.jpg';

const reviews = [
    {
        img: User1,
        name: 'Ayşe Y.',
        text: 'Atikdent’te kanal tedavisi yaptırdım; gerçekten hiçbir ağrı hissetmedim, ekip çok ilgiliydi.',
    },
    {
        img: User2,
        name: 'Mehmet K.',
        text: 'Ortodonti tedavim mükemmel sonuçlandı, şimdi gülüşümle kendime güvenim arttı.',
    },
    {
        img: User3,
        name: 'Selin A.',
        text: 'Hijyen seansları ve kontrolleri düzenli yapıyorlar; dişlerim hiç bu kadar sağlıklı olmamıştı.',
    },
];

export default function Testimonials() {
    return (
        <motion.section
            id="testimonials"
            role="region"
            aria-labelledby="testimonials-title"
            className="py-16 bg-gray-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 id="testimonials-title" className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">
                    Hasta Yorumları (Seçkin)
                </h2>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={24}
                    slidesPerView={1}
                    className="px-4"
                >
                    {reviews.map((r, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
                                <img
                                    loading="lazy"
                                    src={r.img}
                                    alt={r.name}
                                    className="w-24 h-24 rounded-full object-cover mb-4"
                                />
                                <p className="text-gray-700 italic mb-2">“{r.text}”</p>
                                <strong className="text-blue-800">{r.name}</strong>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.section>
    );
}
