import PropTypes from "prop-types";
import { useEffect } from "react";
import FormLogin from "./components/FormLogin";

Login.propTypes = {
    title: PropTypes.string,
};
export default function Login(props) {
    const { title } = props;

    useEffect(() => {
        document.title = title ? `${title}` : "Không tìm thấy trang";
    }, [title]);

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100">
            <FormLogin />
        </main>
    );
}
