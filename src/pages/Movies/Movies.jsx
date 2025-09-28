import React from "react";
import "./Movies.css";
import Nav from "../../components/Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movies = () => {
  return (
    <div>
      <Nav
        extraContent={
          <div className="nav-bar__content">
            <h1>Browse Our Movies</h1>
            <div className="movie__search">
              <input
                className="search-bar"
                type="text"
                placeholder="Search By Title"
              />
              <button>
                <FontAwesomeIcon icon="magnifying-glass" />
              </button>
            </div>
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
    </div>
  );
};

export default Movies;
