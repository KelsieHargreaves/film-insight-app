import React, { useEffect, useState } from "react";
import "./TitleCards.css";
import data from "../Data/Movie_Data";
import { Link } from "react-router-dom";

const TitleCards = ({ movies = [] }) => {

    const [search, setSearch] = useState()

    const [apiData, setApiData] = useState([]);

  return (
    <Link to="/Info/${movie.id}" className="movie__data">
      {movies.slice(0, 6).map((data, index) => (
        <div className="movie" key={index}>
          <img
            src={`https://image.tmdb.org/t/p/w500` + data.backdrop_path}
            alt=""
          />
          <h2>{data.original_title}</h2>
          <h2>{data.release_date}</h2>
          <div className="button">Learn More</div>
        </div>
      ))}
    </Link>
  );
};

export default TitleCards;
