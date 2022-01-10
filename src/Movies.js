import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const Movies = () => {
  const { movies, url } = useGlobalContext();
  return (
    <section className="movies">
      {movies.map((movie) => (
        <Link
          key={movie.imdbID}
          to={`/movies/${movie.imdbID}`}
          className="movie"
        >
          <article>
            <img
              src={movie.Poster === "N/A" ? url : movie.Poster}
              alt={movie.Title}
            />
            <div className="movie-info">
              <h4 className="title">{movie.Title}</h4> <p>{movie.Year}</p>{" "}
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default Movies;
