import PropTypes from "prop-types";
import { useEffect } from "react";
import MovieDetail from "./components/MovieDetail";

Movie_Detail.propTypes = {
    title: PropTypes.string,
};
export default function Movie_Detail(props) {
    const { title } = props;

    useEffect(() => {
        document.title = title ? `${title}` : "Không tìm thấy trang";
    }, [title]);

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 mt-[60px] ">
            <MovieDetail />
        </main>
    );
}
