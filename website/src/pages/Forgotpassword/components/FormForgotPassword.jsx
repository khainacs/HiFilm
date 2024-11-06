import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const FormForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [focused, setFocused] = useState(false);

    return (
        <div className="flex flex-col md:flex-row justify-between items-center w-full h-auto box-border">
            {/* Hình ảnh minh họa */}
            <div className="flex justify-center items-center max-w-sm md:w-1/2 mb-8 md:mb-0">
                <img
                    className="w-[150px] h-[240px] md:w-[292px] md:h-[350px]"
                    src="./src/assets/img/Forgotpassword/Figure → signin-image.jpg.png"
                    alt="Forgot password illustration"
                />
            </div>

            {/* Phần nhập email */}
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 space-y-6 md:space-y-8">
                {/* Tiêu đề */}
                <h2 className="text-Vibrant-Purple-400 text-2xl md:text-4xl font-bold font-poppins mb-2 text-center">
                    Forgot password?
                </h2>

                {/* Hình ảnh biểu tượng */}
                <img
                    className="w-[120px] h-[120px] md:w-[173px] md:h-[150px] mx-auto -mb-4 md:-mb-8"
                    src="./src/assets/img/Forgotpassword/Forgot Password.png"
                    alt="Icon"
                />
                {/* Phần nhập email */}
                <div className="relative w-full max-w-md">
                    {/* Gán id cho input */}
                    <input
                        id="email" // Thêm id để liên kết với label
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=" "
                        className="w-full pl-10 py-2 bg-white border-b-2 border-Dark-Blue-200 rounded-md focus:outline-none focus:border-Vibrant-Purple-300 shadow-sm transition duration-300"
                        onFocus={() => setFocused(true)}
                        onBlur={() => {
                            if (email === '') {
                                setFocused(false);
                            }
                        }}
                    />
                    {/* Gán for để kết nối với input */}
                    <label
                        htmlFor="email" // Thêm for để khi click vào label, input sẽ được focus
                        className={`absolute left-10 top-2 transition-all duration-300 transform ${focused || email ? 'text-Vibrant-Purple-300 text-sm -translate-y-4' : 'text-gray-500'
                            }`}
                    >
                        Email
                    </label>
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-gray-500 absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none"
                    />
                </div>
                {/* Nút gửi email */}
                <div className="w-full max-w-md">
                    <button className="group relative min-h-[40px] rounded-xl w-full overflow-hidden border border-Dark-Blue-400 bg-white text-Dark-Blue-400 shadow transition-all hover:text-white hover:bg-Vibrant-Purple-600">
                        <span className="absolute inset-0 flex items-center justify-center z-10">
                            Send Mail
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FormForgotPassword;
