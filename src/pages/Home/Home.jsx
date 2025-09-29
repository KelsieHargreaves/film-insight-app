import React, { useState } from 'react'
import movie from '../../assets/movie.png'
import './Home.css'
import Nav from '../../components/Nav/Nav'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    navigate(`/movies?query=${encodeURIComponent(search)}`)
  }

  return (
    <div>
      <Nav />
      <div className="home__container"> 
        <h1><span className="orange">AMERICA'S TOP MOVIE PLATFORM</span></h1>
        <h2>Choose your favorite films with <span className="orange">FilmInsight</span></h2>
        <form className="book__search" onSubmit={handleSubmit}>
          <input type='text' value={search} placeholder='Seach by Title' onChange={(e) => setSearch(e.target.value)}/>
          <button type='submit'>Search</button>
        </form>
        <figure>
          <img src={movie} alt="" />
        </figure>
      </div>
    </div>
    
  )
}

export default Home
