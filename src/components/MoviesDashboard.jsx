import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Header from "./Header";

import { movies } from "../data/Movies";

const MoviesDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");
  const [uniqueGenres, setUniqueGenres] = useState([]);

  useEffect(() => {
    // Extract unique genres from the movie data
    const genres = Array.from(
      new Set(movies.flatMap((movie) => movie.Genre.split("|")))
    );
    setUniqueGenres(["All", ...genres]);
  }, []);

  const filteredMovies = movies.filter((movie) => {
    // Filter based on search query
    const includesSearchQuery = movie.Title.toLowerCase().includes(
      searchQuery.toLowerCase()
    );

    // Filter based on genre
    const passesGenreFilter =
      genreFilter === "All" || movie.Genre.includes(genreFilter);

    return includesSearchQuery && passesGenreFilter;
  });

  return (
    <div className="pb-10">
      <Header />
      <div className="flex justify-center mt-4">
        {/* Search for movies */}
        <input
          type="search"
          name="Search"
          placeholder="Search for movies"
          className="w-1/2 p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="p-2 ml-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
        >
          {uniqueGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      {/* if no movies are found */}
      {filteredMovies.length === 0 && (
        <div className="text-3xl font-semibold flex items-center justify-center my-10">
          No movies found
        </div>
      )}

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
          {filteredMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesDashboard;
