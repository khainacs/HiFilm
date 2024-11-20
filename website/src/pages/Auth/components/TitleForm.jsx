import Logo from "../../../assets/img/Logo/Logo.png";
import React from "react";

export default function TitleForm({type}) {
    let title = "";
    let titleExcept = "";
    let btnExcept = "";
    let href = "";
    if (type === "login") {
        title = "Login with your account";
        titleExcept = "You have not register?";
        btnExcept = "Register now";
        href = "/register";
    } else if (type === "register") {
        title = "Register your account";
        titleExcept = "You have already a account?";
        btnExcept = "Login now";
        href = "/login";
    } else if (type === "forgotPassword" || type === "changePassword") {
        title = "Forgot Password";
        titleExcept = "You suddenly remenber password?";
        btnExcept = "Login now";
        href = "/login";
    }


    return <div className="flex items-center flex-col">
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-white">
            {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-white">
            {titleExcept}{" "}
            <a href={href} className="font-semibold text-indigo-800 hover:text-purple-400 hover:border-purple-400 hover:border-b-[1px]">
                {btnExcept}
            </a>
        </p>
    </div>
}