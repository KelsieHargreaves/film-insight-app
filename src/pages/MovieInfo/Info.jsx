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
    typeof: "",
  });

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(true)

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODQ0YjU2NzIzOTRmNWMzMDBiNGRjNGU1MjZiNmQ1NyIsIm5iZiI6MTc1ODkyMTQ2MS42Niwic3ViIjoiNjhkNzAyZjVlYjIxNGY1MTM0ZTFiYWM5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.BUkrTr6osaFpWy-4tVe7S9kA-ko1CBzpdP7OPA7izqs",
    },
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]); 
          setError("");
        } else {
          setApiData(null);
          setError("No video available for this movie.");
        }
      })

      .catch((err) => {
        console.error(err); 
        setError("No video available for this movie.");
      })
      .then(() => {
        setTimeout(() => setLoading(false), 1000)
      });
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
      {/* {apiData?.key ? ( */}
      {loading ? (
        <p className="loading">Loading Video</p>
      ) : error ? (
        <p className="no__video">{error}</p>
      ) : (
        <>
          <iframe
            width="80%"
            height="80%"
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title="trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="video__info">
            {apiData?.published_at && <p>{apiData.published_at.slice(0, 10)}</p>}
            {apiData?.name && <p>{apiData.name}</p>}
            {apiData?.type && <p>{apiData.type}</p>}
          </div>
        </>
      )}
    </div>
  );
};

export default Info;
