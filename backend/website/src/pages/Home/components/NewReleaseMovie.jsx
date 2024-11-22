import AntMan from "../../../assets/img/Slide/latest/antman.jpg";
import BatMan from "../../../assets/img/Slide/latest/batman.png";
import LordKing from "../../../assets/img/Slide/latest/lordKing.png";
import Mufasa from "../../../assets/img/Slide/latest/mufasa.png";
import Shazam from "../../../assets/img/Slide/latest/shazam.jpg";
import TransformerOne from "../../../assets/img/Slide/latest/tranformerOne.png";
import XMen from "../../../assets/img/Slide/latest/x-men.jpg";
import Federer from "../../../assets/img/Slide/latest/federer.png";
import IKnowILoveYou from "../../../assets/img/Slide/latest/IknowIloveYou.jpg";
import EveryoneLoveMe from "../../../assets/img/Slide/latest/EveryoneLoveMe.jpeg";
import SherlockSeason1 from "../../../assets/img/Slide/popular/sherlock_1.jpg";
import SherlockSeason2 from "../../../assets/img/Slide/popular/sherlock_2.jpg";
import SherlockSeason3 from "../../../assets/img/Slide/popular/sherlock_3.jpg";
import SherlockSeason4 from "../../../assets/img/Slide/popular/sherlock_4.jpg";
import PartnerForJustice_1 from "../../../assets/img/Slide/popular/PartnerForJustice_1.jpg";
import PartnerForJustice_2 from "../../../assets/img/Slide/popular/PartnerForJustice_2.jpg";
import BlindSide from "../../../assets/img/Slide/popular/blindSide.jpg";
import AmazingSpiderMan_1 from "../../../assets/img/Slide/popular/amazing_1.jpg";
import AmazingSpiderMan_2 from "../../../assets/img/Slide/popular/amazing_2.jpg";
import Avatar from "../../../assets/img/Slide/upcoming/avatar.png";
import BatManII from "../../../assets/img/Slide/upcoming/BatManII.png";
import JurassicWorldRebirth from "../../../assets/img/Slide/upcoming/jurassicWorldRebirth.png";
import SnowWhite from "../../../assets/img/Slide/upcoming/SnowWhite.png";
import SuperMan from "../../../assets/img/Slide/upcoming/SuperMan.png";
import Venom from "../../../assets/img/Slide/upcoming/Venom.png";
import Smurfs from "../../../assets/img/Slide/upcoming/Smurfs.png";
import HitPig from "../../../assets/img/Slide/upcoming/hitpig.png";
import { Star } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
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
    <div className="w-full lg:w-52 h-auto sm:h-[450px] bg-gray-900 rounded-lg overflow-hidden shadow-lg border-4 sm:border-8 border-transparent flex flex-col">
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
  className={`h-10 px-4 sm:px-6 font-semibold text-xs text-white rounded-full border-gray-700 border-4 shadow-lg
              ${isActive ? 'bg-Bright-Pink-500 border-Bright-Pink-500' : 'bg-gray-800'} 
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
    const sliderRef = useRef(null);  
    const [category, setCategory] = useState('latest');  
    const [activeCategory, setActiveCategory] = useState('latest');
  
    // Settings cho Slider
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
          
      ]
    };
    
  
    // Dữ liệu phim cho các danh mục khác nhau
    const movieData = {
      latest: [
        { src: AntMan, title: "Ant-Man and the Wasp: Quantumania", genre: "Adventure", rating: 3.0, subtitle: "Vietsub" },
        { src: BatMan, title: "Batman: Caped Crusader", genre: "Animation", rating: 3.7, subtitle: "Vietsub" },
        { src: LordKing, title: "The Lord of the Rings: The War of the Rohirrim", genre: "Animation", rating: 0, subtitle: "Vietsub" },
        { src: IKnowILoveYou, title: "I Know I Love You", genre: "Romance", rating: 4.5, subtitle: "Vietsub" },
        { src: Shazam, title: "Shazam! Fury of the Gods", genre: "Superhero", rating: 2.9, subtitle: "Vietsub" },
        { src: TransformerOne, title: " Transformers One", genre: "Sci-Fi", rating: 3.9, subtitle: "Vietsub" },
        { src: EveryoneLoveMe, title: "Everyone Love Me", genre: "Romance", rating: 4.5, subtitle: "Vietsub" },
        { src: Federer, title: "Federer: Twelve Final Days", genre: "Documentary", rating: 4.6, subtitle: "Vietsub" },
        { src: XMen, title: "X-Men '97", genre: "Animation", rating: 4.4, subtitle: "Vietsub" },
      ],
      popular: [
        { src: SherlockSeason1, title: "Sherlock Holmes Season 1", genre: "Detective", rating: 4.3, subtitle: "Vietsub" },
        { src: SherlockSeason2, title: "Sherlock Holmes Season 2", genre: "Detective", rating: 4.5, subtitle: "Vietsub" },
        { src: SherlockSeason3, title: "Sherlock Holmes Season 3", genre: "Detective", rating: 4.4, subtitle: "Vietsub" },
        { src: SherlockSeason4, title: "Sherlock Holmes Season 4", genre: "Detective", rating: 4.1, subtitle: "Vietsub" },
        { src: AmazingSpiderMan_1, title: "The Amazing Spider-Man 1", genre: "Superhero", rating: 3.4, subtitle: "Vietsub" },
        { src: AmazingSpiderMan_2, title: " The Amazing Spider-Man 2", genre: "Superhero", rating: 3.3, subtitle: "Vietsub" },
        { src: BlindSide, title: "The Blind Side", genre: "Sport/Drama", rating: 3.8, subtitle: "Vietsub" },
        { src: PartnerForJustice_1, title: "Partner For Justince 1", genre: "Thriller", rating: 4.1, subtitle: "Vietsub" },
        { src: PartnerForJustice_2, title: "Partner For Justince 1", genre: "Thriller", rating: 4.2, subtitle: "Vietsub" },
      ],
      upcoming: [
        { src: Avatar, title: "Venom: The Last Dance", genre: "Fantasy", rating: 0, subtitle: "Vietsub" },
        { src: BatManII, title: "The Batman Part II", genre: "Superhero", rating: 0, subtitle: "Vietsub" },
        { src: JurassicWorldRebirth, title: "Jurassic World Rebirth", genre: "Adventure", rating: 4.7, subtitle: "Vietsub" },
        { src: HitPig, title: "Hitpig!", genre: "Advanture", rating: 0, subtitle: "Vietsub" },
        { src: SnowWhite, title: "Snow White", genre: "Superhero", rating: 0, subtitle: "Vietsub" },
        { src: SuperMan, title: "Superman", genre: "Superhero", rating: 0, subtitle: "Vietsub" },
        { src: Venom, title: "Venom: The Last Dance", genre: "Superhero", rating: 0, subtitle: "Vietsub" },
        { src: Mufasa, title: "Mufasa: The Lion King", genre: "Animation", rating: 0, subtitle: "Vietsub" },
        { src: Smurfs, title: "The Smurfs", genre: "Animation", rating: 0, subtitle: "Vietsub" },
      ]
    };
  
   
    const handleCategoryChange = (newCategory) => {
      setCategory(newCategory);
      setActiveCategory(newCategory); 
    };
  


    return (
      <div className="min-h-screen w-full bg-Dark-Blue-900 flex justify-center items-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-7xl flex flex-col">
          <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
            <div className="w-full sm:w-auto text-center sm:text-left">
              <LineUnder>New Release Movies</LineUnder>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2 w-full sm:w-auto">
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 w-full sm:w-auto mb-4 sm:mb-0">
                <Button 
                  onClick={() => handleCategoryChange('latest')} 
                  isActive={activeCategory === 'latest'}
                >
                  Latest
                </Button>
                <Button   
                  onClick={() => handleCategoryChange('popular')} 
                  isActive={activeCategory === 'popular'}
                >
                  Popular
                </Button>
                <Button 
                  onClick={() => handleCategoryChange('upcoming')} 
                  isActive={activeCategory === 'upcoming'}
                >
                  Upcoming
                </Button>
              </div>
              <div className="flex items-center mt-4 sm:mt-0 border-2 rounded-full border-gray-600 relative">
                <button
                  className="h-8 px-4 text-white bg-gray-800 rounded-l-full hover:text-Bright-Pink-500"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <FontAwesomeIcon icon={faCaretLeft} />
                </button>
                <hr className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2 h-5 border-[1px] border-gray-600 z-10" />
                <button
                  className="h-8 px-4 text-white bg-gray-800 rounded-r-full hover:text-Bright-Pink-500"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <FontAwesomeIcon icon={faCaretRight} />
                </button>
              </div>
            </div>
          </div>
  
          <div className="rounded-lg p-2 sm:p-4 md:p-6">
            <Slider ref={sliderRef} {...settings}>
              {movieData[category].map((movie, index) => (
                <div key={index} className="px-4">
                  <MovieCard {...movie} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewReleaseMovie;