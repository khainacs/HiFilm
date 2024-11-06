import PropTypes from 'prop-types';

export default function MovieCard({movie}){
    return(
        <div className="relative group">
            <div className="relative mx-auto h-auto overflow-hidden rounded-lg">
                <img
                src={movie.image} 
                alt={movie.title}
                className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                />
                <div className="absolute top-2 bg-blue-600 text-white px-2 rounded-r-lg text-xs ">
                {movie.episode}
                </div>
            </div>
            <div className="mt-2">
                <h3 className="font-semibold text-xs truncate">{movie.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{movie.year}</span>
                <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{movie.rating}</span>
                </div>
                </div>
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        episode: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
    }).isRequired,
};