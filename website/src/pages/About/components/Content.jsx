import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faCalendarAlt, faClapperboard } from '@fortawesome/free-solid-svg-icons'; // Thêm icon faClapperboard vào đây

export default function Content() {
    const imageAbout = "./src/assets/img/About/labelphim.png";
    return (
        <div className="py-5">
            <div className="container mx-auto pt-5 pb-3">
                <h1 className="text-4xl md:text-5xl text-white font-bold text-center uppercase mb-7">
                    Welcome To <span className="text-Vibrant-Purple-400">AVG FILM</span>
                </h1>
                <div className="flex justify-center">
                    <div className="w-full lg:w-3/4 text-center">
                        <img className="w-3/4 mx-auto mb-4" src={imageAbout} alt="About AVG Film" />
                        <p className="text-white">
                            AVG FILM mang đến cho bạn trải nghiệm điện ảnh tuyệt vời, nơi mọi câu chuyện đều được kể bằng những thước phim chân thực và đầy cảm xúc. Chúng tôi luôn nỗ lực để cung cấp những bộ phim chất lượng cao từ mọi thể loại, đáp ứng mọi sở thích của khán giả. Với đội ngũ chuyên nghiệp và đam mê, AVG FILM không ngừng đổi mới và hoàn thiện để trở thành điểm đến yêu thích của bạn mỗi khi nghĩ đến giải trí.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap mt-8 justify-center items-stretch gap-4">
                    {/* Phim Mới Nhất Mỗi Tuần */}
                    <div className="w-full lg:w-1/4 mb-2">
                        <div className="flex items-center bg-purple-600 shadow p-4 h-32 min-h-[8rem] rounded-lg"> 
                            <div className="flex items-center justify-center text-white w-20 h-20 mr-4"> 
                                <FontAwesomeIcon icon={faFilm} size="2x" />
                            </div>
                            <h4 className="text-lg font-semibold uppercase text-white">Phim Mới Nhất Mỗi Tuần</h4>
                        </div>
                    </div>
                    {/* Kho Phim Đa Dạng Thể Loại */}
                    <div className="w-full lg:w-1/4 mb-2">
                        <div className="flex items-center bg-purple-500 shadow p-4 h-32 min-h-[8rem] rounded-lg"> 
                            <div className="flex items-center justify-center text-white w-20 h-20 mr-4"> 
                                <FontAwesomeIcon icon={faClapperboard} size="2x" />
                            </div>
                            <h4 className="text-lg font-semibold uppercase text-white">Kho Phim Đa Dạng Thể Loại</h4>
                        </div>
                    </div>
                    {/* Lịch Chiếu Linh Hoạt */}
                    <div className="w-full lg:w-1/4 mb-2">
                        <div className="flex items-center bg-purple-400 shadow p-4 h-32 min-h-[8rem] rounded-lg"> 
                            <div className="flex items-center justify-center text-white w-20 h-20 mr-4"> 
                                <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
                            </div>
                            <h4 className="text-lg font-semibold uppercase text-white">Lịch Chiếu Linh Hoạt</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}