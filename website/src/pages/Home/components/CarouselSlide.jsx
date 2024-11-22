import SpiderMan from "../../../assets/img/Banner/SpiderMan.jpg";
import JurasicWorld from "../../../assets/img/Banner/jurasicWorld.jpg";
import MarvelEndGame from "../../../assets/img/Banner/marvelEndGame.jpg";
import TransformerDark from "../../../assets/img/Banner/transformerDark.jpg";
import Transformer from "../../../assets/img/Banner/transformer.jpg";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselSlide = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        { src: SpiderMan, alt: "", name: "The Amazing Spider-Man", description: `In "The Amazing Spider-Man," Peter Parker is a high school student grappling with 
            the mysterious disappearance of his parents and his newfound superpowers. As Spider-Man, he faces off against The Lizard, a formidable villain with a dangerous
             plan to transform humanity. This reboot of the Spider-Man saga brings a fresh take on the beloved hero, combining thrilling action, emotional depth,
              and a complex exploration of Peter's dual identity.` },
        { src: JurasicWorld, alt: "", name: "Jurassic World Dominion", description: `In "Jurassic World Dominion," humans and dinosaurs now coexist across the globe.
             As chaos ensues, Owen Grady and Claire Dearing must navigate a world where dinosaurs have reclaimed their place at the top of the food chain.
              This thrilling conclusion to the Jurassic World trilogy delivers high-stakes action, awe-inspiring creatures, and an epic adventure that challenges humanity's future.` },
        { src: MarvelEndGame, alt: "", name: "Avengers: Endgame", description: "In \"Avengers: Endgame,\" the surviving members of the Avengers team come together for"
            + "one final stand against Thanos. After the devastating events of \"Infinity War,\" they must undo the damage and restore balance to the universe."
            + "Packed with action, emotional moments, and an epic conclusion, this film marks the end of a major chapter in the Marvel Cinematic Universe." },
        { src: TransformerDark, alt: "", name: "Transformers: Dark Of the Moon", description: " Transformers: Age of Extinction is the next chapter in the legendary "
            + "Transformers series. The movie follows the epic battle between the Autobots and Decepticons, as a new alien threat emerges that could endanger Earth." },
        { src: Transformer, alt: "", name: "Transformers: Age Of Extinction", description: `In "Transformers: Dark of the Moon," the Autobots discover 
            a Cybertronian spacecraft hidden on the moon. Racing against time, they must reach it before the Decepticons to prevent an all-out war.
             Packed with thrilling action, stunning visual effects, and epic battles, this movie is another explosive chapter in the Transformers series.` }
    ];

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    const handleThumbnailClick = useCallback((index) => {
        setCurrentSlide(index);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3800); 
        return () => clearInterval(intervalId); 
    }, [nextSlide]);

    return (
        <div className="w-full h-screen bg-gray-900 text-white overflow-hidden">
            {/* Header */}
            <header className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center">
                <div className="text-xl md:text-2xl font-bold">Lundev</div>
                <nav className="space-x-2 md:space-x-4 text-sm md:text-base">
                    <a href="#" className="hover:text-gray-300">Home</a>
                    <a href="#" className="hover:text-gray-300">Blog</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                </nav>
            </header>

            {/* Main Carousel */}
            <div className="relative w-full h-full">
                <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className="flex-shrink-0 w-full h-full relative">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                            <div className="absolute top-1/4 left-4 md:left-16 max-w-xs md:max-w-lg">
                                <h2 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4">{image.name}</h2>
                                <p className="text-sm md:text-xl mb-4 md:mb-8 line-clamp-3 md:line-clamp-none">{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white/20 p-1 md:p-2 rounded-full"
                    onClick={prevSlide}
                >
                    <ChevronLeft className="text-white w-4 h-4 md:w-6 md:h-6" />
                </button>
                <button
                    className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white/20 p-1 md:p-2 rounded-full"
                    onClick={nextSlide}
                >
                    <ChevronRight className="text-white w-4 h-4 md:w-6 md:h-6" />
                </button>

                {/* Thumbnail Preview */}
                <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-4 max-h-40 overflow-y-auto px-4 min-h-28">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => handleThumbnailClick(index)}
                            className={`flex-shrink-0 w-16 h-10 md:w-32 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                                index === currentSlide ? 'ring-2 ring-white scale-110' : 'opacity-70 hover:opacity-100'
                            }`}
                        >
                            <img
                                src={image.src}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarouselSlide;