import React from "react";
//import { movie1 } from "../App";

function MovieCard({ movie }) {
  return (
    <div className="box2">
      <p className="movieyear">{movie.Year}</p>

      <div className="movietitle">
        <p>{movie.Title}</p>
      </div>

      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/250"
          }
          alt={movie.Title}
        />
      </div>
      <span>{movie.Type}</span>
    </div>
  );
}

export default MovieCard;
