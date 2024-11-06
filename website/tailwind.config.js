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
                "Dark-Blue": {
                    50: "#F2F2F7",
                    100: "#E6E6EF",
                    200: "#BFBFDF",
                    300: "#9999CF",
                    400: "#4D4D9F",
                    500: "#1A1A40", // Màu gốc
                    600: "#171736",
                    700: "#12122D",
                    800: "#0E0E23",
                    900: "#0B0B1A",
                },
                "Dark-Purple": {
                    50: "#F2F0F7",
                    100: "#E6E1EF",
                    200: "#BFB3DF",
                    300: "#9985CF",
                    400: "#4D2A9F",
                    500: "#270082", // Màu gốc
                    600: "#230074",
                    700: "#1C0061",
                    800: "#16004D",
                    900: "#11003A",
                },
                "Vibrant-Purple": {
                    50: "#F7ECFB",
                    100: "#EFDAF7",
                    200: "#D8A7EE",
                    300: "#C174E5",
                    400: "#AB41DD",
                    500: "#7A0BC0", // Màu gốc
                    600: "#6E0AAE",
                    700: "#5C0891",
                    800: "#490774",
                    900: "#39055F",
                },
                "Bright-Pink": {
                    50: "#FFE8F0",
                    100: "#FFD1E1",
                    200: "#FFA3C3",
                    300: "#FF75A5",
                    400: "#FF4787",
                    500: "#FA58B6", // Màu gốc
                    600: "#E050A5",
                    700: "#C7478F",
                    800: "#AD3E7A",
                    900: "#942E65",
                },
            },
            screen: {
                "3xl": "1920px",
            },
        },
        plugins: [],
    },
};
