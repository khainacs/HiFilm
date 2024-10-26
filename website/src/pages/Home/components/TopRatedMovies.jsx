import AntMan from "../../../assets/img/Slide/latest/antman.jpg";
import BatMan from "../../../assets/img/Slide/latest/batman.png";
import LordKing from "../../../assets/img/Slide/latest/lordKing.png";
import Shazam from "../../../assets/img/Slide/latest/shazam.jpg";
import TransformerOne from "../../../assets/img/Slide/latest/tranformerOne.png";
import XMen from "../../../assets/img/Slide/latest/x-men.jpg";
import Federer from "../../../assets/img/Slide/latest/federer.png";
import IKnowILoveYou from "../../../assets/img/Slide/latest/IknowIloveYou.jpg";
import EveryoneLoveMe from "../../../assets/img/Slide/latest/EveryoneLoveMe.jpeg";
import SherlockSeason1 from "../../../assets/img/Slide/popular/sherlock_1.jpg";
import { Star } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import PropTypes from 'prop-types';
import LineUnder from "../components/LineUnder";

const MovieCard = ({ src, title, genre, rating, subtitle }) => {
  const renderStars = (rating) => {
    if (rating === 0) {
      return <span className="text-white text-base font-mono">Upcoming Soon</span>; 
    }

    const stars = [];
    const fullStars = Math.floor(rating);
    const decimalPart = rating - fullStars;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />);
      } else if (i === fullStars + 1 && decimalPart > 0.25) {
        stars.push(
          <div key={i} className="relative w-4 h-4">
            <Star className="w-4 h-4 text-gray-600 fill-current absolute" />
            <div className="overflow-hidden absolute" style={{width: `${decimalPart * 100}%`}}>
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-600 fill-current" />);
      }
    }
    return stars;
  };

  return (
    <div className="w-full sm:w-52 h-auto sm:h-[450px] bg-gray-900 rounded-lg overflow-hidden shadow-lg border-4 sm:border-8 border-transparent flex flex-col">
      <div className="relative flex-grow">
        <img src={src} alt="Movie Poster" className="w-full h-full object-cover" />
      </div>
      <div className="p-2 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-4">
            {renderStars(rating)}
            {rating !== 0 && <span className="text-yellow-400 text-xs sm:text-sm mr-1 ml-3">{rating.toFixed(1)}</span>}
          </div>
          <h2 className="text-white mb-2 text-xs sm:text-sm font-bold font-sans line-clamp-2 mt-2 h-8 sm:h-10 border-b-2 border-Dark-Blue-400">{title}</h2>
        </div>
        <div className="flex justify-between items-center space-x-1 mt-2">
          <p className="text-Dark-Blue-600 text-xs font-extrabold border-2 border-transparent bg-gray-700 px-1 sm:px-2">{genre}</p>
          <span className="text-Dark-Blue-600 text-xs font-extrabold border-2 border-transparent bg-gray-700 px-1 sm:px-2">{subtitle}</span>
        </div>
      </div>
    </div>
  );
};
MovieCard.propTypes = {
  src: PropTypes.string.isRequired,     
  title: PropTypes.string.isRequired, 
  genre: PropTypes.string.isRequired,  
  rating: PropTypes.number.isRequired,  
  subtitle: PropTypes.string.isRequired,     
};

const Button = ({ children, onClick, isActive }) => (
    <button 
        type="button" 
        onClick={onClick} 
        className={`h-8 sm:h-10 px-3 sm:px-6 font-semibold text-xs text-white rounded-full border-gray-700 border-2 sm:border-4
                    ${isActive ? 'bg-Bright-Pink-500' : 'bg-gray-800'} 
                    hover:bg-Bright-Pink-500 transition-colors`}
    >
        {children}
    </button>
);

Button.propTypes = {
    children : PropTypes.string,
    onClick : PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,  
};


const NewReleaseMovie = () => {
    const [category] = useState('movies');  

    const movieData = {
      movies: [
        { src: AntMan, title: "Ant-Man and the Wasp: Quantumania", genre: "Adventure", rating: 3.0, subtitle: "Vietsub" },
        { src: BatMan, title: "Batman: Caped Crusader", genre: "Animation", rating: 3.7, subtitle: "Vietsub" },
        { src: LordKing, title: "The Lord of the Rings: The War of the Rohirrim", genre: "Animation", rating: 0, subtitle: "Vietsub" },
        { src: IKnowILoveYou, title: "I Know I Love You", genre: "Romance", rating: 4.5, subtitle: "Vietsub" },
        { src: Shazam, title: "Shazam! Fury of the Gods", genre: "Superhero", rating: 2.9, subtitle: "Vietsub" },
        { src: TransformerOne, title: " Transformers One", genre: "Sci-Fi", rating: 3.9, subtitle: "Vietsub" },
        { src: EveryoneLoveMe, title: "Everyone Love Me", genre: "Romance", rating: 4.5, subtitle: "Vietsub" },
        { src: Federer, title: "Federer: Twelve Final Days", genre: "Documentary", rating: 4.6, subtitle: "Vietsub" },
        { src: XMen, title: "X-Men '97", genre: "Animation", rating: 4.4, subtitle: "Vietsub" },
        { src: SherlockSeason1, title: "Sherlock Holmes Season 1", genre: "Detective", rating: 4.3, subtitle: "Vietsub" },
      ]  
    };
  
   
  
    return (
      <div className="min-h-screen w-full bg-Dark-Blue-900 flex justify-center items-center p-4 sm:p-8">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="w-full flex justify-center mb-6 sm:mb-10">
            <LineUnder>Top Online Show Match</LineUnder>
            
          </div>
  
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {movieData[category].slice(0, 10).map((movie, index) => (
              <div key={index} className="flex">
                <MovieCard {...movie} />
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center items-center mt-6 sm:mt-8">
            <button className="relative flex h-10 sm:h-[55px] w-40 sm:w-52 items-center justify-center overflow-hidden bg-Bright-Pink-500 text-white
              shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-Vibrant-Purple-500
              before:duration-500 before:ease-out hover:shadow-Vibrant-Purple-500 hover:before:h-40 sm:hover:before:h-56 hover:before:w-40 sm:hover:before:w-56 rounded-3xl text-xs sm:text-base font-bold">
              <span className="relative z-10">BROWSE ALL MOVIES</span>
            </button>
          </div>
        </div>
      </div>
  );
};
  

  export default NewReleaseMovie;
