import { GOOGLE_AUTH_URL } from "../../../services/key/url";

export default function Oauth2() {
    return(
        <div className="text-center mt-6">
            <span>Or log in with</span>
            <div className="flex justify-center items-center mt-2 space-x-3">
                <button className="w-8 h-8 flex justify-center items-center rounded-full text-white bg-[#E72734] transition-all duration-300 ease-in-out transform hover:bg-red-500 hover:scale-105">
                    <a href={GOOGLE_AUTH_URL}></a>
                    <FontAwesomeIcon icon={faGoogle} />
                </button>
            </div>
        </div>
    );
};
