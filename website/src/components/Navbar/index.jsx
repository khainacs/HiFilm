import Logo from "../../assets/img/Logo/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [isFocused, setIsFocused] = useState(false);
    const [language, setLanguage] = useState('EN');

    const toggleLanguage = () => {
        setLanguage(prevLang => prevLang === 'EN' ? 'VI' : 'EN');
    };
    return (
        <nav id="header" className="fixed top-0 z-30 w-full bg-transparent ">
        <div className="h-[60px]  bg-[#252631] shadow-lg flex items-center justify-between">

            {/* Mid (Nav Links) */}
            <div className="hidden md:flex space-x-12 text-white items-center justify-center mx-auto">
                    {/*  (Logo) */}
                <div className="flex justify-center items-center">
                <img src={Logo} alt="Logo" className="h-12 rounded-full overflow-hidden" />
                </div>

                <a href="/" className=" hover:text-Bright-Pink-500">
                    Home
                </a>
                <a href="/reviews" className=" hover:text-Bright-Pink-500">
                    Movies
                </a>
                <a href="/about" className=" hover:text-Bright-Pink-500">
                    About
                </a>                   
                <a href="/menu" className=" hover:text-Bright-Pink-500">
                    Menu
                </a>
                <a href="/contact" className=" hover:text-Bright-Pink-500">
                    Contact
                </a>
                <a href="/support" className=" hover:text-Bright-Pink-500">
                    Policy
                </a>
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
                <div className="relative">
                    {/* Language selector */}
                    <button 
                        onClick={toggleLanguage}
                        className="text-gray-300 mr-4 hover:text-white focus:outline-none font-medium text-sm px-2 py-1 text-center inline-flex items-center" 
                        type="button">
                        <FontAwesomeIcon icon={faGlobe} className="w-4 h-4 mr-1" />
                        {language}
                        <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3 ml-1" />
                    </button>
                    
                    {/* Sign In button */}
                    <button className="border-2 border-Bright-Pink-300 border-solid hover:bg-Bright-Pink-300 text-white font-bold text-xs py-1 px-3 rounded-xl">
                        {language === 'EN' ? 'SIGN IN' : 'ĐĂNG NHẬP'}
                    </button>
                </div>
                
                
            
            </div>
        </div>
    </nav>
    );
}
