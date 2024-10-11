import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import HoangTuLai from "../../../assets/img/HoangTuLai.png";
export default function Banner() {
    return (
        <div className="relative bg-[image:var(--background-navabar)] bg-contain bg-center">
          {/* Lớp overlay */}
          <div className="absolute inset-0 bg-black opacity-60 backdrop-blur-sm"></div>
          
          {/* Nội dung */}
          <div className="relative z-10 py-12 md:py-24">
            <div className="container px-4 mx-auto">
              <div className="flex flex-col-reverse items-center md:flex-row md:items-start md:space-x-8">
                <div className="w-full mt-8 md:mt-0 md:w-1/2 text-center md:text-left">
                  <h2 className="font-bold text-Vibrant-Purple-300 text-xl md:text-2xl mb-2">AVG Film</h2>
                  <h1 className="mb-4 text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">A world of cinema at your fingertips</h1>
                  <div className="flex flex-wrap justify-center md:justify-start items-center mb-4 space-x-2 space-y-2 md:space-y-0">
                    <span className="bg-white text-gray-900 text-xs font-semibold px-2 py-1">PG 18</span>
                    <span className="bg-gray-800 text-white text-xs font-semibold px-2 py-1 border-solid border">HD</span>
                    <span className="text-white text-sm">Romance, Drama</span>
                    <span className="flex items-center text-white text-sm">
                      <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      2012
                    </span>
                    <span className="flex items-center text-sm text-white">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      128 min
                    </span>
                  </div>
                  <div className="mt-6">
                    <button className="before:ease rounded-lg relative h-12 w-full md:w-48 overflow-hidden border border-Vibrant-Purple-300 text-Vibrant-Purple-300 shadow-2xl 
                      transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20
                      before:rotate-45 before:bg-Vibrant-Purple-400 before:duration-300 hover:text-white hover:font-bold hover:shadow-blue-500 hover:before:h-64
                      hover:before:-translate-y-32">
                      <span className="relative z-10 flex items-center justify-center">
                        <FontAwesomeIcon icon={faPlay} className="mr-2" /> 
                        Watch Now
                      </span>
                    </button>                                                          
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <img className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-xl shadow-lg" alt="Movie Poster" src={HoangTuLai} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
