import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { query, error, setQuery, searchMovies } = useGlobalContext();

  const setInput = (e) => {
    setQuery(e.target.value);
  };

  React.useEffect(() => {
    searchMovies(query);
  }, [query]);

  return (
    <form className="search-form">
      <input
        type="text"
        className="form-input"
        onChange={setInput}
        value={query}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
