import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#04b1fe",    // Güncellendi
                secondary: "#9ee7f8",  // Güncellendi
                danger: "#dc2626",
            },
        },
    },
    plugins: [
        aspectRatio,
    ],
}
