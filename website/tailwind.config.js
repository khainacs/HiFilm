/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                pulse: "pulse 1.5s infinite",
            },
            keyframes: {
                pulse: {
                    "0%, 100%": { transform: "scale(1)", opacity: "1" },
                    "50%": { transform: "scale(1.1)", opacity: "0.8" },
                },
            },
            colors: {
                "Gray-Black": {
                    100: "#D8D6D4", // nhạt nhất
                    200: "#B0ADA9",
                    300: "#88857F",
                    400: "#605D55",
                    500: "#393646", // màu gốc
                    600: "#302D3A",
                    700: "#26242D",
                    800: "#1C1B21",
                    900: "#121216", // đậm nhất
                },
                "Muted-Purple": {
                    100: "#D8D5DB",
                    200: "#B1ABB7",
                    300: "#8B8193",
                    400: "#64566F",
                    500: "#4F4557", // màu gốc
                    600: "#423A49",
                    700: "#352F3B",
                    800: "#28242D",
                    900: "#1B191E",
                },
                "Soft-Purple": {
                    100: "#E1DADC",
                    200: "#C3B5B9",
                    300: "#A68F96",
                    400: "#886973",
                    500: "#6D5D6E", // màu gốc
                    600: "#5A4C59",
                    700: "#483B45",
                    800: "#362A30",
                    900: "#24191C",
                },
                "Light-Cream": {
                    100: "#FFFDF9",
                    200: "#FEFBF4",
                    300: "#FDF8EF",
                    400: "#FBF6EA",
                    500: "#F4EEE0", // màu gốc
                    600: "#E2DDCF",
                    700: "#D1CCBD",
                    800: "#BFBBAA",
                    900: "#AEA997",
                },
            }
            ,
            screens: { // Đổi 'screen' thành 'screens'
                "3xl": "1920px",
            },
        },
    },
    plugins: [],
};
