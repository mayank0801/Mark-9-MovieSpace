import "./styles.css";
import React, { useState } from "react";
import MovieData from "./data.js";

export default function App() {
  let movie = Object.keys(MovieData);
  const [type, setMovieType] = useState("Thriller");
  function movieClickHandler(type) {
    setMovieType(type);
  }
  return (
    <div className="App">
      <div className="heading">
        <h1>
          <span role="img" aria-label="game">
            🎥
          </span>
          <span style={{ color: "#002D62" }}>Movie Space</span>
          🍿
        </h1>
        {movie.map(function (type) {
          return (
            <button
              className="btn"
              onClick={() => movieClickHandler(type)}
              key={type}
            >
              {type}
            </button>
          );
        })}
      </div>
      <h3>These are my favourite choices of different movie genres.</h3>
      <ul>
        {MovieData[type].map(function (movie) {
          return (
            <div className="container" key={movie.name}>
              <section>
                <img className="img" src={movie.photo} alt="movie-logo" />
                <div>
                  <div>
                    <strong>Movie Name:</strong> {movie.name}
                  </div>
                  <div>
                    <strong>Director: </strong>
                    {movie.director}
                  </div>
                  <div>
                    <strong>starCast: </strong>
                    {movie.starCast}
                  </div>
                  <div>
                    <strong>Box-office: </strong>
                    {movie.box_office}
                  </div>
                  <div>
                    <strong>IMDb-Rating: </strong>
                    {movie.IMDb_rating}
                  </div>
                  <div className="Story">
                    <strong>Story of the movie: </strong>
                    {movie.Story}
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
