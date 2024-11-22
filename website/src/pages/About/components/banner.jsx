export default function Banner() {
    const bannerImage = "./src/assets/img/About/xemphim.png";

    return (
        <div className="relative w-full h-[400px] md:h-[300px] flex flex-col items-center justify-center overflow-hidden bg-contain bg-fixed bg-no-repeat bg-top mb-4"
            style={{ backgroundImage: `url(${bannerImage})` }}>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,30,50,0.7)] to-[rgba(28,30,50,0.7)]"></div>
            {/* Banner Content */}
            <div className="relative z-10 flex flex-col items-center text-white text-center">
                {/* Title */}
                <h1 className="text-6xl md:text-7xl font-bold mt-3 mb-2">About</h1>
                {/* Breadcrumb */}
                <div className="flex items-center text-sm md:text-base space-x-2 text-white">
                    <h6 className="m-0">
                        <a href="/" className="text-white hover:text-Vibrant-Purple-300 transition">
                            Home
                        </a>
                    </h6>
                    <span className="px-2">/</span>
                    <h6 className="m-0">About</h6>
                </div>
            </div>
        </div>
    );
}