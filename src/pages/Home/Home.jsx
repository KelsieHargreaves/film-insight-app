import React from 'react'
import movie from '../../assets/movie.png'
import './Home.css'
import Nav from '../../components/Nav/Nav'

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="home__container"> 
        <h1><span className="orange">AMERICA'S TOP MOVIE PLATFORM</span></h1>
        <h2>Choose your favorite films with <span className="orange">FilmInsight</span></h2>
        <div className="book__search">
          <input type="text" placeholder='Seach by Title' />
          <button>Search</button>
        </div>
        <figure>
          <img src={movie} alt="" />
        </figure>
      </div>
    </div>
    
  )
}

export default Home
