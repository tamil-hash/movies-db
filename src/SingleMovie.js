import React, { useState, useEffect } from "react";
import Loading from "./loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const SingleMovie = () => {
  const { id } = useParams();
  const { singleMovie, getMovie, loading, url } = useGlobalContext();

  useEffect(() => {
    getMovie(id);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <section className="single-movie">
        <img
          src={singleMovie.Poster === "N/A" ? url : singleMovie.Poster}
          alt={singleMovie.Title}
        />
        <div className="single-movie-info">
          <h2>{singleMovie.Title}</h2>
          <p>{singleMovie.Plot}</p>
          <h4>{singleMovie.Year}</h4>
          <Link className="btn" to="/">
            back to movies
          </Link>
        </div>
      </section>
    );
  }
};

export default SingleMovie;
