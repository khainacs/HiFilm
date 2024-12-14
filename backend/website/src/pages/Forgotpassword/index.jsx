import FormForgotPassword from './components/FormForgotPassword';
import PropTypes from "prop-types";
import { useEffect } from "react";

Forgotpassword.propTypes = {
    title: PropTypes.string,
};
export default function Forgotpassword(props) {
    const { title } = props;

    useEffect(() => {
        document.title = title ? `${title}` : "Không tìm thấy trang";
    }, [title]);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center py-4 bg-custom-gradient animate-gradient-move from-dark-blue-600 bg-[length:200%_200%">
            <div className="w-full max-w-4xl mx-auto p-10 rounded-lg flex justify-center gap-12 mb-4 ">
                <FormForgotPassword />
            </div>
        </div>
    );
}
