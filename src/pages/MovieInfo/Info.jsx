import React, { useEffect, useState } from "react";
import "./Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";

const Info = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODQ0YjU2NzIzOTRmNWMzMDBiNGRjNGU1MjZiNmQ1NyIsIm5iZiI6MTc1ODkyMTQ2MS42Niwic3ViIjoiNjhkNzAyZjVlYjIxNGY1MTM0ZTFiYWM5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.BUkrTr6osaFpWy-4tVe7S9kA-ko1CBzpdP7OPA7izqs",
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
  }, [id]);

  return (
    <div className="info">
      <FontAwesomeIcon
        icon="arrow-left"
        className="back__arrow"
        onClick={() => {
          navigate(-1);
        }}
      />
      <iframe
        width='80%'
        height='80%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="video__info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Info;
