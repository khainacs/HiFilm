import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faLock,
    faEnvelope,
    faEye,
    faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";

export const FormRegister = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="w-full max-w-4xl p-4 sm:p-8 md:p-12 bg-white shadow-md rounded-lg flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-4 sm:p-6">
                <img
                    src="./src/assets/img/Login-Register/register.png"
                    alt="Login"
                    className="w-full rounded-lg"
                />
            </div>
            <div className="w-full md:w-1/2 p-4 sm:p-6 flex justify-center">
                <form action="" className="w-full">
                    <div className="mb-6 text-2xl sm:text-4xl">
                        <h1 className="font-semibold">Sign Up</h1>
                    </div>
                    <div className="mb-6 border-b text-sm transition-all duration-300 ease-in-out transform focus-within:scale-105 focus-within:border-blue-500">
                        <div className="flex items-center border-b border-gray-300 py-2">
                            <span className="pr-3 text-black">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <input
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-gray-100 pr-10 transition-all duration-300 ease-in-out transform focus:scale-105"
                                type="text"
                                placeholder="Usename"
                                aria-label="Username"
                            />
                        </div>
                    </div>
                    <div className="mb-6 border-b text-sm transition-all duration-300 ease-in-out transform focus-within:scale-105 focus-within:border-blue-500">
                        <div className="flex items-center border-b border-gray-300 py-2">
                            <span className="pr-3 text-black">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <input
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-gray-100 pr-10 transition-all duration-300 ease-in-out transform focus:scale-105"
                                type="email"
                                placeholder="Your email"
                                aria-label="Email"
                            />
                        </div>
                    </div>
                    <div className="mb-6 border-b text-sm transition-all duration-300 ease-in-out transform focus-within:scale-105 focus-within:border-blue-500">
                        <div className="flex items-center border-b border-gray-300 py-2 relative">
                            <span className="pr-3 text-black">
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <input
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-gray-100 pr-10 transition-all duration-300 ease-in-out transform focus:scale-105"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                aria-label="Password"
                            />
                            <span
                                className="absolute right-0 pr-3 text-gray-500 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye}
                                />
                            </span>
                        </div>
                    </div>
                    <div className="mb-6 border-b text-sm transition-all duration-300 ease-in-out transform focus-within:scale-105 focus-within:border-blue-500">
                        <div className="flex items-center border-b border-gray-300 py-2 relative">
                            <span className="pr-3 text-black">
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                            <input
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-gray-100 pr-10 transition-all duration-300 ease-in-out transform focus:scale-105"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm password"
                                required
                                aria-label="Confirm Password"
                            />
                            <span
                                className="absolute right-0 pr-3 text-gray-500 cursor-pointer"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                <FontAwesomeIcon
                                    icon={
                                        showConfirmPassword ? faEyeSlash : faEye
                                    }
                                />
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mb-5">
                        <button className="bg-blue-500 text-white px-5 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 animate-pulse">
                            Sign Up
                        </button>
                    </div>
                    <div className="text-center underline text-sm">
                        <a
                            href="dang-nhap"
                            className="transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500"
                        >
                            I am already a member
                        </a>
                    </div>

                    <div className="text-center mt-6">
                        <span>Or log in with</span>
                        <div className="flex justify-center items-center mt-2 space-x-3">
                            <button className="w-8 h-8 flex justify-center items-center rounded-full text-white bg-[#3B5998] transition-all duration-300 ease-in-out transform hover:bg-blue-500 hover:scale-105">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </button>
                            <button className="w-8 h-8 flex justify-center items-center rounded-full text-white bg-[#E72734] transition-all duration-300 ease-in-out transform hover:bg-red-500 hover:scale-105">
                                <FontAwesomeIcon icon={faGoogle} />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormRegister;
