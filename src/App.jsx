import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteListener from './RouteListener';
import Loader from './components/Loader';
import Header from './components/Header';
import StickyCTA from './components/StickyCTA';
import BackToTop from './components/BackToTop';
import LanguageSwitcher from './components/LanguageSwitcher';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';

const Hero     = lazy(() => import('./components/Hero'));
const About    = lazy(() => import('./components/About'));
const Doctors  = lazy(() => import('./components/Doctors'));
const Services = lazy(() => import('./components/Services'));
const Gallery  = lazy(() => import('./components/Gallery'));
const Reviews  = lazy(() => import('./components/Reviews'));
const Contact  = lazy(() => import('./components/Contact'));
const Footer   = lazy(() => import('./components/Footer'));

export default function App() {
    return (
        <>
            <BrowserRouter>
                <RouteListener />
                <Header />

                <Suspense fallback={<Loader />}>
                    {/* Hero arka planı transparent kalsın */}
                    <Hero />

                    <main className="pt-8">
                        <About />
                        <Doctors />
                        <Services />
                        <Gallery />
                        {/*  <Certifications /> */}
                        {/*  <Testimonials /> */}
                        {/*  <Partners /> */}
                        <Reviews />
                        <Contact />
                    </main>

                    <Footer />
                    <BackToTop />
                    <StickyCTA />
                </Suspense>
            </BrowserRouter>
        </>
    );
}
