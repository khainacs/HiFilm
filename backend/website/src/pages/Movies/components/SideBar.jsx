
export default function SiderBar(){
    const movies = [
        {
          id: 1,
          title: "Nữ Hoàng Nước Mắt",
          year: "2024",
          image: "https://via.placeholder.com/280x420"
        },
        {
          id: 2,
          title: "Mặc Vũ Văn Gian",
          year: "2024",
          rating: 8,
          image: "https://via.placeholder.com/280x420"
        }
      ];
    
    return (
      <div className="2xl:container flex flex-col border-white bg-[#121212] p-4">
        {/* Header */}
        <h3 className="text-white text-lg font-medium mb-4">PHIM BỘ HOT</h3>
        
        {/* Movies Grid */}
        <div className="grid gap-4">
          {movies.map((movie) => (
            <div key={movie.id} className="relative w-full h-[160px] group overflow-hidden rounded-lg cursor-pointer">
              <img 
                className="w-full h-full object-cover" 
                src={movie.image}
                alt={movie.title} 
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h4 className="text-white text-base font-medium">{movie.title}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300 text-sm">{movie.year}</span>
                  {movie.rating && (
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="text-gray-300 text-sm ml-1">{movie.rating}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}