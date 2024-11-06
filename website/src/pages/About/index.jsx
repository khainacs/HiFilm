import PropTypes from "prop-types";
import { useEffect } from "react";
import Banner from "./components/Banner";
import OurTeam from "./components/OurTeam";
import Content from "./components/Content";

About.propTypes = {
    title: PropTypes.string,
};

export default function About({ title }) {
    useEffect(() => {
        document.title = title ? `${title}` : "Không tìm thấy trang";
    }, [title]);

    return (
        <div className="flex flex-col items-center bg-Dark-Blue-900">
            <Banner />
            <Content />
            <section className="w-full max-w-5xl mb-16">
                <OurTeam />
            </section>
        </div>
    );
}