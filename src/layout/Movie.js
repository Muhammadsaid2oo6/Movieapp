import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

  function on(sas) {
    console.log(sas)

  }
 

const Movie = (movie) => (
  <div className="movie">
    <img src={IMG_API + movie.poster_path} alt={movie.title} />
    <div className="movie-info">
      <h6>{movie.title}</h6>
      <span>{movie.vote_average}</span>
      <button onClick={()=> on(movie)}>buy</button>
    </div>

    <div className="movie-over">
      <h2>Overview:</h2>
      <p>{movie.overview}</p>
    </div>
  </div>
);

export default Movie;
