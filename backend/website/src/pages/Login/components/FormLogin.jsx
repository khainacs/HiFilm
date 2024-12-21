import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLock, faEnvelope,faEye,faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Login from "../../../assets/img/Login-Register/home_cinema.svg";
import Logo from "../../../assets/img/Logo/Logo.png";
import {BiLogoFacebook} from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";  
const FormLogin = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="bg-custom-gradient animate-gradient-move from-dark-blue-600 bg-[length:200%_200%] h-screen flex flex-col md:flex-row justify-center 
                                    space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 ">
            <div className="absolute start-14 top-5">
                <img src={Logo} alt="Logo" className="w-16"/>
            </div>
            {/* part image */}
            <div className="md:w-1/3 max-w-sm animate-slide-down opacity-0">
                <img src={Login} alt="Login image" className="animate-fade-in w-2/3 h-auto" />
            </div>

            <div className="md:w-1/3 max-w-sm">
                <div className="text-center flex flex-row md:text-left items-center">
                    <label className="mr-1 font-nunito font-bold text-purple-400 text-center">Sign in With</label>
                    <button type="button" className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-wine-red-800 font-nunito font-bold text-white shadow-[0_4px_9px_4px_#3b71a]">
                        <BiLogoFacebook size={20} className="flex justify-center items-center w-full"/>
                    </button>
                    <button type="button" className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-wine-red-800 font-nunito font-bold text-white shadow-[0_4px_9px_4px_#3b71a]">
                        <BiLogoGoogle size={20} className="flex justify-center items-center w-full"/>
                    </button>
                </div>
                {/* border Or */}
                <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-bold text-slate-500">
                        Or
                    </p>
                </div>
                {/* form input */}
                <div className="flex items-center mt-4">
                    <span className="pr-3 text-black flex pt-2">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input type="text" className="text-sm w-full px-4 py-2 border focus:outline-none border-gray-300 rounded-xl" placeholder="Email"/>
                </div>
                <div className="flex items-center mt-4">
                    <span className="pr-3 text-black flex pt-2">
                        <FontAwesomeIcon icon={faLock} />
                    </span>
                    <input className="text-sm w-full px-4 py-2 border focus:outline-none border-gray-300 rounded-xl" placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            aria-label="Password"/>
                    <span
                        className="absolute end-[200px] pr-3 text-gray-500 cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >
                        <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                        />
                    </span>
                </div>
                <div className="mt-4 flex justify-between font-nunito font-semibold text-sm">
                    <label className="flex  text-purple-500 hover:text-blue-600 cursor-pointer">
                        <input type="checkbox" className="mr-1"/>
                        <span>Remember Me</span>
                    </label>
                    <a href="#" className="text-purple-200 hover:text-blue-700 hover:underline hover:underline-offset-4">
                        Quên Mật Khẩu
                    </a>
                </div>
                {/* button */}
                <div className="text-center md:text-left flex flex-col items-center">
                    <button type="submit" className="mt-4 bg-blue-600 hover:bg-wine-red-800 px-8 py-2 text-white rounded text-xs tracking-wider">
                        Đăng Nhập
                    </button>
                </div>
                {/* navigate register */}
                <div className="mt-4 font-bold font-nunito text-sm text-purple-300 text-center md:text-left">Don't have an account? {""} 
                    <a href="#" className="text-purple-400 hover:underline hover:underline-offset-4">Register</a>
                </div>
            </div>
        </div>
    );
};

export default FormLogin;