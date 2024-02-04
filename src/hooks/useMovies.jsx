import React, { useEffect, useState } from "react";

export const useMovies = () => {
  // create an axios request to fetch the movies from the API

  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    const url =
      "https://github.com/almaeconomics/movies_database/blob/main/movies.json";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  };
  // use the useEffect hook to fetch the movies when the component mounts
  useEffect(() => {
    fetchMovies();
  }, []);
  // use the useState hook to store the movies in a state variable

  return { movies };
};
