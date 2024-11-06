import { faker } from '@faker-js/faker';
import MovieCard from './MovieCard';
import { usePagination } from "react-use-pagination";
import { useEffect } from 'react';
import PropTypes from "prop-types";
import Pagination from '../components/Pagination';
import { ITEMS_PER_PAGE } from "../../../util/constants";

const ListProducts = ({ title }) => {
  const pseudoImg = "https://via.placeholder.com/280x420";
  
  // Generate fake movie data
  const movies = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    title: faker.lorem.words(3),
    episode: `Episode ${faker.number.int({ min: 1, max: 50 })}`,
    year: faker.date.future().getFullYear(),
    image: pseudoImg,
    rating: faker.number.float({ min: 7.0, max: 10.0, precision: 0.1 }).toFixed(1)
  }));

  // Pagination logic
  const {
    currentPage,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
    setPage,
    startIndex,
    endIndex
  } = usePagination({
    totalItems: movies.length,
    initialPageSize: ITEMS_PER_PAGE,
    initialPage: 1 // Changed to 0 to match with Pagination component's zero-based indexing
  });

  // Slice the movies array to get current page items
  const currentItems = movies.slice(startIndex, endIndex);

  useEffect(() => {
    document.title = title || "Không tìm thấy trang";
  }, [title]);

  return (
    <div className="w-full bg-Gray-Black-800 text-white p-7">
      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {currentItems.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(movies.length / ITEMS_PER_PAGE)}
          setNextPage={setNextPage}
          setPreviousPage={setPreviousPage}
          nextEnabled={nextEnabled}
          previousEnabled={previousEnabled}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

ListProducts.propTypes = {
  title: PropTypes.string,
};

export default ListProducts;