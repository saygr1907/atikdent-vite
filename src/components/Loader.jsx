import React from 'react';
import LogoImage from '../assets/logo.png';

export default function Loader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="relative w-96 h-96">
                {/* Logo */}
                <img
                    src={LogoImage}
                    alt="Atikdent Logo"
                    className="w-full h-full object-contain z-10"
                />
                {/* Spinner ring */}
                <div
                    className="absolute inset-0 border-8 border-t-primary border-gray-200 rounded-full animate-spin"
                    aria-hidden="true"
                />
            </div>
        </div>
    );
}
