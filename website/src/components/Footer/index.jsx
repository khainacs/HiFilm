import Logo from "../../assets/img/Logo/Logo.png";
export default function Footer() {
    return (
    <footer className="px-4 mx-auto max-w-container pb-4 sm:px-6 lg:px-20 bg-Gray-Black-600 flex flex-col justify-center items-center ">
        <div className="grid grid-cols-5  mt-3 gap-6 w-11/12 border-black rounded-t-xl p-4 bg-Gray-Black-500">
            <div className="col-span-2">
                <img src={Logo} alt="Logo" className="w-10 rounded-full object-cover "/>
                <div className="whitespace-pre-line text-sm  text-Light-Cream-500">
                    <span className="text-Soft-Purple-500 font-bold">AVG Film</span> - Trang web của chúng tui có thể xem phimm trực tiếp miễn phí
                    với giao tiếp trực quan, cùng kho phim lớn, phim hay, luôn cập nhật, 
                    hứa hẹn sẽ đem lại phút giây thư giãn cho bạn.
                </div>
            </div>
            <div className="col-span-1 ">
                <h5 className="text-Light-Cream-600 text-sm">DANH MỤC</h5>
                <ul className="list-none text-Light-Cream-600 font-medium text-sm ">
                    <li><a className="hover:text-Muted-Purple-400" href="">Phim mới</a></li>
                    <li><a className="hover:text-Muted-Purple-400" href="">Phim Bộ</a></li>
                    <li><a className="hover:text-Muted-Purple-400" href="">Phim Lẻ</a></li>
                    <li><a className="hover:text-Muted-Purple-400" href="">Phim Chiếu Rạp</a></li>                  
                </ul>
            </div>
            <div className="col-span-1">
                <h5 className="text-Light-Cream-600 text-sm">THỂ LOẠI</h5>
                <ul className="list-none text-Light-Cream-600 text-sm">
                    <li><a className="hover:text-Muted-Purple-400" href="">Phim Cổ Trang</a></li>
                    <li><a className="hover:text-Muted-Purple-400" href="">Phim Hành Động</a></li>
                    <li><a className="hover:text-Muted-Purple-400" href="">Phim Tình Cảm</a></li>
                    <li><a className="hover:text-Muted-Purple-400" href="">Phim Tài Liệu</a></li>
                </ul>
            </div>
            <div className="col-span-1">
                <h5 className="text-Light-Cream-600 text-sm">ĐIỀU KHOẢN</h5>
                <ul className="list-none text-Light-Cream-600 text-sm">
                    <li><a className="hover:text-Muted-Purple-400" href="">Liên Hệ</a></li>
                    <li><a className="hover:text-Muted-Purple-400" href="">About Us</a></li>
                    <li><a className="hover:text-Muted-Purple-400" href="">Term of Service</a></li>
                </ul>
            </div>
            
        </div>
        <div className="w-11/12 rounded-b-xl flex justify-center border-t-2 border-t-Soft-Purple-400 border-black bg-Gray-Black-500 p-4">
            <p className="text-sm text-Light-Cream-600 ">2024 AVG FILM, created by khaiacs</p>
        </div>
        
    </footer>

        
    );
}
