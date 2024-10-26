import Logo from "../../assets/img/Logo/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faFacebook, faTwitter, faPinterestP, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Momo from "../../assets/img/momo.jpg";
import ZaloPay from "../../assets/img/zaloPay.png"
export default function Footer() {
    const [isFocused, setIsFocused] = useState(false);
    return (
 <footer className="w-full px-4 mx-auto  max-w-container sm:px-6 lg:px-20 bg-[#252631]">
        <div className="grid grid-rows-3 gap-2 mx-10">

            {/* Top Row (Logo, Nav Links and Search) */}
            <div className="flex flex-col sm:flex-row items-center justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 p-4 text-white text-xs">
    {/* Logo */}
    <div className="flex justify-center sm:justify-start items-center">
        <img src={Logo} alt="Logo" className="h-16 w-16 rounded-full overflow-hidden" />
    </div>

    {/* Container for Nav Links and Search */}
    <div className="flex flex-col sm:flex-row items-center sm:justify-end space-x-0 sm:space-x-8 space-y-2 sm:space-y-0 w-full sm:w-auto">
        {/* Nav Links */}
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-8 space-y-2 sm:space-y-0">
            <a href="/" className="hover:text-Bright-Pink-500">Home</a>
            <a href="/reviews" className="hover:text-Bright-Pink-500">Movies</a>
            <a href="/about" className="hover:text-Bright-Pink-500">About</a>
            <a href="/show" className="hover:text-Bright-Pink-500">TV Show</a>
            <a href="/pricing" className="hover:text-Bright-Pink-500">Pricing</a>
        </div>

        {/* Search */}
        <div className="max-w-4xl mx-auto pb-2 pt-2 w-full sm:w-auto">
            <div className={`relative transition-all duration-300 ${isFocused ? 'shadow-lg' : 'shadow-md'}`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon 
                        icon={faMagnifyingGlass} 
                        className={`w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-Dark-Blue-300' : 'text-gray-400'}`}
                    />
                </div>
                <input 
                    type="search" 
                    id="searchFooter" 
                    className="block w-full p-2 pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white 
                            focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out
                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                            dark:focus:ring-blue-500 dark:focus:border-Dark-Blue-400" 
                    placeholder="Search..." 
                    required 
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                </div>
            </div>
        </div>
    </div>

            {/* Middle Row (Secondary Nav Links and Social Icons) */}
            <div className="flex flex-col sm:flex-row items-center justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 p-4 text-xs text-white border-t-2 border-spacing-10">
                {/* Secondary Nav Links */}
                <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
                    <a href="/" className="hover:text-Bright-Pink-500">FAQ</a>
                    <a href="/help" className="hover:text-Bright-Pink-500">Help Center</a>
                    <a href="/terms" className="hover:text-Bright-Pink-500">Terms of Use</a>
                    <a href="/pages" className="hover:text-Bright-Pink-500">Pages</a>
                    <a href="/pricing" className="hover:text-Bright-Pink-500">Pricing</a>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4">
                    <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 transition-colors duration-300 text-gray-400 hover:text-Dark-Blue-300" />
                    <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 transition-colors duration-300 text-gray-400 hover:text-Dark-Blue-300" />
                    <FontAwesomeIcon icon={faPinterestP} className="w-5 h-5 transition-colors duration-300 text-gray-400 hover:text-Dark-Blue-300" />
                    <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5 transition-colors duration-300 text-gray-400 hover:text-Dark-Blue-300" />
                </div>
            </div>

            {/* Bottom Row (Copyright and Payment Logos) */}
            <div className="flex flex-col sm:flex-row items-center justify-between space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 p-2 text-xs text-white">
                {/* Copyright */}
                <div className="flex justify-center items-center">
                    Copyright © 2024 All Rights Reserved By Khainacs
                </div>

                {/* Payment Logos */}
                <div className="flex items-center space-x-4 h-6 sm:justify-end">
                    <img src={Momo} alt="Momo" className="h-8 rounded-full overflow-hidden sm:h-6" />
                    <img src={ZaloPay} alt="ZaloPay" className="h-8 rounded-full overflow-hidden sm:h-6" />
                </div>
            </div>
        </div>
    </footer>

        
    );
}
