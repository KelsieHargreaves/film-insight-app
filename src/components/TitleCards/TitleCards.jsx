import React, { useEffect, useState } from "react";
import "./TitleCards.css";
import UseMovies from "../Data/Movie_Data";
import { Link } from "react-router-dom";
import data from "../../hooks/UseMovies"

const TitleCards = ({ movies = [] }) => {

    const [search, setSearch] = useState()

    const [apiData, setApiData] = useState([]);

  return (
    <div className="movie__data">
      {movies.slice(0, 6).map((movie, index) => (
        <div className="movie" key={index}>
          <img
            src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
            alt=""
          />
          <h2>{movie.original_title}</h2>
          <h2>{movie.release_date}</h2>
          <Link to={`/Info/${movie.id}`} className="button">Learn More</Link>
        </div>
      ))}
    </div>
  );
};

export default TitleCards;
