import FormEditInformation from './components/FormEditInformation'
import PropTypes from "prop-types";
import { useEffect } from "react";

EditInformation.propTypes = {
    title: PropTypes.string,
};
export default function EditInformation(props) {
    const { title } = props;

    useEffect(() => {
        document.title = title ? `${title}` : "Không tìm thấy trang";
    }, [title]);
    return (
        <main className="flex items-center justify-center">
            <div className="flex flex-col items-center w-full max-w-4xl p-6">
                <h1 className="text-2xl font-semibold text-center">Chỉnh sửa thông tin cá nhân</h1>
                <FormEditInformation />
            </div>
        </main>
    );
}