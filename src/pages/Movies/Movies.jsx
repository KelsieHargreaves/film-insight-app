import React, { useState, useEffect } from "react";
import "./Movies.css";
import Nav from "../../components/Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TitleCards from "../../components/TitleCards/TitleCards";
import UseMovies from "../../hooks/UseMovies";
import { useLocation } from "react-router-dom";

const Movies = () => { 

    const { movies, searchMovies } = UseMovies("popular");
    const [search, setSearch] = useState("");
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query")

    useEffect(() => {
      if (query) {
        searchMovies(query);
        setSearch (query);
      }
    }, [query])

    const handleSubmit = (e) => {
      e.preventDefault();
      searchMovies(search);
    }

  return (
    <div className="movies__container">
      <Nav
        extraContent={
          <div className="nav-bar__content">
            <h1>Browse Our Movies</h1>
            <form className="movie__search" onSubmit={handleSubmit}>
              <input
                className="search-bar"
                value={search}
                placeholder="Search By Title"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">
                <FontAwesomeIcon icon="magnifying-glass" />
              </button>
            </form>
          </div>
        }
      />
      <div className="movie__header">
        <h1>Search Results:</h1>
        <select id="movieSort" defaultValue="default">
          <option value='default'>Sort by Year</option>
          <option value='NEWEST'>Newest</option>
          <option value='OLDEST'>Oldest</option>
        </select>
      </div>
      <div className="movies__body">
        <TitleCards movies={movies}/>
      </div>
    </div>
  );
};

export default Movies;
