import React, { useState, useContext, useEffect } from "react";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, errorMsg: "" });
  const [singleMovie, setSingleMovie] = useState({});
  const searchMovies = async (inputData) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}&s=${query}`);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const getMovie = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_ENDPOINT}&i=${id}`);
      const data = await response.json();
      setSingleMovie(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        query,
        movies,
        loading,
        error,
        singleMovie,
        url,
        setQuery,
        searchMovies,
        getMovie,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
