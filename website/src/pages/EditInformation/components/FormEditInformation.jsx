import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const FormEditInformation = () => {
    const [email, setEmail] = useState('current@example.com');
    const [username, setUsername] = useState('current_username');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthday, setBirthday] = useState('');
    const [emailVerified, setEmailVerified] = useState(false);
    const [profileImage, setProfileImage] = useState('./src/assets/img/Forgotpassword/Figure → signin-image.jpg.png');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Changes saved!');
    };

    return (
        <div className="bg-gray-800 p-8 lg:p-10 rounded-lg shadow-lg w-full max-w-3xl mx-auto mt-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center text-white">Chỉnh sửa thông tin</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-6 flex justify-center">
                    <div className="relative">
                        <img
                            id="imagePreview"
                            src={profileImage}
                            alt="Current Profile"
                            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <label
                            htmlFor="profileImage"
                            className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer"
                        >
                            <FontAwesomeIcon icon={faCamera} className="w-3 h-3" />
                            <input
                                type="file"
                                id="profileImage"
                                name="profileImage"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-gray-700 text-white"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">Tên người dùng</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="block w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-gray-700 text-white"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Số điện thoại</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="block w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-gray-700 text-white"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="birthday" className="block text-sm font-medium text-gray-300 mb-2">Ngày sinh</label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        className="block w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 bg-gray-700 text-white"
                    />
                </div>

                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        id="emailVerified"
                        name="emailVerified"
                        checked={emailVerified}
                        onChange={() => setEmailVerified(!emailVerified)}
                        className="mr-2 text-indigo-600 focus:ring-indigo-500 rounded"
                    />
                    <label htmlFor="emailVerified" className="text-sm font-medium text-gray-300">Email đã xác thực</label>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
                    >
                        Lưu thay đổi
                    </button>
                </div>

                <div className="flex justify-center mt-4">
                    <button
                        type="button"
                        className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-300"
                        onClick={() => alert('Đổi mật khẩu')}
                    >
                        Đổi mật khẩu
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormEditInformation;
