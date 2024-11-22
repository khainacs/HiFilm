import React, {useEffect, useState} from "react";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import {authenticate} from "../../../services/apis/auth.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {validateEmail, validatePassword} from "../../../services/validate/validate.js";
import Oauth2 from "../components/Oauth2.jsx"
import TitleForm from "../Components/TitleForm.jsx";
import AuthForm from "../components/AuthForm.jsx";
import Logo from "../../../assets/img/Logo/Logo.png";
import LoginImage from "../../../assets/img/Login-Register/login.png";

export default function Login(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(true);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [errorString, setErrorString] = useState("");

    const title = props.title;
    useEffect(() => {
        document.title = title ? `${title}` : "Trang không tồn tại";
    }, [title]);

    async function handleSubmit(e) {
        e.preventDefault();

        const validationErrors = {};
        validationErrors.email = validateEmail(email);
        if (validationErrors.email === "") delete validationErrors.email;
        validationErrors.password = validatePassword(password);
        if (validationErrors.password === "") delete validationErrors.password;
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length !== 0) {
            setErrorString(Object.entries(validationErrors)
                .map(([key, value]) => `${key}: ${value}`)
                .join('\n'));
        } else {
            try {
                setLoading(true);
                const response = await authenticate({ email, password, rememberMe: remember });
                toast.success(response.message, {
                    onClose: () => navigate('/'),
                    autoClose: 2000
                });
            } catch (err) {
                toast.error(err.message);
                setErrorString(err.message)
                console.error("Error fetching server: ", err);

            } finally {
                setLoading(false);
            }
        }
    }

    return <>
        <div className="bg-custom-gradient animate-gradient-move  h-screen overflow-hidden flex items-center justify-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="absolute start-36 top-12 animate-zoomIn">
                <img src={Logo} alt="Logo" className="w-20"/>
            </div>

            {/* container */}
            <div className="w-[100%] flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-16 
                            p-6 ">
                {/* part image */}
                <div className="md:w-1/3 w-1/3">
                    <img src={LoginImage} alt="Login image" className=" w-[85%] h-auto animate-fade-in-left" />
                </div>

                <div className=" border-2 rounded-lg bg-slate-500 shadow-md ml-2 w-[35%] p-6 animate-zoomIn ">
                    {/* form input */}
                    <TitleForm type="login"/>
                    <div className="mt-2 animate-fade-in-right">
                        <AuthForm
                            handleSubmit={handleSubmit}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            errors={errors}
                            errorString={errorString}
                            loading={loading}
                            remember={remember}
                            setRemember={setRemember}
                            showRePassword={false}
                            type={"login"}
                        />
                        <Oauth2 />
                    </div>     
                </div>
            </div>
        </div>
    </>;
}