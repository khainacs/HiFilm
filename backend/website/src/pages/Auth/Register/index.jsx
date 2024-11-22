import {useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faLock,faEnvelope,faEye,faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Register from "../../../assets/img/Login-Register/register.png";
import Logo from "../../../assets/img/Logo/Logo.png";
import {validateEmail, validatePassword, validateRePassword} from "../../../services/validate/validate.js";
import {toast} from "react-toastify";
import {register as registerAxios} from "../../../services/apis/auth.js";
import {BiLogoFacebook} from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import TitleForm from "../Components/TitleForm.jsx";
import AuthForm from "../components/AuthForm.jsx";
import Oauth2 from "../components/Oauth2.jsx";

export default function FormRegister(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [errors, setErrors] = useState({});
    const [errorString, setErrorString] = useState("");
    const [loading, setLoading] = useState(false);

    const title = props.title;
    useEffect(() => {
        document.title = title ? `${title}` : "Page Does Not Exist";
    }, [title]);

 const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = {};
        validationErrors.email = validateEmail(email);
        if (validationErrors.email === "") delete validationErrors.email;
        validationErrors.password = validatePassword(password);
        validationErrors.password = validatePassword(rePassword);
        if (validationErrors.password === "") delete validationErrors.password;
        validationErrors.rePassword = validateRePassword(password, rePassword); 
        if(validationErrors.rePassword === "") delete validationErrors.rePassword;
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length !== 0) {
            setErrorString(Object.entries(validationErrors)
                .map(([key, value]) => `${key}: ${value}`)
                .join('\n'));
        } else {
            try {
                setLoading(true);
                const response = await registerAxios({email, password,    b});
                toast.success(response.message, {
                    onClose: () => navigate('/notify?type=verifyEmail'),
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
    };

    return (
        <div className="bg-custom-gradient animate-gradient-move h-screen overflow-hidden flex items-center justify-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="absolute start-36 top-12 animate-zoomIn">
                <img src={Logo} alt="Logo" className="w-20 "/>
            </div>
            
            {/* container */}
            <div className="w-[100%] flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-16 
                            p-6">
                {/* part image */}
                <div className="md:w-1/3 w-1/3 ">
                    <img src={Register} alt="Login image" className=" w-2/3 h-auto animate-fade-in-left" />
                </div>

                <div className=" border-2 rounded-lg bg-slate-500 shadow-md ml-2 w-[35%] p-6 animate-zoomIn">
                    {/* form input */}
                    <TitleForm type="register"/>
                    <div className="mt-2 animate-fade-in-right">
                        <AuthForm
                            handleSubmit={handleSubmit}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            rePassword={rePassword}
                            setRePassword={setRePassword}
                            errors={errors}
                            errorString={errorString}
                            loading={loading}
                            showRePassword={true}
                            type={"register"}
                        />
                        <Oauth2 />
                    </div>     
                </div>
            </div>
        </div>
    );
};
