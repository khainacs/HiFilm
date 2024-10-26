import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const MovieDetail = () => {
    return (
        <div className="w-full p-4 sm:p-8 md:p-12 bg-slate-800 shadow-md">
            <div className="w-full flex flex-col md:flex-row justify-center gap-4 mb-8">
                {/* info movie */}
                <div className="w-full md:w-2/5">
                    <img
                        src="./src/assets/img/HarryPotter.png"
                        alt="Movie"
                        className="w-full rounded-lg"
                    />
                </div>
                <div className="w-full md:w-3/5 p-3">
                    <div className="p-2 text-3xl font-bold text-blue-400 w-full">
                        <p className="w-full">Title Film</p>
                    </div>

                    <div className="p-2 text-gray-600 text-sm w-full">
                        <a
                            href="!#"
                            className="p-1 m-1 rounded-md text-white inline-flex bg-slate-500"
                        >
                            Thể loại 1
                        </a>
                        <a
                            href="!#"
                            className="p-1 m-1 rounded-md text-white inline-flex bg-slate-500"
                        >
                            Thể loại 2
                        </a>
                        <a
                            href="!#"
                            className="p-1 m-1 rounded-md text-white inline-flex bg-slate-500"
                        >
                            Thể loại 3
                        </a>
                    </div>
                    <div className="p-2 w-full flex items-center gap-4">
                        <p className="text-lg font-medium text-white">
                            Đánh giá:
                        </p>
                        <div className="flex items-center">
                            <span className="text-white mr-2">4.5</span>
                            <svg
                                className="w-6 h-6 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.36 2.433a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.36-2.433a1 1 0 00-1.176 0l-3.36 2.433c-.784.57-1.839-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.293 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                            </svg>
                            <svg
                                className="w-6 h-6 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.36 2.433a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.36-2.433a1 1 0 00-1.176 0l-3.36 2.433c-.784.57-1.839-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.293 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                            </svg>
                            <svg
                                className="w-6 h-6 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.36 2.433a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.36-2.433a1 1 0 00-1.176 0l-3.36 2.433c-.784.57-1.839-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.293 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                            </svg>
                            <svg
                                className="w-6 h-6 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.36 2.433a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.36-2.433a1 1 0 00-1.176 0l-3.36 2.433c-.784.57-1.839-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.293 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                            </svg>
                            <svg
                                className="w-6 h-6 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.36 2.433a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.36-2.433a1 1 0 00-1.176 0l-3.36 2.433c-.784.57-1.839-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.293 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                            </svg>
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <p className="text-lg font-medium text-white">
                            Danh sách tập:
                        </p>
                        <div className="grid grid-cols-6 gap-4 mt-2">
                            {/* Danh sách tập */}
                            {Array.from({ length: 12 }).map((_, index) => (
                                <button
                                    key={index}
                                    className="bg-gradient-to-r from-slate-500
                                    to-blue-950 p-1 rounded-lg text-white
                                    shadow-lg hover:shadow-xl transition-shadow
                                    duration-300 text-center"
                                >
                                    <span className="text-lg font-semibold">
                                        Tập {index + 1}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="p-4 w-full mt-4">
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
                    <div className="p-2 text-gray-600 text-sm">
                        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 animate-pulse">
                            <span className="mr-1">Watching Now </span>
                            <FontAwesomeIcon icon={faPlay} />
                        </button>
                    </div>
                </div>
            </div>
            <video className="w-full bg-black mb-8" controls>
                <source src="path_to_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="py-8 px-4 md:px-12 mb-8">
                <div className="mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-white">
                        Suggested Movies
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
                            <img
                                src="./src/assets/img/SpiderMan.jpg"
                                alt="Suggested Movie"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold text-white">
                                Movie Title
                            </h3>
                            <p className="text-gray-400">
                                Short description of the movie.
                            </p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
                            <img
                                src="./src/assets/img/HoangTuLai.png"
                                alt="Suggested Movie"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold text-white">
                                Movie Title
                            </h3>
                            <p className="text-gray-400">
                                Short description of the movie.
                            </p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
                            <img
                                src="./src/assets/img/SpiderMan.jpg"
                                alt="Suggested Movie"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold text-white">
                                Movie Title
                            </h3>
                            <p className="text-gray-400">
                                Short description of the movie.
                            </p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
                            <img
                                src="./src/assets/img/HoangTuLai.png"
                                alt="Suggested Movie"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold text-white">
                                Movie Title
                            </h3>
                            <p className="text-gray-400">
                                Short description of the movie.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-3xl mx-auto p-4 bg-gray-800 text-white shadow-md rounded-lg w-full">
                <h2 className="text-xl font-semibold mb-4">259 BÌNH LUẬN</h2>

                {/* Input Comment */}
                <div className="flex mb-4 w-full">
                    <img
                        src="https://bootdey.com/img/Content/user_1.jpg"
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <textarea
                        className="flex-1 border border-gray-700 bg-gray-600 rounded-lg p-2 w-full resize-none"
                        placeholder="Viết bình luận..."
                        rows="3"
                    ></textarea>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 w-full">
                    Đăng
                </button>

                <hr className="my-4 border-gray-600" />

                {/* Comments List */}
                <ul className="space-y-4 w-full">
                    <li className="flex w-full">
                        <img
                            src="https://bootdey.com/img/Content/user_2.jpg"
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <strong className="text-blue-400">
                                    @Luân Hồi Điện Chủ
                                </strong>
                                <span className="text-gray-400 text-sm">
                                    1 năm trước
                                </span>
                            </div>
                            <p className="text-gray-300 mt-1">
                                Đạo Huyền Sư – Phim Xuyên Không nhé cả nhà hữu
                                <br />
                                Tổng cộng 16 tập chiếu vào mỗi thứ 3 hàng tuần -
                                Ngày đầu 2 tập + 1 tập pre movie (giới thiệu
                                nhân vật xuyên không )
                            </p>
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-400 mr-2">7</span>
                                <button className="flex items-center text-blue-400 hover:text-blue-600">
                                    <i className="fas fa-thumbs-up mr-1"></i>
                                    Like
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="flex w-full">
                        <img
                            src="https://bootdey.com/img/Content/user_3.jpg"
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <strong className="text-blue-400">
                                    @Đại Thần
                                </strong>
                                <span className="text-gray-400 text-sm">
                                    7 ngày trước
                                </span>
                            </div>
                            <p className="text-gray-300 mt-1">
                                Phim này có truyện không? Đợi tiếp mỏi mòn...
                            </p>
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-400 mr-2">0</span>
                                <button className="flex items-center text-blue-400 hover:text-blue-600">
                                    <i className="fas fa-thumbs-up mr-1"></i>
                                    Like
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="flex w-full">
                        <img
                            src="https://bootdey.com/img/Content/user_4.jpg"
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <strong className="text-blue-400">
                                    @Hoàng Đạo Hữu
                                </strong>
                                <span className="text-gray-400 text-sm">
                                    26 ngày trước
                                </span>
                            </div>
                            <p className="text-gray-300 mt-1">
                                Đang hay lại hết chân thật.
                            </p>
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-400 mr-2">0</span>
                                <button className="flex items-center text-blue-400 hover:text-blue-600">
                                    <i className="fas fa-thumbs-up mr-1"></i>
                                    Like
                                </button>
                            </div>
                        </div>
                    </li>
                    <li className="flex w-full">
                        <img
                            src="https://bootdey.com/img/Content/user_5.jpg"
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <strong className="text-blue-400">
                                    @Trần Hoàng Thế Tâm
                                </strong>
                                <span className="text-gray-400 text-sm">
                                    1 tháng trước
                                </span>
                            </div>
                            <p className="text-gray-300 mt-1">
                                Phim hay vầy mà lâu không ra phần mới.
                            </p>
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-400 mr-2">0</span>
                                <button className="flex items-center text-blue-400 hover:text-blue-600">
                                    <i className="fas fa-thumbs-up mr-1"></i>
                                    Like
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MovieDetail;
