import { useState } from "react";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const MovieDetail = () => {
    const [isSaved, setIsSaved] = useState(false);

    const handleSaveClick = () => {
        setIsSaved((prevState) => !prevState); // Chuyển đổi trạng thái lưu/hủy lưu
    };
    const handleWatchNowClick = () => {
        const videoElement = document.getElementById("movie-video");
        if (videoElement) {
            videoElement.scrollIntoView({ behavior: "smooth" });
            videoElement.play();
        }
    };
    const products = [
        {
            id: 1,
            title: "Product 1",
            rating: "4.5",
            image: "https://i.pinimg.com/564x/01/53/e7/0153e77057ca8f0f2736c2871bc2438c.jpg",
        },
        {
            id: 2,
            title: "Product 2",
            rating: "4.0",
            image: "https://i.pinimg.com/564x/01/53/e7/0153e77057ca8f0f2736c2871bc2438c.jpg",
        },
        {
            id: 3,
            title: "Product 3",
            rating: "4.2",
            image: "https://i.pinimg.com/564x/01/53/e7/0153e77057ca8f0f2736c2871bc2438c.jpg",
        },
        {
            id: 4,
            title: "Product 4",
            rating: "3.8",
            image: "https://i.pinimg.com/564x/01/53/e7/0153e77057ca8f0f2736c2871bc2438c.jpg",
        },
        {
            id: 5,
            title: "Product 5",
            rating: "4.9",
            image: "https://i.pinimg.com/564x/01/53/e7/0153e77057ca8f0f2736c2871bc2438c.jpg",
        },
        {
            id: 6,
            title: "Product 6",
            rating: "4.7",
            image: "https://i.pinimg.com/564x/01/53/e7/0153e77057ca8f0f2736c2871bc2438c.jpg",
        },
        // Add more products as needed
    ];
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const scrollLeftHandler = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRightHandler = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const startDrag = (e) => {
        setIsDragging(true);
        setStartX(e.pageX || e.touches[0].pageX);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const drag = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX || e.touches[0].pageX;
        const walk = (x - startX) * 2; // multiply by 2 for faster scroll
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const endDrag = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const slider = sliderRef.current;

        if (window.innerWidth <= 1024) {
            // Apply drag only on devices with width <= 1024px
            slider.addEventListener("touchstart", startDrag);
            slider.addEventListener("touchmove", drag);
            slider.addEventListener("touchend", endDrag);
        }

        return () => {
            if (window.innerWidth <= 1024) {
                slider.removeEventListener("touchstart", startDrag);
                slider.removeEventListener("touchmove", drag);
                slider.removeEventListener("touchend", endDrag);
            }
        };
    }, [isDragging, startX, scrollLeft]);
    return (
        <div className="w-full p-4 sm:p-8 md:p-12 bg-slate-800 shadow-lg">
            <div className="w-full flex flex-col md:flex-row justify-center gap-6 mb-8">
                {/* Movie Info */}
                <div className="w-full md:w-2/5 relative">
                    <img
                        src="https://i.pinimg.com/564x/18/d7/4e/18d74ef46e722828f75cca91b009f4a5.jpg"
                        alt="Movie"
                        className="w-full rounded-3xl shadow-md"
                    />
                    <button
                        onClick={handleSaveClick}
                        className={`absolute top-3 right-3 md:top-4 md:right-4 p-3 rounded-full shadow-lg transition-colors duration-300 ${
                            isSaved
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-700"
                        }`}
                        title={isSaved ? "Saved" : "Save"}
                        style={{
                            backdropFilter: "blur(4px)", // Làm mờ nền phía sau nút
                            backgroundColor: "rgba(255, 255, 255, 0.6)", // Nền bán trong suốt
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faBookmark}
                            className="h-5 w-5"
                        />
                    </button>
                </div>

                <div className="w-full md:w-3/5 p-3">
                    <div className="p-2 text-3xl font-bold text-blue-400">
                        <p>Title Film</p>
                    </div>
                    <div className="p-2 text-base font-semibold text-blue-200 flex items-center gap-3">
                        <p>Year</p>
                        <p>&#8226;</p>
                        <p>Duration</p>
                    </div>
                    <div className="p-2">
                        {["Thể loại 1", "Thể loại 2", "Thể loại 3"].map(
                            (genre, index) => (
                                <a
                                    key={index}
                                    href="!#"
                                    className="p-1 m-1 rounded-md text-white bg-slate-600 hover:bg-blue-500 transition-colors duration-200"
                                >
                                    {genre}
                                </a>
                            )
                        )}
                    </div>
                    <div className="p-2 flex items-center gap-4">
                        <p className="text-lg font-medium text-white">
                            Đánh giá: 4.5
                            <FontAwesomeIcon
                                className="text-yellow-500"
                                icon={faStar}
                            />
                        </p>
                    </div>
                    <div className="p-2">
                        <p className="text-lg font-medium text-white">
                            Danh sách tập:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3">
                            {Array.from({ length: 20 }).map((_, index) => (
                                <a
                                    href="!#"
                                    key={index}
                                    className="bg-gradient-to-r from-slate-500 to-blue-700 p-2 rounded-md text-white shadow-md hover:shadow-lg transition-all duration-300 text-center hover:text-black hover:bg-stone-800"
                                >
                                    <span className="text-sm font-medium">
                                        Tập {index + 1}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="p-4 mt-4">
                        <h2 className="text-lg font-bold text-white mb-2">
                            Nội dung phim
                        </h2>
                        <p className="text-gray-300 text-sm">
                            Đây là phần nội dung chi tiết của phim. Bạn có thể
                            viết mô tả về cốt truyện, các nhân vật chính, và các
                            chi tiết thú vị khác về bộ phim ở đây. Mô tả nên
                            ngắn gọn nhưng đủ hấp dẫn để thu hút người xem.
                        </p>
                    </div>
                    <div className="p-2">
                        <button
                            onClick={handleWatchNowClick}
                            className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 active:scale-95 transition duration-300 animate-pulse"
                        >
                            <span className="mr-1">Watching Now </span>
                            <FontAwesomeIcon icon={faPlay} />
                        </button>
                    </div>
                </div>
            </div>
            <video id="movie-video" className="w-full bg-black mb-8" controls>
                <source src="path_to_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative px-8 py-4 bg-slate-700 w-full">
                <h1 className="my-4 text-blue-500 font-bold text-3xl">More</h1>
                <button
                    onClick={scrollLeftHandler}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-10"
                >
                    &#8592;
                </button>
                <button
                    onClick={scrollRightHandler}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full z-10"
                >
                    &#8594;
                </button>
                <div
                    ref={sliderRef}
                    className="flex overflow-x-scroll scroll-smooth scrollbar-hide"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] mx-2"
                            style={{ scrollSnapAlign: "start" }}
                        >
                            <div className="bg-slate-800 rounded-md shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                                <div className="overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-80 h-full object-cover transition-transform transform hover:scale-110"
                                    />
                                </div>
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold text-white ">
                                        {product.title}
                                    </h2>
                                    <p className="text-bs text-white">
                                        Đánh giá: {product.rating}{" "}
                                        <FontAwesomeIcon
                                            className="text-yellow-500"
                                            icon={faStar}
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-3xl mx-auto p-4 bg-gray-800 text-white shadow-lg rounded-lg">
                <h2 className="text-xl font-semibold mb-4">259 BÌNH LUẬN</h2>
                <div className="flex mb-4">
                    <img
                        src="https://bootdey.com/img/Content/user_1.jpg"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <textarea
                        className="flex-1 border border-gray-700 bg-gray-600 rounded-lg p-2 resize-none"
                        placeholder="Viết bình luận..."
                        rows="3"
                    ></textarea>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-full">
                    Đăng
                </button>
                <hr className="my-4 border-gray-600" />
                <ul className="space-y-4">
                    {[
                        {
                            name: "@Luân Hồi Điện Chủ",
                            date: "1 năm trước",
                            comment:
                                "Đạo Huyền Sư – Phim Xuyên Không nhé cả nhà hữu...",
                        },
                        {
                            name: "@Đại Thần",
                            date: "7 ngày trước",
                            comment:
                                "Phim này có truyện không? Đợi tiếp mỏi mòn...",
                        },
                        {
                            name: "@Hoàng Đạo Hữu",
                            date: "26 ngày trước",
                            comment: "Đang hay lại hết chân thật.",
                        },
                        {
                            name: "@Trần Hoàng Thế Tâm",
                            date: "1 tháng trước",
                            comment: "Phim hay vầy mà lâu không ra phần mới.",
                        },
                    ].map((user, index) => (
                        <li key={index} className="flex">
                            <img
                                src={`https://bootdey.com/img/Content/user_${
                                    index + 2
                                }.jpg`}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full mr-3"
                            />
                            <div className="flex-1">
                                <div className="flex justify-between">
                                    <strong className="text-blue-400">
                                        {user.name}
                                    </strong>
                                    <span className="text-gray-400 text-sm">
                                        {user.date}
                                    </span>
                                </div>
                                <p className="text-gray-300 mt-1">
                                    {user.comment}
                                </p>
                                <div className="flex items-center mt-2">
                                    <span className="text-yellow-400 mr-2">
                                        0
                                    </span>
                                    <button className="flex items-center text-blue-400 hover:text-blue-600 transition-colors">
                                        <i className="fas fa-thumbs-up mr-1"></i>
                                        Like
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MovieDetail;
