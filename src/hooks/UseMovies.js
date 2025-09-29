import React, { useState, useEffect } from 'react'

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODQ0YjU2NzIzOTRmNWMzMDBiNGRjNGU1MjZiNmQ1NyIsIm5iZiI6MTc1ODkyMTQ2MS42Niwic3ViIjoiNjhkNzAyZjVlYjIxNGY1MTM0ZTFiYWM5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.BUkrTr6osaFpWy-4tVe7S9kA-ko1CBzpdP7OPA7izqs",
      },
    };

    export default function UseMovies(initialCategory = "popular") {
        const [movies, setMovies] = useState([])
        const [query, setQuery] = useState("")

     useEffect(() => {

        if (!query) {
    fetch(
      `https://api.themoviedb.org/3/movie/${initialCategory}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => {setMovies(res.results);})
      .catch((err) => console.error(err));
        }
  }, [initialCategory, query]);

    const searchMovies = (q) => {
        setQuery(q);
        if (!q.trim()) return;

        fetch(
  `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(q)}&language=en-US&page=1`,
  options
)
      .then((res) => res.json())
      .then((res) => {setMovies(res.results)})
      .catch((err) => console.error(err));
    }

    return { movies, searchMovies}
    }



