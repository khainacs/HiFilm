import Logo from "../../../assets/img/Logo/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {  faBars } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
    const [isFocused, setIsFocused] = useState(false);
    const [language, setLanguage] = useState('EN');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Toggle language function
    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'EN' ? 'VN' : 'EN'));
    };

    return (
        <nav id="header" className="fixed top-0 z-30 w-full bg-transparent">
    <div className="h-[60px] bg-[#252631] shadow-lg flex items-center justify-between px-4 md:px-8">

        {/* Logo */}
        <div className="flex justify-center items-center">
            <img src={Logo} alt="Logo" className="h-12 rounded-full overflow-hidden" />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
                <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
            </button>
        </div>

        {/* Mid (Nav Links) - Hidden on small screens */}
        <div className="hidden md:flex space-x-12 text-white items-center justify-center mx-auto">
            <a href="/" className="hover:text-Bright-Pink-500">Home</a>
            <a href="/reviews" className="hover:text-Bright-Pink-500">Movies</a>
            <a href="/about" className="hover:text-Bright-Pink-500">About</a>
            <a href="/menu" className="hover:text-Bright-Pink-500">Menu</a>
            <a href="/contact" className="hover:text-Bright-Pink-500">Contact</a>
            <a href="/support" className="hover:text-Bright-Pink-500">Policy</a>
        </div>

        {/* Search, Language Selector, and Sign In Button */}
        <div className="hidden md:flex items-center space-x-4">
            <div className="max-w-4xl mx-auto pb-2 pt-2">   
                <div className={`relative transition-all duration-300 ${isFocused ? 'shadow-lg' : 'shadow-md'}`}>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FontAwesomeIcon 
                            icon={faMagnifyingGlass} 
                            className={`w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-Dark-Blue-300' : 'text-gray-400'}`}
                        />
                    </div>
                    <input 
                        type="search" 
                        id="default-search" 
                        className="block w-full p-2  pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg 
                                bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                transition-all duration-300 ease-in-out
                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-Dark-Blue-400" 
                        placeholder="Search..." 
                        required 
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </div>
            </div>
            <button 
                onClick={toggleLanguage}
                className="text-gray-300 mr-4 hover:text-white focus:outline-none font-medium text-sm px-2 py-1 text-center inline-flex items-center" 
                type="button">
                <FontAwesomeIcon icon={faGlobe} className="w-4 h-4 mr-1" />
                {language}
                <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3 ml-1" />
            </button>
            <button className="border-2 border-Bright-Pink-300 border-solid hover:bg-Bright-Pink-300 text-white font-bold text-xs py-1 px-3 rounded-xl">
                {language === 'EN' ? 'SIGN IN' : 'ĐĂNG NHẬP'}
            </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-[#252631] transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} z-20`}>
            <div className="flex flex-col items-center justify-center h-full space-y-6">
                <a href="/" className="text-white text-lg hover:text-Bright-Pink-500" onClick={toggleMenu}>Home</a>
                <a href="/reviews" className="text-white text-lg hover:text-Bright-Pink-500" onClick={toggleMenu}>Movies</a>
                <a href="/about" className="text-white text-lg hover:text-Bright-Pink-500" onClick={toggleMenu}>About</a>
                <a href="/menu" className="text-white text-lg hover:text-Bright-Pink-500" onClick={toggleMenu}>Menu</a>
                <a href="/contact" className="text-white text-lg hover:text-Bright-Pink-500" onClick={toggleMenu}>Contact</a>
                <a href="/support" className="text-white text-lg hover:text-Bright-Pink-500" onClick={toggleMenu}>Policy</a>
                <button className="border-2 border-Bright-Pink-300 border-solid hover:bg-Bright-Pink-300 text-white font-bold text-xs py-2 px-4 rounded-xl" onClick={toggleMenu}>
                    {language === 'EN' ? 'SIGN IN' : 'ĐĂNG NHẬP'}
                </button>
            </div>
        </div>
    </div>
</nav>


    );
}