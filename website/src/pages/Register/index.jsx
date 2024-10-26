import PropTypes from "prop-types";
import { useEffect } from "react";
import FormRegister from "./components/FormRegister";

Register.propTypes = {
    title: PropTypes.string,
};
export default function Register(props) {
    const { title } = props;

    useEffect(() => {
        document.title = title ? `${title}` : "Không tìm thấy trang";
    }, [title]);

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100">
            <FormRegister />
        </main>
    );
}
