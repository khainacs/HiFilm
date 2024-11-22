import React, {useState} from "react";
import FormInput from "./FormInput";
import { CustomLoadingButton } from "../../../components/Forms/Button/customColor.jsx";
import ShowError from "../components/ShowError.jsx";
import Oauth2 from "./Oauth2.jsx";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';
import {Checkbox, FormControlLabel} from "@mui/material";

const AuthForm = ({ handleSubmit, email, setEmail, password, setPassword, rePassword, setRePassword, errors, errorString, loading, remember, setRemember, showRePassword, type, recaptchaToken=undefined, setRecaptchaToken=undefined }) => {
    const handleVerify = (token) => {
        setRecaptchaToken(token);
    };

    let btnText = "";

    if (type === "login") {
        btnText = "Login";
    } else if (type === "register") {
        btnText = "Register";
    } else if (type === "forgotPassword") {
        btnText = "Submit";
    } else if (type === "changePassword") {
        btnText = "Change password";
    } else {
        btnText = "Submit";
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-1">
            {recaptchaToken !== undefined && (
                <GoogleReCaptcha onVerify={handleVerify} />
            )}

            {email !== undefined && (
                <FormInput
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                />
            )}
            {password !== undefined && (
                <FormInput
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!errors.password}
                />
            )}
            {showRePassword && rePassword !== undefined && password !== undefined &&(
                <FormInput
                    label="Confirm Passwordsssss"
                    type="password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    error={!!errors.password}
                />
            )}
            {remember !== undefined && (
                <div className="flex items-center justify-between text-white">
                    <FormControlLabel
                        control={<Checkbox checked={remember} onChange={(e) => setRemember(e.target.checked)} />}
                        label="Remember me"
                    />
                    <a href="/forgot-password" className="font-semibold hover:text-primar">
                        Forgot Password?
                    </a>
                </div>
            )}
            <ShowError errorString={errorString} />
            <CustomLoadingButton variant="contained" type="submit" className="w-full border-[10px]" loading={loading}>
                {btnText}
            </CustomLoadingButton>
        </form>
    );
};

export default AuthForm;