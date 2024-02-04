import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-sm w-72  rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <img
        src={movie?.Poster}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking">{movie?.Title}</h2>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
